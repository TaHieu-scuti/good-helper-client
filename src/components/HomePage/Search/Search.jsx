import React, { Component } from 'react';
import Location from './Location';
import Category from './Category';
import { connect } from 'react-redux';
import { injectIntl, FormattedMessage } from "react-intl";
import { searchOutside } from '../../../lib/redux/actions';
import { withRouter } from 'react-router-dom';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
      location: [],
      title: '',
      location_id: '',
      category_id: ''
    };

    this.onSearchButton = this.onSearchButton.bind(this);
  }

  componentDidMount() {
    this.props.http("auth/category").then(res => {
      this.setState({ category: res.data.response });
    });

    this.props.http("auth/location").then(res => {
      this.setState({ location: res.data.response });
    });
  }

  handleChangeTitle = event => {
    this.setState({
      title: event.target.value
    });
  };

  handleChangeLocation = event => {
    this.setState({
      location_id: event.target.value
    });
  };

  handleChangeCategory = event => {
    this.setState({
      category_id: event.target.value
    });
  };

  onSearchButton (e) {
    e.preventDefault();
    this.props.onSearchButton({
      component: this,
      event: e,
      http: this.props.http
    });
  }

  render() {
    return (
      <form className="search-big-form no-border search-shadow" onSubmit={this.onSearchButton}>
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
                value={this.state.title}
                onChange={this.handleChangeTitle}
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 p-0">
            <Location location={this.state.location}
                      value={this.state.location_id}
                      onChange={this.handleChangeLocation} />
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 p-0">
            <Category category={this.state.category} 
                      value={this.state.category_id}
                      onChange={this.handleChangeCategory} />
          </div>
          <div className="col-lg-2 col-md-2 col-sm-12 p-0">
            <button type="sumbit" className="btn btn-info full-width">
              <FormattedMessage id="Search" />
            </button>
          </div>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchButton: ({ component, http }) => {
      http({
        url: "/auth/search/outside",
        method: "POST",
        data: {
          title: component.state.title,
          location_id: component.state.location_id,
          category_id: component.state.category_id
        }
      }).then(res => {
        dispatch(searchOutside(res.data.response));
        component.props.history.push("/search");
      })
    }
  }
}

const mapStateToProps = (stateStore, ownProps) => {
  let newState = Object.assign({}, ownProps);

  newState.http = stateStore.http;
  newState.searchOutside = stateStore.searchOutside;

  return newState;
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(injectIntl(Search)));
