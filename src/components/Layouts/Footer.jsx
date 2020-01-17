import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';
import { FormattedMessage } from "react-intl";
import { IoIosWater } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { connect } from "react-redux";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      information: []
    };
  }

  componentDidMount() {
    this.props.http("auth/setting").then(res => {
      this.setState({ information: res.data.response });
    });
  }

  render() {

    if (this.props.location.pathname == "/checkotp") {
      return null
    }
  
    return (
      <footer className="dark-footer skin-dark-footer">
        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h4 className="widget-title"><FormattedMessage id="About" /></h4>
                  <p><FormattedMessage id="Let get best jobs" /></p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h4 className="widget-title"><FormattedMessage id="Category" /></h4>
                  <ul className="footer-menu">
                    <li>
                      <Link to="/home"><FormattedMessage id="Home" /></Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h4 className="widget-title"><FormattedMessage id="Information" /></h4>
                  <div className="fw-address-wrap">
                    <p><IoIosWater /> {this.state.information.address}</p>
                    <p><IoIosMail /> {this.state.information.email}</p>
                    <p><IoIosCall /> {this.state.information.phone}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9603986636694!2d105.7627272144075!3d21.034270492967277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134553bbe7d7415%3A0xf9e7752ff680f979!2sT%C3%B2a%20nh%C3%A0%20MD%20Complex%20Tower!5e0!3m2!1svi!2s!4v1579243582713!5m2!1svi!2s"
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

const mapStateToProps = (stateStore, ownProps) => {
  let newState = Object.assign({}, ownProps);

  newState.http = stateStore.http;

  return newState;
};

export default connect(mapStateToProps)(withRouter(Footer));
