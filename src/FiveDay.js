import React from "react";
import "./Weather.css";

export default function FiveDay(props) {

    return (
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
    )
}