import React from 'react';
import getTheWeather from './Components/getWeather'
// implement some more features


const searchBar =({query,setQuery})=> {

   <input
    type="text"
    placeholder="Enter a city..."
    autoComplete="off"
    onChange={e => setQuery(e.target.value)}
    onKeyPress={getTheWeather}
    value= {query}
    
    />

}
export default searchBar;