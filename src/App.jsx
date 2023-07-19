import Login from "./components/Login";
import Home from "./components/Home";
import "./App.css";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onLoginHandler = (validData) => {
    setIsLoggedIn(validData);
  };
  const onLogoutHandler = () => {
    setIsLoggedIn(false);
  };
  return (
    <>
      {!isLoggedIn && <Login onLogin={onLoginHandler} />}
      {isLoggedIn && <Home onLogout={onLogoutHandler} />}
    </>
  );
}

export default App;
