import React, { Component } from "react";
import { connect } from "react-redux";
import { isRequest } from "../../lib/redux/actions";

class Authority extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.props.http.interceptors.request.use(
      async config => {
        this.props.isRequest(true);

        return config;
      },
      function(error) {
        return Promise.reject(error);
      }
    );
    this.props.http.interceptors.response.use(
      async response => {
        this.props.isRequest(false);

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
        {this.props.is_requesting && (
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
  newState.is_requesting = stateStore.is_requesting;

  return newState;
};

const mapDispatchToProps = dispatch => {
  return {
    isRequest: is_request => dispatch(isRequest(is_request))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Authority);
