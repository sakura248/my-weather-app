import React, { useEffect } from "react";
import GetCityWeather from "../../api/GetCityWeather";
import GetLocation from "../../api/GetLocation";
import HourlyWeather from "./HourlyWeather";

function HourlyWeatherList() {
  // const { lat, long } = useContext(GeoContext);

  // const [data, setData] = useState([]);
  const { fetchData, data } = GetCityWeather();
  const location = GetLocation();

  useEffect(() => {
    const fetchForecast = async () => {
      console.log(location.lat, location.long);
      await fetchData(location.lat, location.long, "forecast");
    };
    fetchForecast();
  }, [location]);

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
