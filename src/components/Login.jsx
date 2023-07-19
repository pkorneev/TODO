import React from "react";
import Wrapper from "../UI/Wrapper";
import LoginForm from "./LoginForm";
import styles from "./Login.module.css";
const Login = (props) => {
  return (
    <div className={styles}>
      <div className={styles.wrapper}>
        <div className={styles.loginPage}>
          <div className={styles.leftPart}>
            <h1>Notes</h1>
            <p>Take notes, add TODOs and always be on time.</p>
          </div>
          <div className={styles.rightPart}>
            <LoginForm onLogin={props.onLogin} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
