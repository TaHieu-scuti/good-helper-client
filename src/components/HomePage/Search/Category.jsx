import React from 'react';
import { injectIntl } from "react-intl";

const Category = (props) => {
  return (
    <div className="form-group">
      <select className="js-states form-control" placeholder="chọn địa điểm">
        <option>{props.intl.formatMessage({ id: "Category" })}</option>
        {props.category.map((item, idx) => {
          return (
            <option value={item.id} key={idx}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default injectIntl(Category);