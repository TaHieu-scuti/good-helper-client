import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import ListJob from './ListJob';
import axios from "axios";


class Search extends Component{
  constructor(props){
    super(props);
    this.state= {
      location: [],
      category: []
    }
  }
  componentDidMount() {
    axios.get(`http://localhost:8000/api/auth/location`)
      .then(res => {
      this.setState({ location: res.data.original.result});
    });

    axios.get(`http://localhost:8000/api/auth/category`)
      .then(res => {
      this.setState({ category: res.data.original.result });
    });
  };

  
    render() {
      let location = this.state.location.map((item, index) => {
    return (
    <option value={item.id} key={index}>{item.name}</option>
    )
    });

    let category = this.state.category.map((item, index) => {
      return (
      <option value={item.id} key={index}>{item.name}</option>
      )
      });
        return (
         <div>
             <Header />
            <section>
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-4">
                  <div className="back-brow">
                    <a href="index.html" className="back-btn"><i className="ti-back-left" />Back</a>
                  </div>
                  <div className="d-block d-none d-sm-block d-md-none mb-3">
                    <a href="javascript:void(0)" onclick="openNav()" className="btn btn-info full-width btn-md"><i className="ti-filter mrg-r-5" />Filter Search</a>
                  </div>
                  <div className="sidebar-container d-sm-none d-md-block d-none">
                    {/* Keyword */}
                    <div className="sidebar-widget">
                      <div className="form-group">
                        <h5 className="mb-3">Từ khóa</h5>
                        <div className="input-with-icon">
                          <input type="text" className="form-control" placeholder="Từ khóa..." />
                          <i className="ti-key" />
                        </div>
                      </div>
                    </div>
                    {/* Location */}
                    <div className="sidebar-widget">
                      <div className="form-group">
                        <h5 className="mb-3">Địa điểm</h5>
                        <div className="input-with-icon">
                          <select id="location" className="js-states form-control">
                          {location}
                          </select>
                        </div>
                      </div>
                    </div>
                    {/* Category */}
                    <div className="sidebar-widget">
                      <div className="form-group">
                        <h5 className="mb-3">Danh mục</h5>
                        <div className="input-with-shadow">
                          <select id="category" className="js-states form-control">
                            {category}
                          </select>
                        </div>
                      </div>
                    </div>
                    {/* Experince */}
                    {/* Job Type */}
                    <div className="sidebar-widget">
                      <div className="form-group">
                        <h5 className="mb-2">Loại việc</h5>
                        <div className="side-imbo">
                          <ul className="no-ul-list">
                            <li>
                              <input id="checkbox-j1" className="checkbox-custom" name="type" type="radio" />
                              <label htmlFor="checkbox-j1" className="checkbox-custom-label">Việc cần gấp</label>
                            </li>
                            <li>
                              <input id="checkbox-j2" className="checkbox-custom" name="type" type="radio" />
                              <label htmlFor="checkbox-j2" className="checkbox-custom-label">Việc trong ngày</label>
                            </li>
                            <li>
                              <input id="checkbox-j3" className="checkbox-custom" name="type" type="radio" />
                              <label htmlFor="checkbox-j3" className="checkbox-custom-label">Việc dài hạn</label>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* Compensation */}
                    <div className="sidebar-widget">
                      <div className="form-group">
                        <h5 className="mb-2">Mức Lương</h5>
                        <div className="side-imbo">
                          <ul className="no-ul-list">
                            <li>
                              <input id="checkbox-c1" className="checkbox-custom" name="price" type="radio" />
                              <label htmlFor="checkbox-c1" className="checkbox-custom-label">$500 - $1000</label>
                            </li>
                            <li>
                              <input id="checkbox-c2" className="checkbox-custom" name="price" type="radio" />
                              <label htmlFor="checkbox-c2" className="checkbox-custom-label">$1000 - $2000</label>
                            </li>
                            <li>
                              <input id="checkbox-c3" className="checkbox-custom" name="price" type="radio" />
                              <label htmlFor="checkbox-c3" className="checkbox-custom-label">$2000 - $5000</label>
                            </li>
                            <li>
                              <input id="checkbox-c4" className="checkbox-custom" name="price" type="radio" />
                              <label htmlFor="checkbox-c4" className="checkbox-custom-label">$5000 - $10000</label>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="sidebar-widget">
                      <button type="submit" className="btn btn-search full-width btn-info font-14">Tìm việc</button>
                    </div>
                  </div>
                </div>
                <ListJob />
              </div>
            </div>
          </section>
            <Footer />
         </div>   
        );
    }
}
export default Search;