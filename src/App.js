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
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([])

    // const [err, setErr] = useState('')
    useEffect(() => {
      const fetchData = async () => {
          navigator.geolocation.getCurrentPosition(function(position) {
              setLat(position.coords.latitude);
              setLong(position.coords.longitude);
          });
          
          await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
          // await fetch(`${process.env.REACT_APP_API_URL}/weather/?q=${city}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
          .then(res => res.json())
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
    fetchData();
    }, [lat, long]);




  return (
    <div className='App'>
      {/* <Loader
        type="Puff"       
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      /> */}
      <div className="left-side">
        <MediaQuery query="(max-width: 499px)">
          {/* <SearchCityForm SearchCity={SearchCity} className="search-city-info"/> */}
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
          // SearchCity={SearchCity}
          className="search-city-info"/>
        </MediaQuery>
      </div>
    </div>
  )
}


export default App