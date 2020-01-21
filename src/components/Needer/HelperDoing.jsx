import React, { Component } from "react";
import Sidebar from "./../Profile/Sidebar";
import { connect } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import Pagination from "react-js-pagination";
import { Link } from "react-router-dom";
import { FaTimes, FaRegCheckCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import { Nav } from "react-bootstrap";

class ApproveHelper extends Component {
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
        url: "/auth/post/user/doing ",
        method: "POST",
        data: {
          post_id: this.props.match.params.id
        }
      })
      .then(res => {
        console.log(res.data.response);

        this.setState({
          data: res.data.response.users,
          pagination: res.data.response.pagination
        });
      });
  }

  handlePageChange(pageNumber) {
    this.props
      .http({
        url: "/auth/post/needer/post",
        method: "POST",
        params: {
          page: pageNumber
        }
      })
      .then(res => {
        this.setState({ data: res.data.response.posts });
      });
    this.setState({ activePage: pageNumber });
  }

  render() {
    const ListUser = this.state.data.map((item, idx) => {
      return (
        <div className="job-new-list" key={idx}>
          <div className="vc-thumb">
            <img className="img-fluid rounded-circle" src={item.avatar} />
          </div>
          <div className="vc-content">
            <h5 className="title">
              <Link style={{ textDecoration: "none" }}>
                {item.first_name} {item.last_name}
              </Link>
              <span className="j-full-time">{item.phone}</span>
            </h5>
            <p>{item.role_name}</p>
            <ul className="vc-info-list">
              <li className="list-inline-item">
                <h5>
                  <FormattedMessage id="Email" />
                </h5>
                {item.email}
              </li>
              <li className="list-inline-item">
                <h5>
                  <FormattedMessage id="Gender" />
                </h5>
                {item.gender}
              </li>
            </ul>
          </div>
          <br />
        </div>
      );
    });

    let data = (
      <div className="tr-single-body" style={{ height: "500px" }}>
        <div className="row">
          <p className="text-danger" style={{ margin: "auto" }}>
            <FormattedMessage id="Dont have the data" />
          </p>
        </div>
      </div>
    );

    if (this.state.data.length > 0) {
      data = (
        <div className="tr-single-body">
          <div className="row">
            <div className="col-md-12">{ListUser}</div>
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
                        <FormattedMessage id="User is doing" />
                      </h3>
                    </div>
                    <div className="tr-single-header">
                      <Nav variant="tabs" defaultActiveKey="/home">
                        <Nav.Item>
                          <Nav.Link>
                            <Link
                              to={"/approve/user/" + this.props.match.params.id}
                            >
                              Những người ứng tuyển
                            </Link>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link>
                            <Link
                              to={"/user/doing/" + this.props.match.params.id}
                            >
                              Những người đang làm
                            </Link>
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </div>
                    {data}
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

export default connect(mapStateToProps)(injectIntl(ApproveHelper));
