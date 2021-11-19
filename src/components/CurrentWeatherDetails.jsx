import React from 'react'
import './CurrentWeatherDetail.css'
import moment from 'moment'

const CurrentWeatherDetails = ({weatherData}) => {

    const dateConvert = (unixData) => {
        let time = moment.unix(unixData).format('hh:mm')
        console.log(time)
        return time 
    } 

    const HandleOutfit =(temp)=>{
        if( temp >= 25) {
            return "t-shirt"
        } else if (temp > 19) {
            return "long-sleeve"
        } else if (temp > 15) {
            return "jacket"
        } else if (temp > 11 ){
            return "knit" 
        } else {
            return "coat"
        }
    }

    return (
        <div>
            <div className="current-info-wrapper">
                <div className="text-info-wrapper">
                    <div className="kv-wrapper">
                        <div className="current-icon-wrapper">
                            <img 
                            src={`${process.env.PUBLIC_URL}/assets/weather-icons/${weatherData.weather[0].icon}.png`} 
                            alt={weatherData.weather[0].icon} />
                        </div>
                        <div className="kv-info">
                            <p> {weatherData.weather[0].description}</p>
                            <p className="current-temp">{weatherData.main.temp}°</p>
                            <p>Real feel {weatherData.main.feels_like}°</p>
                        </div>
                    </div>
                    <div className="grid-wrapper">
                        <div className="main-grid">
                                <p className="grid-title">Hum</p>
                                <p className="grid-int">{weatherData.main.humidity}<span className="unit">%</span></p>
                        </div>
                        <div className="main-grid">
                            <p className="grid-title">Pressure</p>
                            <p className="grid-int">{weatherData.main.pressure}<span className="unit">hPa</span></p>
                        </div>
                        <div className="main-grid">
                                <p className="grid-title">Wind</p>
                                <p className="grid-int">{weatherData.wind.speed}<span className="unit">km/h</span></p>
                        </div>
                        <div className="main-grid">
                            <p className="grid-title">Sunset</p>
                            <p className="grid-int">{dateConvert(weatherData.sys.sunset)}</p>
                        </div>
                        {/* <div className="main-grid">
                            <p className="grid-title">UV</p>
                            <p className="grid-int">?????</p>
                        </div> */}
                    </div>
                </div>

            <div className="outfit-wrapper">
                <div className="each-outfit-wrapper">
                    <p className="max-temp">{weatherData.main.temp_max}°</p>
                    <img className="outfit" src={`${process.env.PUBLIC_URL}/assets/code/${HandleOutfit(weatherData.main.temp_max)}.png`} alt="test1" />
                </div>
                <div className="each-outfit-wrapper">
                    <p className="min-temp">{weatherData.main.temp_min}°</p>
                    <img className="outfit" src={`${process.env.PUBLIC_URL}/assets/code/${HandleOutfit(weatherData.main.temp_min)}.png`} alt="test2" />
                </div>
            </div>
        </div>
    </div>
    )
}

export default CurrentWeatherDetails
