import React, { Component } from "react";
import { connect } from "react-redux";
import { removeJob, raiseError, updateJob, removeError } from "../../lib/redux/actions";

class Authority extends Component {
  constructor(props) {
    super(props);
   this.state = {
    job: {
      title:'',
      category: '',
      location:'' ,
      img: ''
    }
   }
    this.props.http.interceptors.request.use(
      async config => {
        this.props.removeJob();
        const job = this.state.job
        this.props.updateJob(job);
        this.props.removeError()
        return config;
      },
      function(error) {
        const message = error.response.data.message;
        this.props.raiseError(message);
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
    updateJob: (job) =>  dispatch(updateJob(job)),
    removeError: () => dispatch(removeError(''))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Authority);
