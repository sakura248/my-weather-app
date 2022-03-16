import React, { useEffect, useState } from "react";
import HourlyWeather from "./HourlyWeather";

function HourlyWeatherList({ location }) {
  // const { lat, long } = useContext(GeoContext);
  const { lat, long } = location;
  console.log("hourly weather component ", lat, long);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = `${process.env.REACT_APP_API_URL}/forecast/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`;
      const result = await fetch(url);

      try {
        const json = await result.json();
        console.log(json);
        if (result.cod === "200") {
          setData(json);
        }
      } catch (err) {
        console.log(err);
      }
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
}

export default HourlyWeatherList;
