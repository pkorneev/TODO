import styles from "./DoneElem.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../../App";
const DoneElem = (props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <li className={styles.doneElem}>
      <p className={theme === "dark" ? `${styles.p} ${styles.dark}` : styles.p}>
        {props.todo}
      </p>
    </li>
  );
};
export default DoneElem;
