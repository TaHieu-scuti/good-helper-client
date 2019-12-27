import React, { Component } from 'react';
import { injectIntl, FormattedMessage } from "react-intl";

class Search extends Component {
  render() {
    return (
      <div>
        <form className="search-big-form search-shadow" style={{marginRight: '30px', marginLeft: '30px'}}>
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-12 p-0">
              <div className="form-group">
                <input type="text" className="form-control" placeholder={this.props.intl.formatMessage({ id: "Work" })} />
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 p-0">
              <div className="form-group">
                <select className="js-states form-control">
                  <option value>{this.props.intl.formatMessage({ id: "Category" })}</option>
                </select>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-12 p-0">
              <button type="button" className="btn btn-info full-width"><FormattedMessage id="Search" /></button>
            </div>
          </div>
        </form>
      </div>
    )
  };
}

export default injectIntl(Search);