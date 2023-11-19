import { React, useState, useEffect } from 'react';
import './CardComponent.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

import ThankYou from '../thankyou/ThankYou';

export default function CardComponent({ data }) {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const [showThanks, setshowThanks] = useState(false);

    const handleBookClick = () => {
        setshowThanks(true);
    };

    if (showThanks) {
        return <ThankYou />;
    }

    return (
        <div className='all m-40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4' >
            {data.map((d, index) => (
                <div key={index} className="card-container hover:transform hover:scale-105 hover:transition duration-3000 bg-gradient-to-r from-red-500 to-orange-500" data-aos="fade-up">
                    <div className="img-container">
                        <img className="logo" src={d.img} alt="" />
                    </div>
                    <h4 className="name">{d.name}</h4>
                    <p className="address">{d.review}</p>
                    <div className="offer ml-10">
                        <img className="offer-img h-15 w-10 rounded-full" src={d.offerImg} alt="" />
                        <p className="offer des m-5">{d.offerName}</p>
                    </div>
                    <div className="book-button">
                        <button onClick={handleBookClick} className="book bg-gradient-to-r from-yellow-500 to-yellow-100 hover:from-yellow-100 hover:to-yellow-500">BOOK</button>
                    </div>
                </div>
            ))}
        </div>
    )
}
