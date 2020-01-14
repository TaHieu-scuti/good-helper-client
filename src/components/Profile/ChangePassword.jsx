import React, { Component } from "react";
import { FaExpeditedssl } from "react-icons/fa";
import { FormattedMessage, injectIntl } from "react-intl";
import Sidebar from "./Sidebar";
import Authenticate from "./Authenticate";
import { connect } from "react-redux";
import { raiseError } from "../../lib/redux/actions";

class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      old_password: "",
      new_password: "",
      re_password: ""
    };
    this.onSubmitChangePassword = this.onSubmitChangePassword.bind(this);
  }

  handleChangeOldPassword = event => {
    this.setState({
      old_password: event.target.value
    });
  };

  handleChangeNewPassword = event => {
    this.setState({
      new_password: event.target.value
    });
  };

  handleChangeRePassword = event => {
    this.setState({
      re_password: event.target.value
    });
  };

  onSubmitChangePassword(e) {
    e.preventDefault();
    this.props.onSubmitChangePassword({
      component: this,
      event: e,
      http: this.props.http
    });
  }

  render() {
    return (
      <Authenticate>
        <div id="main-wrapper">
          <section class="tr-single-detail gray-bg">
            <div class="container">
              <div class="row">
                <Sidebar user={this.props.user} />
                <div className="col-md-8 col-sm-12">
                  <div className="tab-pane" id="change-password">
                    <form action="" onSubmit={this.onSubmitChangePassword}>
                      <div className="tr-single-box">
                        <div className="tr-single-header">
                          <h3>
                            <i>
                              <FaExpeditedssl />
                            </i>
                            <FormattedMessage id="Change password" />
                          </h3>
                        </div>
                        <div className="tr-single-body">
                          <div className="form-group">
                            <label>
                              Mật khẩu cũ <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="password"
                              placeholder={this.props.intl.formatMessage({
                                id: "Old password"
                              })}
                              onChange={this.handleChangeOldPassword}
                            />
                            <span className="text-danger">
                              {this.props.error_descriptions.password ? (
                                <FormattedMessage
                                  id={this.props.error_descriptions.password}
                                />
                              ) : null} 
                            </span>
                          </div>
                          <div className="form-group">
                            <label>
                              Mật khẩu mới{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="password"
                              placeholder={this.props.intl.formatMessage({
                                id: "New password"
                              })}
                              onChange={this.handleChangeNewPassword}
                            />
                            <span className="text-danger">
                              {this.props.error_descriptions.new_password ? (
                                <FormattedMessage
                                  id={
                                    this.props.error_descriptions.new_password
                                  }
                                />
                              ) : null}
                              {this.props.error_descriptions.message ? (
                                <FormattedMessage
                                  id={this.props.error_descriptions.message}
                                />
                              ) : null}
                            </span>
                          </div>
                          <div className="form-group">
                            <label>
                              Xác nhận mật khẩu{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="password"
                              placeholder={this.props.intl.formatMessage({
                                id: "Enter the password"
                              })}
                              onChange={this.handleChangeRePassword}
                            />
                            <span className="text-danger">
                              {this.props.error_descriptions.re_password ? (
                                <FormattedMessage
                                  id={this.props.error_descriptions.re_password}
                                />
                              ) : null}
                            </span>
                          </div>
                        </div>
                      </div>
                      <button
                        type="submit"
                        class="btn btn-info btn-md full-width"
                      >
                        Cập nhật
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Authenticate>
    );
  }
}

const mapStateToProps = (stateStore, ownProps) => {
  let newState = Object.assign({}, ownProps);
  newState.user = stateStore.me;
  newState.http = stateStore.http;
  newState.error_descriptions = stateStore.error_descriptions;

  return newState;
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmitChangePassword: ({ component, http }) => {
      http({
        url: "/auth/user/change/pass",
        method: "POST",
        data: {
          password: component.state.old_password,
          new_password: component.state.new_password,
          re_password: component.state.re_password
        }
      })
        .then(res => {
          component.props.history.push("/profile");
        })
        .catch(error => {
          if (error.response.data.message) {
            dispatch(raiseError(error.response.data));
          } else {
            dispatch(raiseError(error.response.data.errors));
          }
        });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(ChangePassword));
