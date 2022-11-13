import React from 'react';

const Service = ({service}) => {

    const {icon, name, title} = service;

    return (
        <div className='text-center p-8 shadow-md rounded-lg'>
            <div className="text-center flex justify-center">
                <img className='' src={icon} alt="Movie"/>
            </div>
            <div className=" ml-4 text-center mt-4">
                <h2 className=" text-xl font-semibold text-accent">{name}</h2>
                <p className='mt-2 text-sm'>{title}</p>
            </div>
        </div>
    );
};

export default Service;