import React from 'react'
import './WeatherResult.css'

function WeatherResult(props) {
  return (
    <div className='result'>
        <h2>Tarih:  <span> {props.date} </span></h2>
        <ul>
            <li className='result-img'><img src={props.icon}></img></li>
            <li className='result-title'>{props.condition} </li>
            <li className='temp'> {props.min_temp}° / {props.max_temp}°</li>
        </ul>
    </div>
  )
}

export default WeatherResult