import { put, takeLatest, call, all } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import { CURRENT_WEATHER_API, WEATHER_DATA_API } from './constants';
import {
  FETCH_CURRENT_WEATHER_REQUEST,
  fetchCurrentWeatherSuccess,
  fetchCurrentWeatherFailure,
  fetchWeatherListSuccess,
  FETCH_WEATHER_LIST_REQUEST,
  SET_IS_LOADING,
  FETCH_WEATHER_LIST_FAILURE,
  fetchWeatherListFailure
} from './actions';

export interface currentWeatherData {
  coord: {},
  weather: [],
  base: string,
  main: { temp: string },
  visibility: number,
  wind: {},
  clouds: {},
  dt: number,
  sys: {},
  timezone: number,
  id: number,
  name: string,
  cod: number
}

export interface weatherList {
  cod: string,
  message: number,
  cnt: number,
  list: []
}




function* fetchCurrentWeatherData() {

  yield put({ type: SET_IS_LOADING, isLoading: true });

  try {
    const response: AxiosResponse<currentWeatherData> = yield call(axios.get, CURRENT_WEATHER_API);;
    yield put(fetchCurrentWeatherSuccess(response.data));
  } catch (error: any) {
    yield put(fetchCurrentWeatherFailure({ status: true, message: error.message }))
  }

  yield put({ type: SET_IS_LOADING, isLoading: false });
}

function* fetchWeatherList() {
  yield put({ type: SET_IS_LOADING, isLoading: true });

  try {
    const response: AxiosResponse<weatherList> = yield call(axios.get, WEATHER_DATA_API);
    yield put(fetchWeatherListSuccess(response.data.list))

  } catch (error: any) {
    yield put(fetchWeatherListFailure({ status: true, message: error.message }))
  }

  yield put({ type: SET_IS_LOADING, isLoading: false });
}


function* watchFetchData() {
  yield takeLatest(FETCH_CURRENT_WEATHER_REQUEST, fetchCurrentWeatherData);
  yield takeLatest(FETCH_WEATHER_LIST_REQUEST, fetchWeatherList);
}

export default function* rootSaga() {
  yield all([
    watchFetchData(),
    // ... other sagas
  ]);
}