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

export default HomePage;
