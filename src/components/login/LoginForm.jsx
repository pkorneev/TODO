import React, { useReducer } from "react";
import styles from "./LoginForm.module.css";
import { ThemeContext } from "../../App";
const reducer = (state, action) => {
  //const { theme, toggleTheme } = useContext(ThemeContext);

  if (action.type === "EMAIL_CHANGE") {
    return {
      ...state,
      email: action.value,
      emailIsValid: action.value.includes("@"),
    };
  }
  if (action.type === "PASSWORD_CHANGE") {
    return {
      ...state,
      password: action.value,
      passwordIsValid: action.value.trim().length >= 6,
    };
  }
  if (action.type === "RESET") {
    return {
      email: "",
      emailIsValid: "",
      password: "",
      passwordIsValid: "",
    };
  }
  return state;
};

const LoginForm = (props) => {
  const [formData, dispatchFormData] = useReducer(reducer, {
    email: "",
    emailIsValid: "",
    password: "",
    passwordIsValid: "",
  });
  const inputEmailHandler = (event) => {
    dispatchFormData({ type: "EMAIL_CHANGE", value: event.target.value });
  };
  const inputPasswordHandler = (event) => {
    dispatchFormData({ type: "PASSWORD_CHANGE", value: event.target.value });
  };

  const onSubmitFormHandler = (event) => {
    event.preventDefault();
    props.onLogin(formData.emailIsValid && formData.passwordIsValid);
    dispatchFormData({ type: "RESET" });
  };

  return (
    <form className={styles.loginForm} onSubmit={onSubmitFormHandler}>
      <input
        type="text"
        placeholder="Enter your e-mail"
        onChange={inputEmailHandler}
        value={formData.email}
      />
      <input
        type="text"
        placeholder="Enter your password"
        onChange={inputPasswordHandler}
        value={formData.password}
      />
      <button type="submit">Log In</button>
    </form>
  );
};
export default LoginForm;
