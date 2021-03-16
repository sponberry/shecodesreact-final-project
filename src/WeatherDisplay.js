import React from "react";
import "./Weather.css";

export default function WeatherData(props) {
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
              <span className="dateTime">Sun 14 Mar 2021</span>
              <p className="mt-2 mb-0">15°C | °F</p>
              <p>Partly cloudy</p>
            </div>
            <div className="col-sm-5 col-md-6">
              <ul className="mt-1">
                <li className="weatherStats mb-1">
                  Animated icon
                </li>
                <li className="weatherStats mb-1">
                  Precipitation: 20%
                </li>
                <li className="weatherStats mb-1">
                  Humidity: 60%
                </li>
                <li className="weatherStats mb-1">
                  wind 15 mp/h
                </li>
              </ul>
            </div>
          </div>

          
            <ul>
            <div className="row">
                <li className="fiveDay">
                  Mon<br />19°<br />☀️
                </li>

                <li className="fiveDay">
                  Tue<br />15°<br />⛅️
                </li>

                <li className="fiveDay">
                  Wed<br />27°<br />☀️
                </li>

                <li className="fiveDay">
                  Thu<br />5°<br />☁️
                </li>
             
                <li className="fiveDay">
                  Fri<br />10°<br />🌧
                </li>
              </div>
            </ul>
          
        </div>
    )
}