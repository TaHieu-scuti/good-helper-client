import React, { Component } from "react";
import { IoMdArrowRoundDown } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
import { IoLogoUsd } from "react-icons/io";
import { injectIntl, FormattedMessage } from "react-intl";
import Pagination from "react-js-pagination";
import { connect } from "react-redux";

class ListALLJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      pageRangeDisplayed: 5,
      data: []
    };

    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    this.setState({ data: this.props.listJob.posts });
  }

  handlePageChange(pageNumber) {
    this.props.http({
      url: "auth/post/get?page=" + pageNumber,
      method: "GET"
    }).then(res => {
      this.setState({ data: res.data.response.posts });
    });

    this.setState({ activePage: pageNumber });
  }

  render() {
    console.log(this.props.listJob)
    const ListJob = this.state.data.map((item, idx) => {
      return (
        <div className="job-new-list" key={idx}>
          <div className="vc-thumb">
            <img
              className="img-fluid rounded-circle"
              src={item.avatar}
            />
          </div>
          <div className="vc-content">
            <h5 className="title">
              <a href="#">{item.title}</a>
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
          <a
            className="btn btn-outline-info bn-det"
            href="#"
            style={{ marginTop: "20px" }}
          >
            <FormattedMessage id="Apply" />
            <IoMdArrowForward />
          </a>
        </div>
      );
    });

    return (
      <div className="col-xl-9 col-lg-8">
        <div className="row">
          <div className="col-md-12">
            {ListJob}
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12">
            {/* <Pagination
              activePage={this.state.activePage}
              itemsCountPerPage={this.props.listJob.pagination.perPage}
              totalItemsCount={this.props.listJob.pagination.total}
              pageRangeDisplayed={this.state.pageRangeDisplayed}
              onChange={this.handlePageChange}
            /> */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (stateStore, ownProps) => {
  let newState = Object.assign({}, ownProps);

  newState.http = stateStore.http;

  return newState;
};

export default connect(mapStateToProps)(injectIntl(ListALLJob));
