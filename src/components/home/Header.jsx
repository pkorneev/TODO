import Wrapper from "../../UI/Wrapper";
import styles from "./Header.module.css";
import ModeButton from "../ModeButton";
import { useContext } from "react";
import { ThemeContext } from "../../App";
const Header = (props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <header
      className={
        theme === "dark" ? `${styles.header} ${styles.dark}` : styles.header
      }
    >
      <Wrapper>
        <nav>
          <span
            className={
              theme === "dark" ? `${styles.span} ${styles.dark}` : styles.span
            }
          >
            Notes
          </span>
          <div className={styles.navButtons}>
            <ModeButton />
            <button
              onClick={props.onLogout}
              className={
                theme === "dark"
                  ? `${styles.logOut} ${styles.dark}`
                  : styles.logOut
              }
            >
              Log Out
            </button>
          </div>
        </nav>
      </Wrapper>
    </header>
  );
};
export default Header;
