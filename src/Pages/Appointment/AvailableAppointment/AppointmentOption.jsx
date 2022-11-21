import React from 'react';

const AppointmentOption = ({ option, setTreatment }) => {

    const { name, price, slots } = option;

    return (
        <div className='text-center p-8 shadow-lg rounded-xl'>
            <h3 className='text-secondary text-lg font-bold text-center'>{name}</h3>
            <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
            <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'}  Available</p>
            <p><small>Price: ${price}</small></p>
            <div className='mt-2' htmlFor="booking-modal">
                <label
                    disabled={slots.length === 0}
                    htmlFor="booking-modal"
                    className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white"
                    onClick={() => setTreatment(option)}
                >Book Appointment</label>
            </div>
        </div >
    );
};

export default AppointmentOption;