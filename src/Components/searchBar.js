import React from 'react';

// implement some more features

const searchBar = ({city, setCity }) => {


   <form onSubmit ={(e) => {setcity(e); }}>
   <input
    type="text"
    placeholder="Enter a city..."
    autoComplete="off"
    value={city}
    onChange={(e) => setCity(e.target.value)}
    />
  </form>
}
export default searchBar