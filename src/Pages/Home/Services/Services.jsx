import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';



const Services = () => {

    const serviceCardData = [
        {
            id: 1,
            icon: fluoride,
            name: "Fluoride Treatment",
            title: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            id: 2,
            icon: cavity,
            name: "Cavity Filling",
            title: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            id: 3,
            icon: whitening,
            name: "Teeth Whitening",
            title: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        }
    ]


    return (
        <div>
            <div className='mx-auto text-center mb-20'>
                <h4 className='text-secondary font-bold'>OUR SERVICES</h4>
                <h1 className='text-4xl text-accent font-medium'>Services We Provide</h1>
            </div>
            {/* Service Header End */}

            <div className='grid grid-cols-3 gap-7 pb-20'>
                {
                    serviceCardData.map(service => <Service
                        key = {service.id}
                        service = {service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;