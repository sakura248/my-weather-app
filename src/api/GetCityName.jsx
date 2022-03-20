import { useState } from "react";

function GetCityWeather() {
  const [city, setCity] = useState([]);

  const fetchCity = async (lat, long) => {
    const url = `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`;
    const result = await fetch(url);
    try {
      const json = await result.json();
      if (json.cod === "404") {
        alert("City Not Found!");
      }
      if (json.cod === 200 || json.cod === "200") {
        setCity(json.name);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return { fetchCity, city };
}

export default GetCityWeather;
