import "./styles.css";
import React from "react";
import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import libraryLink from "./data/libraryLink";

function App() {
  const routeMap = libraryLink.map((item, index) => (
    <Route
      key={index}
      exact={item.isExact}
      path={item.link}
      component={item.component}
    />
  ));
  return (
    <BrowserRouter>
      <NavBar libraryLink={libraryLink} />
      <Switch>
        {routeMap}
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
