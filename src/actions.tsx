export const FETCH_CURRENT_WEATHER_REQUEST = 'FETCH_CURRENT_WEATHER_DATA';
export const FETCH_CURRENT_WEATHER_SUCCESS = 'FETCH_CURRENT_WEATHER_SUCCESS';
export const FETCH_CURRENT_WEATHER_FAILURE = 'FETCH_CURRENT_WEATHER_FAILURE';
export const SET_IS_LOADING = 'SET_IS_LOADING';
export const SET_ERROR = 'SET_ERROR';

export const FETCH_WEATHER_LIST_REQUEST = 'FETCH_WEATHER_LIST_REQUEST';
export const FETCH_WEATHER_LIST_SUCCESS = 'FETCH_WEATHER_LIST_SUCCESS';
export const FETCH_WEATHER_LIST_FAILURE = 'FETCH_WEATHER_LIST_FAILURE';


export const fetchCurrentWeatherRequest = () => ({ type: FETCH_CURRENT_WEATHER_REQUEST });
export const fetchCurrentWeatherSuccess = (data: any) => ({ type: FETCH_CURRENT_WEATHER_SUCCESS, data });
export const fetchCurrentWeatherFailure = (error: any) => ({ type: FETCH_CURRENT_WEATHER_FAILURE, error });

export const fetchWeatherListRequest = () => ({ type: FETCH_WEATHER_LIST_REQUEST });
export const fetchWeatherListSuccess = (data: any) => ({ type: FETCH_WEATHER_LIST_SUCCESS, data });
export const fetchWeatherListFailure = (error: any) => ({ type: FETCH_WEATHER_LIST_FAILURE, error });



