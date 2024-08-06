import React from 'react';
import { useTheme } from './ThemeContext';
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';

const ToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="button">
      {theme === 'light' ? (
        <>
          <MdOutlineLightMode className="icon" />
          <MdOutlineDarkMode className="icon icon-enter" />
        </>
      ) : (
        <>
          <MdOutlineDarkMode className="icon" />
          <MdOutlineLightMode className="icon icon-enter" />
        </>
      )}
    </button>
  );
};

export default ToggleButton;
