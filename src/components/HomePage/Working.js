import React, { Component } from 'react';

class Working extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="sec-heading mx-auto">
                <p>Working Process</p>
                <h2>Chúng tôi làm việc thế nào?</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="middle-icon-features">
                <div className="middle-icon-features-item">
                  <div className="middle-icon-large-features-box"><i className="ti-user text-danger" /><span className="steps bg-danger">01</span></div>
                  <div className="middle-icon-features-content">
                    <h5>Tạo tài khoản</h5>
                    <p>Bạn có thể tạo 1 tài khoản để sử dụng các dịch vụ.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="middle-icon-features">
                <div className="middle-icon-features-item">
                  <div className="middle-icon-large-features-box"><i className="ti-search text-success" /><span className="steps bg-success">02</span></div>
                  <div className="middle-icon-features-content">
                    <h5>Tìm kiếm và chia sẻ công việc</h5>
                    <p>Bạn có thể tìm kiếm các công việc và người giúp .</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="middle-icon-features">
                <div className="middle-icon-features-item">
                  <div className="middle-icon-large-features-box"><i className="ti-location-arrow text-warning" /><span className="steps bg-warning">03</span></div>
                  <div className="middle-icon-features-content">
                    <h5>Ứng tuyển việc làm</h5>
                    <p>Bạn có thể ứng tuyển những công việc mà bạn mong muốn.</p>
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

export default Working;