import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../../Shared/Loading/Loading';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);

const Payment = () => {

    const booking = useLoaderData();
    // const navigation = useNavigation();
    const { treatment, price, slot, appointmentDate } = booking;
    console.log('Booking Data', booking);

    // if (navigation.state === "loading") {
    //     return <Loading></Loading>
    // }

    return (
        <div>
            <h3 className="text-4xl text-accent font-bold mb-7">Payment for {treatment}</h3>
            <p className='text-xl'> Please pay <strong>${price} </strong>for your appointment on {appointmentDate} at {slot}</p>
            <div className='w-[500px] mx-auto my-10 p-5 shadow-xl'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;