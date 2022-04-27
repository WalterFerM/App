import React from 'react';

export default function Card({max, min, name, img, onClose}) {

  function handleOnClose () {
    if(typeof onClose === 'function') onClose();
  }
  return (
  <div>
    <button onClose={handleOnClose}>X</button>
    <h1>{name}</h1>
    <div>
      <label htmlFor="min">Min</label>
      <span id="min" >{min}</span>
    </div>
    <div>
      <label htmlFor="max">Max</label>
      <span id="max">{max}</span>
    </div>
    <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="weather icon" />
  </div>
  )
};