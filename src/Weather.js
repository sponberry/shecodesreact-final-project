import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherDisplay from "./WeatherDisplay";

export default function Weather () {
  let [weatherData, setWeatherData] = useState({ready:false})

  function getData(response) {
    console.log(response.data.main)

    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon
    })
  }

  if (weatherData.ready) {
    return (
        <WeatherDisplay />
    )
  } else {
    let city = "paris"
    let apiKey = "d022a7cace86a431e5ba6e5fd2caf5df";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(getData)

    return (
      <h1>Loading...</h1>
    )
  }
}