import React, { Component } from 'react';
import image from './../../assets/img/des-9.jpg';
import imageUser from './../../assets/img/user-8.jpg';

class RatingHelper extends Component {
  render() {
    return (
      <section className="image-bg image-light text-center" style={{backgroundImage: "url("+ image +")"}} data-overlay={8}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col text-center">
              <div className="sec-heading light mx-auto">
                <h2>Những helper tiêu biểu</h2>
              </div>
            </div>
            <div className="row m-0">
              {/* Popular Candidate */}
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="best-candidate">
                  <div className="best-candidate-wrap">
                    <div className="best-candidate-thumb">
                      <img src={imageUser} className="img-fluid mx-auto rounded-circle" alt="" />
                      <div className="c-ac-status"><i className="ti-check" /></div>
                    </div>
                    <h4 className="candidate-name"><a href="candidate-detail.html">Hải</a></h4>
                    <span className="can-post">Web Developer</span>
                    <div className="best-candidate-info">
                      <div className="year-exp"><span>4<sub>Yrs</sub></span></div>
                      <div className="c-total-award" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Popular Candidate */}
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="best-candidate">
                  <div className="best-candidate-wrap">
                    <div className="best-candidate-thumb">
                      <img src={imageUser} className="img-fluid mx-auto rounded-circle" alt="" />
                      <div className="c-ac-status"><i className="ti-check" /></div>
                    </div>
                    <h4 className="candidate-name"><a href="candidate-detail.html">Nguyễn Bảo Huy</a></h4>
                    <span className="can-post">software Engineering</span>
                    <div className="best-candidate-info">
                      <div className="year-exp"><span>3<sub>Yrs</sub></span></div>
                      <div className="c-total-award" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Popular Candidate */}
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="best-candidate">
                  <div className="best-candidate-wrap">
                    <div className="best-candidate-thumb">
                      <img src={imageUser} className="img-fluid mx-auto rounded-circle" alt="" />
                      <div className="c-ac-status"><i className="ti-check" /></div>
                    </div>
                    <h4 className="candidate-name"><a href="candidate-detail.html">Nguyễn Thị Trang</a></h4>
                    <span className="can-post">Content Writer</span>
                    <div className="best-candidate-info">
                      <div className="year-exp"><span>4<sub>Yrs</sub></span></div>
                      <div className="c-total-award" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Popular Candidate */}
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="best-candidate">
                  <div className="best-candidate-wrap">
                    <div className="best-candidate-thumb">
                      <img src={imageUser} className="img-fluid mx-auto rounded-circle" alt="" />
                      <div className="c-ac-status"><i className="ti-check" /></div>
                    </div>
                    <h4 className="candidate-name"><a href="candidate-detail.html">Vu Ngoc Dung</a></h4>
                    <span className="can-post">Product Manager</span>
                    <div className="best-candidate-info">
                      <div className="year-exp"><span>6<sub>Yrs</sub></span></div>
                      <div className="c-total-award" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Popular Candidate */}
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="best-candidate">
                  <div className="best-candidate-wrap">
                    <div className="best-candidate-thumb">
                      <img src={imageUser} className="img-fluid mx-auto rounded-circle" alt="" />
                      <div className="c-ac-status"><i className="ti-check" /></div>
                    </div>
                    <h4 className="candidate-name"><a href="candidate-detail.html">Nguyen Thi Hoa</a></h4>
                    <span className="can-post">Expert Bidder</span>
                    <div className="best-candidate-info">
                      <div className="year-exp"><span>5<sub>Yrs</sub></span></div>
                      <div className="c-total-award" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Popular Candidate */}
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="best-candidate">
                  <div className="best-candidate-wrap">
                    <div className="best-candidate-thumb">
                      <img src={imageUser} className="img-fluid mx-auto rounded-circle" alt="" />
                      <div className="c-ac-status"><i className="ti-check" /></div>
                    </div>
                    <h4 className="candidate-name"><a href="candidate-detail.html">Tran Van Hoang</a></h4>
                    <span className="can-post">Team Manager</span>
                    <div className="best-candidate-info">
                      <div className="year-exp"><span>7<sub>Yrs</sub></span></div>
                      <div className="c-total-award" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Popular Candidate */}
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="best-candidate">
                  <div className="best-candidate-wrap">
                    <div className="best-candidate-thumb">
                      <img src={imageUser} className="img-fluid mx-auto rounded-circle" alt="" />
                      <div className="c-ac-status"><i className="ti-check" /></div>
                    </div>
                    <h4 className="candidate-name"><a href="candidate-detail.html">Tran Van Nam</a></h4>
                    <span className="can-post">iPhone Developer</span>
                    <div className="best-candidate-info">
                      <div className="year-exp"><span>6<sub>Yrs</sub></span></div>
                      <div className="c-total-award" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Popular Candidate */}
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="best-candidate">
                  <div className="best-candidate-wrap">
                    <div className="best-candidate-thumb">
                      <img src={imageUser} className="img-fluid mx-auto rounded-circle" alt="" />
                      <div className="c-ac-status"><i className="ti-check" /></div>
                    </div>
                    <h4 className="candidate-name"><a href="candidate-detail.html">Tran Van Son</a></h4>
                    <span className="can-post">Sales Analytics</span>
                    <div className="best-candidate-info">
                      <div className="year-exp"><span>4<sub>Yrs</sub></span></div>
                      <div className="c-total-award" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default RatingHelper;