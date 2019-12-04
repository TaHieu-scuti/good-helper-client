import React, { Component } from "react";
import logo from "../../assets/img/logo-light.png";
import banner from "../../assets/img/bn-4.jpg";
import { connect } from "react-redux";
import { NavLink , Link } from 'react-router-dom'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onLogoutButton = this.onLogoutButton.bind(this);
  }

  onLogoutButton(e) {
    e.preventDefault();
    this.props.onLogoutButton({ component: this, event: e });
  }

  render() {
    const is_logined = this.props.is_logined;
    let button = (
      <div className="act-buttons">
        <NavLink to="/login"
          className="btn btn-info font-14">
            <i className="ti-shift-right mr-2" />
            Đăng nhập</NavLink>
      </div>
    );

    if (is_logined) {
      button = (
        <div className="act-buttons">
          <NavLink to="/logout"
            className="btn btn-info font-14">
              <i className="ti-shift-right mr-2" />
              Đăng xuất</NavLink>
        </div>
      );
    }

    return (
      <div>
        <div className="topbar" id="top">
          <div className="header exchange-logo">
            <div className="container po-relative">
              <nav className="navbar navbar-expand-lg header-nav-bar">
                <Link className="navbar-brand">
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
                      {" "}
                      <Link
                        className="nav-link "
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Trang chủ{" "}
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      {" "}
                      <Link
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Công việc <i className="fa fa-angle-down m-l-5" />
                      </Link>
                      <ul className="b-none dropdown-menu font-14 animated fadeInUp">
                        <li>
                        <Link href="#" className="dropdown-item">
                            Việc cần gấp
                          </Link>
                        </li>
                        <li>
                        <Link href="#" className="dropdown-item">
                            Việc trong ngày
                          </Link>
                        </li>
                        <li>
                        <Link href="#" className="dropdown-item">
                            Việc dài hạn
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      {" "}
                      <Link
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Giới thiệu
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      {" "}
                      <Link
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Liên hệ{" "}
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
          {" "}
          --&gt;
          <div className="container">
            <h2>Hãy nhận những công việc tốt nhất </h2>
            <p className="lead">Tìm việc , người giúp</p>
            <form className="search-big-form no-border search-shadow">
              <div className="row m-0">
                <div
                  className="col-lg-4 col-md-4 col-sm-12 p-0"
                  style={{ height: "40px" }}
                >
                  <div className="form-group" style={{ height: "40px" }}>
                    <i className="ti-search" />
                    <input
                      type="text"
                      className="form-control b-r"
                      placeholder="Nhập tên công việc"
                      style={{ height: "40px" }}
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                  <div className="form-group">
                    <i className="ti-location-pin" />
                    <input
                      type="text"
                      className="form-control b-r"
                      placeholder="Địa điểm"
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                  <div className="form-group">
                    <select
                      className="js-states form-control"
                      placeholder="chọn danh mục"
                    >
                      <option value>Chọn danh mục</option>
                      <option value={1}>Giúp việc nhà</option>
                      <option value={2}>Giao nhận giấy tờ/tài liệu</option>
                      <option value={3}>Phục vụ nhà hàng/ quán cafe</option>
                      <option value={4}>Gia sư</option>
                      <option value={5}>Dọn dẹp</option>
                      <option value={5}>Shipper</option>
                      <option value={5}>Trông trẻ/ Đón trẻ</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12 p-0">
                  <button type="button" className="btn btn-info full-width">
                    Tìm kiếm
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (stateStore, ownProps) => {
  let newState = Object.assign({}, ownProps);
  newState.http = stateStore.http;
  newState.me = stateStore.me;
  newState.is_logined = stateStore.me != null;

  return newState;
};

export default connect(mapStateToProps)(Header);
