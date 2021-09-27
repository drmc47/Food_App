import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route} from 'react-router-dom'
import store from './store/index.js';
import {Provider} from 'react-redux'
import Nav from './components/Nav/Nav'
import Detail from './components/Detail/Detail'
import Landing from './components/Landing/Landing';
import AddRecipe from './components/AddRecipe/AddRecipe';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API || 'http://localhost:8001'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <Route path='/' exact component={Landing}/>
    <Route path='/home' component={Nav}/>
    <Route path='/home' exact component={App}/>
    <Route path='/home/detail' component={Detail}/>
    <Route path='/home/addrecipe' exact component ={AddRecipe}/>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
