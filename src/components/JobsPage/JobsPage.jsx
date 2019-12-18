import React, { Component } from "react";
import SearchAdvanced from "./SearchAdvanced";
import ListAllJob from "./ListAllJob";
import { connect } from "react-redux";

class JobsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    this.props.http({
        url: "auth/post/get",
        method: "GET"
      }).then(res => {
        this.setState({ data: res.data.response });
      });
  }
  render() {
    console.log(this.state.data);
    return (
      <section className="section-search">
        <div className="container">
          <div className="row">
            <SearchAdvanced />
            <ListAllJob listJob = {this.state.data} />
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (stateStore, ownProps) => {
  let newState = Object.assign({}, ownProps);
  newState.http = stateStore.http;

  return newState;
};

export default connect(mapStateToProps)(JobsPage);
