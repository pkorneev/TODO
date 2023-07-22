import styles from "./InputTODO.module.css";
import { useState, useContext } from "react";
import Wrapper from "../../../UI/Wrapper";
import { ThemeContext } from "../../../App";
const InputTODO = (props) => {
  const [todo, setTodo] = useState("");
  const { theme } = useContext(ThemeContext);
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (todo.trim().length >= 1) {
      props.onAddTodo(todo);
    }
    setTodo("");
  };
  const inputHandler = (event) => {
    setTodo(event.target.value);
  };
  return (
    <Wrapper>
      <form className={styles.form} onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Add a note"
          value={todo}
          onChange={inputHandler}
          className={
            theme === "dark" ? `${styles.input} ${styles.dark}` : styles.input
          }
        />
        <button
          type="submit"
          className={
            theme === "dark" ? `${styles.button} ${styles.dark}` : styles.button
          }
        >
          +
        </button>
      </form>
    </Wrapper>
  );
};
export default InputTODO;
