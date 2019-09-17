import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// Pages
import { Home, About, Splash, Page404 } from './screems'

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Route path="/" exact component={Splash}></Route>
                <Route path="/home" component={Home}></Route>
                <Route path="/about" component={About}></Route>
                <Route component={Page404}></Route>
            </Router>
        )
    }
}
export default Routes