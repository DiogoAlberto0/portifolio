'use client'
import { useEffect, useState } from 'react';
import { Sun, Moon } from '@phosphor-icons/react';

export const ThemeButton = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="
        z-50
        fixed bottom-4 right-4
        w-12 h-12 rounded-full 
        bg-gray-800 dark:bg-gray-100
        text-white dark:text-black
        flex items-center justify-center
        shadow-lg
        transition-colors duration-300
        hover:bg-gray-700 dark:hover:bg-gray-300
      "
    >
      {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
    </button>
  );
};
