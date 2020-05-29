import React from "react";
import { Route, Switch } from "react-router-dom";

import MainPageComponent from "./components/mainPage/MainPage";
import JobsPageComponent from "./components/jobsSearchPage/JobsSearchPage";

class App extends React.Component {
  render() {
    return (
      <>
        <Switch>
        
          <Route exact path="/" component={MainPageComponent} />
          <Route exact path="/home" component={MainPageComponent} />
          <Route exact path="/jobs" component={JobsPageComponent} />


        
        </Switch>
      </>
    );
  }
}

export default App;
