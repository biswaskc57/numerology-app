import { useState } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState<'lightTheme' | 'darkTheme'>('lightTheme');

  const toggleTheme = () => {
    setTheme(theme === 'lightTheme' ? 'darkTheme' : 'lightTheme');
  };

  return { theme, toggleTheme };
};

export default useTheme;
