import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import myInput from "../../components/Field";
import {
  requiredInput,
  correctInput,
  correctPassword,
} from "../../redux/reducers/validate";
import "./style.scss";
import logo from "./images.jpeg";

class LoginForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <main className="main">
        <img src={logo} alt={"logo"} />
        <form onSubmit={handleSubmit}>
          <div className="main-data">
            <div className="main-data-personal">
              <Field
                name="Логин"
                validate={([requiredInput], [correctInput])}
                component={myInput}
                type="text"
                placeholder="Логин"
              />
              <Field
                name="Пароль"
                validate={[correctPassword]}
                component={myInput}
                type="password"
                placeholder="Пароль"
              />
            </div>
            <button className="button" type="submit" label="submit">
              Войти
            </button>
          </div>
        </form>
      </main>
    );
  }
}

LoginForm = reduxForm({
  form: "login",
})(LoginForm);

export default LoginForm;
