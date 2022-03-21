/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import * as dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import React from "react";
import SingleCard from "./SingleCard";

function WeeklyWeather({ WeeklyWeatherData }) {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  const dateConvert = (unixData, tz) => {
    const convertedDate = dayjs.unix(unixData).tz(tz).format("ddd");
    return convertedDate;
  };

  return (
    <div className="horizontal-card">
      {!WeeklyWeatherData || WeeklyWeatherData.cod === "400" ? (
        <p>error</p>
      ) : (
        Object.keys(WeeklyWeatherData.daily)
          .slice(0, 7)
          .map((key, index) => (
            <SingleCard
              key={WeeklyWeatherData.daily[index].dt}
              index={index}
              date={dateConvert(
                WeeklyWeatherData.daily[index].dt,
                WeeklyWeatherData.timezone
              )}
              src={`${process.env.PUBLIC_URL}/assets/weather-icons/${WeeklyWeatherData.daily[index].weather[0].icon}.png`}
              maxTemp={WeeklyWeatherData.daily[index].temp.max}
              minTemp={WeeklyWeatherData.daily[index].temp.min}
            />
          ))
      )}
    </div>
  );
}

export default WeeklyWeather;
