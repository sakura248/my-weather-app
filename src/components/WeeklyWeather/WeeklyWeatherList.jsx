import React from "react";
import WeeklyWeather from "./WeeklyWeather";

function WeeklyWeatherList({ weatherData }) {
  return (
    <div>
      <h2>Weekly Forecast</h2>
      <WeeklyWeather WeeklyWeatherData={weatherData} />
    </div>
  );
}

export default WeeklyWeatherList;
