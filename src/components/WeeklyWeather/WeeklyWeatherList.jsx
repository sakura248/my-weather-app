import React, { useEffect } from "react";
import GetCityWeather from "../../api/GetCityWeather";
import GetLocation from "../../api/GetLocation";
import WeeklyWeather from "./WeeklyWeather";

function WeeklyWeatherList() {
  const { fetchData, data } = GetCityWeather();
  const location = GetLocation();

  useEffect(() => {
    const fetchForecast = async () => {
      await fetchData(location.lat, location.long, "forecast");
    };
    fetchForecast();
  }, [location]);

  return (
    <div>
      <h2>Weekly Forecast</h2>
      {data.length !== 0 ? (
        <WeeklyWeather WeeklyWeatherData={data} />
      ) : (
        <div>error</div>
      )}
    </div>
  );
}

export default WeeklyWeatherList;
