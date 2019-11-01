import React from "react";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { login } from "../actions/auth";
import { Redirect } from "react-router-dom";

class LoginFormContainer extends React.Component {
  state = { name: "", password: "" };

  onSubmit = event => {
    event.preventDefault();
    this.props.login(this.state.name, this.state.password);
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return this.props.token ? (
      // If we have a token, redirect to Home
      <Redirect to="/home" />
    ) : (
      <LoginForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth
  };
};

export default connect(
  mapStateToProps,
  { login }
)(LoginFormContainer);
