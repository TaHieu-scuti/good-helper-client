import React, { Component } from "react";
import { IoMdArrowRoundDown } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
import { IoLogoUsd } from "react-icons/io";
import { injectIntl, FormattedMessage, FormattedNumber } from "react-intl";
import Pagination from "react-js-pagination";
import { connect } from "react-redux";
import { searchOutside } from "../../lib/redux/actions";

class ListJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      pageRangeDisplayed: 5,
      title: "",
      location_id: "",
      category_id: ""
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

  render() {
    let Apply = (
      <a
        className="btn btn-outline-info bn-det"
        href="#"
        style={{ marginTop: "20px" }}
      >
        <FormattedMessage id="Apply" />
        <IoMdArrowForward />
      </a>
    );
    if (this.props.me) {
      if (this.props.me.role == 1) {
        Apply = null;
      }
    }
    const ListJob = this.props.searchOutside.posts.map((item, idx) => {
      return (
        <div className="job-new-list" key={idx}>
          <div className="vc-thumb">
            <img className="img-fluid rounded-circle" src={item.avatar} />
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
                <FormattedNumber value={item.price} />
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
          {Apply}
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

    if (this.props.searchOutside.posts.length > 0) {
      data = (
        <div>
          <div className="row">
            <div className="col-md-12">{ListJob}</div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <Pagination
                activePage={this.state.activePage}
                itemsCountPerPage={this.props.searchOutside.paginate.perPage}
                totalItemsCount={this.props.searchOutside.paginate.total}
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
  newState.searchOutside = stateStore.searchOutside;
  newState.me = stateStore;

  return newState;
};

const mapDispatchToProps = dispatch => {
  return {
    handlePageChange: ({ component, http, pageNumber }) => {
      http({
        url: "auth/search/outside?page=" + pageNumber,
        method: "POST",
        data: {
          title: component.state.title,
          location_id: component.state.location_id,
          category_id: component.state.category_id
        }
      }).then(res => {
        dispatch(searchOutside(res.data.response));
      });
      component.setState({ activePage: pageNumber });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(ListJob));
