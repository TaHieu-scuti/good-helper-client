import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class AuthenticateNeeder extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>{!this.props.user && this.props.user.role != 1 ? <Redirect to="/home" /> : this.props.children}</div>;
  }
}

const mapStateToProps = (stateStore, ownProps) => {
  let newState = Object.assign({}, ownProps);
  newState.user = stateStore.me;
  return newState;
};

export default connect(mapStateToProps)(AuthenticateNeeder);