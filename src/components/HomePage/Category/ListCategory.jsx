import React from 'react';
import { FormattedMessage } from "react-intl";

const ListCategory = (props) => {
  return (
    <ul className="category-wrap">
      {props.categories.map((category, idx) => {
        return (
          <li key={idx}>
            <a className="standard-category-box">
              <img src={category.image} className="img-fluid mx-auto" alt="" />
              <h4>{category.name}</h4>
              <span>6 <FormattedMessage id="New post"/></span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default ListCategory;
