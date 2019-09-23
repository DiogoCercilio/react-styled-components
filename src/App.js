import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MainLayout, BlankLayout, Page404Layout } from './layout'; // Layout Partials
import { Home, Login, Splash, Page404 } from './screems' // Pages

// Global Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './resources/styles.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={(route)=> <BlankLayout component={Splash} route={route} />}></Route>
        <Route path="/login" render={(route)=> <BlankLayout component={Login} route={route} />}></Route>
        <Route path="/home" render={(route)=> <MainLayout component={Home} route={route} />}></Route>
        <Route render={(route)=> <Page404Layout component={Page404} route={route} />}></Route>
      </Switch>
    </Router>
  );
}

export default App;
