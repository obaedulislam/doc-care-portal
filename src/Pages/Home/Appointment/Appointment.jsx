import React from 'react';
import appointment from '../../../assets/images/appointment.png'
import doctorSmall from '../../../assets/images/doctor-small.png'
import PrimaryButton from '../../../components/Button/PrimaryButton';
 
const Appointment = () => {
    return (
        <section className=""  
            style = {{
                background: `url(${appointment})`,
                backgroundPosition: 'bottom left',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
        >

        <div className='grid grid-cols-2 max-w-[1050px] mx-auto my-20'>
            <div className=' '>
                <img src={doctorSmall} className="w-full rounded-lg -mt-28" alt="Treatment "/>
            </div>
            <div className='flex items-center py-5 '>
                <div className='text-start '>
                    <h4 className='text-secondary font-bold'>Appointment</h4>
                    <h2 className="text-4xl font-medium  mt-3 text-white">Make an appointment Today</h2>
                    <p className="py-4 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page </p>
                    <PrimaryButton>Get Appointment</PrimaryButton>
                </div>
            </div>
        </div>

        </section>
    );
};

export default Appointment;