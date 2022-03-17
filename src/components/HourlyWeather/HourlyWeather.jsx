/* eslint-disable react/no-array-index-key */
import * as dayjs from "dayjs";
import React from "react";
import SingleHourCard from "./SingleHourCard";

function HourlyWeather({ hourlyWeatherData }) {
  const dateConvert = (unixData) => {
    const day = dayjs(unixData).format("ha");
    return day;
  };

  return (
    <div className="vertical-card">
      {Object.keys(hourlyWeatherData.list)
        .slice(0, 6)
        .map((index) => (
          <SingleHourCard
            key={index}
            date={dateConvert(hourlyWeatherData.list[index].dt_txt)}
            src={`${process.env.PUBLIC_URL}/assets/weather-icons/${hourlyWeatherData.list[index].weather[0].icon}.png`}
            maxTemp={hourlyWeatherData.list[index].main.temp_max}
            minTemp={hourlyWeatherData.list[index].main.temp_min}
          />
        ))}
    </div>
  );
}

export default HourlyWeather;
