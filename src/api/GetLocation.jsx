import { useState } from "react";

const GetLocation = () => {
  const [location, setLocation] = useState({
    lat: "",
    long: "",
  });

  navigator.geolocation.getCurrentPosition(async (position) => {
    const currentLat = await position.coords.latitude;
    const currentLong = await position.coords.longitude;

    await setLocation({
      ...location,
      lat: currentLat,
      long: currentLong,
    });
  });

  return { location };
};

export default GetLocation;
