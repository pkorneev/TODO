import styles from "./DoneElem.module.css";

const DoneElem = (props) => {
  return (
    <li className={styles.doneElem}>
      <p>{props.todo}</p>
    </li>
  );
};
export default DoneElem;
