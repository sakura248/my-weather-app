import React, {useState, useEffect, useContext, createContext} from 'react'
import MediaQuery from 'react-responsive'
// import Loader from "react-loader-spinner";
import axios from 'axios'

import './App.css'

import CurrentInfo from './components/CurrentInfo'
import HourlyWeather from './components/HourlyWeather'
import CurrentWeatherDetails from './components/CurrentWeatherDetails'
import SearchCityForm from './components/SearchCityForm'

export const GeoContext = createContext()

export function App() {
    const [lat, setLat] = useState();
    const [long, setLong] = useState([]);
    const [data, setData] = useState([])
    const [city, setCity] = useState('')


    // const [err, setErr] = useState('')
    useEffect(() => {
      const firstGetCity = async () => {
          navigator.geolocation.getCurrentPosition( async function(position) {
            const lat = await position.coords.latitude
            const long = await position.coords.longitude
            setLat(lat);
            setLong(long);
            console.log("location info", lat, long)
        })
          await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
          .then(result => result.json())
          .then(result => {
              if(result.cod === '404') {
                alert("City Not Found!");
              }
              if(result.cod === 200) {
                setData(result)
              }
          })
          .catch(error => {
            console.log(error)
          })
      }

      firstGetCity();
    }, [lat, long]);
    // }, []);

    const searchSetCity = async (e) => {
      e.preventDefault();
      const newCity = document.querySelector("#cityName").value
      setCity(newCity)
      console.log("newCity : ", newCity)
      
      await axios
          .get(
              `${process.env.REACT_APP_API_URL}/weather/?q=${newCity}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
              )
      .then(res => {
          if(res.cod === '404') {
              alert("City Not Found!");
          }
          if(res.statusText === 'OK') {
              setData(res.data)
              console.log("search city: ", data)
          }
          })
      .catch(error => {
          console.log(error)
          })
  }

  return (
    <div className='App'>
      <div className="left-side">
        <MediaQuery query="(max-width: 499px)">
          <SearchCityForm 
          searchSetCity={searchSetCity} 
          className="search-city-info"/>
          <CurrentInfo weatherData={data} className="current-info" />
        </MediaQuery>
        {(typeof data.main != 'undefined') ? (
          <CurrentWeatherDetails weatherData={data}/>
          ): (
            <div>reading error</div>
        )}
        <GeoContext.Provider value={{lat, long}}>
          {(typeof data.main != 'undefined') ? (
          data && <HourlyWeather city={data} />
            ): (
              <div>reading error</div>
          )}
        </GeoContext.Provider>
      </div>
      <div className="right-side">
        <MediaQuery query="(min-width: 500px)">
          <CurrentInfo weatherData={data} className="current-info" />
          <SearchCityForm 
          searchSetCity={searchSetCity} 
          className="search-city-info" />
        </MediaQuery>
      </div>
    </div>
  )
}


export default App