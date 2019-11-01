import React, { Component } from "react";
import './App.css'
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import Signup from './components/Signup'
import LoginFormContainer from "./components/LoginFormContainer";
import BoardContainer from "./components/BoardContainer"

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
      <h1>TiC TaC ToE</h1>
      <Signup />
        {this.props.loggedIn ? (
          "You're logged in"
        ) : (
          <Link to="/login"> Login</Link>
        )}
        <Route path="/login" exact component={LoginFormContainer} />
        <Link to="/games"> Games</Link>
        <Route path="/games" exact component={BoardContainer}/>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.auth)
  return {
    loggedIn: state.auth !== null 
  };
};

export default connect(mapStateToProps)(App);
