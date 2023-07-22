import Wrapper from "../../UI/Wrapper";
import styles from "./Header.module.css";
import ModeButton from "../ModeButton";
const Header = (props) => {
  return (
    <header className={styles.header}>
      <Wrapper>
        <nav>
          <span>Notes</span>
          <div>
            <ModeButton />
            <button onClick={props.onLogout} className={styles.logOut}>
              Log Out
            </button>
          </div>
        </nav>
      </Wrapper>
    </header>
  );
};
export default Header;
