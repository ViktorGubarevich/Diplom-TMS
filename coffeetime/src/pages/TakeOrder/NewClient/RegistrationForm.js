import React, { useState } from "react";
import { Form } from "react-advanced-form";
import { Input, Button } from "react-advanced-form-addons";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const RegistrationForm = (props) => {
  let [state, setState] = useState({
    phone: "",
  });

  return (
    <div className="main-registration-data__form">
      <Form onSubmitStart={props.onSubmitStart}>
        <Input name="Имя" label="Имя" required />
        <Input name="Фамилия" label="Фамилия" required />

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
          onlyCountries={["by"]}
          areaCodes={{ by: ["375"] }}
          inputProps={{
            name: "phone",
            country: "by",
          }}
          value={state.phone}
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
};

export default RegistrationForm;
