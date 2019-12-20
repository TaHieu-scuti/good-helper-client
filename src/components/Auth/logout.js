import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../../lib/redux/actions";
import { Redirect } from "react-router-dom";

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.logout();
  }

  render (){
    return (
      <Redirect to='/home'/>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(null, mapDispatchToProps)(Logout);
