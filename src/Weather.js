import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherDisplay from "./WeatherDisplay";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function Weather () {
  let [weatherData, setWeatherData] = useState({ready:false})

  function getData(response) {

    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      sunrise: new Date(response.data.sys.sunrise * 1000),
      sunset: new Date(response.data.sys.sunset * 1000),
      date: new Date(response.data.dt * 1000)
    })
  }

  if (weatherData.ready) {
    return (
        <WeatherDisplay 
        // city={city}
        temperature={Math.round(weatherData.temperature)}
        humidity={weatherData.humidity}
        wind={Math.round(weatherData.wind)}
        description={weatherData.description}
        icon={weatherData.icon}
        sunrise={weatherData.sunrise}
        sunset={weatherData.sunset}
        date={weatherData.date}/>
    )
  } else {
    let city = "hull"
    let apiKey = "d022a7cace86a431e5ba6e5fd2caf5df";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(getData)

    return (
        <Loader
      type="Oval"
      color="#00BFFF"
      height={200}
      width={200}
      timeout={3000} //3 secs
    />
    )
  }
}