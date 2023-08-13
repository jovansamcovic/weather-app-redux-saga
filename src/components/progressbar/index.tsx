import React, { useEffect, useState } from "react";
import './index.scss';
import { useSelector } from "react-redux";
import { isLoading, getError } from "../../selectors";

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

const ProgressBar = () => {

  const [progressValue, setProgressValue] = useState(0);
  const [seconds, setSeconds] = useState(20);
  let intervalSeconds: NodeJS.Timer | null = null;
  let intervalProgress: NodeJS.Timer | null = null

  const Selectors = {
    isLoading: useSelector((state: AppState) => isLoading(state)),
    getError: useSelector((state: AppState) => getError(state)),
  }

  const startTimer = () => {
    intervalSeconds = setInterval(() => {

      setSeconds((prevValue) => {
        if (prevValue > 1) {
          return prevValue - 1;
        } else {
          return 20;
        }
      },);

      setProgressValue((prevValue) => {
        if (prevValue + 5 < 100) {
          return prevValue + 5;
        } else {
          return 0;
        }
      })


    }, 1000)

    return intervalSeconds;
  };



  useEffect(() => {
    let secondsInterval: NodeJS.Timer | null = null;

    if (!Selectors.isLoading && !Selectors.getError?.status) {
      startTimer();
    } else {
      if (secondsInterval) {
        clearInterval(secondsInterval);
      }
    }

    return () => {
      if (intervalSeconds) {
        clearInterval(intervalSeconds);
      }
    }
  }, [Selectors.isLoading, Selectors.getError])




  return (
    <div className="reload-data">
      <span className='reload-data__title'>Reloading in {seconds}</span>
      <div className="progress">
        <div className="progress__value" style={{ width: `${progressValue}%` }}></div>

      </div>
    </div>

  )

};

export default ProgressBar;