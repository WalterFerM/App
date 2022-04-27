import React from 'react';
import Card from './Card';
import Styles from './Cards.module.css';

export default function Cards({cities}) {
  return (
  <div className={Styles.Cards}>
    {cities.map((city) => 
      <Card
        key={city.id}
        min={city.main.temp_min}
        max={city.main.temp_max}
        name={city.name}
        img={city.weather[0].icon}
        onClose={()=> alert (city.name)}
      />)
    }
  </div>
  )
};