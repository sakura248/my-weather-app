import React from "react";
import "./SingleHourCard.css";

export default function SingleHourCard({ date, src, temp }) {
  return (
    <div>
      <div className="vertical-single-card">
        <p className="hour">{date}</p>
        <div className="hour-img-wrapper">
          <img className="hour-image" src={src} alt="forecast" />
        </div>
        <p className="temp">{temp}°</p>
      </div>
    </div>
  );
}
