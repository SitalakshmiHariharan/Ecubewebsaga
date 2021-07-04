import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import {logger} from 'redux-logger';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from './Reducers/';
import Routing from './Components/Routing';
import rootSaga from './Saga';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer,applyMiddleware(sagaMiddleware,logger));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store= {store}>
    <Routing />
  </Provider>,
  document.getElementById('root')
);


