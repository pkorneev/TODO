import React, { useContext } from "react";
import LoginForm from "./LoginForm";
import styles from "./Login.module.css";
import { ThemeContext } from "../../App";

const Login = (props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={styles}>
      <div className={styles.wrapper}>
        <div className={styles.loginPage}>
          <div className={styles.leftPart}>
            <h1
              className={
                theme === "dark"
                  ? `${styles.headerH1} ${styles.dark}`
                  : styles.headerH1
              }
            >
              Notes
            </h1>
            <p
              className={
                theme === "dark"
                  ? `${styles.headerP} ${styles.dark}`
                  : styles.headerP
              }
            >
              Take notes, add TODOs and always be on time.
            </p>
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
