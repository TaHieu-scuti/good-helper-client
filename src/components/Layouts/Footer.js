import React, { Component } from "react";
import { NavLink , Link } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
      <footer className="dark-footer skin-dark-footer">
        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h4 className="widget-title">Giới thiệu</h4>
                  <p>Bạn có thể tìm kiếm các công việc và người giúp.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h4 className="widget-title">Danh mục</h4>
                  <ul className="footer-menu">
                    <li>
                      <Link href="#">Trang chủ</Link>
                    </li>
                    <li>
                      <Link href="#">Công việc</Link>
                    </li>
                    <li>
                      <Link href="#">Giới thiệu</Link>
                    </li>
                    <li>
                      <Link href="#">Liên hệ</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h4 className="widget-title">Thông tin liên hệ</h4>
                  <div className="fw-address-wrap">
                    <div className="fw fw-location">
                      107, Nguyễn Phong Sắc, Cầu Giấy, Hà Nội
                    </div>
                    <div className="fw fw-mail">smatrjob@gmail.com</div>
                    <div className="fw fw-call">+91 254 584 7584</div>
                    <div className="fw fw-skype">drizvato77</div>
                    <div className="fw fw-web">www.smartjob.com</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.8103267497786!2d105.78820931440752!3d21.040273992762156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab36e43cf6eb%3A0xc420d35b1d1a47ac!2zMTA3IE5ndXnhu4VuIFBob25nIFPhuq9jLCBE4buLY2ggVuG7jW5nIEjhuq11LCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1574222321284!5m2!1svi!2s"
                    width={300}
                    height={300}
                    frameBorder={0}
                    style={{ border: 0 }}
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
