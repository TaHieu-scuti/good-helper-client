import React, { Component } from "react";
import {
  FaLocationArrow,
} from "react-icons/fa";
import { FormattedMessage } from "react-intl";


class NameJob extends Component {
  render() {
    return (
      <div className="container">
        <div className="row m-0 align-items-end detail-swap">
          <div className="tr-list-wrap namejob">
            <div className="tr-list-detail">
              <div className="tr-list-thumb">
                <img
                  src={this.props.detailJob.img}
                  className="ima img-responsive"
                  alt=""
                />
              </div>
              <div className="tr-list-info">
                <h4 className="mb-1">{this.props.detailJob.title}</h4>
                <h6 className="font-14">
                  <a href="company-detail.html" className="text-warning">
                  <FormattedMessage id="Category" /> : {this.props.detailJob.category}
                  </a>
                </h6>
                <p className="mb-1">
                  <FaLocationArrow />
                  {this.props.detailJob.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NameJob;
