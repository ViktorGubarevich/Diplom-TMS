import React, { Fragment } from "react";
import Header from "./Header";

function HeaderProvider({ children }) {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  );
}

export default HeaderProvider;
