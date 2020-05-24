import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import MainPageComponent from "./components/mainPage/MainPage";

class App extends React.Component {
  render() {
    return (
      <>
        <Switch>
        
          <Route exact path="/" component={MainPageComponent} />
        
        </Switch>
      </>
    );
  }
}

export default App;
