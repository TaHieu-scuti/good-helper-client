import React, { Component } from "react";
import { FaInfo } from "react-icons/fa";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

class Content extends Component {
  render() {
    return (
      <div class="col-md-8 col-sm-12">
        <div class="tab-pane active container" id="c-profile">
          <div class="tr-single-box">
            <div class="tr-single-header">
              <h3>
               <i><FaInfo /></i> <FormattedMessage id="Personal informations" />
              </h3>
            </div>
            <div class="tr-single-body">
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <div class="form-group">
                    <label> <FormattedMessage id="First name" />: </label>
                    {this.props.user.first_name}
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <div class="form-group">
                    <label> <FormattedMessage id="Last name" />: </label>
                    {this.props.user.last_name}
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12">
                  <div class="form-group">
                    <label> <FormattedMessage id="Email" /> : </label>
                    {this.props.user.email}
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <label><FormattedMessage id="Phone number" /> : </label>
                    {this.props.user.phone}
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <label><FormattedMessage id="Gender" /> : </label>
                    {this.props.user.gender}
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12">
                  <div class="form-group">
                    <label> <FormattedMessage id="Id card " /> : </label>
                    {this.props.user.id_card}
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <div class="form-group">
                    <label> <FormattedMessage id="Id card backside" /> : </label>
                    <img class="img-fluid mx-auto" src={this.props.user.id_card_backside} />
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <div class="form-group">
                    <label> <FormattedMessage id="Id card font" /> : </label>
                    <img class="img-fluid mx-auto" src={this.props.user.id_card_font} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link to="/edit/profile" class="btn btn-info btn-md full-width">
          <FormattedMessage id="Editting informations" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Content;
