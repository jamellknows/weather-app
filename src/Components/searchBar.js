import React , {useState} from 'react';
// import {GetWeather} from './getWeather.js';
import Conditions from '../Conditions/weatherDisplay.js'

// implement some more features


const SearchBar =props=> {

  const [query, setQuery] = useState('');
  const [weather,setWeather] =useState({});
  
  const api ={

    key:"cc67b19dc916f461ab3e7d8d3c68bb27",
    base:"https://api.openweathermap.org/data/2.5/"

}

  const retrieveResult = (event) => {
if (event.key === "Enter"){
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(res=>res.json())
    .then(result => {
        setQuery('');
        setWeather(result);
        console.log(result);
        
 })

}

  }
 

  // <div className="main-box">
  //      <div className="location">{weather.name},{weather.sys.country}</div>
  //      <div className = "temperature">{Math.round(weather.main.temp)}</div>
  //      <div className="description">{weather.weather.main[0].main}</div>
  //     </div>


  return (
    <div>{props.error ? error() : ""}
   <input
    type="text"
    placeholder="Enter a city..."
    autoComplete="off"
    onChange={e => setQuery(e.target.value)}
    onKeyPress= {retrieveResult}
    value= {query}
    />
    
</div>



  )}

  const error = props => {
    return (
      <div className="form-alert" role="alert">
        Please Enter City !
      </div>
    );
  };


export default SearchBar;