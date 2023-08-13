import { error } from "console";
import { FETCH_CURRENT_WEATHER_FAILURE, FETCH_CURRENT_WEATHER_SUCCESS, FETCH_WEATHER_LIST_FAILURE, FETCH_WEATHER_LIST_SUCCESS, SET_ERROR, SET_IS_LOADING } from "./actions";

const initialState = {
  currentWeather: "",
  currentLocation: "",
  list: [],
  isLoading: true,
  error: {
    status: false,
    message: ""
  },
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_CURRENT_WEATHER_SUCCESS:
      return {
        ...state,
        currentWeather: action.data.main.temp,
        currentLocation: action.data.name,
        isLoading: false,
      }
    case FETCH_CURRENT_WEATHER_FAILURE:
      return {
        ...state,
        error: {
          status: action.error.status,
          message: action.error.message
        },
        isLoading: false
      }
    case FETCH_WEATHER_LIST_SUCCESS:
      return {
        ...state,
        list: action.data,
        isLoading: false,
      }
    case FETCH_WEATHER_LIST_FAILURE:
      return {
        ...state,
        error: {
          status: action.error.status,
          message: action.error.message
        },
        isLoading: false
      }
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    default:
      return state;
  }
};

export default reducer;