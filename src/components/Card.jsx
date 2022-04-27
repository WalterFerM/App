import React from 'react';
import CardTemp from './CardTemp';
// import PropTypes from 'propTypes';
import PropTypes from 'prop-types';


export default function Card({max, min, name, img, onClose}) {

  function handleOnClose () {
    if(typeof onClose === 'function') onClose();
  }
  return (
  <div>
    <button onClick={handleOnClose}>X</button>
    <h1>{name}</h1>
    <CardTemp label="Min" value={min} />
    <CardTemp label="Max" value={max} />
    <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="weather icon" />
  </div>
  )
};

Card.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.string,
  onClose: PropTypes.func,
}