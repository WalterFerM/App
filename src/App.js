import React, {useState} from 'react';
import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import data, { Cairns } from './data.js';

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
    const [cities, setCities] = useState([]);

  function handleAddCities (city) {
    setCities((prevCities) => {
      return [city, ...prevCities];
    })
  }

  function handleRemoveCity(cityId) {
    setCities((prevCities) => {
      return prevCities.filter((city)=>{
        return cityId !== city.id
      })
    })
  } 
  
  function onSearch (ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          handleAddCities(ciudad)
        } else {
          alert("Ciudad no encontrada");
        }
      });


  }

  return (
    <div className="App">
      <div>
        <SearchBar
          onSearch={(ciudad) => alert(ciudad)}
        />
      </div>
      <div>
        <Card
          max={Cairns.main.temp_max}
          min={Cairns.main.temp_min}
          name={Cairns.name}
          img={Cairns.weather[0].icon}
          onClose={() => alert(Cairns.name)}
        />
      </div>
      <hr />
      <div>
        <Cards
          cities={data}
        />
      </div>
      <hr />
    </div>
  );
}

export default App;
