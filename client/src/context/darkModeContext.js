import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext('light');

export const DarkModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState('light');

  const toggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggle }}>
      {children}
    </DarkModeContext.Provider>
  );
};