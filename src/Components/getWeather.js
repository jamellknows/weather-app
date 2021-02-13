import React from 'react';
//import Conditions from '../Conditions/weatherDisplay;

// i made a folder so you can put your fetch code etc in here jamell, just to make sure we dont have files all over the place (and ensure good practice!)



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
   
 const Weather = () => {

     function getTheWeather() {

        // your fetch code for today's weather goes here

     

     return (
<div>
    <h2>What's the weather like today:</h2>
    <button onClick={getTheWeather}>Show me the Weather</button>
</div>
     );
     }

     function getnextWeekWeather(){

        // fetch data for next 7 days
     

     return (
         <button onClick = {getnextWeekWeather}>Next Week</button>
     )
 
     }
     

 function lastWeekWeather(){
     
    // fetch for last week's weather
 

 return (

     <button onClick={lastWeekWeather}> Last Week</button>
 )
 }};

export default Weather;
