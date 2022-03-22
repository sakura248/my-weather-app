/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import * as dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SingleCard from "./SingleCard";

function WeeklyWeather({ WeeklyWeatherData }) {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  const dateConvert = (unixData, tz) => {
    const convertedDate = dayjs.unix(unixData).tz(tz).format("ddd");
    return convertedDate;
  };

  return (
    <div>
      {!WeeklyWeatherData || WeeklyWeatherData.cod === "400" ? (
        <div className="horizontal-card-skeleton">
          <Skeleton className="horizontal-single-card-skeleton" />
          <Skeleton className="horizontal-single-card-skeleton" />
          <Skeleton className="horizontal-single-card-skeleton" />
          <Skeleton className="horizontal-single-card-skeleton" />
          <Skeleton className="horizontal-single-card-skeleton" />
          <Skeleton className="horizontal-single-card-skeleton" />
          <Skeleton className="horizontal-single-card-skeleton" />
        </div>
      ) : (
        <div className="horizontal-card">
          {Object.keys(WeeklyWeatherData.daily)
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
            ))}
        </div>
      )}
    </div>
  );
}
export default WeeklyWeather;
