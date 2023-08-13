import React, { useEffect, useState } from "react";
import './index.scss';
import moment from 'moment';

interface HeaderProp {
  currentWeather: string,
  location: string
}

const Header: React.FC<HeaderProp> = ({ currentWeather, location }) => {

  const [currentTime, setCurrentTime] = useState(moment().format('HH:mm:ss'));

  const kelvinToCelsius = (kelvin: string) => {
    const kelvinNumber = parseFloat(kelvin);
    const celsius = kelvinNumber - 273.15;
    return celsius.toFixed(1).toString();
  }


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment().format('HH:mm:ss'));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);


  return (
    <div className="header">
      <div className="header__location">{location}</div>
      <div className="header__time">
        <div className="circles">
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>
        <span className="header__time-value">{currentTime} GMT</span>
        <div className="circles">
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>
      </div>
      <div className="header__weather">
        {currentWeather ? kelvinToCelsius(currentWeather) + "°" : "Weather data not available"}
      </div>
    </div>
  );
};


export default Header;
