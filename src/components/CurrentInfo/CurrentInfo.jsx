import React from "react";
import MediaQuery from "react-responsive";
import "./CurrentInfo.css";

function CurrentInfo({ cityName }) {
  return (
    <div>
      <MediaQuery query="(max-width: 499px)">
        <h1 className="city-name">{cityName}</h1>
        {/* <span className="country">{weatherData.sys.country}</span> */}
      </MediaQuery>
      <MediaQuery query="(min-width: 500px)">
        {/* <p className="current-date">{Current}</p> */}
        <h1 className="city-name">{cityName}</h1>
        {/* <span className="country">{weatherData.sys.country}</span>                 */}
      </MediaQuery>
    </div>
  );
}

export default CurrentInfo;
