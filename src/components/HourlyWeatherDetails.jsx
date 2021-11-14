import React from 'react'


// import { 10d }  from '../img/weather-icons/10d'


const HourlyWeatherDetails = ({hourlyWeatherData}) => {
    // const iconSrc = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`
    // const iconSrc = 
    // console.log(weatherData.weather[0].icon);
    return (
        <div>
            <h2>Hourly data forecast</h2>
            
            <p>Date : {hourlyWeatherData.list[0].dt}</p>
        </div>
    )
}

export default HourlyWeatherDetails
