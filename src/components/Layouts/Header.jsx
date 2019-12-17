import React, { Component } from "react";
import logo from "../../assets/img/logo-light.png";
import banner from "../../assets/img/bn-4.jpg";
import { connect } from "react-redux";
import { NavLink, Link, withRouter } from "react-router-dom";
import { injectIntl, FormattedMessage } from "react-intl";
import Search from "./../HomePage/Search/Search";
import { IoMdArrowForward } from "react-icons/io";
import NavDropdown from "react-bootstrap/NavDropdown";
import NameJob from "./../DetailJobPage/NameJob";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let button = (
      <div className="act-buttons">
        <NavLink to="/login" className="btn btn-info font-14">
          <IoMdArrowForward />
          <FormattedMessage id="Login" />
        </NavLink>
      </div>
    );

    if (this.props.is_logined) {
      button = (
        <nav className="navbar navbar-expand-lg header-nav-bar">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <NavDropdown
                title={this.props.me.last_name}
                id="collasible-nav-dropdown"
              >
                <Link to="/logout" className="link">
                  <NavDropdown.Item
                    href="/logout"
                    className="log"
                    eventKey="4.1"
                  >
                    <FormattedMessage className="logout" id="Logout" />
                  </NavDropdown.Item>
                </Link>
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
                <Link to="/home" className="navbar-brand">
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
                      <Link
                        to="/home"
                        className="nav-link "
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <FormattedMessage id="Home" />
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
          {this.props.location.pathname !== "/login" &&
            this.props.jobs.title.length === 0 && (
              <div className="container">
                <h2>
                  <FormattedMessage id="Let get best jobs" />
                </h2>
                <Search />
              </div>
            )}

          {this.props.jobs.title.length > 0 && (
            <div className="container">
              <NameJob detailJob={this.props.jobs} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (stateStore, ownProps) => {
  let newState = Object.assign({}, ownProps);
  newState.http = stateStore.http;
  newState.me = stateStore.me;
  newState.jobs = stateStore.jobs;
  newState.is_logined = stateStore.me != null;

  return newState;
};

export default connect(mapStateToProps)(withRouter(injectIntl(Header)));
