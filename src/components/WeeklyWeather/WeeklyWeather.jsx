/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import moment from "moment";
import React from "react";

function WeeklyWeather({ WeeklyyWeatherData }) {
  const dateConvert = (unixData) => {
    const threeHour = moment(unixData).format("ha");
    return threeHour;
  };

  return (
    <div>
      {/* <div className="vertical-card">
        {Object.keys(WeeklyyWeatherData.list)
          .slice(0, 6)
          .map((threeHourData, index) => (
            <SingleCard
              key={index}
              date={dateConvert(WeeklyyWeatherData.list[index].dt_txt)}
              src={`${process.env.PUBLIC_URL}/assets/weather-icons/${WeeklyyWeatherData.list[index].weather[0].icon}.png`}
              maxTemp={WeeklyyWeatherData.list[index].main.temp_max}
              minTemp={WeeklyyWeatherData.list[index].main.temp_min}
            />
          ))}
      </div> */}
    </div>
  );
}

export default WeeklyWeather;
