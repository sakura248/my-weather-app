/* eslint-disable react/no-array-index-key */
import React from "react";
import moment from "moment";
import SingleHourCard from "./SingleHourCard";

function HourlyWeather({ hourlyWeatherData }) {
  const dateConvert = (unixData) => {
    const threeHour = moment(unixData).format("ha");
    return threeHour;
  };

  return (
    <div>
      <h2>3 hour forecast</h2>
      <div className="vertical-card">
        {Object.keys(hourlyWeatherData.list)
          .slice(0, 6)
          .map((threeHourData, index) => (
            <SingleHourCard
              key={index}
              date={dateConvert(hourlyWeatherData.list[index].dt_txt)}
              src={`${process.env.PUBLIC_URL}/assets/weather-icons/${hourlyWeatherData.list[index].weather[0].icon}.png`}
              maxTemp={hourlyWeatherData.list[index].main.temp_max}
              minTemp={hourlyWeatherData.list[index].main.temp_min}
            />
          ))}
      </div>
    </div>
  );
}

export default HourlyWeather;
