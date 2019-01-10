import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import App from "./App";
// import NoMatch from "./components/NoMatch/NoMatch";
import Home from "./components/Home/Home";
import Callback from "./components/Callback/Callback";
import Auth from "./components/Authorization/Authorization";
import history from "./history";

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};
const NoMatch = () => <h3>No match</h3>;
export const makeMainRoutes = () => {
  return (
    <Router history={history}>
      <Route path="/home" render={props => <Home auth={auth} {...props} />} />
      <Route path="/" render={props => <App auth={auth} {...props} />} />
      <Route component={NoMatch} />
      {/* <Route exact path='/callback' render={props => <Callback {...props} handleAuthentication={handleAuthentication(props)}} */}
    </Router>
  );
};
