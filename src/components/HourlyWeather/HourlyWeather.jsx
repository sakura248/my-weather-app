/* eslint-disable react/no-array-index-key */
import * as dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import ScrollBtn from "./ScrollBtn";
import SingleHourCard from "./SingleHourCard";

function HourlyWeather({ hourlyWeatherData }) {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  const dateConvert = (unixData, tz) => {
    const hour = dayjs.unix(unixData).tz(tz).format("Ha");
    return hour;
  };

  return (
    <ScrollContainer ignoreElements="#btn">
      <div className="vertical-card">
        {!hourlyWeatherData || hourlyWeatherData.cod === "400" ? (
          <p>error</p>
        ) : (
          Object.keys(hourlyWeatherData.hourly)
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
            ))
        )}
      </div>
      <ScrollBtn id="btn" />
    </ScrollContainer>
  );
}

export default HourlyWeather;
