import React from 'react';

const Review = ({review}) => {

    const {name, image, review: userReview, location} = review;

    return (
        <div className='p-7 shadow-lg rounded-lg'>
            <div>
                <p>{userReview}</p>
            </div>
            <div className=" flex items-center mt-5">
                <div className="avatar">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={image} alt="User"/>
                    </div>
                </div>
                <div className=" ml-4">
                    <h2 className="card-title text-xl text-accent font-semibold">{name}</h2>
                    <p className=''>{location}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;