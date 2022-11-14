import React, { useState } from 'react';
import bg from '../../../assets/images/bg.png'
import chair from '../../../assets/images/chair.png'
import 'react-day-picker/dist/style.css';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <section className='px-20' 
            style = {{
                background: `url(${bg})`,
                backgroundPosition: 'bottom left',
                backgroundSize: '75%',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="grid grid-cols-2 py-20  ">
                <div className='flex items-center justify-center'>
                    <div>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        ></DayPicker>
                        <h4 className='text-xl font-semibold'>Available Appointments on: <span className='text-accent font-bold'> {format(selectedDate, 'PP')}</span> </h4>
                    </div>
                </div>
                <div>
                    <img src={chair} className="w-full" alt="Hero "/>
                </div>
               
            </div>
        </section>
    );
};

export default AppointmentBanner;