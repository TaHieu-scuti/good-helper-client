import React, { Component } from 'react';
import Pagination from "react-js-pagination";
import { IoIosTrash, IoIosRemoveCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Search from './Search';
import { FormattedMessage } from "react-intl";

class ListPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listPost: [],
      pagination: [],
      activePage: 1,
      pageRangeDisplayed: 5,
    }

    this.handlePageChange = this.handlePageChange.bind(this);
  }
  
  componentDidMount() {
    this.props.http({
      url: `auth/post/needer/get`,
      method: "GET",
    }).then(res => {
      this.setState({ 
        listPost: res.data.response.posts,
        pagination: res.data.response.pagination
      })
    })
  }

  handlePageChange(pageNumber) {
    this.props.http({
      url: `auth/post/needer/get`,
      method: "GET",
      params: {
        page: pageNumber
      }
    }).then(res => {
      this.setState({ listPost: res.data.response.posts })
    })

    this.setState({activePage: pageNumber});
  }

	render() {
    const listPost = this.state.listPost.map((item, idx) => {
      return (
        <div className="manage-list" key={idx}>
          <div className="mg-list-wrap">
            <div className="mg-list-thumb">
              <img src={item.avatar} className="mx-auto" alt="" />
            </div>
            <div className="mg-list-caption">
              <h4 className="mg-title">{item.location}</h4>
              <span className="mg-subtitle">{item.category}</span>
              <span>
                <Link to={"/job/detail/" + item.id}>{item.title}</Link> <em className="j-full-time">{item.type}</em>
              </span>
            </div>
          </div>
          <div className="mg-action">
            <div className="btn-group custom-drop">
              <Link to="/#" className="btn btn-more">
                <IoIosRemoveCircleOutline />
              </Link>
            </div>
            <div className="btn-group ml-2">
              <Link to="/#" className="mg-delete"><IoIosTrash /></Link>
            </div>
          </div>
        </div>
      )
    })

		return (
			<section className="tr-single-detail gray-bg" style={{ background: '#f6f7fb' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="tab-pane" id="manage-jobs">
                <div className="tr-single-box">
                  <div className="tr-single-header">
                    <h4><FormattedMessage id="Manage job" /></h4>
                    <button className="btn btn-success btn-sm"><FormattedMessage id="Post job" /></button>
                  </div>
                  <Search />
                  <div className="tr-single-body">
                    <div className="row">
                      <div className="col-md-12">
                        {listPost}
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
		)
	};
}

const mapStateToProps = (stateStore, ownProps) => {
  let newState = Object.assign({}, ownProps);
  
  newState.http = stateStore.http;

  return newState;
}

export default connect(mapStateToProps)(ListPost);