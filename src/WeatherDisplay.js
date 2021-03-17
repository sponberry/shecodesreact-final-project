import React from "react";
import "./Weather.css";
import ReactAnimatedWeather from "react-animated-weather";
import FormatDate from "./FormatDate";

export default function WeatherDisplay(props) {

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
          
          <div className="row ml-2">
            <div className="col-sm-4 col-md-6">
              <h1 className="cityName">{props.data.city}</h1>
              <span className="dateTime"><FormatDate formatType="date" dateObject={props.data.date} /></span>
              <p className="mt-2 mb-0">{props.data.temperature}°C | °F</p>
              <p>{props.data.description}</p>
            </div>
            <div className="col-sm-5 col-md-6">
              <ul className="mt-1">
                <li className="weatherStats mb-1">
                  <ReactAnimatedWeather
                    icon={weatherIcons[props.data.icon]}
                    color="bisque"
                    size={100}
                    animate={true}
                    />
                </li>
                <li className="weatherStats mb-1">
                  ☀rise: <FormatDate 
                  formatType="time"
                  dateObject={props.data.sunrise} /> ☀set: <FormatDate 
                  formatType="time"
                  dateObject={props.data.sunset} />
                </li>
                <li className="weatherStats mb-1">
                  Humidity: {props.data.humidity}%
                </li>
                <li className="weatherStats mb-1">
                  wind {props.data.wind} mp/h
                </li>
              </ul>
            </div>
          </div>
      
        </div>
    )
}