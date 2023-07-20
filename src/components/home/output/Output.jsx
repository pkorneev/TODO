import Wrapper from "../../../UI/Wrapper";
import OutputElem from "./OutputElem";
import styles from "./Output.module.css";
import DoneElem from "./DoneElem";
const Output = (props) => {
  return (
    <Wrapper>
      <div className={styles.outputList}>
        <ul>
          {props.todoList.map((todo, index) => {
            return (
              <OutputElem todo={todo} key={index} onDelete={props.onDelete} />
            );
          })}
        </ul>

        <ul className={styles.outputDoneList}>
          {props.doneList.map((el, index) => {
            return <DoneElem todo={el} key={index} />;
          })}
        </ul>
      </div>
    </Wrapper>
  );
};
export default Output;
