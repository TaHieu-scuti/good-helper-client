import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import Authenticate from './Authenticate';
import { connect } from "react-redux";

class Profile extends Component {
  render() {
    return (
      <Authenticate>
        <div id="main-wrapper">
          <section class="tr-single-detail gray-bg">
            <div class="container">
              <div class="row">
                <Sidebar user={this.props.user}/>
                <Content user={this.props.user} />
              </div>
            </div>
          </section>
        </div>
      </Authenticate>
    );
  }
}

const mapStateToProps = (stateStore, ownProps) => {
  let newState = Object.assign({}, ownProps);
  newState.user = stateStore.me;
  return newState;
};

export default connect(mapStateToProps) (Profile);
