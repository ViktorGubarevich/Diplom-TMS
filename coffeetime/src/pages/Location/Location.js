import React, { Component, Fragment } from "react";
import SelectForm from "./SelectForm";

class Location extends Component {
  submit = () => {
    window.location.assign("/location/place");
  };

  render() {
    return (
      <Fragment>
        <SelectForm onSubmit={this.handleClick} />
      </Fragment>
    );
  }
}

export default Location;
