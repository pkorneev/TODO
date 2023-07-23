import styles from "./ModeButton.module.css";
import { useContext } from "react";
import { ThemeContext } from "../App";

import brightnessSVG from "../assets/brightness.png";
import moonSVG from "../assets/moon.png";

const ModeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      className={
        theme === "dark"
          ? `${styles.modeButton} ${styles.dark}`
          : styles.modeButton
      }
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <img
          src={brightnessSVG}
          alt="Brightness"
          className={
            theme === "dark" ? `${styles.img} ${styles.dark}` : styles.img
          }
        />
      ) : (
        <img
          src={moonSVG}
          alt="Moon"
          className={
            theme === "dark" ? `${styles.img} ${styles.dark}` : styles.img
          }
        />
      )}
    </button>
  );
};
export default ModeButton;
