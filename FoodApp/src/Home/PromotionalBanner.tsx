import React from 'react'
import Prmocard from './Prmocard';

const PromotionalBanner = () => {

  // Data 

  const promos = [
  { offer: '50% OFF',            image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400' },  // Burger
  { offer: 'Get A Free Treat',   image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400' },     // Ice cream
  { offer: 'Flavourful Delight', image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400' },   // Pizza
  { offer: 'Quick Bites',        image: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=400' },   // Fries
  { offer: 'Sweet Deals',        image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=400' },   // Dessert
  { offer: 'Hot Offer',          image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400' },   // Spicy food
];

  return (
    <div className='PromotionalBan'>
        <h1>60% off</h1>
        <p> upto $ 140</p>
        <div className="promotionalcard">
        {promos.map(function(elem){

          return <Prmocard user={elem.offer} img={elem.image}/>;
        })}
        </div>
    </div>
  )
}

export default PromotionalBanner
