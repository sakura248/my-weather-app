import React, { Component } from 'react'
import axios from 'axios';
import WeatherDetails from './WeatherDetails'
import WeatherWeekForecast from './WeatherWeekForecast'

class App extends Component {

  state = {
    temp: '',
    cityName: '',
    weather: '',
    high: '',
    low: '',
    icon: '',
    feels_like: '',
    forecastDt: '',
    forecastHigh: '',
    forecastLow: '',
    forecastIcon: '',
  }

  searchCity = (e) => {
    e.preventDefault();
    const city = document.querySelector("#city").value
    this.getCityWeather(city)
  }

  getCityWeather = (city) => {
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`
    
    // current
    const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=12fe670524c8bf4bc0f1f7cea8867283`
    
    axios(currentUrl).then((response) => {
      this.setState({
        temp: response.data.main.temp,
        weather : response.data.weather[0].description,
        high: response.data.main.temp_max,
        low: response.data.main.temp_min,
        feels_like :response.data.main.feels_like, 
        cityName: response.data.name,
        icon: response.data.weather[0].icon
      })
    })

    // forecast
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=40&appid=12fe670524c8bf4bc0f1f7cea8867283`

    axios(forecastUrl).then((response) => {
      
      this.setState({
        forecastDt: response.data.list[0].dt,
        forecastHigh: response.data.list[0].main.temp_max,
        forecastLow: response.data.list[0].main.temp_min,
        forecastIcon: response.data.list[0].weather.icon,
      })
    })
    
  }

  render() {
    return (
      <div className="App">
        <h1>My Weather App</h1>
        {/* <p>Search your city</p> */}
        <div>
          <form onSubmit={this.searchCity}>
            <input
              type='text'
              name='city'
              id='city'
              placeholder="Search your city"
            />
          </form>
        </div>
        <hr />
        {/* Weather detail */}
        {this.state.cityName && (
          <WeatherDetails
            cityName={this.state.cityName}
            temp={this.state.temp}
            high={this.state.high}
            low={this.state.low}
            weather={this.state.weather}
            icon={this.state.icon}
            feels_like={this.state.feels_like}
            />
        )
        }
        {/* Weather Weekly Forecast */}
        {this.state.cityName && (
          <WeatherWeekForecast 
            forecastDt={this.state.forecastDt}
            forecastHigh={this.state.forecastHigh}
            forecastLow={this.state.forecastLow}
            forecastIcon={this.state.icon}
          />
          
        )}
        {console.log(this.state.forecastDt)}
      </div>
    )
  }
}


export default App
