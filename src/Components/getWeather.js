import React, { useState } from "react";

// instead of having all the code on app.js , we could place the get weather function in here as a child component and render to app.js
const api = {
  key: "cc67b19dc916f461ab3e7d8d3c68bb27",
  base: "https://api.openweathermap.org/data/2.5/",
};

const GetWeather = (props) => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const retrieveResult = (event) => {
    if (event.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setQuery("");
          setWeather(result);
          console.log(result);
        });
    }
  };
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Enter a city..."
        autoComplete="off"
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={retrieveResult}
        value={query}
      />
    </div>
  );
};

export default GetWeather;
