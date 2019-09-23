import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Layout Partials
import { MainLayout, BlankLayout, Page404Layout } from './layout';

// Pages
import { Home, About, Splash, Page404 } from './screems'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={(route)=> <MainLayout component={Splash} route={route} />}></Route>
        <Route path="/home" render={(route)=> <MainLayout component={Home} route={route} />}></Route>
        <Route path="/about" render={(route)=> <MainLayout component={About} route={route} />}></Route>
        <Route path="/blank" exact render={(route)=> <BlankLayout component={Splash} route={route} />}></Route>
        <Route render={(route)=> <Page404Layout component={Page404} route={route} />}></Route>
      </Switch>
    </Router>
  );
}

export default App;
