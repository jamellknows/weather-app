import React  from 'react';
import {getNextWeather} from './nextWeekWeather.js'

// implement some more features


const NextButton =()=> {

 

  const retrieveResult = (event) => {
if (event.key === 13){
  getNextWeather()
}
  }

  return (
   <button
    onClick={retrieveResult}
    >Next Week Forecast

</button>
  )
}
export default NextButton