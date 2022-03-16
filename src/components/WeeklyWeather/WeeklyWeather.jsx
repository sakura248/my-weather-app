/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import moment from "moment";
import React from "react";
import SingleCard from "./SingleCard";

function WeeklyWeather({ hourlyWeatherData }) {
  const dateConvert = (unixData) => {
    const threeHour = moment(unixData).format("ha");
    return threeHour;
  };

  return (
    <div>
      <div className="vertical-card">
        {Object.keys(hourlyWeatherData.list)
          .slice(0, 6)
          .map((threeHourData, index) => (
            <SingleCard
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

export default WeeklyWeather;
