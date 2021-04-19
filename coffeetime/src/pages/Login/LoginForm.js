import React from "react";
import { Formik, Form, Field } from "formik";
import "./style.scss";
import logo from "./images.jpeg";

function correctUsername(value) {
  let error;
  if (value !== "Виктор") {
    error = "Неправильное имя пользователя";
  }
  return error;
}

function correctPassword(value) {
  let error;
  if (value !== "1111") {
    error = "Неверный пароль";
  }
  return error;
}

function submit() {
  window.location.assign("http://localhost:3000/location/");
}

const LoginForm = () => (
  <main className="main">
    <img src={logo} alt={"logo"} />
    <div className="main-data">
      <div className="main-data-personal">
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={submit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <Field
                type="text"
                name="username"
                placeholder="Логин"
                validate={correctUsername}
              />
              {errors.username && touched.username && (
                <div className="error">{errors.username}</div>
              )}
              <Field
                type="password"
                name="password"
                placeholder="Пароль"
                validate={correctPassword}
              />
              {errors.password && touched.password && (
                <div className="error">{errors.password}</div>
              )}
              <button
                className="button"
                type="submit"
                label="submit"
                disabled={isSubmitting}
              >
                Войти
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  </main>
);

export default LoginForm;
