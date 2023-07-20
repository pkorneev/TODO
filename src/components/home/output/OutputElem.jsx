import styles from "./OutputElem.module.css";
const OutputElem = (props) => {
  const handleDelete = () => {
    props.onDelete(props.todo);
  };
  return (
    <li className={styles.todoElem}>
      <p>{props.todo}</p>
      <button onClick={handleDelete}>✓</button>
    </li>
  );
};
export default OutputElem;
