import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Authenticate from "./Authenticate";
import { connect } from "react-redux";

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
      avatar: [],
      id_card_font: [],
      id_card_backside: []
    };
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
    this.setState({
      avatar: event.target.files[0]
    });
  };

  handelSetValueIdCardFont = event => {
    this.setState({
      id_card_font: event.target.files[0]
    });
  };

  handelSetValueIdCardBackside = event => {
    this.setState({
      id_card_backside: event.target.files[0]
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('id',this.props.id);
    formData.append('first_name',this.state.first_name);
    formData.append('last_name',this.state.last_name);
    formData.append('email',this.state.email);
    formData.append('id_card',this.state.id_card);
    formData.append('phone_number',this.state.phone_number);
    formData.append('gender',this.state.gender);
    formData.append('avatar',this.state.avatar);
    formData.append('id_card_font',this.state.id_card_font);
    formData.append('id_card_backside',this.state.id_card_backside);

    this.props
      .http({
        url: "auth/user/change/profile",
        method: "POST",
        data: formData
      })
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
        <div id="main-wrapper">
          <section class="tr-single-detail gray-bg">
            <div class="container">
              <div class="row">
                <Sidebar user={this.props.user}/>
                <div class="col-md-8 col-sm-12">
                  <div class="tab-content">
                    <div class="tab-pane active container" id="profile">
                    <form onSubmit={this.handleSubmit}>
                      <div className="tr-single-box">
                        <div className="tr-single-header">
                          <h4>
                            <i className="ti-desktop" /> Chỉnh sửa thông tin cá nhân
                          </h4>
                        </div>
                        <div className="tr-single-body">
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                              <div className="form-group">
                                <label>First Name</label>
                                <input
                                  className="form-control"
                                  type="text"
                                  placeholder="first name"
                                  onChange={this.handelSetValueFirstName}
                                  ref="first_name"
                                />
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12">
                              <div className="form-group">
                                <label>Last Name</label>
                                <input
                                  className="form-control"
                                  type="text"
                                  placeholder="last name"
                                  onChange={this.handelSetValueLastName}
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                              <div className="form-group">
                                <label>Email</label>
                                <input
                                  className="form-control"
                                  type="text"
                                  placeholder="email@gmail.com"
                                  onChange={this.handelSetValueEmail}
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                              <div className="form-group">
                                <label>Số CMND</label>
                                <input
                                  className="form-control"
                                  type="number"
                                  onChange={this.handelSetValueIdCard}
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                              <div className="form-group">
                                <label>Số điện thoại</label>
                                <input
                                  className="form-control"
                                  type="text"
                                  onChange={this.handelSetValuePhoneNumber}
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                              <div className="form-group">
                                <label>Giới tính</label>
                                <select  id="appointment-service" class="form-control">  
                                   <option value="nam">Nam</option>
                                   <option value="nữ">Nữ</option>
                               </select>
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12">
                              <div className="form-group">
                                <label>Avatar</label>
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
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12">
                              <div className="form-group">
                                <label>Ảnh mặt trước CMTND </label>
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
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12">
                              <div className="form-group">
                                <label>Ảnh mặt sau CMTND </label>
                                <div className="custom-file">
                                  <input
                                    type="file"
                                    className="custom-file-input"
                                    id="ccover"
                                    onChange={this.handelSetValueIdCardBackside}
                                  />
                                  <label
                                    className="custom-file-label"
                                    htmlFor="ccover"
                                  >
                                    Choose file
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button  type="submit" class="btn btn-info btn-md full-width"> Cập nhật</button> 
                      </form> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    )
  }
}

const mapStateToProps = (stateStore, ownProps) => {
  let newState = Object.assign({}, ownProps);
  newState.user = stateStore.me;
  newState.http = stateStore.http;
  return newState;
};

export default connect(mapStateToProps) (EditProfile);