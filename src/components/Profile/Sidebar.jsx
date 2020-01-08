import React, { Component } from "react";
import { FaUserAlt, FaUserEdit, FaExpeditedssl, FaFile } from "react-icons/fa";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
      <div className="col-md-4 col-sm-12">
        <div className="dashboard-wrap">
          <div className="dashboard-thumb">
            <div className="dashboard-th-pic">
              {this.props.user.avatar ? (
                <img
                  src={this.props.user.avatar}
                  className="img-fluid mx-auto img-circle"
                  alt=""
                />
              ) : (
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNJJJF3UZxmQ189Jv3hkpvsymvs-g7aquSOvJos7Mn54fGEGn4&s"
                  className="img-fluid mx-auto img-circle"
                  alt=""
                />
              )}
            </div>
            <h4 className="mb-1">
              {this.props.user.first_name} {this.props.user.last_name}
            </h4>
            <span className="text-success">Web Designer</span>
          </div>
          <ul className="nav dashboard-verticle-nav">
            <li className="nav-item">
              <a className="nav-link" href="">
                <i>
                  <FaFile />
                </i>{" "}
                <FormattedMessage id="Task manager" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="">
                <i>
                  <FaUserAlt />
                </i>
                <FormattedMessage id="Personal informations" />
              </a>
            </li>
            <li className="nav-item">
              <Link to="/edit/profile" className="nav-link active">
                <i>
                  <FaUserEdit />
                </i>{" "}
                <FormattedMessage id="Editting informations" />
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#change-password">
                <i>
                  <FaExpeditedssl />
                </i>
                <FormattedMessage id="Change password" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="login.html">
                <i className="lni-exit"></i>Đăng xuất
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
