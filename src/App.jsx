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
  const [newCity, setNewCity] = useState("");
  const [inputCity, setInputCity] = useState("");

  const { fetchCity, city } = GetCityName();
  const { fetchData, data } = GetCityWeather();
  const location = GetLocation();

  const [showList, setShowList] = useState(false);
  const [cityList, setCityList] = useState([]);

  useEffect(() => {
    const firstGetCity = async () => {
      await fetchCity(location.lat, location.long);
      await fetchData(location.lat, location.long);
    };
    firstGetCity();
  }, [location]);

  const cityOnChange = async (e) => {
    setInputCity("abc");
    setShowList(true);

    const fetchList = async () => {
      const url = `${process.env.REACT_APP_API_GEO_URL}/direct?q=${e.target.value}&limit=5&appid=${process.env.REACT_APP_API_KEY}`;
      const result = await fetch(url);
      try {
        const json = await result.json();
        if (json) {
          setCityList(json);
        }
        return json;
      } catch (err) {
        console.log(err);
      }
      return [];
    };
    const result = await fetchList();
    setCityList(result);
  };

  useEffect(() => {
    const secondGetCity = async () => {
      await fetchCity(newCity.lat, newCity.lon);
      await fetchData(newCity.lat, newCity.lon);
    };
    secondGetCity();
  }, [newCity]);

  return (
    <div className="App">
      <div className="left-side">
        <MediaQuery query="(max-width: 999px)">
          <SearchCityForm
            onChange={cityOnChange}
            className="search-city-info"
            showList={showList}
            cityList={cityList}
            setInputCity={setInputCity}
            value={inputCity}
            setNewCity={setNewCity}
            setShowList={setShowList}
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
            className="search-city-info"
            showList={showList}
            cityList={cityList}
            setInputCity={setInputCity}
            value={inputCity}
          />
        </MediaQuery>
        {data.length !== 0 && <WeeklyWeatherList weatherData={data} />}
      </div>
    </div>
  );
}

export default App;
