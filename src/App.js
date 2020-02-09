import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/login/Login";
import Home from "./components/Home";
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <Route path="/home" component={Home}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
