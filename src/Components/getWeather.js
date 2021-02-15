import React from 'react';
import searchBar from '../Components/searchBar.js';
//import Conditions from '../Conditions/weatherDisplay;

// i made a folder so you can put your fetch code etc in here jamell, just to make sure we dont have files all over the place (and ensure good practice!)

   
 const Weather = () => {

     function getTheWeather() {

        // your fetch code for today's weather goes here

     

     return (
<div>
    <h2>What's the weather like today:</h2>
    <button onClick={searchBar} type="submit">Show me the Weather</button>
</div>
     );
     }

     function getnextWeekWeather(){

        // fetch data for next 7 days
     

     return (
         <button onClick = {getnextWeekWeather} type="submit">Next Week</button>
     )
 
     }
     

 function lastWeekWeather(){
     
    // fetch for last week's weather
 

 return (

     <button onClick={lastWeekWeather} type="submit"> Last Week</button>
 )
 }};

export default Weather;
