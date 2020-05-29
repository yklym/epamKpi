import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import Navbar from "./components/partials/navbar/Navbar";
import Footer from "./components/partials/footer/Footer";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <>
    <Navbar />
    
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
    <Footer />
  </>,
  document.getElementById("root")
);
