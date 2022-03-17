import React, { useEffect } from "react";
import GetCityWeather from "../../api/GetCityWeather";
import GetLocation from "../../api/GetLocation";
import HourlyWeather from "./HourlyWeather";

function HourlyWeatherList() {
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
      <h2>3 hour forecast</h2>
      {data.length !== 0 ? (
        <HourlyWeather hourlyWeatherData={data} />
      ) : (
        <div>error</div>
      )}
    </div>
  );
}

export default HourlyWeatherList;
