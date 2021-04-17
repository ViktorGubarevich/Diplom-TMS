import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import "../pages/MainPage/style.scss";

const Button = ({ children }) => {
  const history = useHistory();

  function handleClick() {
    history.push(`/`);
  }

  return (
    <Fragment>
      <div>
        <button onClick={handleClick} className="grid-button">
          {children}
        </button>
      </div>
    </Fragment>
  );
};

export default Button;
