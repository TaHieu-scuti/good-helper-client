import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import image from '../../assets/img/user-3.jpg'
import { FormattedMessage } from "react-intl";

const options = {
  items: 1,
  nav: true,
  navText: ["<i class='fa fa-arrow-left' aria-hidden='true'></i>","<i class='fa fa-arrow-right' aria-hidden='true'></i>"],
  dots: false,
  rewind: true,
  autoplay: false
};

class Feedback extends Component {
  
  render () {
    return (
      <section className="pt-5">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="sec-heading mx-auto">
                <p><FormattedMessage id="Feed back of customer" /></p>
                <h2><FormattedMessage id="What did the customer feel" /></h2>
              </div>
            </div>
          </div>
          <div className="row">
            <OwlCarousel ref="car" options={options}>
              <div className="owl-item cloned">
                <div className="item">
                  <div className="testimonial-wrap style-2">
                    <div className="client-thumb-box">
                      <div className="client-thumb-content">
                        <div className="client-thumb">
                          <img
                            src="assets/img/user-3.jpg"
                            className="img-responsive img-circle"
                            alt=""
                          />
                        </div>
                        <h5 className="mb-0"><FormattedMessage id="User name" /></h5>
                        <div className="rating">
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                        </div>
                      </div>
                    </div>
                    <p>
                      <FormattedMessage id="I look for people who work very fast, they work effectively, professionally" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="owl-item cloned">
                <div className="item">
                  <div className="testimonial-wrap style-2">
                    <div className="client-thumb-box">
                      <div className="client-thumb-content">
                        <div className="client-thumb">
                          <img
                            src="assets/img/user-3.jpg"
                            className="img-responsive img-circle"
                            alt=""
                          />
                        </div>
                        <h5 className="mb-0"><FormattedMessage id="User name" /></h5>
                        <div className="rating">
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                        </div>
                      </div>
                    </div>
                    <p>
                      <FormattedMessage id="I look for people who work very fast, they work effectively, professionally" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="owl-item cloned">
                <div className="item">
                  <div className="testimonial-wrap style-2">
                    <div className="client-thumb-box">
                      <div className="client-thumb-content">
                        <div className="client-thumb">
                          <img
                            src={image}
                            className="img-responsive img-circle"
                            alt=""
                          />
                        </div>
                        <h5 className="mb-0"><FormattedMessage id="User name" /></h5>
                        <div className="rating">
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                        </div>
                      </div>
                    </div>
                    <p>
                      <FormattedMessage id="I look for people who work very fast, they work effectively, professionally" />
                    </p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    )
  }
}

export default Feedback
