import Header from "./Header";

const Home = (props) => {
  return (
    <div>
      <Header onLogout={props.onLogout} />
    </div>
  );
};
export default Home;
