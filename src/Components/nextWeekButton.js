import React, {useState}  from 'react';


// implement some more features

function NextButton() {

  const api ={

    key:"6b681c1d69a01510027518ec6e3aac83",
    base:"https://api.openweathermap.org/data/2.5/"
  
  }

  const [query, setQuery] = useState('');
  const [setWeather] =useState({});

  const weeklyResult = (event) => {
if (event.key === 13){
  fetch(`${api.base}forecast?q=${query}&appid=${api.key}&cnt=5`)
      .then(res=>res.json())
      .then(result => {
          setQuery('');
          setWeather(result);
          console.log(result);         
   })}
};
  return (
    <div className = "button">
   <button 
   type="submit"
   onChange={e => setQuery(e.target.value)}
   onClick={weeklyResult}
   value={query}
   ></button>
   </div>
  )}

export default NextButton