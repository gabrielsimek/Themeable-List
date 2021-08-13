import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();
const themes = {
  light: {
    color: '#000000',
    backgroundColor: '#eeeeee',
  },
  dark: {
    color: '#ffffff',
    background: '#222222',
  },
};

const ThemeProvider = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ selectedTheme, setSelectedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
      
};
    
const useSetSelectedTheme = () => {
  const { setSelectedTheme } = useContext(ThemeContext);
  return setSelectedTheme;
};

const useSelectedTheme = () => {
  const { selectedTheme } = useContext(ThemeContext);
  return themes[selectedTheme];
};

export { ThemeProvider, useSetSelectedTheme, useSelectedTheme };
