import React, { useReducer } from "react";
import styles from "./LoginForm.module.css";

const reducer = (state, action) => {};
const LoginForm = () => {
  const [formData, dispatchFormData] = useReducer(reducer, {
    email: "",
    emailIsValid: "",
    password: "",
    passwordIsValid: "",
  });

  return (
    <form className={styles.loginForm}>
      <input type="text" placeholder="Enter your e-mail" />
      <input type="text" placeholder="Enter your password" />
      <button>Login</button>
    </form>
  );
};
export default LoginForm;
