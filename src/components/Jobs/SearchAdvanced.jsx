import React, { Component } from "react";
import { injectIntl, FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { searchAdvanced } from '../../lib/redux/actions';
import { withRouter } from 'react-router-dom';

class SearchAdvanced extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
      location: [],
      search: {
        title: '',
        category_id: '',
        location_id: '',
        type: '',
        gender: ''
      }
    };
    
    this.onSearchButton = this.onSearchButton.bind(this);
  }

  componentDidMount() {
    this.props.http("/auth/category").then(res => {
      this.setState({ category: res.data.response });
    });

    this.props.http("/auth/location").then(res => {
      this.setState({ location: res.data.response });
    });
  }

  handelSetValue = event => {
    this.setState({
      search: {...this.state.search, [event.target.name]: event.target.value},
    });
  };

  onSearchButton (e) {
    e.preventDefault();
    this.props.onSearchButton({
      component: this,
      event: e,
      http: this.props.http
    });
  };
 
  render() {
    return (
      <div className="col-xl-3 col-lg-4">
        <div className="back-brow">
          <a href="#" className="back-btn">
            <FormattedMessage id="Home" />
          </a>{" "}
          / <FormattedMessage id="Search" />
        </div>
        <div className="sidebar-container d-sm-none d-md-block d-none">
          <form action="" onSubmit={this.onSearchButton}>
          <div className="sidebar-widget">
            <div className="form-group">
              <h5 className="mb-3">
                <FormattedMessage id="Keyword" />
              </h5>
              <div className="input-with-icon">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Từ khóa"
                  name= "title"
                  onChange={this.handelSetValue}
                />
              </div>
            </div>
          </div>
          <div className="sidebar-widget">
            <div className="form-group">
              <h5 className="mb-3">
                <FormattedMessage id="Location" />
              </h5>
              <div className="input-with-icon">
                <select id="location" className="js-states form-control" name= "location_id" onChange={this.handelSetValue}> 
                  <option value="">
                    {this.props.intl.formatMessage({
                      id: "Location"
                    })}
                  </option>
                  {this.state.location.map((item, idx) => {
                    return (
                      <option value={item.id} key={idx}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className="sidebar-widget">
            <div className="form-group">
              <h5 className="mb-3">
                <FormattedMessage id="Category" />
              </h5>
              <div className="input-with-shadow">
                <select id="category" className="js-states form-control" name= "category_id" onChange={this.handelSetValue}>
                  <option value="">
                    {this.props.intl.formatMessage({
                      id: "Category"
                    })}
                  </option>
                  {this.state.category.map((item, idx) => {
                    return (
                      <option value={item.id} key={idx}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className="sidebar-widget">
            <div className="form-group">
              <h5 className="mb-3">
                <FormattedMessage id="Kind of work" />
              </h5>
              <div className="input-with-shadow">
                <select id="category" className="js-states form-control" name= "type" onChange={this.handelSetValue}>
                  <option value="">
                    {this.props.intl.formatMessage({
                      id: "Type"
                    })}
                  </option>
                  <option value="Việc cần gấp">
                    {this.props.intl.formatMessage({
                      id: "Urgent work"
                    })}
                  </option>
                  <option value="Việc trong ngày">
                    {this.props.intl.formatMessage({
                      id: "Jobs of the day"
                    })}
                  </option>
                  <option value="Việc dài hạn">
                    {this.props.intl.formatMessage({
                      id: "Long term employment"
                    })}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="sidebar-widget">
            <div className="form-group">
              <h5 className="mb-2">
                <FormattedMessage id="Sex" />
              </h5>
              <div className="side-imbo">
                <ul className="no-ul-list">
                  <li>
                    <input
                      id="checkbox-j1"
                      className="checkbox-custom"
                      name="gender"
                      type="radio"
                      onChange={this.handelSetValue}
                      value="nam"
                    />
                    <label
                      htmlFor="checkbox-j1"
                      className="checkbox-custom-label"
                    >
                      <FormattedMessage id="Male" />
                    </label>
                  </li>
                  <li>
                    <input
                      id="checkbox-j2"
                      className="checkbox-custom"
                      name="gender"
                      type="radio"
                      onChange={this.handelSetValue}
                      value="nữ"
                    />
                    <label
                      htmlFor="checkbox-j2"
                      className="checkbox-custom-label"
                    >
                      <FormattedMessage id="Female" />
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="sidebar-widget">
            <button
              type="submit"
              className="btn btn-search full-width btn-info font-14"
            >
              <FormattedMessage id="Job searching" />
            </button>
          </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (stateStore, ownProps) => {
  let newState = Object.assign({}, ownProps);
  newState.http = stateStore.http;
  newState.searchOutside = stateStore.searchOutside;
  return newState;
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchButton: ({ component, http }) => {
      http({
        url: "/auth/filter/post", 
        method: "POST",
        data: {
          title: component.state.search.title,
          location_id: component.state.search.location_id,
          category_id: component.state.search.category_id,
          gender: component.state.search.gender,
          type: component.state.search.type
        }
      }).then(res => {
        dispatch(searchAdvanced(res.data.response));        
        component.props.history.push("/advanced/search");
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(injectIntl(SearchAdvanced)));
