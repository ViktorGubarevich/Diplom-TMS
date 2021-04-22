import React from "react";
import { Form } from "react-advanced-form";
import { Input, Button } from "react-advanced-form-addons";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default class RegistrationForm extends React.Component {
  registerUser = ({ serialized }) => {
    return fetch("server", {
      body: JSON.stringify(serialized),
    });
  };

  state = { phone: "" };

  handleOnChange = (value) => {
    console.log(value);
    this.setState({ phone: value }, () => {
      console.log(this.state.phone);
    });
  };

  handleAgreementCheckbox = () => {
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
      <div className="main-registration-data__form">
        <Form
          action={this.registerUser}
          onSubmitStart={this.props.onSubmitStart}
        >
          <Input
            name="Имя"
            label="Имя"
            required={({ get }) => {
              return !!get(["lastName", "value"]);
            }}
          />
          <Input
            name="Фамилия"
            label="Фамилия"
            required={({ get }) => {
              return !!get(["firstName", "value"]);
            }}
          />

          <Input
            name="Электронная почта"
            type="email"
            label="Электронная почта"
            required
          />

          <PhoneInput
            name="Номер телефона"
            type="text"
            country={"by"}
            enableAreaCodes={true}
            onlyCountries={["by"]}
            areaCodes={{ by: ["375"] }}
            inputProps={{
              name: "phone",
              country: "by",
              required: true,
              autoFocus: true,
            }}
            value={this.state.phone}
            onChange={this.handleOnChange}
            inputStyle={{
              background: "#fa8f21",
              width: "100%",
              color: "white",
            }}
            required
          />

          <Input
            name="Дата рождения"
            type="date"
            label="Дата рождения"
            required
          />

          <Button primary className="main-registration-data__form-button">
            Зарегистрировать
          </Button>
        </Form>
      </div>
    );
  }
}
