import React, { Component } from "react";
import { injectIntl ,FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import {
  raiseError,
  setTokenOnHttpClient,
  updateMe,
  updateIdentity
} from "../../lib/redux/actions";
import { IoIosMail } from "react-icons/io";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
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
    });
  };

  onLoginButton(e) {
    e.preventDefault();
    this.props.onLoginButton({
      component: this,
      event: e,
      http: this.props.http
    });
  }

  render() {
    return (
      <div id="main-wrapper">
        <section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-8 col-sm-12">
                { this.props.is_error && 
                  <div>
                    <span style= {{color: "red"}}>{this.props.is_error}</span>
                  </div>
                }
                <div className="modal-body">
                  <div className="login-form">
                    <form onSubmit={this.onLoginButton}>
                      <h4 className="modal-header-title">
                        <FormattedMessage id="Login" />
                      </h4>
                      <div className="form-group css">
                        <label>
                          <FormattedMessage id="Email" />
                        </label>
                        <div className="input-with-icon">
                          <input
                            type="text"
                            className="form-control ip"
                            placeholder={this.props.intl.formatMessage({ id: "Email" })}
                            value={this.state.email}
                            onChange={this.handleChangeEmail}
                          />
                        </div>
                      </div>
                      <div className="form-group css">
                        <label>
                          <FormattedMessage id="Password" />
                        </label>
                        <div className="input-with-icon">
                          <input
                            type="password"
                            className="form-control ip"
                            placeholder="*******"
                            value={this.state.password}
                            onChange={this.handleChangePass}
                          />
                        </div>
                      </div>
                      <div className="form-group css">
                        <button
                          type="submit"
                          className="btn btn-primary btn-md full-width pop-login"
                        >
                          <FormattedMessage id="Login" />
                        </button>
                      </div>
                    </form>
                    <div className="form-group css">
                      <div className="row">
                        <div className="col-6 tx">
                          <Link
                          >
                            {" "}
                            <FormattedMessage id="Sign up" />
                          </Link>
                        </div>
                        <div className="col-6 tx">
                          <Link href="#">
                            <FormattedMessage id="Forget password" />{" "}
                          </Link>
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

  newState.error_description = stateStore.error_descriptions;
  newState.http = stateStore.http;
  newState.is_error = stateStore.error_descriptions.length > 0;
  return newState;
};

const mapDispatchToProps = dispatch => {
  return {
    onLoginButton: ({ component, http }) => {
      http({
        url: "/auth/login",
        method: "POST",
        data: {
          email: component.state.email,
          password: component.state.password
        }
      })
        .then(res => {
          dispatch(updateIdentity(res.data.response));
          dispatch(setTokenOnHttpClient(res.data.response));
          http({
            url: "/auth/user/get"
          }).then(({ data }) => {
            dispatch(updateMe(data.response));
            component.props.history.push("/");
          });
        })
        .catch(error => {
          dispatch(raiseError(error.response.data.errors));
        });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(LoginPage));
