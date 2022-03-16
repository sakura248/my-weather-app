import React from "react";
import "./WeeklyWeather.css";

function SingleCard({ date, src, maxTemp, minTemp }) {
  return (
    <div className="horizontal-single-card">
      <p className="day">{date}</p>
      <div className="day-img-wrapper">
        <img className="day-image" src={src} alt="forecast" />
      </div>
      <p className="max-temp">{maxTemp}</p>
      <p className="min-temp">{minTemp}</p>
    </div>
  );
}

export default SingleCard;
