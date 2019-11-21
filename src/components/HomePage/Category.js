import React, { Component } from 'react';
import image from '../../assets/img/accounting.png';

class Category extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="sec-heading mx-auto">
                <p>Hãy chọn công việc theo danh mục</p>
                <h2>Những danh mục phổ biến</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <ul className="category-wrap">
              <li>
                <a  className="standard-category-box">
                  <img src={image} className="img-fluid mx-auto" alt="" />
                  <h4>Giúp việc nhà</h4>
                  <span>6 bài mới</span>
                </a>
              </li>
              <li>
                <a  className="standard-category-box">
                  <img src={image} className="img-fluid mx-auto" alt="" />
                  <h4>Giao nhận giấy tờ/tài liệu</h4>
                  <span>10 bài mới</span>
                </a>
              </li>
              <li>
                <a  className="standard-category-box">
                  <img src={image} className="img-fluid mx-auto" alt="" />
                  <h4>Bán hàng</h4>
                  <span>12 bài viết mới</span>
                </a>
              </li>
              <li>
                <a  className="standard-category-box">
                  <img src={image} className="img-fluid mx-auto" alt="" />
                  <h4>Phục vụ nhà hàng/ quán cafe</h4>
                  <span>6 bài viết mới</span>
                </a>
              </li>
              <li>
                <a  className="standard-category-box">
                  <img src={image} className="img-fluid mx-auto" alt="" />
                  <h4>Dọn dẹp</h4>
                  <span>40 new job posted</span>
                </a>
              </li>
              <li>
                <a  className="standard-category-box">
                  <img src={image} className="img-fluid mx-auto" alt="" />
                  <h4>Gia sư</h4>
                  <span>8 bài viết mới</span>
                </a>
              </li>
              <li>
                <a  className="standard-category-box">
                  <img src={image} className="img-fluid mx-auto" alt="" />
                  <h4>Shipper</h4>
                  <span>16 công việc mới</span>
                </a>
              </li>
              <li>
                <a  className="standard-category-box">
                  <img src={image} className="img-fluid mx-auto" alt="" />
                  <h4>Trông trẻ/ Đón trẻ</h4>
                  <span>10 công việc mới</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Category;