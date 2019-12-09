import React, { Component } from "react";
import logo from "../../assets/img/logo-light.png";
import banner from "../../assets/img/bn-4.jpg";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { injectIntl, FormattedMessage } from "react-intl";
import NavDropdown from "react-bootstrap/NavDropdown";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onLogoutButton = this.onLogoutButton.bind(this);
  }

  onLogoutButton(e) {
    e.preventDefault();
    this.props.onLogoutButton({ component: this, event: e });
  }

  render() {
    let button = (
      <div className="act-buttons">
        <NavLink to="/login" className="btn btn-info font-14">
          <i className="ti-shift-right mr-2" />
          <FormattedMessage id="login" />
        </NavLink>
      </div>
    );

    if (this.props.is_logined) {
      button = (
        <nav className="navbar navbar-expand-lg header-nav-bar">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <NavDropdown title={this.props.me.last_name} id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">
                  <Link to="/logout" className="link">
                    <FormattedMessage id="logout" />
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li>
              <img
                src={this.props.me.avatar}
                className="img-fluid mx-auto img-circle"
                style={{ width: "30px" }}
                alt=""
              />
            </li>
          </ul>
        </nav>
      );
    }

    return (
      <div>
        <div className="topbar" id="top">
          <div className="header exchange-logo">
            <div className="container po-relative">
              <nav className="navbar navbar-expand-lg header-nav-bar">
                <Link className="navbar-brand" to="home">
                  <img src={logo} className="default-logo" alt="Workio" />{" "}
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navigation"
                  aria-controls="navigation"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="ti-align-right" />
                </button>
                <div
                  className="collapse navbar-collapse hover-dropdown font-14 ml-auto"
                  id="navigation"
                >
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                      {" "}
                      <Link
                        to="/home"
                        className="nav-link "
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <FormattedMessage id="home" />{" "}
                      </Link>
                    </li>
                  </ul>
                  {button}
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div
          className="hero-header min-banner jumbo-banner text-center"
          style={{ background: "url(" + banner + ")" }}
          data-overlay={0}
        >
          {" "}
          --&gt;
          <div className="container">
            <h2>
              <FormattedMessage id="let_get_best_jobs" />
            </h2>
            <form className="search-big-form no-border search-shadow">
              <div className="row m-0">
                <div
                  className="col-lg-4 col-md-4 col-sm-12 p-0"
                  style={{ height: "40px" }}
                >
                  <div className="form-group" style={{ height: "40px" }}>
                    <i className="ti-search" />
                    <input
                      type="text"
                      className="form-control b-r"
                      placeholder={this.props.intl.formatMessage({
                        id: "fill"
                      })}
                      style={{ height: "40px" }}
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                  <div className="form-group">
                    <i className="ti-location-pin" />
                    <input
                      type="text"
                      className="form-control b-r"
                      placeholder={this.props.intl.formatMessage({
                        id: "location"
                      })}
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                  <div className="form-group">
                    <select
                      className="js-states form-control"
                      placeholder={this.props.intl.formatMessage({
                        id: "category"
                      })}
                    >
                      <option value>Chọn danh mục</option>
                      <option value={1}>Giúp việc nhà</option>
                      <option value={2}>Giao nhận giấy tờ/tài liệu</option>
                      <option value={3}>Phục vụ nhà hàng/ quán cafe</option>
                      <option value={4}>Gia sư</option>
                      <option value={5}>Dọn dẹp</option>
                      <option value={5}>Shipper</option>
                      <option value={5}>Trông trẻ/ Đón trẻ</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12 p-0">
                  <button type="button" className="btn btn-info full-width">
                    <FormattedMessage id="search" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (stateStore, ownProps) => {
  let newState = Object.assign({}, ownProps);
  newState.http = stateStore.http;
  newState.me = stateStore.me;
  newState.is_logined = stateStore.me != null;

  return newState;
};

export default connect(mapStateToProps)(injectIntl(Header));
