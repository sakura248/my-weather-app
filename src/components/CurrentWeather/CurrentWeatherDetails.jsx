import * as dayjs from "dayjs";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./CurrentWeatherDetail.css";

function CurrentWeatherDetails({ weatherData }) {
  const dateConvert = (unixData) => {
    const time = dayjs.unix(unixData).format("H:mm");
    return time;
  };

  const HandleOutfit = (temp) => {
    let outfit = "";
    if (temp >= 25) {
      outfit = "t-shirt";
    } else if (temp >= 19) {
      outfit = "long-sleeve";
    } else if (temp >= 15) {
      outfit = "jacket";
    } else if (temp >= 11) {
      outfit = "knit";
    } else {
      outfit = "coat";
    }
    return outfit;
  };

  return (
    <div className="current-info-wrapper">
      <div className="text-info-wrapper">
        <div className="kv-wrapper">
          <div className="current-icon-wrapper">
            {weatherData.cod === "400" ? (
              <Skeleton className="img-skeleton" />
            ) : (
              <img
                src={`${process.env.PUBLIC_URL}/assets/weather-icons/${weatherData.current.weather[0].icon}.png`}
                alt={weatherData.current.weather[0].icon}
              />
            )}
          </div>
          <div className="kv-info">
            {weatherData.cod === "400" ? (
              <Skeleton className="kv-info-p-skeleton" />
            ) : (
              <p> {weatherData.current.weather[0].description}</p>
            )}
            {weatherData.cod === "400" ? (
              <Skeleton className="current-temp-skeleton" />
            ) : (
              <p className="current-temp">{weatherData.current.temp}°</p>
            )}
            {weatherData.cod === "400" ? (
              <Skeleton className="kv-info-p-skeleton" />
            ) : (
              <p>Real feel {weatherData.current.feels_like}°</p>
            )}
          </div>
        </div>
        <div className="grid-wrapper">
          {weatherData.cod === "400" ? (
            <Skeleton className="main-grid-skeleton" />
          ) : (
            <div className="main-grid">
              <p className="grid-title">Hum</p>
              <p className="grid-int">
                {weatherData.current.humidity}
                <span className="unit">%</span>
              </p>
            </div>
          )}

          {weatherData.cod === "400" ? (
            <Skeleton className="main-grid-skeleton" />
          ) : (
            <div className="main-grid">
              <p className="grid-title">Pressure</p>
              <p className="grid-int">
                {weatherData.current.pressure}
                <span className="unit">hPa</span>
              </p>
            </div>
          )}
          {weatherData.cod === "400" ? (
            <Skeleton className="main-grid-skeleton" />
          ) : (
            <div className="main-grid">
              <p className="grid-title">UV index</p>
              <p className="grid-int">{weatherData.daily[0].uvi}</p>
            </div>
          )}
          {weatherData.cod === "400" ? (
            <Skeleton className="main-grid-skeleton" />
          ) : (
            <div className="main-grid">
              <p className="grid-title">Sunset</p>
              <p className="grid-int">
                {dateConvert(weatherData.current.sunset)}
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="outfit-wrapper">
        <div className="each-outfit-wrapper">
          {weatherData.cod === "400" ? (
            <Skeleton className="max-temp-skeleton" />
          ) : (
            <p className="max-temp">{weatherData.daily[0].temp.max}°</p>
          )}
          {weatherData.cod === "400" ? (
            <Skeleton className="outfit-skeleton" />
          ) : (
            <img
              className="outfit"
              src={`${process.env.PUBLIC_URL}/assets/code/${HandleOutfit(
                weatherData.daily[0].temp.max
              )}.png`}
              alt="test1"
            />
          )}
        </div>
        <div className="each-outfit-wrapper">
          {weatherData.cod === "400" ? (
            <Skeleton className="min-temp-skeleton" />
          ) : (
            <p className="min-temp">{weatherData.daily[0].temp.min}°</p>
          )}
          {weatherData.cod === "400" ? (
            <Skeleton className="outfit-skeleton" />
          ) : (
            <img
              className="outfit"
              src={`${process.env.PUBLIC_URL}/assets/code/${HandleOutfit(
                weatherData.daily[0].temp.min
              )}.png`}
              alt="test2"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default CurrentWeatherDetails;
