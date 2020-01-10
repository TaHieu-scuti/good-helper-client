import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class AuthenticateHelper extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    
    return <div>{this.props.user.role == 2 ? <Redirect to="/profile" /> : this.props.children}</div>;
  }
}

const mapStateToProps = (stateStore, ownProps) => {
  let newState = Object.assign({}, ownProps);
  newState.user = stateStore.me ;
  newState.is_logined = stateStore.me === null;
  return newState;
};

export default connect(mapStateToProps)(AuthenticateHelper);
