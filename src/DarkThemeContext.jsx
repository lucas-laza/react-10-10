import { createContext, useContext, useState } from "react";

const DarkThemeContext = createContext();

export const DarkThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleDarkTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  }

  return (
    <DarkThemeContext.Provider value={{ darkTheme, toggleDarkTheme }}>
      {children}
    </DarkThemeContext.Provider>
  )
}

export const useTheme = () => {
  return useContext(DarkThemeContext);
}
