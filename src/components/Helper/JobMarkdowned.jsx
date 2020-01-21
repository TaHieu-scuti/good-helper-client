import React, { Component } from "react";
import Sidebar from "./../Profile/Sidebar";
import Authenticate from "./../Profile/Authenticate";
import { connect } from "react-redux";
import { IoLogoUsd } from "react-icons/io";
import { FormattedMessage,injectIntl } from "react-intl";
import Pagination from "react-js-pagination";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";

class JobMarkdowned extends Component {
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
        url: "auth/book-mark/list/post/markdown",
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
        url: "auth/book-mark/list/post/markdown",
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

  unMarkdown(post_id){
    this.props
      .http({
        url: "auth/book-mark/unmark",
        method: "POST",
        data: {
          post_id: post_id
        }
      })
      .then(res => {
        this.setState({
          data: res.data.response.posts,
          pagination: res.data.response.pagination
        });
        toast.success(
          this.props.intl.formatMessage({
            id: "Unmark successfully"
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
              <Link to={"/job/detail/" + item.id}>{item.title}</Link>
              <span className="j-full-time">{item.type}</span>
            </h5>
            <button
              className="btn btn-outline-info bn-det cancel"
              onClick={this.unMarkdown.bind(this, item.id)}
            >
              <FaTimes />
            </button>
            <p>{item.category}</p>
            <ul className="vc-info-list">
              <li className="list-inline-item">
                <h5>
                  <FormattedMessage id="Salary" />
                </h5>
                <IoLogoUsd />
                {item.price}
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

    if (this.state.data.length > 0) {
      data = (
        <div className="tr-single-body">
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
      <Authenticate>
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
                          <FormattedMessage id="Job markdown" />
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
      </Authenticate>
    );
  }
}

const mapStateToProps = (stateStore, ownProps) => {
  let newState = Object.assign({}, ownProps);
  newState.user = stateStore.me;
  newState.http = stateStore.http;
  return newState;
};

export default connect(mapStateToProps)(injectIntl(JobMarkdowned));
