import React, {useState, useEffect, useContext} from 'react'
import HourlyWeatherDetails from './HourlyWeatherDetails'
import {GeoContext} from '../App'


const HourlyWeather = () => {
    const {lat, long} = useContext(GeoContext)
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            // navigator.geolocation.getCurrentPosition(function(position) {
            //     setLat(position.coords.latitude);
            //     setLong(position.coords.longitude);
            // });
            
            await fetch(`${process.env.REACT_APP_API_URL}/forecast/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
            .then(res => res.json())
            .then(result => {
                if(result.cod === '200') {
                    setData(result)
                }
            })
            .catch(error =>
                console.log(error)
            )
        }
        if(lat){
            fetchData();
        }
        }, [lat, long]);

    
    return (
        <div>
            {(data.length !== 0) ? (
                <HourlyWeatherDetails hourlyWeatherData={data}/>
            ): (
                <div>error</div>
            )}
            
    </div>
    )
}

export default HourlyWeather
