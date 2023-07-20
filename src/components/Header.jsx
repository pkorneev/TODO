import Wrapper from "../UI/Wrapper";
import styles from "./Header.module.css";
const Header = (props) => {
  return (
    <header className={styles.header}>
      <Wrapper>
        <nav>
          <span>Notes</span>
          <button onClick={props.onLogout}>Log Out</button>
        </nav>
      </Wrapper>
    </header>
  );
};
export default Header;
