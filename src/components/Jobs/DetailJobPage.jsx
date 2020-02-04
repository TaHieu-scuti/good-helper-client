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
import { injectIntl, FormattedMessage, FormattedNumber } from "react-intl";
import { updateJob } from "../../lib/redux/actions";
import Interweave from "interweave";
import { toast } from "react-toastify";
import moment from "moment";
import "moment/locale/vi";
moment.locale("vi");

class DetailJobPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobDetail: ""
    };
    this.onHandleJob = this.onHandleJob.bind(this);
  }

  applyEndpoint = "/auth/post/apply";
  markdownEndpoint = "/auth/book-mark/post";

  componentDidMount() {
    this.props
      .http({
        url: "auth/detail/post",
        method: "POST",
        data: {
          post_id: this.props.match.params.id
        }
      })
      .then(res => {
        this.setState({
          jobDetail: res.data.response
        });
        this.props.updateJob({
          title: res.data.response.title,
          category: res.data.response.category,
          location: res.data.response.location,
          img: res.data.response.avatar
        });
      });
  }

  onHandleJob(post_id, path, messageSuccess, messageError) {
    console.log(messageSuccess);
    
    if (!this.props.me) {
      this.props.history.push("/login");
      return;
    }

    if (!this.props.me.id_card) {
      toast.error(
        this.props.intl.formatMessage({
          id: "You have to update your information"
        }),
        "Title",
        {
          displayDuration: 3000
        }
      );
      return;
    }

    if (this.props.me.role === 2) {
      this.props
        .http({
          url: path,
          method: "POST",
          data: {
            post_id: post_id
          }
        })
        .then(res => {
          this.props
            .http({
              url: "auth/detail/post",
              method: "POST",
              data: {
                post_id: this.props.match.params.id
              }
            })
            .then(res => {
              this.setState({
                jobDetail: res.data.response
              });
              this.props.updateJob({
                title: res.data.response.title,
                category: res.data.response.category,
                location: res.data.response.location,
                img: res.data.response.avatar
              });
            });
          toast.success(
            this.props.intl.formatMessage({
              id: messageSuccess
            }),
            "Title",
            {
              displayDuration: 3000
            }
          );
        })
        .catch(error => {
          toast.warning(
            this.props.intl.formatMessage({
              id: messageError
            }),
            "Title",
            {
              displayDuration: 3000
            }
          );
        });
    }
  }

  render() {
    return (
      <section
        className="tr-single-detail gray-bg"
        style={{ background: "#f6f7fb" }}
      >
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
                  <Interweave content={this.state.jobDetail.detail} />
                </div>
              </div>
              {this.props.me &&
                this.props.me.role !== 1 &&
                this.state.jobDetail.is_apply === 0 && (
                  <button
                    href="javascript:void(0)"
                    data-toggle="modal"
                    data-target="#apply"
                    className="btn btn-info mb-2 mb-5"
                    style={{ marginLeft: "42%" }}
                    onClick={(
                      messageSuccess = 'Apply successfully',
                      messageError = 'Applied'
                    ) =>
                      this.onHandleJob(
                        this.state.jobDetail.id,
                        this.applyEndpoint,
                        messageSuccess,
                        messageError
                      )
                    }
                  >
                    <FormattedMessage id="Apply" />
                  </button>
                )}
              {this.props.me &&
                this.props.me.role !== 1 &&
                this.state.jobDetail.is_apply === 1 && (
                  <p
                    className="btn btn-info mb-2 mb-5 nut"
                    style={{ marginLeft: "42%" }}
                  >
                    <FormattedMessage id="Applied" />
                  </p>
                )}
            </div>
            {/* Sidebar Start */}
            <div className="col-md-4 col-sm-12">
              <div className="offer-btn-wrap mb-4">
                {this.props.me &&
                  this.props.me.role !== 1 &&
                  this.state.jobDetail.is_bookmark === 0 && (
                    <button
                      className="btn btn-info btn-md full-width"
                      onClick={(
                        messageSuccess = "Save successful",
                        messageError = "Saved"
                      ) =>
                        this.onHandleJob(
                          this.state.jobDetail.id,
                          this.markdownEndpoint,
                          messageSuccess,
                          messageError
                        )
                      }
                    >
                      >
                      <FaBookmark />
                      <FormattedMessage id="Markdown job" />
                    </button>
                  )}

                {this.props.me &&
                  this.props.me.role !== 1 &&
                  this.state.jobDetail.is_bookmark === 1 && (
                    <button className="btn btn-info btn-md full-width">
                      <FaBookmark />
                      <FormattedMessage id="Saved" />
                    </button>
                  )}
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
                          <FormattedNumber value={this.state.jobDetail.price} />{" "}
                          VND
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
                          {moment(new Date(this.state.jobDetail.start_time))
                            .lang("vi")
                            .format("LLL")}
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
                          {moment(new Date(this.state.jobDetail.end_time))
                            .lang("vi")
                            .format("LLL")}
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
                          </strong>
                          {this.state.jobDetail.gender}
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
                        {this.props.me &&
                        this.props.me.role !== 1 &&
                        this.state.jobDetail.is_apply === 1 ? (
                          <div className="icon-box-text">
                            {this.state.jobDetail.phone_number}
                          </div>
                        ) : (
                          <span className="text-danger">
                            {" "}
                            <FormattedMessage id="Apply to contact" />
                          </span>
                        )}
                      </div>
                    </li>
                    <li>
                      <div className="icon-box-icon-block">
                        <div className="icon-box-round">
                          <FaEnvelope />
                        </div>
                        {this.props.me &&
                        this.props.me.role !== 1 &&
                        this.state.jobDetail.is_apply === 1 ? (
                          <div className="icon-box-text">
                            {this.state.jobDetail.email}
                          </div>
                        ) : (
                          <span className="text-danger">
                            {" "}
                            <FormattedMessage id="Apply to contact" />
                          </span>
                        )}
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
  newState.me = stateStore.me;
  return newState;
};

const mapDispatchToProps = dispatch => {
  return {
    updateJob: jobs => dispatch(updateJob(jobs))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(DetailJobPage));
