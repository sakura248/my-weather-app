
import React, { Component } from 'react'

class WeatherDetails extends Component {

    render() {
        const iconUrl = `http://openweathermap.org/img/wn/${this.props.icon}.png`
        return (
            <div>
                <h2>{this.props.cityName}</h2>
                <p className="current-temp">
                    {this.props.temp}°
                </p>
                <p>
                    Feels like {this.props.feels_like}°
                </p>
                <div className="flex">
                    <p>High : {this.props.high}°</p>
                    <p>Low : {this.props.low}°</p>
                </div>
                <p>{this.props.weather}</p>
                <img src={iconUrl} alt="icon" />
            </div>
        )
    }
}

export default WeatherDetails