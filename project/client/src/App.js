import React from "react";
import { Route, Switch } from "react-router-dom";

import MainPageComponent from "./components/mainPage/MainPage";
import JobsPageComponent from "./components/jobsSearchPage/JobsSearchPage";
import JobPageComponent from "./components/jobPage/JobPage";

class App extends React.Component {
  render() {
    return (
      <>
        <Switch>
        
          <Route exact path="/" component={MainPageComponent} />
          <Route exact path="/home" component={MainPageComponent} />
          <Route exact path="/jobs" component={JobsPageComponent} />
          <Route exact path="/jobs/:id" component={JobPageComponent} />
        
        </Switch>
      </>
    );
  }
}

export default App;
