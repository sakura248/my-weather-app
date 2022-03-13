import React from "react";
import dayjs from "dayjs";
import "moment-timezone";
import "./CurrentInfo.css";
import MediaQuery from "react-responsive";

const CurrentInfo = ({ weatherData }) => {
  // const Current = dayjs().format("MMM DD hh:mma");

  return (
    <div>
      <MediaQuery query="(max-width: 499px)">
        <h1 className="city-name">{weatherData.name}</h1>
        {/* <span className="country">{weatherData.sys.country}</span> */}
      </MediaQuery>
      <MediaQuery query="(min-width: 500px)">
        {/* <p className="current-date">{Current}</p> */}
        <h1 className="city-name">{weatherData.name}</h1>
        {/* <span className="country">{weatherData.sys.country}</span>                 */}
      </MediaQuery>
    </div>
  );
};

export default CurrentInfo;
