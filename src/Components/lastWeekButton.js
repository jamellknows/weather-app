import React , {useState} from 'react';
import {getLastWeather} from './lastWeekWeather.js'
// implement some more features


const LastButton =()=> {

  const [query] = useState('')

  const retrieveResult = (event) => {
if (event.key === 13){
  getLastWeather()
}
  }

  return (
   <button
    onClick={retrieveResult}
    value= {query}>Last Week Forecast

</button>
  )
}
export default LastButton