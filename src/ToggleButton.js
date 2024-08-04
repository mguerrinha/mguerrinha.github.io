import React from 'react';
import { useTheme } from './ThemeContext';
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';

const ToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className='hover:text-main_orange p-1 text-2xl'>
        {theme === 'light' ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
    </button>
  );
};

export default ToggleButton;
