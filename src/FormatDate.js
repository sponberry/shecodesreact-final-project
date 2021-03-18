import React from "react";

export default function FormatDate(props) {
    let weekDays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    let day = weekDays[props.dateObject.getDay()];
    let date = props.dateObject.getDate();
    let month = months[props.dateObject.getMonth()];
    let hours = props.dateObject.getHours();
    let minutes = props.dateObject.getMinutes();
    let year = (props.dateObject.getYear() + 1900)

    if (hours < 10) {
        hours = `0${hours}`
    }
    if (minutes < 10) {
        minutes = `0${minutes}`
    }

    if (props.formatType === "date") {
        return (
            <div>{day} {date} {month} {year}</div>
       )} else if (props.formatType === "time") {
           return (
               <span>{hours}:{minutes}</span>
           )
       } else {
           return (
               <span>{day.slice(0, 3)}</span>
           )
       }
}