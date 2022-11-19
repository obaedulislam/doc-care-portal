import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../../Shared/Loading/Loading';

const ManageDoctors = () => {

    const [deletingDoctor, setDeletingDoctor] = useState(null)

    const closeModal = () => {
        setDeletingDoctor(null);
    }

    const { data: doctors, isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:4300/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    })

    const handleDeleteDoctor = doctor => {
        fetch(`http://localhost:4300/doctors/${doctor._id}`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Doctor ${doctor.name} Deleted Successfully`)
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className="text-4xl text-accent font-bold mb-7">Manage Doctors: {doctors?.length}</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Avatar</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Specialty</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                doctors?.map((doctor, i) => <tr key={doctor._id}>
                                    <th>{i + 1}</th>
                                    <td><div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img src={doctor?.image} alt="Doctor" />
                                        </div>
                                    </div></td>
                                    <td>{doctor?.name}</td>
                                    <td>{doctor?.email}</td>
                                    <td>{doctor?.specialty}</td>
                                    <td>
                                        <label onClick={() => setDeletingDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-xs bg-red-600">DELETE</label>
                                    </td>
                                </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                {
                    deletingDoctor && <ConfirmationModal
                        title={`Are You sure you want to delete Dr. ${deletingDoctor?.name}`}
                        message={`If you delete ${deletingDoctor?.name}. Its can't be undo.`}
                        confirmDelete={handleDeleteDoctor}
                        confirmButtonName="Delete"
                        modalData={deletingDoctor}
                        closeModal={closeModal}
                    ></ConfirmationModal>
                }
            </div>
        </div >
    );
};

export default ManageDoctors;