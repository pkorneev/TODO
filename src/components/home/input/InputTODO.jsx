import styles from "./InputTODO.module.css";
import { useState } from "react";
import Wrapper from "../../../UI/Wrapper";

const InputTODO = (props) => {
  const [todo, setTodo] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.onAddTodo(todo);
    setTodo("");
  };
  const inputHandler = (event) => {
    setTodo(event.target.value);
  };
  return (
    <Wrapper>
      <form className={styles.input} onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Add a note"
          value={todo}
          onChange={inputHandler}
        />
        <button type="submit">+</button>
      </form>
    </Wrapper>
  );
};
export default InputTODO;
