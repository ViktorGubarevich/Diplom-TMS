import React, { Component, Fragment } from "react";
import LoginForm from "./LoginForm";

class Validation extends Component {
  submit = () => {
    window.location.assign("http://localhost:3000/location/");
  };

  getInitialValues() {
    return {
      username: "",
      password: "",
    };
  }

  render() {
    return (
      <Fragment>
        <LoginForm
          onSubmit={this.submit}
          initialValues={this.getInitialValues()}
        />
      </Fragment>
    );
  }
}

export default Validation;
