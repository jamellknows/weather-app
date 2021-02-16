import React from "react";
//import "./weather.style.css";

const Weather = props => {
  return (
    <div className="weather">
      <div className="weather - card">
        <h1 className="weather-city">{props.cityname}</h1>
        <h5 className="weather-icon-container">
          <i className={`wi ${props.weatherIcon} display-1`} />
        </h5>

        {/* Get Celsius */}
        {props.temp_celsius ? (
          <h1 className="weather-temp">{props.temp_celsius}&deg;</h1>
        ) : null}

        {/* show max and min temp */}
        {maxminTemp(props.temp_min, props.temp_max)}

        {/* Weather description */}
        <h4 className="weather-desc">
          {props.description.charAt(0).toUpperCase() +
            props.description.slice(1)}
        </h4>
      </div>
    </div>
  );
};

export default Weather;

function maxminTemp(min, max) {
  if (max && min) {
    return (
      <h3>
        <span className="min-deg">{min}&deg;</span>
        <span className="max-deg">{max}&deg;</span>
      </h3>
    );
  }
}