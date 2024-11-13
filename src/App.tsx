import React from 'react';

import './App.module.scss';
import './styles/themes.scss';
import useTheme from './hooks/useTheme';
import ThemeToggle from './pages/ThemeToggle';
import Home from './pages/Home/Home';
import Footer from './pages/Footer';

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`App ${theme}`}>
      <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default App;
