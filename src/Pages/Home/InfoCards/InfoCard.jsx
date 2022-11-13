import React from 'react';

const InfoCard = ({card}) => {

    const {name, title, icon, bgInfoColor} = card;

    return (
        <div className={bgInfoColor}>
            <div className=" flex items-center">
                <figure><img className='w-16 h-16' src={icon} alt="Movie"/></figure>
                <div className=" ml-4">
                    <h2 className="card-title text-xl">{name}</h2>
                    <p className='mt-2'>{title}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;