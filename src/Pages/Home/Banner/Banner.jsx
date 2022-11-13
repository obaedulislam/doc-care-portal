import React from 'react';
import chair from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png'
import PrimaryButton from '../../../components/Button/PrimaryButton';

const Banner = () => {

    return (
        <section className='' 
            style = {{
                background: `url(${bg})`,
                backgroundPosition: 'bottom left',
                backgroundSize: '75%',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="grid grid-cols-2 py-20  ">
                <div className='flex items-center'>
                    <div className='text-start pr-8'>

                        <h1 className="text-5xl font-bold text-accent">Your New Smile Starts Here</h1>
                        <p className="py-4">Best Health care service in our country. You can get world class service here, we ensure it & believe it. Explore our service today </p>
                        <div className=''>
                            <PrimaryButton>Get Started</PrimaryButton>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={chair} className="w-full" alt="Hero "/>
                </div>
               
            </div>
        </section>
    );
};

export default Banner;