import React, { Component } from 'react';
import Header from './../Layouts/Header';
import Footer from './../Layouts/Footer';
import Category from './Category';
import RatingHelper from './RatingHelper';
import Working from './Working';
import Total from './Total';
import Feedback from './Feedback';
import Content from './Content';

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="main-wrapper">
        <Header />
        <Category />
        <RatingHelper />
        <Content />
        <Working />
        <Total />
        <Feedback />
        <Footer />
      </div>
    )
  }
}

export default HomePage
