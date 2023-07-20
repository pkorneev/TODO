import Login from "./components/login/Login";
import Home from "./components/home/Home";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const onLoginHandler = (validData) => {
    setIsLoggedIn(validData);
    if (validData === true) {
      localStorage.setItem("isLoggedIn", "1");
    }
  };
  const onLogoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
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
