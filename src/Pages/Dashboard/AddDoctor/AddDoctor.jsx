
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../Shared/Loading/Loading';

const AddDoctor = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const imageHostKey = process.env.REACT_APP_imgbb_key;
    console.log(imageHostKey);
    const navigate = useNavigate();

    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch(`https://doc-care-server.vercel.app/appointmentSpecialty`);
            const data = await res.json();
            return data;
        }
    })

    const handleAddDoctor = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success) {
                    console.log(imageData.data.url);
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imageData.data.url
                    }
                    //Save doctor information to the Database
                    fetch('https://doc-care-server.vercel.app/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            toast.success(`${data.name} Added Successfully`)
                            console.log(result);
                            navigate('/dashboard/managedoctors')
                        })
                }
            });

    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='w-[500px]'>
            <h1 className="text-4xl text-accent font-bold mb-7">Add A  New Doctor</h1>

            <form className='shadow-lg p-5 rounded-lg' onSubmit={handleSubmit(handleAddDoctor)}>
                <div className="form-control w-full mx-auto">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Name</span>
                    </label>
                    <input {...register("name", {
                        required: "Name is Required"
                    })} type="text" className="input input-bordered w-full" />
                    {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                </div>

                <div className="form-control w-full mx-auto">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Email</span>
                    </label>
                    <input type="email"{...register("email", {
                        required: true
                    })} className="input input-bordered w-full" />
                    {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                </div>

                <div className="form-control w-full mx-auto">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Specialty</span>
                    </label>
                    <select className="select select-bordered w-full" {...register("specialty")}>
                        {
                            specialties.map(specialty => <option
                                key={specialty._id}
                                value={specialty.name}
                            >{specialty?.name}</option>)
                        }
                    </select>
                </div>

                <div className="form-control w-full mx-auto">
                    <label className="label">
                        <span className="label-text text-lg font-semibold"> Upload Image</span>
                    </label>
                    <input {...register("image", {
                        required: "Photo is Required"
                    })} type="file" className="input input-bordered w-full" />
                    {errors.image && <p className='text-red-600'>{errors.image.message}</p>}
                </div>

                <input className='btn btn-accent w-full mt-3' type="submit" value="Add Doctor" />

            </form>
        </div>
    );
};

export default AddDoctor;