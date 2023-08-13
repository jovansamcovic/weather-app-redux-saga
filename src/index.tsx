import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reportWebVitals from './reportWebVitals';
import createSagaMiddleware from 'redux-saga';
import appReducer from './reducer';
import appSaga from './sagas';

// Declare the property in global scope
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({ appReducer });
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

const root = document.getElementById('root');

sagaMiddleware.run(appSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  root
);

reportWebVitals();
