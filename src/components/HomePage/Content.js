import React, { Component } from "react";
import image from '../../assets/img/photos.png';

class Content extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="sec-heading mx-auto">
                <p> Những công việc mới và đang nổi</p>
                <h2>Việc tìm người</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="owl-carousel owl-loaded owl-drag" id="job-slide">
              {/* Single Job */}
              {/* Single Job */}
              {/* Single Job */}
              {/* Single Job */}
              {/* Single Job */}
              {/* Single Job */}
              <div className="owl-stage-outer">
                <div
                  className="owl-stage"
                  style={{
                    transform: "translate3d(-1200px, 0px, 0px)",
                    transition: "all 0.25s ease 0s",
                    width: "2400px"
                  }}
                >
                  <div className="owl-item" style={{ width: "400px" }}>
                    <div className="item job">
                      <div className="job-grid style-1 job">
                        <div className="job-grid-wrap">
                          <span className="job-type j-part-time">
                            Việc làm bán thời gian
                          </span>
                          <div className="job-grid-thumb">
                            <a href="">
                              <img
                                src={image}
                                className="img-fluid mx-auto"
                                alt=""
                              />
                            </a>
                          </div>
                          <h4 className="job-title">
                            <a href="">Product Manager</a>
                          </h4>
                          <hr />
                          <div className="job-grid-detail">
                            <h4 className="jbc-name">
                              <a href="employer-detail.html">Tran Van Tuan</a>
                            </h4>
                            <p>
                              <i className="ti-location-pin" />
                              Ha Noi{" "}
                            </p>
                          </div>
                          <div className="job-grid-footer">
                            <h4 className="job-price">$7,247</h4>
                            <a
                              href=""
                              className="btn btn-outline-info btn-rounded"
                            >
                              Ứng tuyển
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item" style={{ width: "400px" }}>
                    <div className="item job">
                      <div className="job-grid style-1 job">
                        <div className="job-grid-wrap">
                          <div className="featured-job">
                            <i className="ti-star filled" />
                          </div>
                          <span className="job-type j-full-time">
                            Toàn thời gian
                          </span>
                          <div className="job-grid-thumb">
                            <a href="">
                              <img
                                src="assets/img/asana.png"
                                className="img-fluid mx-auto"
                                alt=""
                              />
                            </a>
                          </div>
                          <h4 className="job-title">
                            <a href="">
                              Project &amp; Team Head
                            </a>
                          </h4>
                          <hr />
                          <div className="job-grid-detail">
                            <h4 className="jbc-name">
                              <a href="employer-detail.html">paul Nam</a>
                            </h4>
                            <p>
                              <i className="ti-location-pin" />
                              Ha Noi
                            </p>
                          </div>
                          <div className="job-grid-footer">
                            <h4 className="job-price">$3,254</h4>
                            <a
                              href=""
                              className="btn btn-outline-info btn-rounded"
                            >
                              Ứng tuyển
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item" style={{ width: "400px" }}>
                    <div className="item job">
                      <div className="job-grid style-1 job">
                        <div className="job-grid-wrap">
                          <span className="job-type j-full-time">
                            Toàn thời gian
                          </span>
                          <div className="job-grid-thumb">
                            <a href="">
                              <img
                                src="assets/img/drive.png"
                                className="img-fluid mx-auto"
                                alt=""
                              />
                            </a>
                          </div>
                          <h4 className="job-title">
                            <a href="">Web Designer</a>
                          </h4>
                          <hr />
                          <div className="job-grid-detail">
                            <h4 className="jbc-name">
                              <a href="employer-detail.html">Drive Tan</a>
                            </h4>
                            <p>
                              <i className="ti-location-pin" />
                              Nguyen Phong Sac, Cau Giay , Ha Noi
                            </p>
                          </div>
                          <div className="job-grid-footer">
                            <h4 className="job-price">$5,747</h4>
                            <a
                              href=""
                              className="btn btn-outline-info btn-rounded"
                            >
                              Ứng tuyển
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item active" style={{ width: "400px" }}>
                    <div className="item job">
                      <div className="job-grid style-1 job">
                        <div className="job-grid-wrap">
                          <div className="featured-job">
                            <i className="ti-star filled" />
                          </div>
                          <span className="job-type j-freelance-time">
                            Tự do
                          </span>
                          <div className="job-grid-thumb">
                            <a href="">
                              <img
                                src={image}
                                className="img-fluid mx-auto"
                                alt=""
                              />
                            </a>
                          </div>
                          <h4 className="job-title">
                            <a href="">Sales Analytics</a>
                          </h4>
                          <hr />
                          <div className="job-grid-detail">
                            <h4 className="jbc-name">
                              <a href="employer-detail.html">Phung Nam</a>
                            </h4>
                            <p>
                              <i className="ti-location-pin" />
                              325, New Market, New York{" "}
                            </p>
                          </div>
                          <div className="job-grid-footer">
                            <h4 className="job-price">$6,357</h4>
                            <a
                              href=""
                              className="btn btn-outline-info btn-rounded"
                            >
                              Ứng tuyển
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item active" style={{ width: "400px" }}>
                    <div className="item job">
                      <div className="job-grid style-1 job">
                        <div className="job-grid-wrap">
                          <span className="job-type j-part-time">
                            Part Time
                          </span>
                          <div className="job-grid-thumb">
                            <a href="">
                              <img
                                src={image}
                                className="img-fluid mx-auto"
                                alt=""
                              />
                            </a>
                          </div>
                          <h4 className="job-title">
                            <a href="">Product Manager</a>
                          </h4>
                          <hr />
                          <div className="job-grid-detail">
                            <h4 className="jbc-name">
                              <a href="employer-detail.html">Google Info.</a>
                            </h4>
                            <p>
                              <i className="ti-location-pin" />
                              325, Rack Newer, England{" "}
                            </p>
                          </div>
                          <div className="job-grid-footer">
                            <h4 className="job-price">$10,047</h4>
                            <a
                              href=""
                              className="btn btn-outline-info btn-rounded"
                            >
                              Ứng tuyển
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item active" style={{ width: "400px" }}>
                    <div className="item job">
                      <div className="job-grid style-1 job">
                        <div className="job-grid-wrap">
                          <div className="featured-job">
                            <i className="ti-star filled" />
                          </div>
                          <span className="job-type j-temporary-time">
                            Temporary
                          </span>
                          <div className="job-grid-thumb">
                            <a href="">
                              <img
                                src={image}
                                className="img-fluid mx-auto"
                                alt=""
                              />
                            </a>
                          </div>
                          <h4 className="job-title">
                            <a href="">Team Director</a>
                          </h4>
                          <hr />
                          <div className="job-grid-detail">
                            <h4 className="jbc-name">
                              <a href="employer-detail.html">PayPal Info.</a>
                            </h4>
                            <p>
                              <i className="ti-location-pin" />
                              254, New Buklack, London{" "}
                            </p>
                          </div>
                          <div className="job-grid-footer">
                            <h4 className="job-price">$8,247</h4>
                            <a
                              href=""
                              className="btn btn-outline-info btn-rounded"
                            >
                              Ứng tuyển
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-nav disabled">
                <button type="button" role="presentation" className="owl-prev">
                  <span aria-label="Previous">‹</span>
                </button>
                <button type="button" role="presentation" className="owl-next">
                  <span aria-label="Next">›</span>
                </button>
              </div>
              <div className="owl-dots disabled" />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-12 col-md-12">
              <div className="text-center">
                <a href="grid-job.html" className="btn btn-info">
                  Xem thêm
                  <i className="ti-arrow-right ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Content;
