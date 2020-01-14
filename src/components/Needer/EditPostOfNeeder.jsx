import React, { Component } from "react";
import Sidebar from "./../Profile/Sidebar";
import AuthenticateNeeder from "./AuthenticateNeeder";
import { connect } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { FormattedMessage, injectIntl } from "react-intl";
import { Editor } from "@tinymce/tinymce-react";
import Datetime from "react-datetime";
import { raiseError } from "../../lib/redux/actions";
import moment from "moment";

class AddNewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      detail: "",
      amount_member: "",
      price: "",
      gender: "",
      start_time: "",
      end_time: "",
      type: "",
      location_id: "",
      category_id: "",
      category: [],
      location: []
    };
    this.onAddButton = this.onAddButton.bind(this);
  }

  componentDidMount() {
    this.props.http("auth/category").then(res => {
      this.setState({ category: res.data.response });
    });

    this.props.http("auth/location").then(res => {
      this.setState({ location: res.data.response });
    });

    this.props.http({
        url: "auth/detail/post",
        method: "POST",
        data: {
            post_id: this.props.match.params.id  
        }
      })
      .then(res => {
        this.setState({
            id: res.data.response.id,
            title: res.data.response.title,
            detail: res.data.response.detail,
            amount_member: res.data.response.amount_member,
            price: res.data.response.price,
            gender: res.data.response.gender,
            start_time: res.data.response.start_time,
            end_time: res.data.response.end_time,
            type: res.data.response.type,
            location_id: res.data.response.location_id,
            category_id: res.data.response.category_id
          });
      })
  }

  handelSetValueTitle = event => {
    this.setState({
      title: event.target.value
    });
  };

  handelSetValuePrice = event => {
    this.setState({
      price: event.target.value
    });
  };

  handelSetValueAmountMember = event => {
    this.setState({
      amount_member: event.target.value
    });
  };

  handelSetValueStartTime = newDate => {
    this.setState({
      start_time: moment(new Date(newDate)).format("YYYY-MM-DD HH:mm:ss")
    });
  };

  handelSetValueEndTime = newDate => {
    this.setState({
      end_time: moment(new Date(newDate)).format("YYYY-MM-DD HH:mm:ss")
    });
  };

  handleEditorChange = event => {
    this.setState({
      detail: event.target.getContent()
    });
  };

  onChangeCategory = event => {
    this.setState({
      category_id: event.target.value
    });
  };

  onChangeLocation = event => {
    this.setState({
      location_id: event.target.value
    });
  };

  onChangeGender = event => {
    this.setState({
      gender: event.target.value
    });
  };
  onChangeType = event => {
    this.setState({
      type: event.target.value
    });
  };

  onAddButton(e) {
    e.preventDefault();
    this.props.onAddButton({
      component: this,
      event: e,
      http: this.props.http
    });
  }

  render() {
    return (
      <AuthenticateNeeder>
        <div id="main-wrapper">
          <section className="tr-single-detail gray-bg">
            <div className="container">
              <div className="row">
                <Sidebar user={this.props.user} />
                <div className="col-md-8 col-sm-12">
                  <div className="tab-content">
                    <div className="tab-pane active container" id="profile">
                      <form onSubmit={this.onAddButton}>
                        <div className="tr-single-box">
                          <div className="tr-single-header">
                            <h4>
                              <i>
                                <FaEdit />
                              </i>
                              <FormattedMessage id="Edit post" />
                            </h4>
                          </div>
                          <div className="tr-single-body">
                            <div className="row">
                              <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                  <label>
                                    <FormattedMessage id="Title" />
                                  </label>
                                  <input
                                    className="form-control"
                                    type="text"
                                    placeholder={this.props.intl.formatMessage({
                                      id: "Title"
                                    })}
                                    onChange={this.handelSetValueTitle}
                                    value={this.state.title}
                                  />
                                </div>
                                <span className="text-danger">
                                  {this.props.error_descriptions.title ? (
                                    <FormattedMessage
                                      id={this.props.error_descriptions.title}
                                    />
                                  ) : null}
                                </span>
                              </div>
                              <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                  <label>
                                    <FormattedMessage id="Detail" />
                                  </label>
                                  <Editor
                                    apiKey="2cgx00mtoyqecu5epm0lwfhnd8dlvg5zzt32fbqbgx9fg1u0"
                                    init={{
                                      height: 200,
                                      menubar: false,
                                      plugins: [
                                        "advlist autolink lists link image charmap print preview anchor",
                                        "searchreplace visualblocks code fullscreen",
                                        "insertdatetime media table paste code help wordcount"
                                      ],
                                      toolbar:
                                        "undo redo | formatselect | bold italic backcolor | \
                                        alignleft aligncenter alignright alignjustify | \
                                        bullist numlist outdent indent | removeformat | help"
                                    }}
                                    onChange={this.handleEditorChange}
                                    value={this.state.detail}
                                  />
                                </div>
                                <span className="text-danger">
                                  {this.props.error_descriptions.detail ? (
                                    <FormattedMessage
                                      id={this.props.error_descriptions.detail}
                                    />
                                  ) : null}
                                </span>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                  <label>
                                    <FormattedMessage id="Salary" />
                                  </label>
                                  <input
                                    className="form-control"
                                    type="number"
                                    onChange={this.handelSetValuePrice}
                                    value={this.state.price}
                                  />
                                  <span className="text-danger">
                                    {this.props.error_descriptions.price ? (
                                      <FormattedMessage
                                        id={this.props.error_descriptions.price}
                                      />
                                    ) : null}
                                  </span>
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                  <label>
                                    <FormattedMessage id="Amount member" />
                                  </label>
                                  <input
                                    className="form-control"
                                    type="number"
                                    onChange={this.handelSetValueAmountMember}
                                    value={this.state.amount_member}
                                  />
                                  <span className="text-danger">
                                    {this.props.error_descriptions
                                      .amount_member ? (
                                      <FormattedMessage
                                        id={
                                          this.props.error_descriptions
                                            .amount_member
                                        }
                                      />
                                    ) : null}
                                  </span>
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                  <label>
                                    <FormattedMessage id="Category" />
                                  </label>
                                  <select
                                    className="js-states form-control"
                                    onChange={this.onChangeCategory}
                                    value={this.state.category_id}
                                  >
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
                                  <span className="text-danger">
                                    {this.props.error_descriptions
                                      .category_id ? (
                                      <FormattedMessage
                                        id={
                                          this.props.error_descriptions
                                            .category_id
                                        }
                                      />
                                    ) : null}
                                  </span>
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                  <label>
                                    <FormattedMessage id="Location" />
                                  </label>
                                  <select
                                    className="js-states form-control"
                                    onChange={this.onChangeLocation}
                                    value={this.state.location_id}
                                  >
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
                                  <span className="text-danger">
                                    {this.props.error_descriptions
                                      .location_id ? (
                                      <FormattedMessage
                                        id={
                                          this.props.error_descriptions
                                            .location_id
                                        }
                                      />
                                    ) : null}
                                  </span>
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                  <label>
                                    <FormattedMessage id="Gender" />
                                  </label>
                                  <select
                                    id="appointment-service"
                                    className="form-control"
                                    onChange={this.onChangeGender}
                                    value={this.state.gender}
                                  >
                                    <option value="">
                                      {this.props.intl.formatMessage({
                                        id: "Gender"
                                      })}
                                    </option>
                                    <option value="nam">
                                      {this.props.intl.formatMessage({
                                        id: "Male"
                                      })}
                                    </option>
                                    <option value="nữ">
                                      {this.props.intl.formatMessage({
                                        id: "Female"
                                      })}
                                    </option>
                                  </select>
                                  <span className="text-danger">
                                    {this.props.error_descriptions.gender ? (
                                      <FormattedMessage
                                        id={
                                          this.props.error_descriptions.gender
                                        }
                                      />
                                    ) : null}
                                  </span>
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                  <label>
                                    <FormattedMessage id="Type" />
                                  </label>
                                  <select
                                    id="appointment-service"
                                    className="form-control"
                                    onChange={this.onChangeType}
                                    value={this.state.type}
                                  >
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
                                  <span className="text-danger">
                                    {this.props.error_descriptions.type ? (
                                      <FormattedMessage
                                        id={this.props.error_descriptions.type}
                                      />
                                    ) : null}
                                  </span>
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                  <label>
                                    <FormattedMessage id="Start time" />
                                  </label>
                                  <Datetime
                                    dateFormat="YYYY-MM-DD" timeFormat="HH:mm:ss"
                                    onChange={this.handelSetValueStartTime}
                                    value={this.state.start_time}
                                  />
                                  <span className="text-danger">
                                    {this.props.error_descriptions
                                      .start_time ? (
                                      <FormattedMessage
                                        id={
                                          this.props.error_descriptions
                                            .start_time
                                        }
                                      />
                                    ) : null}
                                  </span>
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                  <label>
                                    <FormattedMessage id="End time" />
                                  </label>
                                  <Datetime
                                    dateFormat="YYYY-MM-DD" timeFormat="HH:mm:ss"
                                    onChange={this.handelSetValueEndTime}
                                    value={this.state.end_time}
                                  />
                                  <span className="text-danger">
                                    {this.props.error_descriptions.end_time ? (
                                      <FormattedMessage
                                        id={
                                          this.props.error_descriptions.end_time
                                        }
                                      />
                                    ) : null}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-info btn-md full-width"
                        >
                          Cập nhật
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </AuthenticateNeeder>
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
    onAddButton: ({ component, http }) => {
      http({
        url: "auth/post/edit",
        method: "POST",
        data: {
          id: component.state.id,
          title: component.state.title,
          detail: component.state.detail,
          amount_member: component.state.amount_member, 
          price: component.state.price,
          gender: component.state.gender,
          start_time: component.state.start_time,
          end_time: component.state.end_time,
          type: component.state.type,
          location_id: component.state.location_id,
          category_id: component.state.category_id
        }
      })
      .then(res => {
          component.props.history.push("/profile");
      })
      .catch(error => {
          dispatch(raiseError(error.response.data.errors));
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(AddNewPost));