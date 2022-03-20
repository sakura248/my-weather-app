import React from "react";
// import GetCityWeather from "../../api/GetCityWeather";
// import GetLocation from "../../api/GetLocation";
import HourlyWeather from "./HourlyWeather";

function HourlyWeatherList({ weatherData }) {
  // const { fetchData, data } = GetCityWeather();
  // const location = GetLocation();

  // useEffect(() => {
  //   const fetchForecast = async () => {
  //     await fetchData(location.lat, location.long, "forecast");
  //   };
  //   fetchForecast();
  // }, [location]);

  return (
    <div>
      <h2>3 hour forecast</h2>
      {weatherData.length !== 0 ? (
        <HourlyWeather hourlyWeatherData={weatherData} />
      ) : (
        <div>error</div>
      )}
    </div>
  );
}

export default HourlyWeatherList;
