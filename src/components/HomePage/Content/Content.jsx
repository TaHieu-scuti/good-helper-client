import React, { Component } from "react";
import { IoMdArrowForward } from "react-icons/io";
import ListJob from "./ListJob";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listPost: []
    };
  }

  componentDidMount() {
    this.props.http("auth/new/get").then(res => {
      this.setState({ listPost: res.data.response });
    });
  }

  render() {
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="sec-heading mx-auto">
                <p> <FormattedMessage id="News job and popular job" /></p>
                <h2><FormattedMessage id="Job need find helper" /></h2>
              </div>
            </div>
          </div>
          <div className="row">
            <ListJob listPost={this.state.listPost}/>
          </div>
          <div className="row mt-4">
            <div className="col-lg-12 col-md-12">
              <div className="text-center">
                <a href="#" className="btn btn-info">
                  <FormattedMessage id="View" />
                  <IoMdArrowForward />
                </a>
              </div>
            </div>
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

export default connect(mapStateToProps)(Content);
