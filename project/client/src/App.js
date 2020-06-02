import React from "react";
import { Route, Switch } from "react-router-dom";

import MainPageComponent from "./components/mainPage/MainPage";
import JobsPageComponent from "./components/jobsSearchPage/JobsSearchPage";
import JobPageComponent from "./components/jobPage/JobPage";

import NotFoundComponent from "./components/partials/errPage/notFoundPage";
class App extends React.Component {
  render() {
    return (
      <>
        <Switch>
        
          <Route exact path="/" component={MainPageComponent} />
          <Route exact path="/home" component={MainPageComponent} />
          <Route exact path="/jobs" component={JobsPageComponent} />
          <Route exact path="/jobs/:id" component={JobPageComponent} />
          <Route path='*' exact component={NotFoundComponent} />

        </Switch>
      </>
    );
  }
}

export default App;
