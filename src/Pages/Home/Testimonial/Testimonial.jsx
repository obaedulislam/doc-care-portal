import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {

    const reviews = [
        {
            id: 1,
            name: "Winson Herry",
            image: people1,
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location: "California"
        },
        {
            id: 2,
            name: "Winson Herry",
            image: people2,
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location: "California"
        },
        {
            id: 3,
            name: "Winson Herry",
            image: people3,
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location: "California"
        },
    ]

    return (
        <div className='pb-20'>
            <div className='flex justify-between items-center'>
                <div>
                    <h4 className='text-secondary font-bold'>Testimonial</h4>
                    <h2 className="text-4xl font-bold text-accent mt-3 ">What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-44 h-44' src={quote} alt="Quote Icon" />
                </div>
            </div>
            <div className='grid grid-cols-3 gap-8 pt-10'>
                {
                    reviews.map(review => <Review
                        key = {review.id}
                        review = {review} 
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Testimonial;