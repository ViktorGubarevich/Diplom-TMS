import React from "react";
import "../pages/Login/style.scss";

const Select = (props) => {
  return (
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
        {props.options.map(({ id, name }) => {
          return (
            <option key={id} value={id} label={name}>
              {name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
