import React from "react";
import './index.scss';


interface WeatherProp {
  list: []
}

const Weather: React.FC<WeatherProp> = ({ list }) => {

  const kelvinToCelsius = (kelvin: string) => {
    const kelvinNumber = parseFloat(kelvin);
    const celsius = kelvinNumber - 273.15;
    return celsius.toFixed(1).toString();
  }

  function getDayName(dateString: string) {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const date = new Date(dateString);
    const dayOfWeekIndex = date.getDay();

    return daysOfWeek[dayOfWeekIndex];
  }

  return (

    <div className="day-weather">

      {list.map((day: any, index: number) => (
        <div className="day" key={index}>
          <div className="day__item">
            <span className="day__name">{getDayName(day.dt_txt)}</span>
            <span className="day__weather">{day.main.temp ? kelvinToCelsius(day.main.temp) + "°" : "No Data"}</span>
          </div>

          <div className="weather">
            <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}></img>
            <span className="weather__description">{day.weather[0].description}</span>
          </div>
        </div>

      ))}

    </div>
  )
};

export default Weather;