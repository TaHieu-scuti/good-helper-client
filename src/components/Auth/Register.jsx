import React, { Component } from 'react';
import Authenticate from './Authenticate';
import { injectIntl, FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { raiseError, register } from "../../lib/redux/actions";
import { Container, Row, Col } from 'react-bootstrap';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      re_password: '',
      phone_number: '',
      gender: '',
      role: '',
    };

    this.onRegisterButton = this.onRegisterButton.bind(this)
  }

  handleChangeFirstName = event => {
    this.setState({ first_name: event.target.value })
  };

  handleChangeLastName = event => {
    this.setState({ last_name: event.target.value })
  };

  handleChangeEmail = event => {
    this.setState({ email: event.target.value })
  };

  handleChangePass = event => {
    this.setState({ password: event.target.value })
  };
  
  handleChangeRePassword = event => {
    this.setState({ re_password: event.target.value })
  };

  handleChangePhone = event => {
    const phone = event.target.value
    if (phone[0] == 0) {
      return phone.slice(1)
    }

    this.setState({ phone_number: phone })
  };

  handleChangeGender = event => {
    this.setState({ gender: event.target.value })
  }

  handleChangeRole = event => {
    this.setState({ role: event.target.value })
  }

  onRegisterButton(e) {
    e.preventDefault();
    this.props.onRegisterButton({
      component: this,
      event: e,
      http: this.props.http
    });
  }

  render() {
    return (
      <Authenticate>
        <div id="main-wrapper">
          <section>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="modal-body">
                    <div className="login-form">
                      <form onSubmit={this.onRegisterButton}>
                        <h4 className="modal-header-title">
                          <FormattedMessage id="Register" />
                        </h4>
                        <Container>
                          <Row>
                            <Col md={6}>
                              <div className="form-group">
                                <label>
                                  <FormattedMessage id="First name" /> <span className="text-danger">*</span>
                                </label>
                                <div className="input-with-icon">
                                  <input
                                    type="text"
                                    className="form-control ip"
                                    placeholder={this.props.intl.formatMessage({ id: "First name" })}
                                    value={this.state.first_name}
                                    onChange={this.handleChangeFirstName}
                                  />
                                </div>
                                <span className="text-danger">
                                  {this.props.error_descriptions.first_name ?  
                                    <FormattedMessage id="The first name field is required." />
                                    : null
                                  }
                                </span>
                              </div>
                              <div className="form-group">
                                <label>
                                  <FormattedMessage id="Email" /> <span className="text-danger">*</span>
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
                                <span className="text-danger">
                                  {this.props.error_descriptions.email ? 
                                    <FormattedMessage id="The email field is required." /> 
                                    : null
                                  }
                                </span>
                              </div>
                              <div className="form-group">
                                <label>
                                  <FormattedMessage id="Password" /> <span className="text-danger">*</span>
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
                                <span className="text-danger">
                                  {this.props.error_descriptions.password ? 
                                    <FormattedMessage id="The password field is required." /> 
                                    : null
                                  }
                                </span>
                              </div>
                              <div className="form-group">
                                <label>
                                  <FormattedMessage id="Sex" /> <span className="text-danger">*</span>
                                </label>
                                <select className="form-control" onChange={this.handleChangeGender}>
                                  <option value></option>
                                  <option value='nam'>{this.props.intl.formatMessage({ id: "Male" })}</option>
                                  <option value='nữ'>{this.props.intl.formatMessage({ id: "Female" })}</option>
                                </select>
                                <span className="text-danger">
                                  {this.props.error_descriptions.gender
                                    ? <FormattedMessage id="The gender field is required." />
                                    : null
                                  }
                                </span>
                              </div>  
                            </Col>
                            <Col md={6}>
                              <div className="form-group">
                                <label>
                                  <FormattedMessage id="Last name" /> <span className="text-danger">*</span>
                                </label>
                                <div className="input-with-icon">
                                  <input
                                    type="text"
                                    className="form-control ip"
                                    placeholder={this.props.intl.formatMessage({ id: "Last name" })}
                                    value={this.state.last_name}
                                    onChange={this.handleChangeLastName}
                                  />
                                </div>
                                <span className="text-danger">
                                  {this.props.error_descriptions.last_name
                                    ? <FormattedMessage id="The last name field is required." />
                                    : null
                                  }
                                </span>
                              </div>
                              <div className="form-group">
                                <label>
                                  <FormattedMessage id="Phone number" /> <span className="text-danger">*</span>
                                </label>
                                <div className="input-with-icon">
                                  <input
                                    type="text"
                                    className="form-control ip"
                                    placeholder="+84"
                                    value={this.state.phone_number}
                                    onChange={this.handleChangePhone}
                                  />
                                </div>  
                                <span className="text-danger">
                                  {this.props.error_descriptions.phone_number
                                    ? <FormattedMessage id="The phone number field is required." />
                                    : null
                                  }
                                </span>
                              </div>
                              <div className="form-group">
                                <label>
                                  <FormattedMessage id="Enter the password" /> <span className="text-danger">*</span>
                                </label>
                                <div className="input-with-icon">
                                  <input
                                    type="password"
                                    className="form-control ip"
                                    placeholder="*******"
                                    value={this.state.re_password}
                                    onChange={this.handleChangeRePassword}
                                  />
                                </div>
                                <span className="text-danger">
                                  {this.props.error_descriptions.re_password
                                    ? <FormattedMessage id="The confirm password field is required." />
                                    : null
                                  }
                                </span>
                              </div>
                              <div className="form-group">
                                <label>
                                  <FormattedMessage id="You are" /> <span className="text-danger">*</span>
                                </label>
                                <select className="form-control" onChange={this.handleChangeRole}>
                                  <option value></option>
                                  <option value={1}>{this.props.intl.formatMessage({ id: "Needer" })}</option>
                                  <option value={2}>{this.props.intl.formatMessage({ id: "Helper" })}</option>
                                </select>
                                <span className="text-danger">
                                  {this.props.error_descriptions.role 
                                    ? <FormattedMessage id="The role field is required." />
                                    : null
                                  }
                                </span>         
                              </div>
                            </Col>
                          </Row>
                        </Container>
                        <div className="form-group css" style={{ width: "150px"}}>
                          <button
                            type="submit"
                            className="btn btn-primary btn-md full-width pop-login"
                          >
                            <FormattedMessage id="Create account" />  
                          </button>
                        </div>
                      </form>
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
  newState.error_descriptions = stateStore.error_descriptions;

  return newState;
};

const mapDispatchToProps = dispatch => {
  return {
    onRegisterButton: ({ component, http }) => {
      http({
        url: "/auth/register",
        method: "POST",
        data: {
          first_name: component.state.first_name,
          last_name: component.state.last_name,
          email: component.state.email,
          password: component.state.password,
          re_password: component.state.re_password,
          phone_number: component.state.phone_number,
          gender: component.state.gender,
          role: component.state.role
        }
      }).then(res => {
        dispatch(register(res.data.response))
        component.props.history.push("/checkotp");
      }).catch(error => {
        dispatch(raiseError(error.response.data.errors))
      })
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Register));