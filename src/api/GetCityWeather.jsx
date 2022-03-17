import { useState } from "react";

function GetCityWeather() {
  const [data, setData] = useState([]);

  const fetchData = async (lat, long) => {
    console.log(lat, long);
    const url = `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`;
    const result = await fetch(url);
    try {
      const json = await result.json();
      console.log(json);
      if (json.cod === "404") {
        alert("City Not Found!");
      }
      if (json.cod === 200) {
        setData(json);
        console.log(data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return { fetchData, data, setData };
}

export default GetCityWeather;
