import Login from "./components/Login";
import "./App.css";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onLoginHandler = (validData) => {
    setIsLoggedIn(validData);
  };
  return <>{!isLoggedIn && <Login onLogin={onLoginHandler} />}</>;
}

export default App;
