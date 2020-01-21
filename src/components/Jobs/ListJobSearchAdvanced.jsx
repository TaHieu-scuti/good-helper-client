import React, { Component } from "react";
import { IoMdArrowRoundDown } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
import { IoLogoUsd } from "react-icons/io";
import { injectIntl, FormattedMessage, FormattedNumber } from "react-intl";
import Pagination from "react-js-pagination";
import { connect } from "react-redux";
import { searchAdvanced } from "../../lib/redux/actions";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FaBookmark } from "react-icons/fa";

class ListJobSearchAdvanced extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      pageRangeDisplayed: 5,
      search: {
        title: "",
        category_id: "",
        location_id: "",
        type: "",
        gender: ""
      }
    };

    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(pageNumber) {
    this.props.handlePageChange({
      component: this,
      http: this.props.http,
      pageNumber: pageNumber
    });
  }

  applyJob(post_id) {
    if (!this.props.me) {
      this.props.history.push("/login");
      return;
    }

    if (this.props.me.role == 2) {
      this.props
        .http({
          url: "/auth/post/apply",
          method: "POST",
          data: {
            post_id: post_id
          }
        })
        .then(res => {
          toast.success(
            this.props.intl.formatMessage({
              id: "Apply successfully"
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
              id: "Appied"
            }),
            "Title",
            {
              displayDuration: 3000
            }
          );
        });
    }
  }

  markdownJob(post_id) {
    if (!this.props.me) {
      this.props.history.push("/login");
      return;
    }
    if (this.props.me.role == 2) {
      this.props
        .http({
          url: "/auth/book-mark/post",
          method: "POST",
          data: {
            post_id: post_id
          }
        })
        .then(res => {
          toast.success(
            this.props.intl.formatMessage({
              id: "Save successful"
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
              id: "Saved"
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
    const ListJob = this.props.searchAdvanced.posts.map((item, idx) => {
      return (
        <div className="job-new-list" key={idx}>
          <div className="vc-thumb">
            <img className="img-fluid rounded-circle" src={item.avatar} />
          </div>
          <div className="vc-content">
            <h5 className="title">
              <Link to={"/job/detail/" + item.id}>{item.title}</Link>
              <span className="j-full-time">{item.type}</span>
              <a href="#" className="btn download-btn">
                <IoMdArrowRoundDown />
              </a>
              {!this.props.me ||
                (this.props.me && this.props.me.role != 1 && (
                  <button
                    className="btn btn-outline-info bn-det cancel"
                    onClick={this.markdownJob.bind(this, item.id)}
                  >
                    <FaBookmark />
                  </button>
                ))}
            </h5>
            <p>{item.category}</p>
            <ul className="vc-info-list">
              <li className="list-inline-item">
                <h5>
                  <FormattedMessage id="Salary" />
                </h5>
                <IoLogoUsd />
                <FormattedNumber value={item.price} /> đ
              </li>
              <li className="list-inline-item">
                <h5>
                  <FormattedMessage id="Start" />
                </h5>
                {item.start_time}
              </li>
              <li className="list-inline-item">
                <h5>
                  <FormattedMessage id="Location" />
                </h5>
                <div className="skills">{item.location}</div>
              </li>
            </ul>
          </div>
          <br />
          {!this.props.me ||
            (this.props.me && this.props.me.role != 1 && (
              <button
                className="btn btn-outline-info bn-det"
                href="#"
                style={{ marginTop: "20px" }}
                onClick={this.applyJob.bind(this, item.id)}
              >
                <FormattedMessage id="Apply" />
                <IoMdArrowForward />
              </button>
            ))}
        </div>
      );
    });

    let data = (
      <div className="tr-single-body" style= {{height: "500px"}}>
      <div className="row">
        <p className="text-danger" style={{margin: "auto"}}>
          <FormattedMessage id="Dont have the data" />
        </p>
      </div>
      </div>
    );

    if (this.props.searchAdvanced.posts.length > 0) {
      data = (
        <div>
          <div className="row">
            <div className="col-md-12">{ListJob}</div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <Pagination
                activePage={this.state.activePage}
                itemsCountPerPage={this.props.searchAdvanced.pagination.perPage}
                totalItemsCount={this.props.searchAdvanced.pagination.total}
                pageRangeDisplayed={this.state.pageRangeDisplayed}
                onChange={this.handlePageChange}
              />
            </div>
          </div>
        </div>
      );
    }

    return <div className="col-xl-9 col-lg-8">{data}</div>;
  }
}

const mapStateToProps = (stateStore, ownProps) => {
  let newState = Object.assign({}, ownProps);

  newState.http = stateStore.http;
  newState.searchAdvanced = stateStore.searchAdvanced;
  newState.me = stateStore.me;

  return newState;
};

const mapDispatchToProps = dispatch => {
  return {
    handlePageChange: ({ component, http, pageNumber }) => {
      http({
        url: "/auth/filter/post",
        method: "POST",
        params: {
          page: pageNumber
        },
        data: {
          title: component.state.search.title,
          location_id: component.state.search.location_id,
          category_id: component.state.search.category_id,
          gender: component.state.search.gender,
          type: component.state.search.type
        }
      }).then(res => {
        dispatch(searchAdvanced(res.data.response));
      });
      component.setState({ activePage: pageNumber });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(ListJobSearchAdvanced));
