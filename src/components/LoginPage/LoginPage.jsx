import React, { Component } from "react";
import image from "../../assets/img/logo.png";

class LoginPage extends Component {
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
                        Trang chủ
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
                        Công việc <i className="fa fa-angle-down m-l-5" />
                      </a>
                      <ul className="b-none dropdown-menu font-14 animated fadeInUp">
                        <li>
                          <a className="dropdown-item" href="blog.html">
                            Việc cần gấp
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="pricing.html">
                            Việc trong ngày
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="login.html">
                            Việc dài hạn
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
                        Giới thiệu{" "}
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
                        Liên hệ{" "}
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
                      Sign In
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
                    <form>
                      <h4 className="modal-header-title">Đăng nhập</h4>
                      <div className="form-group css">
                        <label>Email</label>
                        <div className="input-with-icon">
                          <input
                            type="text"
                            className="form-control ip"
                            placeholder="Email"
                          />
                          <i className="ti-user" />
                        </div>
                      </div>
                      <div className="form-group css">
                        <label>Password</label>
                        <div className="input-with-icon">
                          <input
                            type="password"
                            className="form-control ip"
                            placeholder="*******"
                          />
                          <i className="ti-unlock" />
                        </div>
                      </div>
                      <div className="form-group css">
                        <button
                          type="submit"
                          className="btn btn-primary btn-md full-width pop-login"
                        >
                          Đăng nhập
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
                            Đăng kí
                          </a>
                        </div>
                        <div className="col-6 tx">
                          <a href="#">
                            <i className="ti-help" />
                            Quên mật khẩu{" "}
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
export default LoginPage;
