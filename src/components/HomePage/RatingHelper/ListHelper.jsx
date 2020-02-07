import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import { Link } from "react-router-dom";

const ListHelper = props => {
  return (
    <div className="row m-0">
      {props.helper.map((item, idx) => {
        return (
          <div className="col-lg-3 col-md-4 col-sm-6" key={idx}>
            <div className="best-candidate" style={{ height: "300px" }}>
              <div className="best-candidate-wrap">
                <div className="best-candidate-thumb">
                  <img
                    src={item.avatar}
                    className="img-fluid mx-auto rounded-circle"
                    alt=""
                  />
                  <div className="c-ac-status">
                    <IoMdCheckmark />
                  </div>
                </div>
                <h4 className="jbc-name" style={{ fontSize: "16px" }}>
                  <Link to={"helper/detail/" + item.id}>{item.user_name}</Link>
                </h4>
                <div className="best-candidate-info">
                  <div className="year-exp">
                    <span>
                      4<sub>Yrs</sub>
                    </span>
                  </div>
                  <div className="c-total-award" />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListHelper;
