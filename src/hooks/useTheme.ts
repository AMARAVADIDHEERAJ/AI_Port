import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    // Only check localStorage, ignore system preferences
    const savedTheme = localStorage.getItem('theme');
    // Return dark if no saved preference
    return (savedTheme as 'light' | 'dark') || 'dark';
  });

  useEffect(() => {
    // Force dark mode on initial load
    const root = window.document.documentElement;
    root.classList.add('dark');
    
    // Set up theme change listener
    const handleThemeChange = () => {
      if (theme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
      localStorage.setItem('theme', theme);
    };

    handleThemeChange();
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return { theme, toggleTheme };
};