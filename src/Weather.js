import React from "react";
import "./Weather.css";

export default function Weather () {
    return (
        <div className="allWeather">
          <form className="form-control pt-3 pb-5">
            <div className="row">
              <div className="col-md-6 me-5">
                <input type="search" placeholder="Enter a city..." />
              </div>
              <div className="col-md-6 ms-5">
                <input type="submit" value="Search" className="btn btn-light" />
                <input type="button" value="Current Location" className="btn btn-dark" />
              </div>
            </div>
          </form>
          <div className="row ml-2">
            <div className="col-sm-3 col-md-6">
              <h1 className="cityName">Paris</h1>
              <p>15°C | °F</p>
              <p>Partly cloudy</p>
            </div>
            <div className="col-sm-3 col-md-6">
              <ul>
                <li>
                  Precipitation: 20%
                </li>
                <li>
                  Humidity: 60%
                </li>
                <li>
                  wind 15 mp/h
                </li>
              </ul>
            </div>
          </div>

          
            <ul>
            <div className="row">
              {/* <div className="col-sm-1 col-md-2"> */}
                <li className="fiveDay">
                  Mon<br />19°<br />☀️
                </li>
              {/* </div>
              <div className="col-sm-1 col-md-2"> */}
                <li className="fiveDay">
                  Tue<br />15°<br />⛅️
                </li>
              {/* </div>
              <div className="col-sm-1 col-md-2"> */}
                <li className="fiveDay">
                  Wed<br />27°<br />☀️
                </li>
              {/* </div>
              <div className="col-sm-1 col-md-2"> */}
                <li className="fiveDay">
                  Thu<br />5°<br />☁️
                </li>
              {/* </div>
              <div className="col-sm-1 col-md-2"> */}
                <li className="fiveDay">
                  Fri<br />10°<br />🌧
                </li>
              {/* </div> */}
              </div>
            </ul>
          
        </div>
    )
}