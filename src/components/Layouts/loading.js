import Spinner from 'react-spinner-material';
import React, { Component } from 'react';

export default class Loading extends Component {
  render() {
  return (
      <div>
        <Spinner size={40} spinnerColor={"#333"} spinnerWidth={2} visible={true} />
      </div>
    );
  }
}