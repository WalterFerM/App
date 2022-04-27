import React from 'react';
import CardTemp from './CardTemp';
// import PropTypes from 'propTypes';
import PropTypes from 'prop-types';
import Styles from './Card.module.css';
import {FaRegTimesCircle} from 'react-icons/fa'


export default function Card({max, min, name, img, onClose}) {

  return (
  <div className={Styles.Card}>
    <button onClick={onClose} className={Styles.closeBtn}><FaRegTimesCircle/></button>
    <h1 className={Styles.cityName}>{name}</h1>
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