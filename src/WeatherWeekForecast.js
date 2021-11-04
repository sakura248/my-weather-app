
import React, { Component } from 'react'

class WeatherWeekForecast extends Component {

    render() {
        const iconUrl = `http://openweathermap.org/img/wn/${this.props.forecastIcon}.png`
        return (
            <div>
                <p>Date : {this.props.forecastDt}</p>
                <p>High : {this.props.forecastHigh}</p>
                <p>Low : {this.props.forecastLow}</p>
                <img src={iconUrl} alt="icon" />
            </div>
        )
    }
}

export default WeatherWeekForecast