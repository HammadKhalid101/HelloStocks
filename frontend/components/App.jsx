import React from "react";
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


import LoginFormContainer from "./sessions/login_form_container";
import SignupFormContainer from "./sessions/signup_form_container";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LandingPage from "./greeting/landing";

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer}/>
      <AuthRoute exact path="/signup" component={SignupFormContainer}/>
    </Switch>
  </div>
);

export default App;
