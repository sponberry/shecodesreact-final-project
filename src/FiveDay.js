import React from "react";
import "./Weather.css";
import FormatDate from "./FormatDate";

export default function FiveDay(props) {

  function createWeatherList () {
    let weatherList = []
    props.data.forEach(element => {
      weatherList.push(
        <li className="fiveDay mr-4" key={element[0]}>
          <FormatDate formatType="day" dateObject={element[0]} />
          <br />
          {element[1]}°<br />
          <img src={element[2]} alt={element[3]} width={50} className="mx-n2"/>
        </li>
      )
    });
    return weatherList
  }

  return (
    <ul>
      <div className="row mt-2">
        {createWeatherList()}
        {/* <li className="fiveDay mr-4">
          <FormatDate formatType="day" dateObject={props.data[0][0]} />
          <br />
          {props.data[0][1]}°<br />
          <img src={props.data[0][2]} alt={props.data[0][3]} width={50} className="mx-n2"/>
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
        </li> */}
      </div>
    </ul>
  )
}