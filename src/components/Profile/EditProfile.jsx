import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Authenticate from "./Authenticate";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { raiseError, updateMe } from "../../lib/redux/actions";
import { FaEdit } from "react-icons/fa";
import imageDefault from "../../assets/img/default-image.png";
import { toast } from 'react-toastify';

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      id_card: "",
      phone_number: "",
      gender: "",
      avatar: "",
      id_card_font: "",
      id_card_backside: "",
      avatarUrl: "",
      IdCardFontUrl: "",
      IdCardBackUrl: "",
      imageAvartarPreviewUrl: "",
      imageIdCardFontPreviewUrl: "",
      imageIdCardBackPreviewUrl: ""
    };
    this.onEditButton = this.onEditButton.bind(this);
  }

  componentWillMount() {
    this.setState({
      first_name: this.props.user.first_name,
      last_name: this.props.user.last_name,
      email: this.props.user.email,
      id_card: this.props.user.id_card,
      phone_number: this.props.user.phone,
      gender: this.props.user.gender,
      avatarUrl: this.props.user.avatar,
      IdCardFontUrl: this.props.user.id_card_font,
      IdCardBackUrl: this.props.user.id_card_backside
    });
  }

  handelSetValueFirstName = event => {
    this.setState({
      first_name: event.target.value
    });
  };

  handelSetValueLastName = event => {
    this.setState({
      last_name: event.target.value
    });
  };

  handelSetValueEmail = event => {
    this.setState({
      email: event.target.value
    });
  };

  handelSetValueIdCard = event => {
    this.setState({
      id_card: event.target.value
    });
  };

  handelSetValuePhoneNumber = event => {
    this.setState({
      phone_number: event.target.value
    });
  };

  handelSetValueGender = event => {
    this.setState({
      gender: event.target.value
    });
  };

  handelSetValueAvatar = event => {
    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      this.setState({
        avatar: file,
        imageAvartarPreviewUrl: reader.result
      });
    };
    reader.readAsDataURL(file);
  };

  handelSetValueIdCardFont = event => {
    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      this.setState({
        id_card_font: file,
        imageIdCardFontPreviewUrl: reader.result
      });
    };
    reader.readAsDataURL(file);
  };

  handelSetValueIdCardBackside = event => {
    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      this.setState({
        id_card_backside: file,
        imageIdCardBackPreviewUrl: reader.result
      });
    };
    reader.readAsDataURL(file);
  };

  onEditButton(e) {
    e.preventDefault();
    this.props.onEditButton({
      component: this,
      event: e,
      http: this.props.http
    });
  }

  render() {
    let avatarPreviewUrl = this.state.imageAvartarPreviewUrl;
    let $avatarPreview = null;
    if (avatarPreviewUrl) {
      $avatarPreview = <img class="img-fluid mx-auto" src={avatarPreviewUrl} />;
    } else if (this.state.avatarUrl.length > 26) {
      $avatarPreview = (
        <img src={this.state.avatarUrl} class="img-fluid mx-auto" />
      );
    } else {
      $avatarPreview = (
        <img
          class="img-fluid mx-auto"
          src={imageDefault}
        />
      );
    }

    let idCardFontPreviewUrl = this.state.imageIdCardFontPreviewUrl;
    let idCardFontPreview = null;
    if (idCardFontPreviewUrl) {
      idCardFontPreview = (
        <img class="img-fluid mx-auto" src={idCardFontPreviewUrl} />
      );
    } else if (this.state.IdCardFontUrl.length > 26) {
      idCardFontPreview = (
        <img src={this.state.IdCardFontUrl} class="img-fluid mx-auto" />
      );
    } else {
      idCardFontPreview = (
        <div>
          <span className="text-danger">
            <FormattedMessage id="Update id card font side" />
          </span>
          <img
            class="img-fluid mx-auto"
            src={imageDefault}
          />
        </div>
      );
    }

    let idCardBackPreviewUrl = this.state.imageIdCardBackPreviewUrl;
    let idCardBackPreview = null;
    if (idCardBackPreviewUrl) {
      idCardBackPreview = (
        <img class="img-fluid mx-auto" src={idCardBackPreviewUrl} />
      );
    } else if (this.state.IdCardBackUrl.length > 26) {
      idCardBackPreview = (
        <img src={this.state.IdCardFontUrl} class="img-fluid mx-auto" />
      );
    } else {
      idCardBackPreview = (
        <div>
          <span className="text-danger">
            <FormattedMessage id="Update id card backside" />
          </span>
          <img
            class="img-fluid mx-auto"
            src={imageDefault}
          />
        </div>
      );
    }

    return (
      <Authenticate>
        <div id="main-wrapper">
          <section className="tr-single-detail gray-bg">
            <div className="container">
              <div className="row">
                <Sidebar user={this.props.user} />
                <div className="col-md-8 col-sm-12">
                  <div className="tab-content">
                    <div class="tab-pane active container" id="profile">
                      <form onSubmit={this.onEditButton}>
                        <div className="tr-single-box">
                          <div className="tr-single-header">
                            <h4>
                              <i>
                                <FaEdit />
                              </i>
                              <FormattedMessage id="Edit profile" />
                            </h4>
                          </div>
                          <div className="tr-single-body">
                            <div className="row">
                              <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                  <label>
                                    <FormattedMessage id="First name" />
                                  </label>
                                  <input
                                    className="form-control"
                                    type="text"
                                    placeholder="first name"
                                    value={this.state.first_name}
                                    onChange={this.handelSetValueFirstName}
                                  />
                                </div>
                                <span className="text-danger">
                                  {this.props.error_descriptions.first_name ? (
                                    <FormattedMessage id="The first name field is wrong format." />
                                  ) : null}
                                </span>
                              </div>
                              <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                  <label>
                                    <FormattedMessage id="Last name" />
                                  </label>
                                  <input
                                    className="form-control"
                                    type="text"
                                    placeholder="last name"
                                    value={this.state.last_name}
                                    onChange={this.handelSetValueLastName}
                                  />
                                </div>
                                <span className="text-danger">
                                  {this.props.error_descriptions.last_name ? (
                                    <FormattedMessage id="The last name field is wrong format." />
                                  ) : null}
                                </span>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                  <label>Email</label>
                                  <input
                                    className="form-control"
                                    type="text"
                                    placeholder="email@gmail.com"
                                    value={this.state.email}
                                    onChange={this.handelSetValueEmail}
                                  />
                                </div>
                                <span className="text-danger">
                                  {this.props.error_descriptions.email ? (
                                    <FormattedMessage id="The email field is required." />
                                  ) : null}
                                </span>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                  <label>
                                    <FormattedMessage id="Number id card" />
                                  </label>
                                  <input
                                    className="form-control"
                                    type="number"
                                    value={this.state.id_card}
                                    onChange={this.handelSetValueIdCard}
                                  />
                                </div>
                                <span className="text-danger">
                                  {this.props.error_descriptions.id_card ? (
                                    <FormattedMessage id="The Id card field is required." />
                                  ) : null}
                                </span>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                  <label>
                                    <FormattedMessage id="Phone number" />
                                  </label>
                                  <input
                                    readOnly
                                    className="form-control"
                                    type="text"
                                    value={this.state.phone_number}
                                    onChange={this.handelSetValuePhoneNumber}
                                  />
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
                                    value={this.state.gender}
                                    onChange={this.handelSetValueGender}
                                  >
                                    <option></option>
                                    <option value="nam">Nam</option>
                                    <option value="nữ">Nữ</option>
                                  </select>
                                </div>
                                <span className="text-danger">
                                  {this.props.error_descriptions.gender ? (
                                    <FormattedMessage id="The gender field is required." />
                                  ) : null}
                                </span>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="form-group">
                                  <label>
                                    <FormattedMessage id="Avatar" />
                                  </label>
                                  <div className="custom-file">
                                    <input
                                      type="file"
                                      className="custom-file-input"
                                      id="clogo"
                                      onChange={this.handelSetValueAvatar}
                                    />
                                    <label
                                      className="custom-file-label"
                                      htmlFor="clogo"
                                    >
                                      Choose file
                                    </label>
                                  </div>
                                </div>
                                {$avatarPreview}
                                <span className="text-danger">
                                  {this.props.error_descriptions.avatar ? (
                                    <FormattedMessage id="The avatar field is wrong format." />
                                  ) : null}
                                </span>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="form-group">
                                  <label>
                                    <FormattedMessage id="Id card font" />{" "}
                                  </label>
                                  <div className="custom-file">
                                    <input
                                      type="file"
                                      className="custom-file-input"
                                      id="ccover"
                                      onChange={this.handelSetValueIdCardFont}
                                    />
                                    <label
                                      className="custom-file-label"
                                      htmlFor="ccover"
                                    >
                                      Choose file
                                    </label>
                                  </div>
                                </div>
                                {idCardFontPreview}
                                <span className="text-danger">
                                  {this.props.error_descriptions
                                    .id_card_font ? (
                                    <FormattedMessage id="The Id card font field is wrong format." />
                                  ) : null}
                                </span>
                              </div>
                              <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                  <label>
                                    <FormattedMessage id="Id card backside" />
                                  </label>
                                  <div className="custom-file">
                                    <input
                                      type="file"
                                      className="custom-file-input"
                                      id="ccover"
                                      onChange={
                                        this.handelSetValueIdCardBackside
                                      }
                                    />
                                    <label
                                      className="custom-file-label"
                                      htmlFor="ccover"
                                    >
                                      Choose file
                                    </label>
                                  </div>
                                </div>
                                {idCardBackPreview}
                                <div>
                                  <span className="text-danger">
                                    {this.props.error_descriptions
                                      .id_card_backside ? (
                                      <FormattedMessage id="The Id card back field is wrong format." />
                                    ) : null}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          type="submit"
                          class="btn btn-info btn-md full-width"
                        >
                          {" "}
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
    onEditButton: ({ component, http }) => {
      const formData = new FormData();
      formData.append("id", component.props.user.id);
      formData.append("first_name", component.state.first_name);
      formData.append("last_name", component.state.last_name);
      formData.append("email", component.state.email);
      formData.append("id_card", component.state.id_card);
      formData.append("phone_number", component.state.phone_number);
      formData.append("gender", component.state.gender);
      formData.append("avatar", component.state.avatar);
      formData.append("id_card_font", component.state.id_card_font);
      formData.append("id_card_backside", component.state.id_card_backside);

      http({
        url: "auth/user/change/profile",
        method: "POST",
        data: formData,
        config: { headers: { "Content-Type": "multipart/form-data" } }
      })
        .then(res => {
          dispatch(updateMe(res.data.response));
          toast.success('Cập nhật thành công', 'Title', {displayDuration:3000});
          component.props.history.push("/profile");
        })
        .catch(error => {
          dispatch(raiseError(error.response.data.errors));
        });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
