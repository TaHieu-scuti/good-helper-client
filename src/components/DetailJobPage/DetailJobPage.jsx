import React, { Component } from "react";
import {
  FaSearchLocation,
  FaPhone,
  FaBook,
  FaBookmark,
  FaMailBulk,
  FaMoneyBillAlt,
  FaStopwatch,
  FaTransgender,
  FaMale,
  FaEnvelope,
  FaBookOpen
} from "react-icons/fa";
import { connect } from "react-redux";
import { injectIntl, FormattedMessage } from "react-intl";
import { updateJob } from "../../lib/redux/actions";

class DetailJobPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobDetail: []
    };
  }

  componentDidMount() {
    this.props
      .http("auth/detail/post/" + this.props.match.params.id)
      .then(res => {
        this.setState({ jobDetail: res.data.response });
        this.props.updateJob({
          title: res.data.response.title,
          category: res.data.response.category,
          location: res.data.response.location,
          img: res.data.response.avatar
        });
      });
  }
  render() {
    return (
      <section className="tr-single-detail gray-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-12 center-block">
              <div className="tr-single-box">
                <div className="tr-single-header">
                  <h3>
                    <FaBook /> <FormattedMessage id="Job details" />
                  </h3>
                </div>
                <div className="tr-single-body">
                  <p>{this.state.jobDetail.detail}</p>
                </div>
              </div>
              <a
                href="javascript:void(0)"
                data-toggle="modal"
                data-target="#apply"
                className="btn btn-info mb-2 mb-5"
                style={{ marginLeft: "42%" }}
              >
                {" "}
                <FormattedMessage id="Apply" />
              </a>
            </div>
            {/* Sidebar Start */}
            <div className="col-md-4 col-sm-12">
              <div className="offer-btn-wrap mb-4">
                <a
                  href="markdown-job.html"
                  className="btn btn-info btn-md full-width"
                >
                  <FaBookmark />
                  <FormattedMessage id="Markdown job" />
                </a>
              </div>
              {/* Job Overview */}
              <div className="tr-single-box">
                <div className="tr-single-header">
                  <h3>
                    <FaBookOpen /> <FormattedMessage id="Description" />
                  </h3>
                </div>
                <div className="tr-single-body">
                  <ul className="extra-service">
                    <li>
                      <div className="icon-box-icon-block">
                        <div className="icon-box-round">
                          <FaMoneyBillAlt />
                        </div>
                        <div className="icon-box-text">
                          <strong className="d-block">
                            <FormattedMessage id="Salary" />
                          </strong>
                          {this.state.jobDetail.price}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="icon-box-icon-block">
                        <div className="icon-box-round">
                          <FaStopwatch />
                        </div>
                        <div className="icon-box-text">
                          <strong className="d-block">
                            <FormattedMessage id="Start time" />
                          </strong>
                          {this.state.jobDetail.start_time}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="icon-box-icon-block">
                        <div className="icon-box-round">
                          <FaStopwatch />
                        </div>
                        <div className="icon-box-text">
                          <strong className="d-block">
                            <FormattedMessage id="End time" />
                          </strong>
                          {this.state.jobDetail.end_time}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="icon-box-icon-block">
                        <div className="icon-box-round">
                          <FaTransgender />
                        </div>
                        <div className="icon-box-text">
                          <strong className="d-block">
                            <FormattedMessage id="Gender" />
                            {this.state.jobDetail.gender}
                          </strong>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="icon-box-icon-block">
                        <div className="icon-box-round">
                          <FaMale />
                        </div>
                        <div className="icon-box-text">
                          <strong className="d-block">
                            <FormattedMessage id="Amount member" />
                          </strong>
                          {this.state.jobDetail.amount_member} người
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Company Address */}
              <div className="tr-single-box">
                <div className="tr-single-header">
                  <h3>
                    <FaMailBulk /> <FormattedMessage id="Info contact" />
                  </h3>
                </div>
                <div className="tr-single-body">
                  <ul className="extra-service">
                    <li>
                      <div className="icon-box-icon-block">
                        <div className="icon-box-round">
                          <FaSearchLocation />
                        </div>
                        <div className="icon-box-text">
                          {this.state.jobDetail.location}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="icon-box-icon-block">
                        <div className="icon-box-round">
                          <FaPhone />
                        </div>
                        <div className="icon-box-text">
                          {this.state.jobDetail.phone_number}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="icon-box-icon-block">
                        <div className="icon-box-round">
                          <FaEnvelope />
                        </div>
                        <div className="icon-box-text">
                          {this.state.jobDetail.email}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (stateStore, ownProps) => {
  let newState = Object.assign({}, ownProps);
  newState.http = stateStore.http;
  return newState;
};

const mapDispatchToProps = dispatch => {
  return {
    updateJob: jobs => dispatch(updateJob(jobs))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailJobPage);
