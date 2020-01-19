import React, { Component } from "react";
import { IoMdArrowRoundDown } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
import { IoLogoUsd } from "react-icons/io";
import { injectIntl, FormattedMessage, FormattedNumber } from "react-intl";
import Pagination from "react-js-pagination";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

class ListALLJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      pageRangeDisplayed: 5,
      data: [],
      pagination: {}
    };

    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    this.props
      .http({
        url: "auth/list/post",
        method: "GET"
      })
      .then(res => {
        this.setState({
          data: res.data.response.posts,
          pagination: res.data.response.pagination
        });
      });
  }

  handlePageChange(pageNumber) {
    this.props
      .http({
        url: "auth/list/post",
        method: "GET",
        params: {
          page: pageNumber
        }
      })
      .then(res => {
        this.setState({ data: res.data.response.posts });
      });
    this.setState({ activePage: pageNumber });
  }

  applyJob(post_id) {
    if (this.props.me) {
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
            toast.success("Apply thành công", "Title", {
              displayDuration: 3000
            });
          })
          .catch(error => {
            toast.warning("Bạn đã apply", "Title", {
              displayDuration: 3000
            });
          });
      } else {
        toast.error("Bạn phải là helper", "Title", {
          displayDuration: 3000
        });
      }
    } else {
      toast.error("Hãy đăng nhập để ứng tuyển", "Title", {
        displayDuration: 3000
      });
    }
  }

  render() {
    const ListJob = this.state.data.map((item, idx) => {
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
          <br />
        </div>
      );
    });

    let data = (
      <div className="row">
        <h3 className="text-danger">
          <FormattedMessage id="Dont have the data" />
        </h3>
      </div>
    );

    if (this.state.data.length > 0) {
      data = (
        <div className="row">
          <div className="col-md-12">{ListJob}</div>
        </div>
      );
    }

    return (
      <div className="col-xl-9 col-lg-8">
        {data}
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <Pagination
              activePage={this.state.activePage}
              itemsCountPerPage={this.state.pagination.perPage}
              totalItemsCount={this.state.pagination.total}
              pageRangeDisplayed={this.state.pageRangeDisplayed}
              onChange={this.handlePageChange}
            />
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
  return newState;
};

export default connect(mapStateToProps)(injectIntl(ListALLJob));
