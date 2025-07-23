import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') as 'light' | 'dark' || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    // Enhanced smooth transition for theme change
    document.documentElement.style.transition = `
      background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1),
      color 0.4s cubic-bezier(0.4, 0, 0.2, 1),
      border-color 0.4s cubic-bezier(0.4, 0, 0.2, 1)
    `;
    document.documentElement.className = theme;
    
    // Remove transition after completion to avoid interfering with other animations
    setTimeout(() => {
      document.documentElement.style.transition = '';
    }, 400);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};