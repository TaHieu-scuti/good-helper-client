import React, { Component } from "react";
import SearchAdvanced from "./SearchAdvanced";
import ListJob from "./ListJob";
import { connect } from "react-redux";

class SearchPage extends Component {
  render() {
    return (
      <section className="section-search">
        <div className="container">
          <div className="row">
            <SearchAdvanced />
            <ListJob />
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (stateStore, ownProps) => {
  let newState = Object.assign({}, ownProps);

  newState.searchOutside = stateStore.searchOutside;

  return newState;
};

export default connect(mapStateToProps)(SearchPage);
