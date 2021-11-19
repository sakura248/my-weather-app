import React, {useState, useEffect} from 'react'
import MediaQuery from 'react-responsive'

import './App.css'

import CurrentInfo from './components/CurrentInfo'
import HourlyWeather from './components/HourlyWeather'
import CurrentWeatherDetails from './components/CurrentWeatherDetails'
import SearchCityForm from './components/SearchCityForm'

function App() {
    // const [lat, setLat] = useState([]);
    // const [long, setLong] = useState([]);
    const [data, setData] = useState([])
    const [city, setCity] = useState("vancouver")
    // const [err, setErr] = useState('')
    
    const SearchCity=(event)=>{
      event.preventDefault();
      const newCity = document.querySelector("#city").value
      setCity(newCity)
    }

    useEffect(() => {
        const fetchData = async () => {
            // navigator.geolocation.getCurrentPosition(function(position) {
            //     setLat(position.coords.latitude);
            //     setLong(position.coords.longitude);
            // });
            // await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
            await fetch(`${process.env.REACT_APP_API_URL}/weather/?q=${city}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
            .then(res => res.json())
            .then(result => {
                  console.log("result: ",result)
                if(result.cod === '404') {
                  // setCity(result.message)
                  // setErr("City Not Found")
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
    // }, [lat, long]);
    }, [city]);



  return (
    <div className='App'>
      <div className="left-side">
        <MediaQuery query="(max-width: 499px)">
          <SearchCityForm SearchCity={SearchCity} className="search-city-info"/>
          <CurrentInfo weatherData={data} className="current-info" />
        </MediaQuery>
        {(typeof data.main != 'undefined') ? (
          <CurrentWeatherDetails weatherData={data}/>
          ): (
            <div>reading error</div>
        )}
        {(typeof data.main != 'undefined') ? (
        city && <HourlyWeather city={city} />
        ): (
            <div>reading error</div>
        )}
      </div>
      <div className="right-side">
        <MediaQuery query="(min-width: 500px)">
          <CurrentInfo weatherData={data} className="current-info" />
          <SearchCityForm SearchCity={SearchCity} className="search-city-info"/>
        </MediaQuery>
      </div>
    </div>
  )
}


export default App