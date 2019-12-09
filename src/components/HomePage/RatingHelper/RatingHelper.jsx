import React, { Component } from 'react';
import image from '../../../assets/img/des-9.jpg';
import ListHelper from './ListHelper';
import { connect } from 'react-redux';
import { FormattedMessage } from "react-intl";

class RatingHelper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      helper: []
    };
  }

  componentDidMount() {
    this.props.http("auth/user/typical/get").then(res => {
      this.setState({ helper: res.data.response });
    });
  }

  render() {
    return (
      <section
        className="image-bg image-light text-center"
        style={{ backgroundImage: "url('" + image + "')" }}
        data-overlay={8}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col text-center">
              <div className="sec-heading light mx-auto">
                <h2><FormattedMessage id="Typical helper" /></h2>
              </div>
            </div>
            <ListHelper helper={this.state.helper} />
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (stateStore, ownProps) => {
  let newState = Object.assign({}, ownProps);

  newState.http = stateStore.http;

  return newState;
};

export default connect(mapStateToProps)(RatingHelper);
