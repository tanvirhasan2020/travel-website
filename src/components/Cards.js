import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import cards_info from "./Cards_info";


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
           
            {cards_info.map(card=>(
              <CardItem 
                key={card.id}
                src={card.image}
                text={card.description}
                label={card.label}
                path='/services'
               />
               ))} 
            </ul>
           <ul className='cards__items'>
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
             {/*<CardItem
              src='images/img-10.jpg'
              text='Enjoy the beautiness of nature'
              label='Adventure'
              path='/sign-up'
            />*/}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;