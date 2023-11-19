import React, { useState } from 'react';
import HeroComponent from '../components/hero/HeroComponent'
import Carousel from '../components/carousel/Carousel'
import CategoriesComponent from '../components/categories/CategoriesComponent'
import CardComponent from '../components/card/CardComponent'

import Res from '../assets/res.jpg'
import Dish from '../assets/dish.jpg'
import FooterComponent from '../components/footer/FooterComponent';

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
    name: `Tandoori Delight`,
    img: Res,
    offerImg: Dish,
    review: `123 Elm Street,
      Cityville, Stateland,
      ZIP Code: 12345-6789,
      Countryland.`,
    offerName: `Flat 80% off on all starters.`,
    id: 'indian'
  },
  {
    name: `Saffron Savor`,
    img: Res,
    offerImg: Dish,
    review: `123 Elm Street,
      Cityville, Stateland,
      ZIP Code: 12345-6789,
      Countryland.`,
    offerName: `Flat 80% off on all starters.`,
    id: 'indian'
  },
  {
    name: `Bollywood Bites`,
    img: Res,
    offerImg: Dish,
    review: `123 Elm Street,
      Cityville, Stateland,
      ZIP Code: 12345-6789,
      Countryland.`,
    offerName: `Flat 80% off on all starters.`,
    id: 'indian'
  },

  {
    name: `Dragon Wok`,
    img: Res,
    offerImg: Dish,
    review: `123 Elm Street,
      Cityville, Stateland,
      ZIP Code: 12345-6789,
      Countryland.`,
    offerName: `Flat 80% off on all starters.`,
    id: 'chinese'
  },
  {
    name: `Bamboo Garden`,
    img: Res,
    offerImg: Dish,
    review: `123 Elm Street,
      Cityville, Stateland,
      ZIP Code: 12345-6789,
      Countryland.`,
    offerName: `Flat 80% off on all starters.`,
    id: 'chinese'
  },
  {
    name: `Lucky Dragon Diner`,
    img: Res,
    offerImg: Dish,
    review: `123 Elm Street,
      Cityville, Stateland,
      ZIP Code: 12345-6789,
      Countryland.`,
    offerName: `Flat 80% off on all starters.`,
    id: 'chinese'
  },

  {
    name: `Tokyo Teppanyaki`,
    img: Res,
    offerImg: Dish,
    review: `123 Elm Street,
      Cityville, Stateland,
      ZIP Code: 12345-6789,
      Countryland.`,
    offerName: `Flat 80% off on all starters.`,
    id: 'japanese'
  },
  {
    name: `Fuji Fusion`,
    img: Res,
    offerImg: Dish,
    review: `123 Elm Street,
      Cityville, Stateland,
      ZIP Code: 12345-6789,
      Countryland.`,
    offerName: `Flat 80% off on all starters.`,
    id: 'japanese'
  },
  {
    name: `Bonsai Bites`,
    img: Res,
    offerImg: Dish,
    review: `123 Elm Street,
      Cityville, Stateland,
      ZIP Code: 12345-6789,
      Countryland.`,
    offerName: `Flat 80% off on all starters.`,
    id: 'japanese'
  },

  {
    name: `Bella Cucina`,
    img: Res,
    offerImg: Dish,
    review: `123 Elm Street,
      Cityville, Stateland,
      ZIP Code: 12345-6789,
      Countryland.`,
    offerName: `Flat 80% off on all starters.`,
    id: 'italian'
  },
  {
    name: `Piazza Pranzo`,
    img: Res,
    offerImg: Dish,
    review: `123 Elm Street,
      Cityville, Stateland,
      ZIP Code: 12345-6789,
      Countryland.`,
    offerName: `Flat 80% off on all starters.`,
    id: 'italian'
  },
  {
    name: `Amore Eats`,
    img: Res,
    offerImg: Dish,
    review: `123 Elm Street,
      Cityville, Stateland,
      ZIP Code: 12345-6789,
      Countryland.`,
    offerName: `Flat 80% off on all starters.`,
    id: 'italian'
  },

  {
    name: `L'Art de la Table`,
    img: Res,
    offerImg: Dish,
    review: `123 Elm Street,
      Cityville, Stateland,
      ZIP Code: 12345-6789,
      Countryland.`,
    offerName: `Flat 80% off on all starters.`,
    id: 'french'
  },
  {
    name: `Café Parisienne`,
    img: Res,
    offerImg: Dish,
    review: `123 Elm Street,
      Cityville, Stateland,
      ZIP Code: 12345-6789,
      Countryland.`,
    offerName: `Flat 80% off on all starters.`,
    id: 'french'
  },
  {
    name: `La Petite Boulangerie`,
    img: Res,
    offerImg: Dish,
    review: `123 Elm Street,
      Cityville, Stateland,
      ZIP Code: 12345-6789,
      Countryland.`,
    offerName: `Flat 80% off on all starters.`,
    id: 'french'
  },

  {
    name: `Salsa Fiesta`,
    img: Res,
    offerImg: Dish,
    review: `123 Elm Street,
      Cityville, Stateland,
      ZIP Code: 12345-6789,
      Countryland.`,
    offerName: `Flat 80% off on all starters.`,
    id: 'mexican'
  },
  {
    name: `Burrito Bliss`,
    img: Res,
    offerImg: Dish,
    review: `123 Elm Street,
      Cityville, Stateland,
      ZIP Code: 12345-6789,
      Countryland.`,
    offerName: `Flat 80% off on all starters.`,
    id: 'mexican'
  },
  {
    name: `Chiles & Charros`,
    img: Res,
    offerImg: Dish,
    review: `123 Elm Street,
      Cityville, Stateland,
      ZIP Code: 12345-6789,
      Countryland.`,
    offerName: `Flat 80% off on all starters.`,
    id: 'mexican'
  },

];

