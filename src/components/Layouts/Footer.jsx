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

const mapStateToProps = (stateStore, ownProps) => {
  let newState = Object.assign({}, ownProps);

  newState.http = stateStore.http;

  return newState;
};

export default connect(mapStateToProps)(withRouter(Footer));
