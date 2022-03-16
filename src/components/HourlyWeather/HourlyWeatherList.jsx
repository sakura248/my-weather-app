import React, { useContext, useEffect, useState } from "react";
import { GeoContext } from "../../App";
import HourlyWeather from "./HourlyWeather";

const HourlyWeatherList = () => {
  const { lat, long } = useContext(GeoContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `${process.env.REACT_APP_API_URL}/forecast/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          if (result.cod === "200") {
            setData(result);
          }
        })
        .catch((error) => console.log(error));
    };
    if (lat) {
      fetchData();
    }
  }, [lat, long]);

  return (
    <div>
      {data.length !== 0 ? (
        <HourlyWeather hourlyWeatherData={data} />
      ) : (
        <div>error</div>
      )}
    </div>
  );
};

export default HourlyWeatherList;
