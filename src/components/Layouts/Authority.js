import React, { Component } from "react";
import { connect } from "react-redux";
import { removeJob, raiseError } from "../../lib/redux/actions";

class Authority extends Component {
  constructor(props) {
    super(props);
    this.props.http.interceptors.request.use(
      async config => {
        this.props.removeJob();
        return config;
      },
      function(error) {
        this.props.raiseError(error);
        return Promise.reject(error);
      }
    );
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}

const mapStateToProps = (stateStore, ownProps) => {
  let newState = Object.assign({}, ownProps);
  newState.http = stateStore.http;

  return newState;
};

const mapDispatchToProps = dispatch => {
  return {
    removeJob: () => dispatch(removeJob()),
    raiseError: (error) => dispatch(raiseError(error.response.data.message))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Authority);
