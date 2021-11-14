// import React, {useState, useEffect} from 'react'

import './App.css'
// import axios from 'axios';
// import WeatherDetails from './WeatherDetails'
// import WeatherWeekForecast from './WeatherWeekForecast'

import CurrentWeather from './components/CurrentWeather'
import HourlyWeather from './components/HourlyWeather'
// import CurrentWeatherDetails from './components/CurrentWeatherDetails'



function App() {

  

  return (
    <div className='App'>
      <CurrentWeather />
      <HourlyWeather />
      
    </div>
  )
}


export default App