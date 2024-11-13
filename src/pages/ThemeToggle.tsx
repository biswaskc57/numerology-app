import React from 'react';

interface ThemeToggleProps {
  toggleTheme: () => void;
  theme: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ toggleTheme, theme }) => (
  <button onClick={toggleTheme}>
    Switch to {theme === 'light-theme' ? 'Dark' : 'Light'} Theme
  </button>
);

export default ThemeToggle;
