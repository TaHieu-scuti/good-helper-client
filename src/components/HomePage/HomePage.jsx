import React, { Component } from 'react';
import { connect } from 'react-redux';
export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {  
    return (
      <div>
        <h1>Hello world</h1>
      </div>
    )
  }
} 

const mapStateToProps = (stateStore, ownProps) => {
  let newState = Object.assign({}, ownProps);
  newState.http = stateStore.http;
  return newState;
}

export default connect(mapStateToProps)(HomePage);
