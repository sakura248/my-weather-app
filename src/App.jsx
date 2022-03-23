/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import MediaQuery from "react-responsive";
import GetCityName from "./api/GetCityName";
import GetCityWeather from "./api/GetCityWeather";
import GetLocation from "./api/GetLocation";
import "./App.css";
import CurrentInfo from "./components/CurrentInfo/CurrentInfo";
import CurrentWeatherDetails from "./components/CurrentWeather/CurrentWeatherDetails";
import HourlyWeatherList from "./components/HourlyWeather/HourlyWeatherList";
import SearchCityForm from "./components/Search/SearchCityForm";
import WeeklyWeatherList from "./components/WeeklyWeather/WeeklyWeatherList";

export const GeoContext = createContext();

export function App() {
  const [searchedData, setSearchedData] = useState([]);
  const [newCity, setNewCity] = useState("");

  const [isLoading, setIsloading] = useState(false);
  const { fetchCity, city } = GetCityName();
  const { fetchData, data } = GetCityWeather();
  const location = GetLocation();

  useEffect(() => {
    const firstGetCity = async () => {
      await fetchCity(location.lat, location.long);
      await fetchData(location.lat, location.long);
    };
    firstGetCity();
  }, [location]);

  const searchSetCity = async (e) => {
    e.preventDefault();
    console.log(newCity);
    const url = `${process.env.REACT_APP_API_GEO_URL}/geo/1.0/direct?q=${newCity}&limit=5&appid=${process.env.REACT_APP_API_KEY}`;

    const result = await fetch(url);
    try {
      const json = await result.json();
      console.log(json);
      console.log(json);
      if (json.cod === "404") {
        console.log("city not found");
      }
      // setData(json);
    } catch (err) {
      console.log(err);
    }
  };
  const cityOnChange = (e) => {
    setNewCity(e.target.value);
    console.log(newCity);
  };

  return (
    <div className="App">
      <div className="left-side">
        <MediaQuery query="(max-width: 999px)">
          <SearchCityForm
            onChange={cityOnChange}
            searchSetCity={searchSetCity}
            className="search-city-info"
          />
          {!city ? (
            <Skeleton className="city-name-skeleton" />
          ) : (
            <CurrentInfo cityName={city} className="current-info" />
          )}
        </MediaQuery>
        {data.length !== 0 && (
          <>
            <CurrentWeatherDetails weatherData={data} />
            <HourlyWeatherList weatherData={data} />
          </>
        )}
      </div>
      <div className="right-side">
        <MediaQuery query="(min-width: 1000px)">
          {!city ? (
            <Skeleton className="city-name-skeleton" />
          ) : (
            <CurrentInfo cityName={city} className="current-info" />
          )}
          <SearchCityForm
            onChange={cityOnChange}
            searchSetCity={searchSetCity}
            className="search-city-info"
          />
        </MediaQuery>
        {data.length !== 0 && <WeeklyWeatherList weatherData={data} />}
      </div>
    </div>
  );
}

export default App;
