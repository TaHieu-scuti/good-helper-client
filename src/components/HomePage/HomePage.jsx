import React, { Component } from "react";
import RatingHelper from "./RatingHelper/RatingHelper";
import Working from "./Working";
import Total from "./Total";
import Feedback from "./Feedback";
import Content from "./Content/Content";
import Category from "./Category/Category";
import { connect } from "react-redux";

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statistical: [],
      setting: []
    };
  }

  componentDidMount() {
    this.props.http("auth/statistical").then(res => {
      this.setState({ statistical: res.data.response });
    });
    this.props.http("auth/setting").then(res => {
      this.setState({ setting: res.data.response });
    });
  }
  render() {
    return (
      <div id="main-wrapper">
        <Category />
        <RatingHelper />
        <Content />
        <Working />
        <Total statistical={this.state.statistical} />
        <Feedback />
      </div>
    );
  }
}

const mapStateToProps = (stateStore, ownProps) => {
  let newState = Object.assign({}, ownProps);

  newState.http = stateStore.http;

  return newState;
};
export default connect(mapStateToProps)(HomePage);
