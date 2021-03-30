import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

import Login from "./components/Auth/login";
import Dashboard from "./components/Dashboard";
import NavBar from "./components/Nav";
import "./App.css";
import { login } from "./services/api";

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    const { email, password } = this.state;
    // let history = useHistory();

    const payload = login();
    payload
      .then((response) => {
        if (response.status === 200) {
          console.log("OPPPPPP");
          // 
          this.props.history.push("/dashboard")
          // history.push("/dashboard");
        }
      })
      .catch((error) => this.setState({ error }));

    event.preventDefault();
  };

  render() {
    return (
      <div className="App">
        <Router>
          <NavBar></NavBar>
          <Switch>
            <Route path="/login">
              <Login
                email={this.state.email}
                password={this.state.password}
                error={this.state.error}
                onChange={this.onChange}
                onSubmit={this.onSubmit}
              />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/">
              <div>Welcome</div>
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
