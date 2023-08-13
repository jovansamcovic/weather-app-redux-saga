export const getCurrentWeather = (state: { appReducer: { currentWeather: string; }; }) => state.appReducer.currentWeather;
export const getCurrentLocation = (state: { appReducer: { currentLocation: string; } }) => state.appReducer.currentLocation;
export const getWeatherList = (state: { appReducer: { list: [] } }) => state.appReducer.list;
export const isLoading = (state: { appReducer: { isLoading: boolean } }) => state.appReducer.isLoading;
export const getError = (state: { appReducer: { error: { status: boolean, message: string } } }) => state.appReducer.error;
export const getRefreshDataIndicator = (state: { appReducer: { refreshDataIndicator: number } }) => state.appReducer.refreshDataIndicator;