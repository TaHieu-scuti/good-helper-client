import React, { Component } from "react";
import { IntlProvider } from "react-intl";
import messages from "../../lib/i18n" 

class IntlProviderWrapper extends Component {
  render() {
    return (
      <div>
        <IntlProvider locale="vi" messages={messages['vi']}>
            {this.props.children}
        </IntlProvider>
      </div>
    );
  }
}

export default IntlProviderWrapper;