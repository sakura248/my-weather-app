import React from 'react'
import moment from 'moment'
import 'moment-timezone'
import './CurrentInfo.css'
import MediaQuery from 'react-responsive'

const CurrentInfo = ({weatherData}) => {
    console.log(weatherData.sys.country)
    
    const Current = moment().format('MMM DD hh:mma')
    // const Current = moment().utc().format('MMM DD hh:mma')
    // console.log('time', (moment.utc() + weatherData.timezone).format('MMM DD hh:mma') )

    // const dateConvert = (timezone) => {
        // return moment(timezone).format('MMM DD hh:mma')
        // }
    // const deFaultTime = moment.tz("Etc/Greenwich").utc()
    // const Greenwich = moment.utc().tz("Etc/Greenwich")
    // const current2 = weatherData.timezone
    // console.log('time test', Greenwich, Current.utc(current2))
        
    return (
        <div>
            
            <MediaQuery query="(max-width: 499px)">
                <h1 className="city-name">{weatherData.name}, <span className="country">{weatherData.sys.country}</span></h1>
            </MediaQuery>
            <MediaQuery query="(min-width: 500px)">
            {/* {console.log(dateConvert(weatherData.timezone)} */}
                <p className="current-date">{Current}</p>
                <h1 className="city-name">{weatherData.name}, <span className="country">{weatherData.sys.country}</span></h1>
                
            </MediaQuery>
        </div>
    )
}

export default CurrentInfo
