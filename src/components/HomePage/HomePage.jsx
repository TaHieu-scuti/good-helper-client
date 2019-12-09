import React, { Component } from 'react'
import RatingHelper from './RatingHelper/RatingHelper'
import Working from './Working'
import Total from './Total'
import Feedback from './Feedback'
import Content from './Content/Content'
import Category from './Category/Category'

export class HomePage extends Component {
  render () {
    return (
      <div id="main-wrapper">
        <Category />
        <RatingHelper />
        <Content />
        <Working />
        <Total />
        <Feedback />
      </div>
    )
  }
}

export default HomePage;
