import React, {useState, useEffect} from 'react'
import HourlyWeatherDetails from './HourlyWeatherDetails'


const HourlyWeather = ({city}) => {
    // const [lat, setLat] = useState([]);
    // const [long, setLong] = useState([]);
    const [data, setData] = useState([])

    // const {city, setCity} = useContext(citySetting)

    useEffect(() => {
        const fetchData = async () => {
            // navigator.geolocation.getCurrentPosition(function(position) {
            //     setLat(position.coords.latitude);
            //     setLong(position.coords.longitude);
            // });
            
            // await fetch(`${process.env.REACT_APP_API_URL}/forecast/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
            await fetch(`${process.env.REACT_APP_API_URL}/forecast/?q=${city}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
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
        if(city){
            fetchData();
        }
        // }, [lat, long]);
    }, [city]);

    
        
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
