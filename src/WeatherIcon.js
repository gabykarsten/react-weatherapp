import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  return (
    <ReactAnimatedWeather
      icon="CLEAR_NIGHT"
      color="#5a86ad"
      size={64}
      animate={true}
    />
  );
}
