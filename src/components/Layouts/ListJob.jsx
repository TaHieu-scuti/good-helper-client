import React, { Component } from 'react';

class ListJob extends Component {
    render(){
        return(
          <div className="col-xl-9 col-lg-8">
                  <div className="row">
                    {/* Skills & Tags */}
                    <div className="col-md-12">
                      {/* Single Large Job List */}
                      <div className="job-new-list">
                        <div className="vc-thumb">
                          <img className="img-fluid rounded-circle" src="assets/img/adwords.png" alt="c2.jpg" />
                        </div>
                        <div className="vc-content">
                          <h5 className="title"><a href="job-detail.html">Tiêu đề việc làm</a><span className="j-full-time">Việc trong ngày</span>
                            <a href="javascript:void(0)" className="btn download-btn" data-toggle="tooltip" data-original-title="Lưu công việc"><i className="ti-bookmark" /></a></h5>
                          <p>Giúp việc nhà</p>
                          <ul className="vc-info-list">
                            <li className="list-inline-item"><h5>Lương</h5> <i className="ti-credit-card" />111. 000k</li>
                            <li className="list-inline-item"><h5>Bắt đầu</h5>18/11/2019</li>
                            <li className="list-inline-item"><h5>Địa điểm</h5>
                              <div className="skills">
                                107 Nguyễn Phong Sắc
                              </div>
                            </li>
                          </ul>
                        </div>
                        <br />
                        <a className="btn btn-outline-info bn-det" href="job-detail.html" style={{marginTop: '20px'}}> Ứng tuyển<i className="ti-arrow-right ml-1" /></a>
                      </div>
                      {/* Single Large Job List */}
                      <div className="job-new-list">
                        <div className="vc-thumb">
                          <img className="img-fluid rounded-circle" src="assets/img/adwords.png" alt="c2.jpg" />
                        </div>
                        <div className="vc-content">
                          <h5 className="title"><a href="job-detail.html">Tiêu đề việc làm</a><span className="j-full-time">Việc trong ngày</span>
                            <a href="javascript:void(0)" className="btn download-btn" data-toggle="tooltip" data-original-title="Lưu công việc"><i className="ti-bookmark" /></a></h5>
                          <p>Giúp việc nhà</p>
                          <ul className="vc-info-list">
                            <li className="list-inline-item"><h5>Lương</h5> <i className="ti-credit-card" />11k</li>
                            <li className="list-inline-item"><h5>Bắt đầu</h5>18/11/2019</li>
                            <li className="list-inline-item"><h5>Địa điểm</h5>
                              <div className="skills">
                                107 Nguyễn Phong Sắc
                              </div>
                            </li>
                          </ul>
                        </div>
                        <br />
                        <a className="btn btn-outline-info bn-det" href="job-detail.html" style={{marginTop: '20px'}}> Ứng tuyển<i className="ti-arrow-right ml-1" /></a>
                      </div>
                      {/* Single Large Job List */}
                      <div className="job-new-list">
                        <div className="vc-thumb">
                          <img className="img-fluid rounded-circle" src="assets/img/adwords.png" alt="c2.jpg" />
                        </div>
                        <div className="vc-content">
                          <h5 className="title"><a href="job-detail.html">Tiêu đề việc làm</a><span className="j-full-time">Việc trong ngày</span>
                            <a href="javascript:void(0)" className="btn download-btn" data-toggle="tooltip" data-original-title="Lưu công việc"><i className="ti-bookmark" /></a></h5>
                          <p>Giúp việc nhà</p>
                          <ul className="vc-info-list">
                            <li className="list-inline-item"><h5>Lương</h5> <i className="ti-credit-card" />11k</li>
                            <li className="list-inline-item"><h5>Bắt đầu</h5>18/11/2019</li>
                            <li className="list-inline-item"><h5>Địa điểm</h5>
                              <div className="skills">
                                107 Nguyễn Phong Sắc
                              </div>
                            </li>
                          </ul>
                        </div>
                        <br />
                        <a className="btn btn-outline-info bn-det" href="job-detail.html" style={{marginTop: '20px'}}> Ứng tuyển<i className="ti-arrow-right ml-1" /></a>
                      </div>
                      {/* Single Large Job List */}
                      <div className="job-new-list">
                        <div className="vc-thumb">
                          <img className="img-fluid rounded-circle" src="assets/img/adwords.png" alt="c2.jpg" />
                        </div>
                        <div className="vc-content">
                          <h5 className="title"><a href="job-detail.html">Tiêu đề việc làm</a><span className="j-full-time">Việc trong ngày</span></h5>
                          <p>Giúp việc nhà</p>
                          <ul className="vc-info-list">
                            <li className="list-inline-item"><h5>Lương</h5> <i className="ti-credit-card" />11k</li>
                            <li className="list-inline-item"><h5>Bắt đầu</h5>18/11/2019</li>
                            <li className="list-inline-item"><h5>Địa điểm</h5>
                              <div className="skills">
                                107 Nguyễn Phong Sắc
                              </div>
                            </li>
                          </ul>
                        </div>
                        <a className="btn btn-outline-info bn-det" href="job-detail.html"> Ứng tuyển<i className="ti-arrow-right ml-1" /></a>
                      </div>
                    </div>
                  </div>
                </div>
        );
    }
}
export default ListJob;
