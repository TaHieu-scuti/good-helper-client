import React, { Component } from "react";
import Sidebar from "./../Profile/Sidebar";
import { connect } from "react-redux";
import { IoLogoUsd } from "react-icons/io";
import { FormattedMessage, FormattedNumber,injectIntl } from "react-intl";
import Pagination from "react-js-pagination";
import { Link } from "react-router-dom";
import { FaEdit, FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";

class PostOfNeeder extends Component {
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
        url: "/auth/post/needer/get",
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
        url: "/auth/post/needer/get",
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

  deletePost(post_id) {
    this.props
      .http({
        url: "/auth/post/delete/",
        method: "POST",
        data: {
          post_id :post_id
        }
      })
      .then(res => {
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

  render() {
    const ListJob = this.state.data.map((item, idx) => {
      return (
        <div className="job-new-list" key={idx}>
          <div className="vc-thumb">
            <img className="img-fluid rounded-circle" src={item.avatar} />
          </div>
          <div className="vc-content">
            <h5 className="title">
              <Link to={"/approve/user/" + item.id}>{item.title}</Link>
              <span className="j-full-time">{item.type}</span>
              <Link to={"/edit/post/" + item.id} className="btn download-btn">
                <FaEdit />
              </Link>
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
          <a
            className="btn btn-outline-info bn-det dlt"
            onClick={this.deletePost.bind(this, item.id)}
          >
            <FaTimes />
          </a>
          <br />
        </div>
      );
    });

    let data = (
      <div className="row">
        <p className="text-danger" style={{ margin: "auto" }}>
          <FormattedMessage id="Dont have the data" />
        </p>
      </div>
    );

    if (this.state.data.length > 0) {
      data = (
        <div>
          <div className="row">
            <div className="col-md-12">{ListJob}</div>
          </div>
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

    return (
      <div id="main-wrapper">
        <section className="tr-single-detail gray-bg">
          <div className="container">
            <div className="row">
              <Sidebar user={this.props.user} />
              <div className="col-md-8 col-sm-12">
                <div className="tab-pane active container" id="c-profile">
                  <div className="tr-single-box">
                    <div className="tr-single-header">
                      <h3>
                        <i></i>
                        <FormattedMessage id="My post" />
                      </h3>
                    </div>
                    <div className="tr-single-body">{data}</div>
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

const mapStateToProps = (stateStore, ownProps) => {
  let newState = Object.assign({}, ownProps);
  newState.user = stateStore.me;
  newState.http = stateStore.http;
  return newState;
};

export default connect(mapStateToProps)(injectIntl(PostOfNeeder));
