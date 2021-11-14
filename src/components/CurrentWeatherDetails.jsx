import React from 'react'

import code1 from '../img/code/code1.png'
import code2 from '../img/code/code2.png'

// import { 10d }  from '../img/weather-icons/10d'


const CurrentWeatherDetails = ({weatherData}) => {
    // const iconSrc = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`
    // const iconSrc = 
    // console.log(weatherData.weather[0].icon);
    return (
        <div>
                {/* <h4>{weatherData.name}</h4> */}
                <div className="current-icon-wrapper">
                    <img 
                    src={`${process.env.PUBLIC_URL}/assets/weather-icons/${weatherData.weather[0].icon}.png`} 
                    alt="logo" />

                </div>
                {/* {console.log(weatherData.weather[0].icon)} */}
                <p> {weatherData.weather[0].description}</p>
                <p className="current-temp">{weatherData.main.temp}°</p>
                <p>Real feel {weatherData.main.feels_like}°</p>
                <div className="grid-wrapper">
                    <div className="main-grid">
                            <p className="grid-title">Hum</p>
                            <p className="grid-int">{weatherData.main.humidity}</p>
                    </div>
                    <div className="main-grid">
                        <p className="grid-title">Pressure</p>
                        <p className="grid-int">{weatherData.main.pressure}</p>
                    </div>
                    <div className="main-grid">
                            <p className="grid-title">Wind</p>
                            <p className="grid-int">{weatherData.main.speed}km/h</p>
                    </div>
                    <div className="main-grid">
                        <p className="grid-title">UV</p>
                        <p className="grid-int">?????</p>
                    </div>

                </div>
            <div>
                <div>
                    <p className="max-temp">{weatherData.main.temp_max}°</p>
                    <img src={code1} alt="test1" />
                </div>
                <div>
                    <p className="min-temp">{weatherData.main.temp_min}°</p>
                    <img src={code2} alt="test2" />
                </div>
            </div>
    </div>
    )
}

export default CurrentWeatherDetails
