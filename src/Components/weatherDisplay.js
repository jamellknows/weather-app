
import GetWeather from '../Components/getWeather.js'

// this could act as another child component to be rendered to getweather.js

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
  
<div  
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