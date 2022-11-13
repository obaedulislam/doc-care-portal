import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import PrimaryButton from '../../../components/Button/PrimaryButton';

const ExceptionDental = () => {
    return (
        <div className="grid grid-cols-2 py-20 max-w-[800px] mx-auto">
            <div className='pr-12 '>
                <img src={treatment} className="w-full rounded-lg" alt="Treatment "/>
            </div>
            <div className='flex items-center'>
                <div className='text-start '>
                    <h2 className="text-4xl font-bold text-accent">Exceptional Dental Care, on Your Terms</h2>
                    <p className="py-4 text-sm">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page </p>
                    <div>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ExceptionDental;