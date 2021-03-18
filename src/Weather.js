import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherDisplay from "./WeatherDisplay";
import FiveDay from "./FiveDay";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";


export default function Weather (props) {
  let [weatherData, setWeatherData] = useState({ready:false});
  let [fiveDayWeatherData, setFiveDayWeatherData] = useState([]);
  let [city, setCity] = useState(props.defaultCity);
  let [unit, setUnit] = useState("metric")

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
    let collectWeatherData = []
    hourlyForecasts.forEach( forecast => {
      let hourStep = new Date(forecast.dt * 1000);
      if (hourStep.getHours() === 12) {
        collectWeatherData.push(
          [
            hourStep, 
            Math.round(forecast.main.temp),
            `http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`,
            forecast.weather[0].description,
          ]
        );
      }
    });
    setFiveDayWeatherData(collectWeatherData);
  }

  function search() {
    let apiKey = "d022a7cace86a431e5ba6e5fd2caf5df";

    // five day forecast
    let apiForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${apiKey}`;
    axios.get(apiForecastUrl).then(logData)

    // todays forecast
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
    setTimeout(() => {  
      axios.get(apiUrl).then(getData); 
    }, 500);
    
  }

  function handleSubmit(event) {
    event.preventDefault();
    search()
  }

  function handleEntry(event) {
    setCity(event.target.value)
  }

  // runs a search when unit is changed via callback in child component
  useEffect(() => {
    search();}, [unit]
  )

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
        <WeatherDisplay 
        data={weatherData} 
        tempUnit={(value) => {
          setUnit(value);
        }}
        />
        <FiveDay data={fiveDayWeatherData}/>
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
      timeout={3000}
    />
    )
  }
}