import React, { Component } from 'react';
import { FaSearchLocation , FaPhone ,FaBook,
     FaBookmark, FaMailBulk, FaMoneyBillAlt,
      FaStopwatch, FaTransgender, FaMale ,
      FaEnvelope, FaBookOpen } from "react-icons/fa";
import { injectIntl ,FormattedMessage } from "react-intl";


class DetailJobPage extends Component {
    render() {
        return (
            <section className="tr-single-detail gray-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-12 center-block">
              {/* Job Overview */}
            <div className="tr-list-wrap">
              <div className="tr-list-detail">
                <div className="tr-list-thumb">
                  <img src="data:image/png;base64,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" className="img-responsive" alt="" />
                </div>
                <div className="tr-list-info">
                  <h4 className="mb-1"> <FormattedMessage id="Job name" /> : Chuyển đồ</h4>
                  <h6 className="font-14"><a href="company-detail.html" className="text-warning"><FormattedMessage id="Category" /> : Vận chuyển</a></h6>
                  <p className="mb-1"><FaSearchLocation /> <FormattedMessage id="Location" /> : Bắc Từ Liêm, Hà Nội</p>
                </div>
              </div>
            </div>
              {/* Job Qualifications */}
              <div className="tr-single-box">
                <div className="tr-single-header">
                  <h3><FaBook /> <FormattedMessage id="Job details" /></h3>
                </div>
                <div className="tr-single-body">
                  <p>We are seeking an experienced Wordpress developer with minimum 2+ years of experiencea WordPress Developer responsible for both back-end and front-end development, including creating WordPress themes and plugins. This position requires a combination of programming skills (namely PHP, HTML5, CSS3, and JavaScript) and aesthetics (understanding element arrangements on the screen, the color and font choices, and so on). The candidate should have a strong understanding of industry trends and content management systems.</p>
                </div>
              </div>
              <a href="javascript:void(0)" data-toggle="modal" data-target="#apply" className="btn btn-info mb-2 mb-5" style={{marginLeft: '42%'}}> Ứng Tuyển</a>
            </div>
            {/* Sidebar Start */}
            <div className="col-md-4 col-sm-12">
              <div className="offer-btn-wrap mb-4">
                <a href="markdown-job.html" className="btn btn-info btn-md full-width"><FaBookmark /><FormattedMessage id="Markdown job" /></a>
              </div>
              {/* Job Overview */}
              <div className="tr-single-box">
                <div className="tr-single-header">
                  <h3><FaBookOpen /> <FormattedMessage id="Description" /></h3>
                </div>
                <div className="tr-single-body">
                  <ul className="extra-service">
                    <li>
                      <div className="icon-box-icon-block">
                        <div className="icon-box-round">
                          <FaMoneyBillAlt/>
                        </div>
                        <div className="icon-box-text">
                          <strong className="d-block"><FormattedMessage id="Salary" /></strong>
                          $80k - $270k
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="icon-box-icon-block">
                        <div className="icon-box-round">
                          <FaStopwatch />
                        </div>
                        <div className="icon-box-text">
                          <strong className="d-block"><FormattedMessage id="Start time" /></strong>
                          2019-01-02 00:00:00
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="icon-box-icon-block">
                        <div className="icon-box-round">
                          <FaStopwatch />
                        </div>
                        <div className="icon-box-text">
                          <strong className="d-block"><FormattedMessage id="End time" /></strong>
                          2019-01-02 00:00:00
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="icon-box-icon-block">
                        <div className="icon-box-round">
                          <FaTransgender />
                        </div>
                        <div className="icon-box-text">
                          <strong className="d-block"><FormattedMessage id="Gender" /></strong>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="icon-box-icon-block">
                        <div className="icon-box-round">
                          <FaMale />
                        </div>
                        <div className="icon-box-text">
                          <strong className="d-block"><FormattedMessage id="Amount member" /></strong>
                          5 người
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Company Address */}
              <div className="tr-single-box">
                <div className="tr-single-header">
                  <h3><FaMailBulk /> <FormattedMessage id="Contact" /></h3>
                </div>
                <div className="tr-single-body">
                  <ul className="extra-service">
                    <li>
                      <div className="icon-box-icon-block">
                        <a href="#">
                          <div className="icon-box-round">
                            <FaSearchLocation />
                          </div>
                          <div className="icon-box-text">
                            524 New Ave, CA 548, USA
                          </div>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="icon-box-icon-block">
                        <a href="#">
                          <div className="icon-box-round">
                            <FaPhone />
                          </div>
                          <div className="icon-box-text">
                            +1 415-989-1002
                          </div>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="icon-box-icon-block">
                        <a href="#">
                          <div className="icon-box-round">
                            <FaEnvelope/>
                          </div>
                          <div className="icon-box-text">
                            helpsupport.com@finding.com
                          </div>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        )
    }
}

export default DetailJobPage;