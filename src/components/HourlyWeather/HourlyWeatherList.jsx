import React from "react";
import HourlyWeather from "./HourlyWeather";
import "./HourlyWeatherList.css";

function HourlyWeatherList({ weatherData }) {
  return (
    <div className="hourly-container">
      <h2>Hourly forecast</h2>
      <HourlyWeather hourlyWeatherData={weatherData} />
    </div>
  );
}

export default HourlyWeatherList;
