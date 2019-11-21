import React, { Component } from 'react';

class Total extends Component {
  render() {
    return (
      <section className="image-bg default-bg" style={{background: '#2259f7 url(assets/img/pattern.png) repeat'}}>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="sec-heading light mx-auto">
                <h2>Những thành công và giải thưởng của chúng tôi</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="count-box text-center">
                <h2 className="count">7842</h2>
                <h5>Công việc</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="count-box text-center">
                <h2 className="count">320</h2>
                <h5>Nhân viên</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="count-box text-center">
                <h2 className="count">710</h2>
                <h5>Giải thưởng</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="count-box text-center">
                <h2 className="count">10</h2>
                <h5>Năm thành công</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Total;