import styles from "./OutputElem.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../../App";
const OutputElem = (props) => {
  const { theme } = useContext(ThemeContext);

  const handleDelete = () => {
    props.onDelete(props.todo);
  };
  return (
    <li className={styles.todoElem}>
      <p className={theme === "dark" ? `${styles.p} ${styles.dark}` : styles.p}>
        {props.todo}
      </p>
      <button
        onClick={handleDelete}
        className={
          theme === "dark" ? `${styles.button} ${styles.dark}` : styles.button
        }
      >
        ✓
      </button>
    </li>
  );
};
export default OutputElem;
