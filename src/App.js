import React ,{useState} from 'react';
import './App.css';
// import SearchBar from './Components/searchBar.js';
import NextButton from './Components/nextWeekButton.js';
// import Conditions from './Conditions/weatherDisplay';

const api ={

  key:"cc67b19dc916f461ab3e7d8d3c68bb27",
  base:"https://api.openweathermap.org/data/2.5/"

}

 function App() {

  const [query, setQuery] = useState('');
  const [weather,setWeather] =useState({});

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
      };
      const error=()=>{
        return(
          function alertMessage (){
          <div className="form-alert" role="alert">
           alert("Please enter a city!!");
          </div>
          });
      };

  const dateBuild = (D) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
  
  let day = days[D.getDay()];
  let date = D.getDate();
  let month = months[D.getMonth()];
  let year = D.getFullYear();

return (
 `${day} ${date} ${month} ${year}`
)}
  
  return (
    <div className = "weather-app">
      <header className = "weather-app">
        <h3>React Weather App</h3>
      </header>
     <main>
       
        <div className="search-box">
          <div>{error? error(): ""}
       <input
        type="text"
        placeholder="Enter a city..."
        autoComplete="off"
        onChange={e => setQuery(e.target.value)}
        onKeyPress= {retrieveResult}
        value= {query}
        />
        </div>
    </div>

       <div className= "nextWeekButton"><NextButton/></div>
               
{(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuild(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°c
            </div>
            <div className="weather">{weather.weather[0].main}</div>
            <div className="description">{weather.weather[0].description}</div>
          </div>
        </div>
        ) : ('')}

      <div className = "extra-info-box">
      <div className = "feels-like">Feels like:</div> 
       <div className = "humidity">Humidity: ""</div>
        <div className = "pressure">Pressure: ""</div>        
      </div>
     </main>
     <footer>
       <h6>Created by Jamell, Bev , Kenneth, Meltem and Hazel</h6>
     </footer>
    </div> 
  ); 
}
export default App