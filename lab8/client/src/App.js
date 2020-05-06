import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import NavbarComponent from "./components/Navbar";
import LoginPage from "./components/LoginPage/LoginPage";
import WeatherPage from "./components/WeatherPage/WeatherPage";

export default function App() {
  return (
    <Router>
        <NavbarComponent />

        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          
          <Route path="/weather">
            <WeatherPage />
          </Route>
          
          <Route path="/:page">
            <h1>Not found</h1>
          </Route>

        </Switch>
    </Router>
  );
}