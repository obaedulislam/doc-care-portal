import React from 'react';
import chair from '../../../assets/images/chair.png'

const Banner = () => {
    return (
        <div className=" ">
            <div className="grid grid-cols-2 py-20 ">
                <div className='flex items-center'>
                    <div className='text-start pr-8'>
                        <h1 className="text-5xl font-bold text-accent">Your New Smile Starts Here</h1>
                        <p className="py-4">Best Health care service in our country. You can get world class service here, we ensure it & believe it. Explore our service today. </p>
                        <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white ">Get Started</button>
                    </div>
                </div>
                <div>
                    <img src={chair} className="w-full" alt="Hero "/>
                </div>
               
            </div>
        </div>
    );
};

export default Banner;