import React from 'react';
import Card from './Card';
import Styles from './Cards.module.css';

export default function Cards({cities, onRemove}) {
  return (
  <div className={Styles.Cards}>
    {cities.map((city) => 
      <Card
        key={city.id}
        min={city.min}
        max={city.max}
        name={city.name}
        img={city.img}
        onClose={()=> onRemove (city.id)}
      />)
    }
  </div>
  )
};