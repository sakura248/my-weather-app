/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
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
  console.log(location);

  useEffect(() => {
    const firstGetCity = async () => {
      await fetchCity(location.lat, location.long);
      await fetchData(location.lat, location.long);
    };
    firstGetCity();
  }, [location]);

  const searchSetCity = async (e) => {
    e.preventDefault();
    const c = document.querySelector("#cityName").value;
    setNewCity(c);
    console.log("newCity : ", newCity);

    await axios
      .get(
        `${process.env.REACT_APP_API_URL}/weather/?q=${city}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        if (res.cod === "404") {
          alert("City Not Found!");
        }
        if (res.statusText === "OK") {
          setSearchedData(res.data);
          console.log("search city: ", searchedData);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log("data", data.length);

  return (
    <div className="App">
      <div className="left-side">
        {!isLoading ? <p>Loading</p> : <p>Loaded</p>}

        <MediaQuery query="(max-width: 499px)">
          <SearchCityForm
            searchSetCity={searchSetCity}
            className="search-city-info"
          />
          <CurrentInfo cityName={city} className="current-info" />
        </MediaQuery>
        {data.length === 0 ? (
          <p>loading</p>
        ) : (
          <CurrentWeatherDetails weatherData={data} />
        )}
        {data.length === 0 ? (
          <p>Loading</p>
        ) : (
          <HourlyWeatherList weatherData={data} />
        )}
      </div>
      <div className="right-side">
        <MediaQuery query="(min-width: 500px)">
          <CurrentInfo cityName={city} className="current-info" />
          <SearchCityForm
            searchSetCity={searchSetCity}
            className="search-city-info"
          />
          <WeeklyWeatherList weatherData={data} />
        </MediaQuery>
      </div>
    </div>
  );
}

export default App;
