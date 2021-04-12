import React, { Fragment } from "react";
import "../pages/Login/style.scss";

const myInput = (props) => {
  const { meta } = props;
  return (
    <Fragment>
      <input
        {...props.input}
        type={props.type}
        placeholder={props.placeholder}
      />

      {meta.error && meta.touched && <div className="error">{meta.error}</div>}
    </Fragment>
  );
};

export default myInput;
