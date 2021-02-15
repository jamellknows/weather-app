import React, {useState} from 'react';


function getWeather(){

const [query, setQuery] = useState,{''}
const [weather, setWeather] = useState,{''};


const getTheWeather = event =>{

if (event.key === 13){

    fetch(    )
    .then(res=>res.json())
    .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result);
    })
}
}}

export default getWeather;