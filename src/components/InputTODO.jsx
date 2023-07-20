import styles from "./InputTODO.module.css";
import Wrapper from "../UI/Wrapper";
const InputTODO = () => {
  return (
    <Wrapper>
      <div className={styles.input}>
        <input type="text" placeholder="Add a note" />
        <button>+</button>
      </div>
    </Wrapper>
  );
};
export default InputTODO;
