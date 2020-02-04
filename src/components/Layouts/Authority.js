import React, { Component } from "react";
import { connect } from "react-redux";
import { isRequest, raiseError } from "../../lib/redux/actions";

class Authority extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.props.http.interceptors.request.use(
      async config => {
        const is_request = true;
        this.props.isRequest(is_request);

        return config;
      },
      function(error) {
        return Promise.reject(error);
      }
    );
    this.props.http.interceptors.response.use(
      async response => {
        const is_request = false;
        this.props.isRequest(is_request);

        return response;
      },
      function(error) {
        return Promise.reject(error);
      }
    );
  }

  render() {
    return (
      <div>
        {this.props.is_request && (
          <div className="loading">
            <div className="sk-wave">
              <div className="sk-wave-rect"></div>
              <div className="sk-wave-rect"></div>
              <div className="sk-wave-rect"></div>
              <div className="sk-wave-rect"></div>
              <div className="sk-wave-rect"></div>
            </div>
          </div>
        )}
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = (stateStore, ownProps) => {
  let newState = Object.assign({}, ownProps);
  newState.http = stateStore.http;
  newState.is_request = stateStore.is_requesting;

  return newState;
};

const mapDispatchToProps = dispatch => {
  return {
    isRequest: is_request => dispatch(isRequest(is_request)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Authority);
