import React, { useState } from "react";
import Preview from "react-data-preview";
import { FormProvider } from "react-advanced-form";
import { Link } from "react-router-dom";

import RegistrationForm from "./RegistrationForm";
import rules from "./validation-rules";
import messages from "./validation-messages";

import "./style.scss";

const NewClient = () => {
  let [state, setState] = useState({
    serialized: null,
  });

  function handleSubmitStart({ serialized }) {
    setState({
      serialized,
    });
  }

  return (
    <main className="main">
      <div className="main-registration">
        <FormProvider rules={rules} messages={messages}>
          <div className="main-registration-data">
            <RegistrationForm onSubmitStart={handleSubmitStart} />
            <Preview data={state.serialized} />
          </div>
        </FormProvider>
        <Link to="../takeorder" className="main-registration-back">
          Назад
        </Link>
      </div>
    </main>
  );
};

export default NewClient;
