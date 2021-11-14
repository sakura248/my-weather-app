import React, {useState, useEffect} from 'react'
import HourlyWeatherDetails from './HourlyWeatherDetails'


const HourlyWeather = () => {
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async() => {
            navigator.geolocation.getCurrentPosition(function(position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            });
            
            await fetch(`${process.env.REACT_APP_API_URL}/forecast/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
            .then(res => res.json())
            .then(result => {
                setData(result)
                console.log("hour: ", result);
            })
        }
        fetchData();
        // console.log(lat)
        }, [lat, long]);
    
        
    return (
        <div>
            {(typeof data.main != 'undefined') ? (
                <HourlyWeatherDetails hourlyWeatherData={data}/>
            ): (
                <div>よみこみエラー</div>
            )}
            <p>hogehogehogheo</p>
            <p>nande~~~~~~~~~~</p>
            
    </div>
    )
}

export default HourlyWeather
