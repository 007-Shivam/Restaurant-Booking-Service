import React, { useState } from 'react';

import HeroComponent from '../components/hero/HeroComponent'
import Carousel from '../components/carousel/Carousel'
import CategoriesComponent from '../components/categories/CategoriesComponent'
import CardComponent from '../components/card/CardComponent'
import FooterComponent from '../components/footer/FooterComponent';

import IndianRes from '../assets/restaurant/indian-res.jpg'
import ChineseRes from '../assets/restaurant/chinese-res.jpg'
import JapaneseRes from '../assets/restaurant/japanese-res.jpg'
import MexicanRes from '../assets/restaurant/mexican-res.jpg'
import ItalianRes from '../assets/restaurant/italian-res.jpg'
import FrenchRes from '../assets/restaurant/french-res.jpg'
import IndianOffer from '../assets/offer/indian-offer.jpg'
import ChineseOffer from '../assets/offer/chinese-offer.jpg'
import JapaneseOffer from '../assets/offer/japanese-offer.jpg'
import MexicanOffer from '../assets/offer/mexican-offer.jpg'
import ItalianOffer from '../assets/offer/italian-offer.jpg'
import FrenchOffer from '../assets/offer/french-offer.jpeg'


export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleShowAllClick = () => {
    setSelectedCategory(null);
  };

  const filteredData = selectedCategory
    ? data.filter((d) => d.id === selectedCategory)
    : data;
  return (
    <>
      <HeroComponent />
      <Carousel />
      <CategoriesComponent onSelectCategory={handleCategoryClick} onShowAll={handleShowAllClick} />
      <CardComponent data={filteredData} />
      <FooterComponent />
    </>
  )
}

const data = [
  {
    name: `Bonsai Bites`,
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
    name: `Tandoori Delight`,
    img: IndianRes,
    offerImg: IndianOffer,
    review: `123 Elm Street,
      Cityville, Stateland,
      ZIP Code: 12345-6789,
      Countryland.`,
    offerName: `Flat 80% off on all starters.`,
    id: 'indian'
  },
  {
    name: `Lucky Dragon Diner`,
    img: ChineseRes,
    offerImg: ChineseOffer,
    review: `123 Elm Street,
      Cityville, Stateland,
      ZIP Code: 12345-6789,
      Countryland.`,
    offerName: `Gravy free with Noodles.`,
    id: 'chinese'
  },
  {
    name: `L'Art de la Table`,
    img: FrenchRes,
    offerImg: FrenchOffer,
    review: `123 Elm Street,
      Cityville, Stateland,
      ZIP Code: 12345-6789,
      Countryland.`,
    offerName: `Special offer on Ratatouille.`,
    id: 'french'
  },
  {
    name: `Bollywood Bites`,
    img: IndianRes,
    offerImg: IndianOffer,
    review: `123 Elm Street,
      Cityville, Stateland,
      ZIP Code: 12345-6789,
      Countryland.`,
    offerName: `Flat 80% off on all starters.`,
    id: 'indian'
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
    name: `Bamboo Garden`,
    img: ChineseRes,
    offerImg: ChineseOffer,
    review: `123 Elm Street,
      Cityville, Stateland,
      ZIP Code: 12345-6789,
      Countryland.`,
    offerName: `Gravy free with Noodles.`,
    id: 'chinese'
  },
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
    name: `Saffron Savor`,
    img: IndianRes,
    offerImg: IndianOffer,
    review: `123 Elm Street,
      Cityville, Stateland,
      ZIP Code: 12345-6789,
      Countryland.`,
    offerName: `Flat 80% off on all starters.`,
    id: 'indian'
  },
  {
    name: `Piazza Pranzo`,
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
    name: `Café Parisienne`,
    img: FrenchRes,
    offerImg: FrenchOffer,
    review: `123 Elm Street,
      Cityville, Stateland,
      ZIP Code: 12345-6789,
      Countryland.`,
    offerName: `Special offer on Ratatouille.`,
    id: 'french'
  },
  {
    name: `Burrito Bliss`,
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
    name: `La Petite Boulangerie`,
    img: FrenchRes,
    offerImg: FrenchOffer,
    review: `123 Elm Street,
      Cityville, Stateland,
      ZIP Code: 12345-6789,
      Countryland.`,
    offerName: `Special offer on Ratatouille.`,
    id: 'french'
  },
  {
    name: `Salsa Fiesta`,
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
    name: `Dragon Wok`,
    img: ChineseRes,
    offerImg: ChineseOffer,
    review: `123 Elm Street,
      Cityville, Stateland,
      ZIP Code: 12345-6789,
      Countryland.`,
    offerName: `Gravy free with Noodles.`,
    id: 'chinese'
  },
  {
    name: `Fuji Fusion`,
    img: JapaneseRes,
    offerImg: JapaneseOffer,
    review: `123 Elm Street,
      Cityville, Stateland,
      ZIP Code: 12345-6789,
      Countryland.`,
    offerName: `Buy 1 Shushi get 1 FREE.`,
    id: 'japanese'
  },
];

