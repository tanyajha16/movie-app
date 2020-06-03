import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
//importing redux and its store

import './index.css';
import App from './components/App';
import movies from './reducers';

const store=createStore(movies);
console.log('store',store);
// console.log('BEFORE_STATE',store.getState());

// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'Supermaan'}]
// });
// console.log('AFTER_STATE',store.getState());
ReactDOM.render(
    <App store={store}/>,
  document.getElementById('root')
);

