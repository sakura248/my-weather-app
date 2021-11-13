import React from 'react'


const WeatherDetails = (props) => {
    return (
        <div>
            <h4>{props.cityName}</h4>
            <p>{props.description}</p>
            <div className="main-grid">
                <p className="grid-title">Hum</p>
                <p className="grid-int">{props.hum}</p>
            </div>
            <div className="main-grid">
                <p className="grid-title">UV</p>
                <p className="grid-int">?????</p>
            </div>
        </div>
    )
}

export default WeatherDetails
