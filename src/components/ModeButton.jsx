import styles from "./ModeButton.module.css";
import { useContext } from "react";
import { ThemeContext } from "../App";
const ModeButton = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <button className={styles.modeButton} onClick={toggleTheme}>
      B
    </button>
  );
};
export default ModeButton;
