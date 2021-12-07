import React from 'react'
import dayjs from 'dayjs';
import 'moment-timezone'
import './CurrentInfo.css'
import MediaQuery from 'react-responsive'

const CurrentInfo = ({weatherData}) => {
    // console.log(weatherData.sys.country)
    
    const Current = dayjs().format('MMM DD hh:mma')
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
                <h1 className="city-name">{weatherData.name}</h1>
                {/* <span className="country">{weatherData.sys.country}</span> */}
            </MediaQuery>
            <MediaQuery query="(min-width: 500px)">
            {/* {console.log(dateConvert(weatherData.timezone)} */}
                <p className="current-date">{Current}</p>
                <h1 className="city-name">{weatherData.name}</h1>
                {/* <span className="country">{weatherData.sys.country}</span>                 */}
            </MediaQuery>
        </div>
    )
}

export default CurrentInfo
