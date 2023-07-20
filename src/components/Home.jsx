import Header from "./Header";
import InputTODO from "./InputTODO";
const Home = (props) => {
  return (
    <div>
      <Header onLogout={props.onLogout} />
      <InputTODO />
    </div>
  );
};
export default Home;
