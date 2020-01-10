import React, { Component } from "react";
import Sidebar from "./../Profile/Sidebar";
import AuthenticateNeeder from "./AuthenticateNeeder";
import { connect } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { FormattedMessage, injectIntl } from "react-intl";
import { Editor } from "@tinymce/tinymce-react";
import DateTimeField from "react-bootstrap-datetimepicker"

class AddNewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  componentDidMount() {
    this.props.http("auth/category").then(res => {
      this.setState({ category: res.data.response });
    });

    this.props.http("auth/location").then(res => {
      this.setState({ location: res.data.response });
    });
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

  handelSetValueStartTime = event => {
    this.setState({
      start_time: event.target.value
    });
  };

  handelSetValueEndTime = event => {
    this.setState({
      end_time: event.target.value
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
      gender : event.target.value
    });
  };

  render() {
    console.log(this.state);
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
                      <form onSubmit={this.onEditButton}>
                        <div className="tr-single-box">
                          <div className="tr-single-header">
                            <h4>
                              <i>
                                <FaEdit />
                              </i>
                              <FormattedMessage id="Add post" />
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
                                  />
                                </div>
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
                                  />
                                </div>
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
                                  />
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
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                  <label>
                                    <FormattedMessage id="Start time" />
                                  </label>
                                  <input
                                    className="form-control"
                                    type="date"
                                    onChange={this.handelSetValueStartTime}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                  <label>
                                    <FormattedMessage id="End time" />
                                  </label>
                                  <input
                                    className="form-control"
                                    type="date"
                                    onChange={this.handelSetValueEndTime}
                                  />
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
                                </div>
                              </div>
                              {/* <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                  <DateTimeField/>
                                  </div>
                                </div> */}
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
  return newState;
};

export default connect(mapStateToProps)(injectIntl(AddNewPost));
