import React, { useEffect, useState } from 'react'
import './Carousel.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ThankYou from '../thankyou/ThankYou';

import JapaneseRes from '../../assets/restaurant/japanese-res.jpg'
import MexicanRes from '../../assets/restaurant/mexican-res.jpg'
import ItalianRes from '../../assets/restaurant/italian-res.jpg'
import JapaneseOffer from '../../assets/offer/japanese-offer.jpg'
import MexicanOffer from '../../assets/offer/mexican-offer.jpg'
import ItalianOffer from '../../assets/offer/italian-offer.jpg'
import Offer from '../../assets/offer.gif'

export default function Carousel() {
  const [settings, setSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  });

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) {
        setSettings({
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        });
      } else {
        setSettings({
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
        });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [showThanks, setshowThanks] = useState(false);

  const handleBookClick = () => {
    setshowThanks(true);
  };

  if (showThanks) {
    return <ThankYou />;
  }

  return (
    <div className='w-3/4 m-auto mb-20'>
      <div className="my-prof-div">
        <p className="my-profiles">Today's Special Offers</p>
        <img className='offer-gif' src={Offer} />
      </div>

      <div>
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className="bg-white h-[450px] mt-10 text-black rounded-xl border-2 border-solid border-black mb-5 custom-height hover:transform hover:scale-105 hover:transition duration-3000">
              <div className='h-52 bg-gradient-to-r from-red-500 to-orange-500 flex justify-center items-center rounded-t-xl'>
                <img src={d.img} alt="" className="h-40 w-50" />
              </div>

              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold text-center">{d.name}</p>
                <p className="text-center">{d.review}</p>
                <div className='offer'>
                  <img src={d.offerImg} alt="" className="h-10 w-10 rounded-full" />
                  <p className="text-center ml-5 mt-1">{d.offerName}</p>
                </div>

                <a onClick={handleBookClick}>
                  <button className='bg-gradient-to-r from-red-500 to-orange-500 text-white text-lg px-6 py-1 rounded-xl transition duration-500 hover:from-orange-500 hover:to-red-700'>Book</button>
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>

    </div>
  );
}

const data = [
  {
    name: `Tokyo Teppanyaki`,
    img: JapaneseRes,
    offerImg: JapaneseOffer,
    review: `123 Elm Street,
      Cityville, Stateland,
      ZIP Code: 12345-6789,
      Countryland.`,
    offerName: `Buy 1 Shushi get 1 FREE.`,
    id: 'japanese'
  },
  {
    name: `Bella Cucina`,
    img: ItalianRes,
    offerImg: ItalianOffer,
    review: `123 Elm Street,
      Cityville, Stateland,
      ZIP Code: 12345-6789,
      Countryland.`,
    offerName: `Get small-pizza at flat Rs.100.`,
    id: 'italian'
  },
  {
    name: `Chiles & Charros`,
    img: MexicanRes,
    offerImg: MexicanOffer,
    review: `123 Elm Street,
      Cityville, Stateland,
      ZIP Code: 12345-6789,
      Countryland.`,
    offerName: `Special offers on Tacos.`,
    id: 'mexican'
  },
  {
    name: `Amore Eats`,
    img: ItalianRes,
    offerImg: ItalianOffer,
    review: `123 Elm Street,
      Cityville, Stateland,
      ZIP Code: 12345-6789,
      Countryland.`,
    offerName: `Get small-pizza at flat Rs.100.`,
    id: 'italian'
  },
];
