import React , {useState} from 'react';
import {getNextWeather} from './nextWeekWeather.js'
// implement some more features


const NextButton =()=> {

  const [query] = useState('')

  const retrieveResult = (event) => {
if (event.key === 13){
  getNextWeather()
}
  }

  return (
   <button
    onClick={retrieveResult}
    value= {query}>Next Week Forecast

</button>
  )
}
export default NextButton