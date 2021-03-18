import React, { useEffect, useState } from "react";
import axios from "axios";
import WeatherDisplay from "./WeatherDisplay";
import FiveDay from "./FiveDay";
import Loader from "react-loader-spinner";

// css imports
import "./Weather.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


export default function Weather (props) {
  let [weatherData, setWeatherData] = useState({ready:false});
  let [fiveDayWeatherData, setFiveDayWeatherData] = useState([]);
  let [city, setCity] = useState(props.defaultCity);
  let [unit, setUnit] = useState("metric")

  // creates object with all req data from todays weather, sets ready to true
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

  // creates array of lists with req data for 5 day forecast
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

  // makes api call for weather now and five day forecast using current city and unit states
  function search() {
    console.log(city);
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
  // // // // // //

  // sets state of city variable based on entry in input box
  function handleEntry(event) {
    setCity(event.target.value);
  }

  // these three functions get location data and then send current city to search function
  function updateCurrentLocation(response) {
    console.log(response.data.address.city);
    setCity(response.data.address.city);
    setTimeout(() => {setWeatherData({ready:false})}, 500);
  }
  function getPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let locApiKey = "pk.0d4784f4e386eaf7f225cd71379a56ae";
    let locApiUrl = `https://eu1.locationiq.com/v1/reverse.php?key=${locApiKey}&lat=${latitude}&lon=${longitude}&format=json`
    axios.get(locApiUrl).then(updateCurrentLocation);
  }
  function makeRequest(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(getPosition);
  }
  // // // // // //

  // triggers search funtion when form is submitted
  function handleSubmit(event) {
    event.preventDefault();
    search()
  }

  // runs a search when unit is changed via callback in child component
  useEffect(() => {
    search();}, [unit]
  )

  // checks ready status and returns content accordingly
  if (weatherData.ready) {
    return (
      <div className="weatherSearch">
        <form className="form-control pt-3 pb-5" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 me-5">
              <input type="search" placeholder="Enter a city..." value={city} onChange={handleEntry}/>
            </div>
            <div className="col-md-6 ms-5 mb-4">
              <input type="submit" value="Search" className="btn btn-light" />
              <input type="button" value="Current Location" onClick={makeRequest} rel="noreferrer" className="btn btn-dark" />
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