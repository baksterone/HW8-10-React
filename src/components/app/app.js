import React, { Component } from "react";

import Header from "../header";
import RandomTanks from "../random-tanks";
import TankopediaService from "../../services/tankopedia-service";
import { TankopediaServiceProvider } from "../../context";
import TestService from "../../services/test-services";
import ErrorBoundry from "../error-boundry";
import HeavyPage from "../pages/heavy-page";
import MediumPage from "../pages/medium-page";
import MediumTanks from "../pages/medium-tanks";
import LightsPage from "../pages/lights-page";
import PtSauPage from "../pages/pt-sau-page";
import SauPage from "../pages/sau-page";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./app.css";

export default class App extends Component {
  tankopediaService = new TankopediaService();
  testService = new TestService();
  state = {
    showRandomTanks: true
  };


  render() {
    const tanks = this.state.showRandomTanks ? <RandomTanks /> : null;
    return (
      <ErrorBoundry>
        <Router>
          < TankopediaServiceProvider value={this.tankopediaService}>
            <Header />
            <div className="tanksdb-app">
              {tanks}
              <Switch>
                <Route path="/" render={() => <h1>Welcome Tankopedia!!!</h1>} exact />
                <Route path="/heavy/:id?" component={HeavyPage} />
                <Route path="/medium" component={MediumPage} exact />
                <Route path="/medium/:id" component={MediumTanks} />
                <Route path="/lights/:id?" component={LightsPage}/>
                <Route path="/pt-sau/:id?" component={PtSauPage}/>
                <Route path="/sau/:id?" component={SauPage}/>
                <Route render={() => <h1>Page not found!</h1>} />
              </Switch>
            </div>
          </TankopediaServiceProvider>
        </Router>
      </ErrorBoundry>
    );
  }
}
