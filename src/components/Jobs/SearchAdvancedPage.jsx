import React, { Component } from "react";
import SearchAdvanced from "./SearchAdvanced";
import ListJobSearchAdvanced from "./ListJobSearchAdvanced";

class SearchAdvancedPage extends Component {
  render() {
    return (
      <section className="section-search">
        <div className="container">
          <div className="row">
            <SearchAdvanced />
            <ListJobSearchAdvanced />
          </div>
        </div>
      </section>
    );
  }
} 

export default SearchAdvancedPage;
