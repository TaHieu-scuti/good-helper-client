import React, { Component } from "react";
import Authenticate from './Authenticate';
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class CheckOTP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      request_id: '',
    }

    this.onCheckOTPButton = this.onCheckOTPButton.bind(this);
    this.onCheckOTPButton = this.onCheckOTPButton.bind(this);
  }

  handleChangeOTP = event => {
    this.setState({ request_id: event.target.value })
  }

  onCheckOTPButton(e) {
    e.preventDefault();
    this.props.http({
      url: 'auth/verified',
      method: 'POST',
      data: {
        user_id: this.props.register.id,
        request_id: this.state.request_id
      }
    }).then(res => {
      this.props.history.push("/login");
    })
  }

  onSendOTPButton() {
    this.props.http({
      url: 'auth/send/again',
      method: 'POST',
      data: {
        user_id: this.props.register.id,
      }
    })
  }

  render() {
    return (
      <Authenticate>
        <div id="main-wrapper">
          <section>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8 col-md-8 col-sm-12">
                  <div className="modal-body">
                    <div className="login-form">
                      <form onSubmit={this.onCheckOTPButton}>
                        <div className="form-group css">
                          <label>
                            <FormattedMessage id="Enter the OTP code" /> <span className="text-danger">*</span>
                          </label>
                          <div className="input-with-icon">
                            <input
                              type="text"
                              className="form-control ip"
                              placeholder="Nhập mã OTP"
                              value={this.state.request_id}
                              onChange={this.handleChangeOTP}
                            />
                          </div>
                        </div>
                        <div className="form-group css">
                          <button
                            type="submit"
                            className="btn btn-primary btn-md full-width pop-login"
                          >
                            <FormattedMessage id="Accuracy" />
                          </button>
                        </div>
                      </form>
                      <div className="form-group css">
                        <div className="row">
                          <div className="col-6 tx">
                          </div>
                          <div className="col-6 tx">
                            <Link to="#" onClick={() => this.onSendOTPButton()}>
                              <FormattedMessage id="Resend OTP code" />
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
      </Authenticate>
    )
  };
}

const mapStateToProps = (stateStore, ownProps) => {
  let newState = Object.assign({}, ownProps);

  newState.http = stateStore.http;
  newState.register = stateStore.register;

  return newState;
};

export default connect(mapStateToProps)(CheckOTP);