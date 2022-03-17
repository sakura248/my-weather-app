import { useEffect, useState } from "react";

const GetLocation = () => {
  const [location, setLocation] = useState({
    lat: "",
    long: "",
  });
  useEffect(() => {
    async function fetchLocation() {
      await navigator.geolocation.getCurrentPosition((position) => {
        const currentLat = position.coords.latitude;
        const currentLong = position.coords.longitude;
        setLocation({
          ...location,
          lat: currentLat,
          long: currentLong,
        });
      });
    }
    fetchLocation();
  }, []);

  return location;
};

export default GetLocation;
