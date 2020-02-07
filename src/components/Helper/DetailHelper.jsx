import React, { Component } from "react";
import {
  FaInfo
} from "react-icons/fa";
import { connect } from "react-redux";
import { injectIntl, FormattedMessage } from "react-intl";
import { detailHelper } from "../../lib/redux/actions";

class DetailHelper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailHelper: {}
    };
  }

  componentDidMount() {
    this.props
      .http({
        url: "/auth/user/information",
        method: "GET",
        params: {
          id: this.props.match.params.id
        }
      })
      .then(res => {
        this.setState({
          detailHelper: res.data.response
        });
        this.props.detailHelper({
          first_name: res.data.response.first_name,
          last_name: res.data.response.first_name,
          avatar: res.data.response.avatar
        });
      });
  }

  render() {
    return (
      <section
        className="tr-single-detail gray-bg"
        style={{ background: "#f6f7fb" }}
      >
        <div className="container">
          <div className="row">
          <div className="col-md-12 col-sm-12">
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
                    {this.state.detailHelper.first_name}
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <h5>
                      <FormattedMessage id="Last name" /> :
                    </h5>
                    {this.state.detailHelper.last_name}
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group">
                    <h5>
                      <FormattedMessage id="Email" /> :
                    </h5>
                    {this.state.detailHelper.email}
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                    <h5>
                      <FormattedMessage id="Phone number" /> :
                    </h5>
                    {this.state.detailHelper.phone}
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                    <h5>
                      <FormattedMessage id="Gender" /> :
                    </h5>
                    {this.state.detailHelper.gender}
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group">
                    <h5>
                      <FormattedMessage id="Id card" /> :
                    </h5>
                    {this.state.detailHelper.id_card}
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <h5>
                      <FormattedMessage id="Id card backside" /> :
                    </h5>
                    {this.state.detailHelper.id_card_backside ? (
                      <img
                        className="img-fluid mx-auto"
                        src={this.state.detailHelper.id_card_backside}
                      />
                    ) : (
                      <div>
                        <span className="text-danger">
                          <FormattedMessage id="No image" /> :
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <h5>
                      <FormattedMessage id="Id card font" />
                    </h5>
                    {this.state.detailHelper.id_card_font  ? (
                      <img
                        className="img-fluid mx-auto"
                        src={this.state.detailHelper.id_card_font}
                      />
                    ) : (
                      <div>
                        <span className="text-danger">
                          <FormattedMessage id="No image" />
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
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

const mapStateToProps = (stateStore, ownProps) => {
  let newState = Object.assign({}, ownProps);
  newState.http = stateStore.http;
  newState.me = stateStore.me;
  return newState;
};

const mapDispatchToProps = dispatch => {
  return {
    detailHelper: jobs => dispatch(detailHelper(jobs))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(DetailHelper));
