import React from "react";
import WeeklyWeather from "./WeeklyWeather";

function WeeklyWeatherList({ weatherData }) {
  return (
    <div>
      <h2>Daily Forecast</h2>
      <WeeklyWeather WeeklyWeatherData={weatherData} />
    </div>
  );
}

export default WeeklyWeatherList;
