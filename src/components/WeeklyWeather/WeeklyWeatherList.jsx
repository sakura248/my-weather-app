import React, { useState, useEffect, useContext } from "react";
import WeeklyWeather from "./WeeklyWeather";
import { GeoContext } from "../../App";

const WeeklyWeatherList = () => {
  const { lat, long } = useContext(GeoContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      url = `${process.env.REACT_APP_API_URL}/forecast/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`;
      const result = await fetch(url);
      console.log(url);
      try {
        const json = await result.json();
        console.log(json);

        if (data.cod === "200") {
          setData(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    if (lat) {
      fetchData();
    }
  }, [lat, long]);
  // }, []);

  return (
    <div>
      hoge
      {data.length !== 0 ? (
        <WeeklyWeather WeeklyWeatherData={data} />
      ) : (
        <div>error</div>
      )}
    </div>
  );
};

export default WeeklyWeatherList;
