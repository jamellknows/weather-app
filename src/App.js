import React ,{useState} from 'react';
import './App.css';
import SearchBar from './Components/searchBar.js';
import NextButton from './Components/nextWeekButton.js';
import LastButton from './Components/lastWeekButton';
// import './Conditions/weatherDisplay';
// import Conditions from './Conditions/weatherDisplay';



function App() {

  const [weather] = useState({});

  const dateBuild = (D) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
  
  let day = days[D.getDay()];
  let date = D.getDate();
  let month = months[D.getMonth()];
  let year = D.getFullYear();

return (
 `${day} ${date} ${month} ${year}`
)
}
  
  return (
    <div className = "weather-app">
      <header className = "weather-app">
        <h3>React Weather App</h3>
      </header>
     <main>
       
       <div className= "nextWeekButton"><NextButton/></div>
       <div className="lastWeekButton"><LastButton/></div>

<div className = "search-box"><SearchBar/></div> 
       
      
{/* {(typeof weather.main != "undefined") ? (
       <div className="main-box">
       <div className="location">{weather.name},{weather.sys.country}</div>
       <div className = "temperature">{Math.round(weather.main.temp)}</div>
       <div className="description">{weather.weather.main[0].main}</div> */}
        <div className="date">{dateBuild(new Date())}</div>
      {/* </div>
  ) : ('')} */}
  

      <div className = "extra-info-box">
        <div className = "wind">Wind: ""</div>
        <div className = "precip">Precipitation: ""</div>
        <div className = "humidity">Humidity: ""</div>
        <div className = "feels-like">Feels like:""</div>
      </div>

     </main>
     <footer>
       <h6>Created by Jamell, Bev , Kenneth, Meltem and Hazel</h6>
     </footer>
    </div>
  );
}

export default App;
