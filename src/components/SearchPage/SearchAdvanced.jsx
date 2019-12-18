import React, { Component } from 'react';
import { injectIntl, FormattedMessage } from "react-intl";

class SearchAdvanced extends Component {
  render() {
    return (
      <div className="col-xl-3 col-lg-4">
        <div className="back-brow">
          <a href="#" className="back-btn">
            <FormattedMessage id="Home" />
          </a> / <FormattedMessage id="Search" />
        </div>
        <div className="sidebar-container d-sm-none d-md-block d-none">
          <div className="sidebar-widget">
            <div className="form-group">
              <h5 className="mb-3"><FormattedMessage id="Keyword" /></h5>
              <div className="input-with-icon">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Từ khóa"
                />
              </div>
            </div>
          </div>
          <div className="sidebar-widget">
            <div className="form-group">
              <h5 className="mb-3"><FormattedMessage id="Location" /></h5>
              <div className="input-with-icon">
                <select id="location" className="js-states form-control">
                  <option>{this.props.intl.formatMessage({ id: "Location" })}</option>
                </select>
              </div>
            </div>
          </div>
          <div className="sidebar-widget">
            <div className="form-group">
              <h5 className="mb-3"><FormattedMessage id="Category" /></h5>
              <div className="input-with-shadow">
                <select id="category" className="js-states form-control">
                  <option value>{this.props.intl.formatMessage({ id: "Category" })}</option>
                </select>
              </div>
            </div>
          </div>
          <div className="sidebar-widget">
            <div className="form-group">
              <h5 className="mb-2"><FormattedMessage id="Sex" /></h5>
              <div className="side-imbo">
                <ul className="no-ul-list">
                  <li>
                    <input
                      id="checkbox-j1"
                      className="checkbox-custom"
                      name="gender"
                      type="radio"
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
            <div className="form-group">
              <h5 className="mb-2"><FormattedMessage id="Kind of work" /></h5>
              <div className="side-imbo">
                <ul className="no-ul-list">
                  <li>
                    <input
                      id="checkbox-j1"
                      className="checkbox-custom"
                      name="type"
                      type="radio"
                    />
                    <label
                      htmlFor="checkbox-j1"
                      className="checkbox-custom-label"
                    >
                      <FormattedMessage id="Urgent work" />
                    </label>
                  </li>
                  <li>
                    <input
                      id="checkbox-j2"
                      className="checkbox-custom"
                      name="type"
                      type="radio"
                    />
                    <label
                      htmlFor="checkbox-j2"
                      className="checkbox-custom-label"
                    >
                      <FormattedMessage id="Jobs of the day" />
                    </label>
                  </li>
                  <li>
                    <input
                      id="checkbox-j3"
                      className="checkbox-custom"
                      name="type"
                      type="radio"
                    />
                    <label
                      htmlFor="checkbox-j3"
                      className="checkbox-custom-label"
                    >
                      <FormattedMessage id="Long term employment" />
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="sidebar-widget">
            <div className="form-group">
              <h5 className="mb-2"><FormattedMessage id="Salary" /></h5>
              <div className="side-imbo">
                <ul className="no-ul-list">
                  <li>
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
        </div>
      </div>
    );
  }
}

export default (injectIntl(SearchAdvanced));
