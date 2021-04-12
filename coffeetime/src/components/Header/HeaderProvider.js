import React, { Fragment } from "react";
import Header from "./Header";

function HeaderProvider(props) {
  return (
    <Fragment>
      <Header />
      {props.children}
    </Fragment>
  );
}

export default HeaderProvider;
