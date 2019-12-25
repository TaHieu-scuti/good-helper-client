import React, { Component } from "react";
import SearchAdvanced from "./../Jobs/SearchAdvanced";
import ListAllJob from "./ListAllJob";

class JobsPage extends Component {
  render() {
    return (
      <section className="section-search">
        <div className="container">
          <div className="row">
            <SearchAdvanced />
            <ListAllJob/>
          </div>
        </div>
      </section>
    );
  }
}

export default JobsPage;
