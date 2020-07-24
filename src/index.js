import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import App from './components/App'
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers'

const store = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(<Provider store={store(reducers)}><App/></Provider>,document.querySelector("#root"))