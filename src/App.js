import React, { Fragment, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import RegisterAdmin from "./components/auth/RegisterAdmin";
import RegisterUser from "./components/auth/RegisterUser";
import Login from "./components/auth/Login";
import Alert from "./components/layout/Alert";
import PrivateRoute from "./components/routing/PrivateRoute";
import UserDash from "./components/dashboard/UserDash";
import Comps from "./components/companies/Comps";
import AdminDash from "./components/dashboard/AdminDash";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />

          <section className="container ">
            <Alert />
            <Switch>
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/dashboard" component={AdminDash} />
              <PrivateRoute exact path="/userdash" component={UserDash} />
              <PrivateRoute exact path="/loadcomps" component={Comps} />
              <Route exact path="/registeruser" component={RegisterUser} />
              <Route exact path="/registeradmin" component={RegisterAdmin} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
