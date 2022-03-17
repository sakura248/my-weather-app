/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import MediaQuery from "react-responsive";
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
  const [city, setCity] = useState("");

  const [isLoading, setIsloading] = useState(false);
  const { fetchData, data } = GetCityWeather();
  const location = GetLocation();

  useEffect(() => {
    const firstGetCity = async () => {
      await fetchData(location.lat, location.long);
    };
    firstGetCity();
  }, [location]);

  const searchSetCity = async (e) => {
    e.preventDefault();
    const newCity = document.querySelector("#cityName").value;
    setCity(newCity);
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

  return (
    <div className="App">
      <div className="left-side">
        {!isLoading ? <p>Loading</p> : <p>Loaded</p>}

        <MediaQuery query="(max-width: 499px)">
          <SearchCityForm
            searchSetCity={searchSetCity}
            className="search-city-info"
          />
          <CurrentInfo weatherData={data} className="current-info" />
        </MediaQuery>
        {typeof data.main !== "undefined" ? (
          <CurrentWeatherDetails weatherData={data} />
        ) : (
          <div>reading error</div>
        )}
        <GeoContext.Provider value={location}>
          {typeof searchedData.main !== "undefined" ? (
            searchedData && (
              <HourlyWeatherList city={data} location={location} />
            )
          ) : (
            <div>reading error</div>
          )}
        </GeoContext.Provider>
      </div>
      <div className="right-side">
        <MediaQuery query="(min-width: 500px)">
          <CurrentInfo weatherData={data} className="current-info" />
          <SearchCityForm
            searchSetCity={searchSetCity}
            className="search-city-info"
          />
          <WeeklyWeatherList location={location} />
        </MediaQuery>
      </div>
    </div>
  );
}

export default App;
