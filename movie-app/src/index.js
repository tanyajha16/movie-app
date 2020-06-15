import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
//importing redux and its store

import './index.css';
import App from './components/App';
import rootReducer from './reducers';

// logger(obj)(next) (action)(redux call like this)
// const logger = function({dispatch,getState})
// {
// return function (next)
// {
//   return function(action)
//   {
//     // middleware code
//     console.log("ACTION_TYPE =",action.type);
//     next(action);
 
//   }
// }
// }
const logger =  ({dispatch,getState}) => (next) =>(action) =>
{
  // logger code
  if(typeof action !== 'function')
  {
    console.log("ACTION_TYPE =",action.type);
  }
  next(action);

}
// using middleware
// const thunk =({dispatch,getState}) => (next) =>(action)=>
// {
//   if(typeof action === 'function')
//   {
//     action(disatch);
//     return;
//   }
//   next(action);
// }

const store=createStore(rootReducer,applyMiddleware(logger,thunk));
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

