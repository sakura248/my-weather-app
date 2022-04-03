import * as dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SingleHourCard from "./SingleHourCard";

function HourlyWeather({ hourlyWeatherData }) {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  const dateConvert = (unixData, tz) => {
    const hour = dayjs.unix(unixData).tz(tz).format("Ha");
    return hour;
  };

  return (
    <ScrollContainer ignoreElements="#btn" hideScrollbars="false">
      {!hourlyWeatherData || hourlyWeatherData.cod === "400" ? (
        <div className="vertical-card-skeleton">
          <Skeleton className="vertical-single-card-skeleton" />
          <Skeleton className="vertical-single-card-skeleton" />
          <Skeleton className="vertical-single-card-skeleton" />
          <Skeleton className="vertical-single-card-skeleton" />
          <Skeleton className="vertical-single-card-skeleton" />
        </div>
      ) : (
        <div className="vertical-card">
          {Object.keys(hourlyWeatherData.hourly)
            .slice(0, 12)
            .map((key, index) => (
              <SingleHourCard
                key={hourlyWeatherData.hourly[index].dt}
                index={index}
                date={dateConvert(
                  hourlyWeatherData.hourly[index].dt,
                  hourlyWeatherData.timezone
                )}
                src={`${process.env.PUBLIC_URL}/assets/weather-icons/${hourlyWeatherData.hourly[index].weather[0].icon}.png`}
                temp={hourlyWeatherData.hourly[index].temp}
              />
            ))}
        </div>
      )}
    </ScrollContainer>
  );
}

export default HourlyWeather;
