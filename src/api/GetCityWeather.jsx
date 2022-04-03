import { useState } from "react";

function GetCityWeather() {
  const [data, setData] = useState([]);

  const fetchData = async (lat, long) => {
    // const url = `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`;
    const url = `${process.env.REACT_APP_API_URL}/onecall?lat=${lat}&lon=${long}&exclude=minutely,alerts&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
    const result = await fetch(url);
    try {
      const json = await result.json();
      if (json.cod === "404") {
        console.log("city not found");
      }
      setData(json);
    } catch (err) {
      console.log(err);
    }
  };
  return { fetchData, data };
}

export default GetCityWeather;
