import React, { Component } from 'react';
import ListCategory from './ListCategory';
import { connect } from 'react-redux';
import { FormattedMessage } from "react-intl";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    this.props.http("auth/category").then(res => {
      this.setState({ categories: res.data.response });
    });
  }

  render() {
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="sec-heading mx-auto">
                <p><FormattedMessage id="Choose jobs by category" /></p>
                <h2><FormattedMessage id="Popular category" /></h2>
              </div>
            </div>
          </div>
          <div className="row">
            <ListCategory categories={this.state.categories} />
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

export default connect(mapStateToProps)(Category);
