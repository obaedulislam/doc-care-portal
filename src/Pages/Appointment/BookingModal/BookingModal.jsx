import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { json } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
    //Treatment is just another name of appointmentOptions  with name, slots id
    const { name: treatmentName, slots } = treatment;
    const date = format(selectedDate, 'PP');
    const { user } = useContext(AuthContext);

    const handleBooking = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const slot = form.slot.value;
        const phone = form.phone.value;
        const email = form.email.value;
        //console.log(slot, name, phone, email);
        const booking = {
            appointmentDate: date,
            treatment: treatmentName,
            slot,
            patient: name,
            email,
            phone
        }
        console.log(booking);
        fetch('http://localhost:4300/bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success("Booking Confirmed")
                    refetch()
                }
                else {
                    toast.error(data.message)
                }
            })

    }

    return (
        <>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-3 top-3">✕</label>
                    <h3 className="text-xl font-bold">{treatmentName}</h3>
                    <div className='mt-5'>
                        <form onSubmit={handleBooking}>
                            <div className='grid grid-cols-1 gap-3'>
                                <input type="text" value={date} disabled className="input w-full " />
                                <select name="slot" className="select w-full border-gray-300">
                                    {
                                        slots.map((slot, i) => <option
                                            key={i}
                                        >{slot}</option>)
                                    }
                                </select>
                                <input name="name" type="text" placeholder='Full Name' className="input input-bordered w-full " defaultValue={user?.displayName} disabled required />
                                <input name="email" type="email" placeholder='Email Address' className="input input-bordered w-full " defaultValue={user?.email} disabled required />
                                <input name="phone" type="phone" placeholder='Phone Number' className="input input-bordered w-full " required />
                                <input type="submit" placeholder='Full Name' className="input input-bordered w-full  btn-accent mt-2 uppercase cursor-pointer" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookingModal;