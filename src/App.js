import React from 'react';
import './App.css';
import SearchBar from './Components/searchBar.js';


function App() {

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
       
<div className = "search-box"><SearchBar/></div> 
       
       <div className="location">Barnet,UK</div>
       <div className = "temperature">30</div>
       <div className="description">sunny</div>
        <div className="date">{dateBuild(new Date())}</div>
      
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
