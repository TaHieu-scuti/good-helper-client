import React, { Component } from "react";
import { injectIntl, FormattedMessage } from "react-intl";

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h1> {this.props.intl.formatMessage({ id: "login" })}</h1>
        <FormattedMessage id="login">
          
        </FormattedMessage>
      </div>
    );
  }
}

export default injectIntl(HomePage);
