import React, { Component } from "react";
import { connect } from "react-redux";
import {
  removeJob,
  raiseError,
  updateJob,
  removeError
} from "../../lib/redux/actions";

class Authority extends Component {
  constructor(props) {
    super(props);
    this.state = {
      job: {
        title: "",
        category: "",
        location: "",
        img: ""
      },
      is_loading: false
    };
    this.props.http.interceptors.request.use(
      async config => {
        this.props.removeJob();
        const job = this.state.job;
        this.props.updateJob(job);
        this.props.removeError();
        this.setState({ is_loading: true });

        return config;
      },
      function(error) {
        const message = error.response.data.message;
        this.props.raiseError(message);
      }
    );
    this.props.http.interceptors.response.use(
      async response => {
        this.setState({ is_loading: false });

        return response;
      },
      function(error) {
        const message = error.response.data.message;
        this.props.raiseError(message);
      }
    );
  }

  render() {
    return (
      <div>
        {this.state.is_loading && (
          <div class="loading">
            <div class="sk-wave">
              <div class="sk-wave-rect"></div>
              <div class="sk-wave-rect"></div>
              <div class="sk-wave-rect"></div>
              <div class="sk-wave-rect"></div>
              <div class="sk-wave-rect"></div>
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

  return newState;
};

const mapDispatchToProps = dispatch => {
  return {
    removeJob: () => dispatch(removeJob()),
    updateJob: job => dispatch(updateJob(job)),
    removeError: () => dispatch(removeError(""))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Authority);
