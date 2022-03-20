/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import * as dayjs from "dayjs";
import React from "react";

function WeeklyWeather({ WeeklyWeatherData }) {
  const dateConvert = (unixData) => {
    const date = dayjs(unixData).format("DD ddd HH:mm");
    return date;
  };

  console.log("WeeklyWeatherData", WeeklyWeatherData);

  return (
    <div className="horizontal-card">
      {/* {Object.keys(WeeklyWeatherData.list)
        .slice(0, 6)
        .map((index) => (
          <SingleCard
            key={index}
            date={dateConvert(WeeklyWeatherData.list[index].dt_txt)}
            src={`${process.env.PUBLIC_URL}/assets/weather-icons/${WeeklyWeatherData.list[index].weather[0].icon}.png`}
            maxTemp={WeeklyWeatherData.list[index].main.temp_max}
            minTemp={WeeklyWeatherData.list[index].main.temp_min}
          />
        ))} */}
    </div>
  );
}

export default WeeklyWeather;
