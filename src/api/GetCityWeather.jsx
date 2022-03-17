import { useState } from "react";

function GetCityWeather() {
  const [data, setData] = useState([]);

  const fetchData = async (lat, long, type) => {
    const url = `${process.env.REACT_APP_API_URL}/${type}/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`;
    const result = await fetch(url);
    try {
      const json = await result.json();
      console.log(type, json);
      if (json.cod === "404") {
        alert("City Not Found!");
      }
      if (json.cod === 200 || json.cod === "200") {
        setData(json);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return { fetchData, data, setData };
}

export default GetCityWeather;
