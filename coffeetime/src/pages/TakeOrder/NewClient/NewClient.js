import React from "react";
import Preview from "react-data-preview";
import { FormProvider } from "react-advanced-form";
import { Link } from "react-router-dom";

import RegistrationForm from "./RegistrationForm";
import rules from "./validation-rules";
import messages from "./validation-messages";

import "./style.scss";

class NewClient extends React.Component {
  state = {
    serialized: null,
  };

  handleSubmitStart = ({ serialized }) => {
    this.setState({
      serialized,
    });
  };

  handleUserData = () => {
    const currentTime = new Date();
    const eligibleUserDOB = new Date(
      currentTime.getFullYear() - 18,
      currentTime.getMonth(),
      currentTime.getDate()
    );
    return currentTime >= eligibleUserDOB;
  };

  render() {
    return (
      <main className="main">
        <div className="main-registration">
          <FormProvider rules={rules} messages={messages}>
            <div className="main-registration-data">
              <RegistrationForm onSubmitStart={this.handleSubmitStart} />
              <Preview data={this.state.serialized} />
            </div>
          </FormProvider>
          <Link to="../takeorder" className="main-registration-back">
            Назад
          </Link>
        </div>
      </main>
    );
  }
}

export default NewClient;
