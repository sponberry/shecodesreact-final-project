import React from "react";
import "./Weather.css";
import ReactAnimatedWeather from "react-animated-weather";
import FormatDate from "./FormatDate";

export default function WeatherData(props) {

  let weatherIcons = {
    "01d" : "CLEAR_DAY",
    "01n" : "CLEAR_NIGHT",
    "02d" : "PARTLY_CLOUDY_DAY",
    "02n" : "PARTLY_CLOUDY_NIGHT",
    "03n" : "CLOUDY",
    "03d" : "CLOUDY",
    "04n" : "CLOUDY",
    "04d" : "CLOUDY",
    "05n" : "CLOUDY",
    "05d" : "CLOUDY",
    "06n" : "CLOUDY",
    "06d" : "CLOUDY",
    "07n" : "CLOUDY",
    "07d" : "CLOUDY",
    "08n" : "CLOUDY",
    "08d" : "CLOUDY",
    "09n" : "RAIN",
    "09d" : "RAIN",
    "10n" : "SLEET",
    "10d" : "SLEET",
    "11n" : "SLEET",
    "11d" : "SLEET",
    "12n" : "SLEET",
    "12d" : "SLEET",
    "13n" : "SNOW",
    "13d" : "SNOW",
    "50n" : "FOG",
    "50d" : "FOG",
  }


    return (
        <div className="allWeather">
          <form className="form-control pt-3 pb-5">
            <div className="row">
              <div className="col-md-6 me-5">
                <input type="search" placeholder="Enter a city..." />
              </div>
              <div className="col-md-6 ms-5 mb-4">
                <input type="submit" value="Search" className="btn btn-light" />
                <input type="button" value="Current Location" className="btn btn-dark" />
              </div>
            </div>
          </form>
          <div className="row ml-2">
            <div className="col-sm-4 col-md-6">
              <h1 className="cityName">Kingston Upon Hull</h1>
              <span className="dateTime"><FormatDate formatType="date" dateObject={props.date} /></span>
              <p className="mt-2 mb-0">{props.temperature}°C | °F</p>
              <p>{props.description}</p>
            </div>
            <div className="col-sm-5 col-md-6">
              <ul className="mt-1">
                <li className="weatherStats mb-1">
                  <ReactAnimatedWeather
                    icon={weatherIcons[props.icon]}
                    color="bisque"
                    size={100}
                    animate={true}
                    />
                </li>
                <li className="weatherStats mb-1">
                  ☀rise: <FormatDate 
                  formatType="time"
                  dateObject={props.sunrise} /> ☀set: <FormatDate 
                  formatType="time"
                  dateObject={props.sunset} />
                </li>
                <li className="weatherStats mb-1">
                  Humidity: {props.humidity}%
                </li>
                <li className="weatherStats mb-1">
                  wind {props.wind} mp/h
                </li>
              </ul>
            </div>
          </div>

          
            <ul>
            <div className="row mt-2">
                <li className="fiveDay mr-4">
                  Mon<br />19°<br />☀️
                </li>

                <li className="fiveDay mx-4">
                  Tue<br />15°<br />⛅️
                </li>

                <li className="fiveDay mx-4">
                  Wed<br />27°<br />☀️
                </li>

                <li className="fiveDay mx-4">
                  Thu<br />5°<br />☁️
                </li>
             
                <li className="fiveDay mx-4">
                  Fri<br />10°<br />🌧
                </li>
              </div>
            </ul>
          
        </div>
    )
}