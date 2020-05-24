import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import Navbar from "./components/navbar/Navbar";

import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <BrowserRouter>
  <Navbar/>
  <App />
  </BrowserRouter>,
  document.getElementById('root')
);