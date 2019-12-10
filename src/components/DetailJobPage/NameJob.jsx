import React, { Component } from 'react';

class NameJob extends Component {
    render(){
        return(
            <section className="page-title-banner" style={{backgroundImage: 'url(assets/img/des-9.jpg)'}}>
        <div className="container">
          <div className="row m-0 align-items-end detail-swap">
            <div className="tr-list-wrap">
              <div className="tr-list-detail">
                <div className="tr-list-thumb">
                  <img src="assets/img/photos.png" className="img-responsive" alt="" />
                </div>
                <div className="tr-list-info">
                  <h4 className="mb-1">Chuyển đồ</h4>
                  <h6 className="font-14"><a href="company-detail.html" className="text-warning">Danh mục : Vận chuyển</a></h6>
                  <p className="mb-1"><i className="ti-location-pin mr-2" />Bắc Từ Liêm, Hà Nội</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        )
    }
}

export default NameJob;