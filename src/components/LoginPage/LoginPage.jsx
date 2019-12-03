import React, { Component } from "react";
import image from "../../assets/img/logo.png";
import { injectIntl, FormattedMessage } from "react-intl";
import { connect } from 'react-redux';
import { raiseError, setTokenOnHttpClient, updateMe, updateIdentity } from '../../lib/redux/actions';

class LoginPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: []
    };
    this.onLoginButton = this.onLoginButton.bind(this);
  }

  handleChangeEmail = event => {
    this.setState({
      email: event.target.value
    });
  };

  handleChangePass = event => {
    this.setState({
      password: event.target.value
    } );
  };

  onLoginButton(e) {
    e.preventDefault();
    this.props.onLoginButton({component: this, event: e, http: this.props.http});
  };

  render() {
    return (
      <div id="main-wrapper">
        <div className="topbar tp-rlt" id="top">
          <div className="header light">
            <div className="container po-relative">
              <nav className="navbar navbar-expand-lg header-nav-bar">
                <a href="index.html" className="navbar-brand">
                  <img src={image} className="default-logo" alt="drizvato" />
                </a>
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
                    <li className="nav-item ">
                      {" "}
                      <a
                        className="nav-link"
                        href="javascript:void(0)"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <FormattedMessage id="home"/>
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      {" "}
                      <a
                        className="nav-link dropdown-toggle"
                        href="javascript:void(0)"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <FormattedMessage id="job"/> <i className="fa fa-angle-down m-l-5" />
                      </a>
                      <ul className="b-none dropdown-menu font-14 animated fadeInUp">
                        <li>
                          <a className="dropdown-item" href="blog.html">
                          <FormattedMessage id="urgent_job"/>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="pricing.html">
                          <FormattedMessage id="the_work_is_done_in_day"/>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="login.html">
                          <FormattedMessage id="long_term_job"/>

                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item ">
                      {" "}
                      <a
                        className="nav-link"
                        href="javascript:void(0)"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <FormattedMessage id="about"/>{" "}
                      </a>
                    </li>
                    <li className="nav-item ">
                      {" "}
                      <a
                        className="nav-link"
                        href="javascript:void(0)"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <FormattedMessage id="contact"/>{" "}
                      </a>
                    </li>
                  </ul>
                  <div className="act-buttons">
                    <a
                      className="btn btn-info font-14"
                      href="javascript:void(0)"
                      data-toggle="modal"
                      data-target="#login"
                    >
                      <i className="ti-shift-right mr-2" />
                      <FormattedMessage id="login"/>
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-8 col-sm-12">
                <div className="modal-body">
                  <div className="login-form">
                    <form onSubmit={this.onLoginButton}>
                      <h4 className="modal-header-title"><FormattedMessage id="login"/></h4>
                      <div className="form-group css">
                        <label><FormattedMessage id="email"/></label>
                        <div className="input-with-icon">
                          <input
                            type="text"
                            className="form-control ip"
                            placeholder="email"
                            value={this.state.email}
                            onChange={this.handleChangeEmail}
                          />
                          <i className="ti-user" />
                        </div>
                      </div>
                      <div className="form-group css">
                        <label><FormattedMessage id="password"/></label>
                        <div className="input-with-icon">
                          <input
                            type="password"
                            className="form-control ip"
                            placeholder="*******"
                            value={this.state.password}
                            onChange={this.handleChangePass}
                          />
                          <i className="ti-unlock" />
                        </div>
                      </div>
                      <div className="form-group css">
                        <button
                          type="submit"
                          className="btn btn-primary btn-md full-width pop-login"
                        >
                          <FormattedMessage id="login"/>
                        </button>
                      </div>
                    </form>
                    <div className="form-group css">
                      <div className="row">
                        <div className="col-6 tx">
                          <i className="ti-user" />
                          <a
                            href="javascript:void(0)"
                            data-toggle="modal"
                            data-target
                            data-dismiss="modal"
                          >
                            {" "}
                            <FormattedMessage id="sign_up"/>
                          </a>
                        </div>
                        <div className="col-6 tx">
                          <a href="#">
                            <i className="ti-help" />
                            <FormattedMessage id="forget_password"/>{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (stateStore, ownProps) => {
  let newState = Object.assign({}, ownProps);

  newState.error_description = stateStore.error_des;
  newState.http = stateStore.http;
  return newState; 
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginButton: ({component, http}) => {
      http({
        url: '/auth/login',
        method: 'POST',
        data: {
          email: component.state.email,
          password: component.state.password,
        }
      }).then(res => {
        dispatch(updateIdentity(res.data.response));
        dispatch(setTokenOnHttpClient(res.data.response));
        http({
          url: '/auth/user/get',
        }).then(({data}) => {
          dispatch(updateMe({me: data.response}));
          component.props.history.push('/')
        });
      }).catch(error => {
        dispatch(raiseError(error.response.data.errors))
      });
    }
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
