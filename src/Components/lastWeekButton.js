import React  from 'react';
import {getLastWeather} from './lastWeekWeather.js'
// implement some more features


const LastButton =()=> {

  

  const retrieveResult = (event) => {
if (event.key === 13){
  getLastWeather()
}
  }

  return (
   <button
    onClick={retrieveResult}
    >Last Week Forecast

</button>
  )
}
export default LastButton