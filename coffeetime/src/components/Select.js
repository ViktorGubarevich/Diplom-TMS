import React, { Fragment } from "react";
import "../pages/Login/style.scss";

const Select = (props) => {
  return (
    <Fragment>
      <div className="select">
        <select
          id={props.name}
          name={props.name}
          value={props.value}
          onChange={props.handleChange}
          className="select-form"
        >
          <option value="" disabled>
            {props.placeholder}
          </option>
          {props.options.map(({ rout, name }) => {
            return (
              <option key={rout} value={rout} label={name}>
                {name}
              </option>
            );
          })}
        </select>
      </div>
    </Fragment>
  );
};

export default Select;
