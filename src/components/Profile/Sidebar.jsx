import React, { Component } from "react";
import { FaUserAlt , FaUserEdit , FaExpeditedssl ,FaFile } from "react-icons/fa";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";


class Sidebar extends Component {
  render() {
    return (
      <div class="col-md-4 col-sm-12">
        <div class="dashboard-wrap">
          <div class="dashboard-thumb">
            <div class="dashboard-th-pic">
              <img
                src={this.props.user.avatar}
                class="img-fluid mx-auto img-circle"
                alt=""
              />
            </div>
            <h4 class="mb-1">{this.props.user.first_name} {this.props.user.last_name}</h4>
            <span class="text-success">Web Designer</span>
          </div>
          <ul class="nav dashboard-verticle-nav">
            <li class="nav-item">
              <a class="nav-link" href="">
               <i><FaFile /></i> <FormattedMessage id="Task manager" />
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="">
                <i><FaUserAlt /></i><FormattedMessage id="Personal informations" />
              </a>
            </li>
            <li class="nav-item">
            <Link to="/edit/profile" class="nav-link active">
                <i><FaUserEdit /></i> <FormattedMessage id="Editting informations" />
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#change-password">
                <i><FaExpeditedssl /></i><FormattedMessage id="Change password" />
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="login.html">
                <i class="lni-exit"></i>Đăng xuất
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
