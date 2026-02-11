import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('modern'); // 'modern' or 'brand'

  useEffect(() => {
    // Apply theme to document root
    const root = document.documentElement;
    if (theme === 'brand') {
      root.setAttribute('data-theme', 'brand');
    } else {
      root.removeAttribute('data-theme');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'modern' ? 'brand' : 'modern');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
