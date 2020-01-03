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
               <i><FaInfo /></i> <FormattedMessage id="Personal informations" />
              </h3>
            </div>
            <div className="tr-single-body">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <label> <FormattedMessage id="First name" />: </label>
                    {this.props.user.first_name}
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <label> <FormattedMessage id="Last name" />: </label>
                    {this.props.user.last_name}
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group">
                    <label> <FormattedMessage id="Email" /> : </label>
                    {this.props.user.email}
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                    <label><FormattedMessage id="Phone number" /> : </label>
                    {this.props.user.phone}
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                    <label><FormattedMessage id="Gender" /> : </label>
                    {this.props.user.gender}
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group">
                    <label> <FormattedMessage id="Id card" /> : </label>
                    {this.props.user.id_card}
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <label> <FormattedMessage id="Id card backside" /> : </label>
                    <img className="img-fluid mx-auto" src={this.props.user.id_card_backside} />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <label> <FormattedMessage id="Id card font" /> : </label>
                    <img className="img-fluid mx-auto" src={this.props.user.id_card_font} />
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
