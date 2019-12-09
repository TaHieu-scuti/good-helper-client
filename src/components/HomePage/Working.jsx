import React, { Component } from 'react';
import { IoMdPersonAdd } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { IoMdPaperPlane } from "react-icons/io";
import { FormattedMessage } from "react-intl";

class Working extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="sec-heading mx-auto">
                <h2><FormattedMessage id="How do we do" /></h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="middle-icon-features">
                <div className="middle-icon-features-item">
                  <div className="middle-icon-large-features-box">
                    <IoMdPersonAdd />
                    <span className="steps bg-danger">01</span>
                  </div>
                  <div className="middle-icon-features-content">
                    <h5><FormattedMessage id="Create account" /></h5>
                    <p><FormattedMessage id="You can create an account to use the services" /></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="middle-icon-features">
                <div className="middle-icon-features-item">
                  <div className="middle-icon-large-features-box">
                    <IoIosSearch />
                    <span className="steps bg-success">02</span>
                  </div>
                  <div className="middle-icon-features-content">
                    <h5><FormattedMessage id="Find and share job" /></h5>
                    <p><FormattedMessage id="You can search for jobs and helpers" /></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="middle-icon-features">
                <div className="middle-icon-features-item">
                  <div className="middle-icon-large-features-box">
                    <IoMdPaperPlane />
                    <span className="steps bg-warning">03</span>
                  </div>
                  <div className="middle-icon-features-content">
                    <h5><FormattedMessage id="Apply" /></h5>
                    <p>
                      <FormattedMessage id="Apply the job" />
                    </p>
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
