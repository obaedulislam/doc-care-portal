import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';
const InfoCards = () => {

    const infoCardData = [
        {
            id: 1,
            name: "Opening Hours",
            title: "Its opening on 9AM & close 8PM excluding Friday",
            icon: clock,
            bgInfoColor: "bg-gradient-to-r from-secondary to-primary text-white p-5 rounded-xl shadow-lg"
        },
        {
            id: 2,
            name: "Visit our location",
            title: "Brooklyn, NY 10036, United States",
            icon: marker,
            bgInfoColor: "bg-accent text-white p-5 rounded-xl shadow-lg"
        },
        {
            id: 3,
            name: "Contact us now",
            title: "+000 123 456789",
            icon: phone,
            bgInfoColor: "bg-gradient-to-r from-secondary to-primary text-white p-5 rounded-xl shadow-lg"
        }
    ]

    return (
        <div className='grid grid-cols-3 gap-7 py-20 '>
            {
                infoCardData.map(card => <InfoCard
                    key = {card.id}
                    card = {card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;