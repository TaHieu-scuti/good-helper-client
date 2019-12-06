import React, { Component } from 'react';
import Location from './Location';
import Category from './Category';
import { connect } from 'react-redux';
import { injectIntl, FormattedMessage } from "react-intl";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
      location: []
    };
  }

  componentDidMount() {
    this.props.http("auth/category").then(res => {
      this.setState({ category: res.data.response });
    });

    this.props.http("auth/location").then(res => {
      this.setState({ location: res.data.response });
    });
  }

  render() {
    return (
      <form className="search-big-form no-border search-shadow">
        <div className="row m-0">
          <div
            className="col-lg-4 col-md-4 col-sm-12 p-0"
            style={{ height: "40px" }}
          >
            <div className="form-group" style={{ height: "40px" }}>
              <input
                type="text"
                className="form-control b-r"
                placeholder={this.props.intl.formatMessage({ id: "Type name Job" })}
                style={{ height: "40px" }}
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 p-0">
            <Location location={this.state.location} />
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 p-0">
            <Category category={this.state.category} />
          </div>
          <div className="col-lg-2 col-md-2 col-sm-12 p-0">
            <button type="button" className="btn btn-info full-width">
              <FormattedMessage id="Search" />
            </button>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (stateStore, ownProps) => {
  let newState = Object.assign({}, ownProps);

  newState.http = stateStore.http;

  return newState;
};

export default connect(mapStateToProps)(injectIntl(Search));
