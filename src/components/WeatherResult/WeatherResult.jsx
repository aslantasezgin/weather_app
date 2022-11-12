import React from 'react'
import './WeatherResult.css'

function WeatherResult(props) {
  return (
    <div className='result'>
        <h2>{props.date}</h2>
        <ul>
            <li><img src={props.icon}></img></li>
            <li>{props.condition} </li>
            <li>{props.min_temp} / {props.max_temp}</li>
        </ul>
    </div>
  )
}

export default WeatherResult