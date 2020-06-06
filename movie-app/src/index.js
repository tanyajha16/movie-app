import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
//importing redux and its store

import './index.css';
import App from './components/App';
import rootReducer from './reducers';

const store=createStore(rootReducer);
console.log("Store",store.getState());

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

