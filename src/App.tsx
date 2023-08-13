import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentWeatherRequest, fetchWeatherListRequest } from './actions';
import './App.scss';
import Header from './components/header';
import ProgressBar from './components/progressbar';
import Weather from './components/weather';
import { getCurrentLocation, getCurrentWeather, getError, getWeatherList, isLoading } from './selectors';

interface AppState {
  appReducer: {
    currentWeather: string;
    currentLocation: string,
    list: [],
    isLoading: string,
    error: {
      status: boolean,
      message: string
    }
  };
}

function App() {

  const dispatch = useDispatch();
  const [seconds, setSeconds] = useState(0);

  const startTimer = () => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        let newSec = prevSeconds;

        if (newSec > 19) {
          dispatch(fetchCurrentWeatherRequest());
          dispatch(fetchWeatherListRequest());
          newSec = 0;
        } else {
          newSec++;
        }

        return newSec;
      })
    }, 1000)

    return interval;
  };

  useEffect(() => {
    dispatch(fetchCurrentWeatherRequest());
    dispatch(fetchWeatherListRequest());
    const interval = startTimer();

    return () => {
      clearInterval(interval)
    }
  }, [dispatch])

  const Selectors = {
    getCurrentWeather: useSelector((state: AppState) => getCurrentWeather(state)),
    getCurrentLocation: useSelector((state: AppState) => getCurrentLocation(state)),
    getWeatherList: useSelector((state: AppState) => getWeatherList(state)),
    isLoading: useSelector((state: AppState) => isLoading(state)),
    getError: useSelector((state: AppState) => getError(state)),
  }

  return (
    <div className="App">
      <header>
        <Header currentWeather={Selectors.getCurrentWeather} location={Selectors.getCurrentLocation} />
      </header>
      <main>
        <ProgressBar />
        {!Selectors.isLoading ? <Weather list={Selectors.getWeatherList} /> : <div className="loader"><span className="loader__icon"></span></div>}
        {Selectors.getError?.status && <div className='error-message'>{Selectors.getError?.message}</div>}
      </main>
    </div>
  );
}

export default App;
