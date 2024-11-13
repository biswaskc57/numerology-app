import React from 'react';

import styles from './App.module.scss';
import useTheme from './hooks/useTheme';
import Footer from './pages/Footer';
import Home from './pages/Home/Home';
import ThemeToggle from './pages/ThemeToggle';
import themestyles from'./styles/themes.module.scss';

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  console.log("theme",theme,themestyles[theme] )

  return (
    <div className={`${styles.App} ${themestyles[theme]}`}>
      <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default App;
