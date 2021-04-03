import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/Auth/login";
import Dashboard from "./components/Dashboard";
import NavBar from "./components/Nav";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar></NavBar>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/">
              <div className="welcome">
                <h1 className="font-medium text-white text-left pl-32">
                  Compare Test Scores
                </h1>
                <p>Test</p>
              </div>
            </Route>
            <Route>
              <App />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

/* <header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
Edit <code>src/App.js</code> and save to reload.
</p>
<a
className="App-link"
href="https://reactjs.org"
target="_blank"
rel="noopener noreferrer"
>
Learn React
</a>
</header> */

// import logo from "./logo.svg";
