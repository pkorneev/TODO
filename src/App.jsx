import Login from "./components/login/Login";
import Home from "./components/home/Home";
import "./App.css";
import { useState, useEffect, createContext } from "react";

export const ThemeContext = createContext("light");

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [theme, setTheme] = useState("light");

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

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>
        {!isLoggedIn && <Login onLogin={onLoginHandler} />}
        {isLoggedIn && <Home onLogout={onLogoutHandler} />}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
