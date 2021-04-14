import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import SelectForm from "./SelectForm";

function Location() {
  const history = useHistory();

  function submit(place) {
    history.push(`/location/place/${place}`);
  }

  return (
    <Fragment>
      <SelectForm handleSubmit={submit} />
    </Fragment>
  );
}

export default Location;
