import WeatherResult from './components/WeatherResult/WeatherResult';
import { useState } from 'react';
import './App.css';

function App() {
  const APP_KEY = "72a6c35fd5084a9784c81509221211"
  const [cityInput, setCityInput] = useState('');
  const [weatherData, setWeatherData] = useState([]);

  const getCity = (event) => {
      const cityInputString = event.target.value;
      setCityInput(cityInputString)

  }

  async function getData(cityInput) {
    const data = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${APP_KEY}&q=${cityInput}&days=3&aqi=no&alerts=no`)
    const result = await data.json();
    setWeatherData(result.forecast.forecastday)
  }

  return (
    <div className="App">
      <div className='weather'>
      <div className='search'>
        <input placeholder="Search a City..." type="text" onChange={(event) => {
          getCity(event)
        }}></input>


        <button onClick={() => {
          getData(cityInput)
        }}>search</button>
      </div>

        {weatherData.map((item, index) => (<WeatherResult date={item.date} min_temp={item.day.mintemp_c} max_temp={item.day.maxtemp_c} condition={item.day.condition.text} icon={item.day.condition.icon} key={index} ></WeatherResult>) )}

   
    </div>
    </div>
  );
}

export default App;
