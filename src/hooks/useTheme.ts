import { useState } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState<'light-theme' | 'dark-theme'>('light-theme');

  const toggleTheme = () => {
    setTheme(theme === 'light-theme' ? 'dark-theme' : 'light-theme');
  };

  return { theme, toggleTheme };
};

export default useTheme;
