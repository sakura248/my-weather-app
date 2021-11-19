import React from 'react'
import moment from 'moment'
import './CurrentInfo.css'
import MediaQuery from 'react-responsive'

const CurrentInfo = ({weatherData}) => {
    
    const Current = moment().format('MMM DD hh:mma')
    
        
    return (
        <div>
            
            <MediaQuery query="(max-width: 499px)">
                <h1 className="city-name">{weatherData.name}</h1>
            </MediaQuery>
            <MediaQuery query="(min-width: 500px)">
                <p className="current-date">{Current}</p>
                <h1 className="city-name">{weatherData.name}</h1>

            </MediaQuery>
        </div>
    )
}

export default CurrentInfo
