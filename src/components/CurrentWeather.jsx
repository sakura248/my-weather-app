import React, {useState, useEffect} from 'react'
import CurrentWeatherDetails from './CurrentWeatherDetails'


const CurrentWeather = () => {
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async() => {
            navigator.geolocation.getCurrentPosition(function(position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            });
            await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
            .then(res => res.json())
            .then(result => {
                setData(result)
                console.log(result);
            })
        }
        fetchData();
        // console.log(lat)
        }, [lat, long]);
    
        
    return (
        <div>
            {(typeof data.main != 'undefined') ? (
                <CurrentWeatherDetails weatherData={data}/>
            ): (
                <div>reading error</div>
            )}
            
    </div>
    )
}

export default CurrentWeather
