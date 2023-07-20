import Header from "./Header";
import InputTODO from "./input/InputTODO";
import Output from "./output/Output";
import { useState } from "react";
const Home = (props) => {
  const [todosList, setTodosList] = useState([]);
  const [doneList, setDoneList] = useState([]);

  const handleDeleteTodo = (todoToDelete) => {
    setDoneList((prev) => {
      return [todoToDelete, ...prev];
    });
    setTodosList((prevTodoList) => {
      return prevTodoList.filter((todo) => todo !== todoToDelete);
    });
  };

  const onAddTodoHandler = (todo) => {
    setTodosList((prev) => {
      return [todo, ...prev];
    });
  };

  return (
    <div>
      <Header onLogout={props.onLogout} />
      <InputTODO onAddTodo={onAddTodoHandler} />
      <Output
        todoList={todosList}
        doneList={doneList}
        onDelete={handleDeleteTodo}
      />
    </div>
  );
};
export default Home;
