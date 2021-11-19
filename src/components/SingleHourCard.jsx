import React from 'react'
import moment from 'moment'

import './SingleHourCard.css' 

export default function SingleHourCard({date, src, maxTemp,minTemp}) {

    

    return (
        <div>
            <div className="vertical-single-card">
                <p className="hour">{date}</p> 
                <div className="hour-img-wrapper">
                    <img className="hour-image" src={src} alt="forecast" />
                </div>
                <p className="max-temp">{maxTemp}</p>
                <p className="min-temp">{minTemp}</p>
            </div>
        </div>
    )
}

