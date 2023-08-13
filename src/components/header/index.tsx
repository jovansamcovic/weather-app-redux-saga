import React, { useEffect, useState } from "react";
import './index.scss';
import moment from 'moment';
import { useSelector } from "react-redux";
import { getRefreshDataIndicator } from "../../selectors";
import Loader from "../loader";

interface HeaderProp {
  currentWeather: string,
  location: string,
  refreshDataIndicator: number,
  isLoading: boolean
}

interface AppState {
  appReducer: {
    currentWeather: string;
    currentLocation: string,
    list: [],
    isLoading: string,
    error: {
      status: boolean,
      message: string
    },
    refreshDataIndicator: number
  };
}


const Header: React.FC<HeaderProp> = ({ currentWeather, location, refreshDataIndicator, isLoading }) => {

  const [currentTime, setCurrentTime] = useState(moment().format('HH:mm:ss'));

  const kelvinToCelsius = (kelvin: string) => {
    const kelvinNumber = parseFloat(kelvin);
    const celsius = kelvinNumber - 273.15;
    return celsius.toFixed(1).toString();
  }

  useEffect(() => {

    const weather = document.getElementsByClassName("header__weather")[0];
    weather?.classList.add("pulse-element");

    setTimeout(() => {
      weather.classList.remove("pulse-element");
    }, 1000);

  }, [refreshDataIndicator])

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
      <div className="header__location">{isLoading ? <Loader width="20px" height="20px" /> : location}</div>
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
        {isLoading && <Loader width="20px" height="20px" />}
        {!isLoading && currentWeather ? kelvinToCelsius(currentWeather) + "°" : ""}
      </div>
    </div>
  );
};


export default Header;
