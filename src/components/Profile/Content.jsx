import React, { Component } from "react";
import { FaInfo } from "react-icons/fa";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

class Content extends Component {
  render() {
    return (
      <div className="col-md-8 col-sm-12">
        <div className="tab-pane active container" id="c-profile">
          <div className="tr-single-box">
            <div className="tr-single-header">
              <h3>
                <i>
                  <FaInfo />
                </i>{" "}
                <FormattedMessage id="Personal informations" />
              </h3>
            </div>
            <div className="tr-single-body">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <h5>
                      <FormattedMessage id="First name" /> :
                    </h5>
                    {this.props.user.first_name}
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <h5>
                      <FormattedMessage id="Last name" /> :
                    </h5>
                    {this.props.user.last_name}
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group">

                    <h5>
                      <FormattedMessage id="Email" /> :
                    </h5>
                    {this.props.user.email}
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                    <h5>
                      <FormattedMessage id="Phone number" /> :
                    </h5>
                    {this.props.user.phone}
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                    <h5>
                      <FormattedMessage id="Gender" /> :
                    </h5>
                    {this.props.user.gender}
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group">
                    <h5>
                      <FormattedMessage id="Id card " /> :
                    </h5>
                    {this.props.user.id_card}
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <h5>
                      <FormattedMessage id="Id card backside" /> :
                    </h5>
                    {this.props.user.id_card_backside.length > 25 ? (
                      <img
                        className="img-fluid mx-auto"
                        src={this.props.user.id_card_backside}
                      />
                    ) : (
                      <div>
                        <span className="text-danger">
                          <FormattedMessage id="Update id card backside" /> :
                        </span>
                        <img
                          className="img-fluid mx-auto"
                          src="https://btnmt.onecmscdn.com/2018/01/29/the-can-cuoc.jpg"
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <h5>
                      <FormattedMessage id="Id card font" />
                    </h5>
                    {this.props.user.id_card_font.length > 25 ? (
                      <img
                        className="img-fluid mx-auto"
                        src={this.props.user.id_card_font}
                      />
                    ) : (
                      <div>
                        <span className="text-danger">
                          <FormattedMessage id="Update id card backside" />
                        </span>
                        <img
                          className="img-fluid mx-auto"
                          src="https://btnmt.onecmscdn.com/2018/01/29/the-can-cuoc.jpg"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link to="/edit/profile" className="btn btn-info btn-md full-width">
            <FormattedMessage id="Editting informations" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Content;
