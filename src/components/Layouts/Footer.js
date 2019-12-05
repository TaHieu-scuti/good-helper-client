import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { FormattedMessage } from "react-intl";

class Footer extends Component {
  render() {
    return (
      <footer className="dark-footer skin-dark-footer">
        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h4 className="widget-title"><FormattedMessage id="about" /></h4>
                  <p><FormattedMessage id="find_and_share_job" /></p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h4 className="widget-title"><FormattedMessage id="category" /></h4>
                  <ul className="footer-menu">
                    <li>
                      <Link href="#"><FormattedMessage id="home" /></Link>
                    </li>
                    <li>
                      <Link href="#"><FormattedMessage id="job" /></Link>
                    </li>
                    <li>
                      <Link href="#"><FormattedMessage id="about" /></Link>
                    </li>
                    <li>
                      <Link href="#"><FormattedMessage id="contact" /></Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h4 className="widget-title"><FormattedMessage id="information" /></h4>
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
