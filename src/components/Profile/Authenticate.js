import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Authenticate extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>{this.props.is_logined ? <Redirect to="/login" /> : this.props.children}</div>;
  }
}

const mapStateToProps = (stateStore, ownProps) => {
  let newState = Object.assign({}, ownProps);
  newState.is_logined = stateStore.me === null;
  return newState;
};

export default connect(mapStateToProps)(Authenticate);
