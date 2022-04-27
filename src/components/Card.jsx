import React from 'react';

export default function Card({max, min, name, img, onClose}) {

  function handleOnClose () {
    if(typeof onClose === 'function') onClose();
  }
  return (
  <div>
    <button onClose={handleOnClose}>X</button>
    <h1>{name}</h1>
    <label htmlFor="">Min</label>
    <span>{min}</span>
    <label htmlFor="">Max</label>
    <span>{max}</span>
    <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="weather icon" />
  </div>
  )
};