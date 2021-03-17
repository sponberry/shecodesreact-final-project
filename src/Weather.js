import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherDisplay from "./WeatherDisplay";
import FiveDay from "./FiveDay";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";


export default function Weather (props) {
  let [weatherData, setWeatherData] = useState({ready:false})
  let [city, setCity] = useState(props.defaultCity)

  function getData(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      sunrise: new Date(response.data.sys.sunrise * 1000),
      sunset: new Date(response.data.sys.sunset * 1000),
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
    })
  }

  function logData(response) {
    let hourlyForecasts = response.data.list;
    hourlyForecasts.forEach( forecast => {
      let thing = new Date(forecast.dt * 1000);
      console.log(thing);
    });
    // forEach loop on .dt value, convert to a Date object

    // let hourData = new Date(response.data.list[39].dt * 1000)
    // console.log(hourData.getDate())
  }

  function search() {
    // todays forecast
    let apiKey = "d022a7cace86a431e5ba6e5fd2caf5df";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(getData)

    // five day forecast
    let apiForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiForecastUrl).then(logData)
  }

  function handleSubmit(event) {
    event.preventDefault();
    search()
  }

  function handleEntry(event) {
    setCity(event.target.value)
  }

  if (weatherData.ready) {
    return (
      <div className="weatherSearch">
        <form className="form-control pt-3 pb-5" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 me-5">
              <input type="search" placeholder="Enter a city..." onChange={handleEntry}/>
            </div>
            <div className="col-md-6 ms-5 mb-4">
              <input type="submit" value="Search" className="btn btn-light" />
              <input type="button" value="Current Location" className="btn btn-dark" />
            </div>
          </div>
        </form>
        <WeatherDisplay data={weatherData}/>
        <FiveDay />
      </div>
    )
  } else {
    search()

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