import React , {useState} from 'react';
import {getWeather} from './getWeather.js'
// implement some more features


const SearchBar =()=> {

  const [query, setQuery] = useState('')

  const retrieveResult = (event) => {
if (event.key === 13){
  getWeather()
}
  }

  return (
   <input
    type="text"
    placeholder="Enter a city..."
    autoComplete="off"
    onChange={e => setQuery(e.target.value)}
    onKeyPress= {retrieveResult}
    value= {query}
    
    
    />

  )}
export default SearchBar;