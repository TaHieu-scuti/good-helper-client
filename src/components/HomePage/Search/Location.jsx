import React from 'react';
import { injectIntl } from "react-intl";

const Location = props => {
  return (
    <div className="form-group">
      <select className="js-states form-control" onChange={props.onChange}>
        <option>{props.intl.formatMessage({ id: "Location" })}</option>
        {props.location.map((item, idx) => {
          return (
            <option value={item.id} key={idx} >
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default injectIntl(Location);
