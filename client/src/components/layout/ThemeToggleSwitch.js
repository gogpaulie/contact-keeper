import React from 'react';
import PropTypes from 'prop-types';

const ThemeToggleSwitch = ({ themeToggler, theme }) => {
  return (
    <div className='theme-switch-wrapper'>
      <label className='theme-switch'>
        <input type='checkbox' onChange={themeToggler} />
        <div className='slider round'></div>
      </label>
      <span id='toggle-icon'>
        {theme === 'light' ? (
          <i className='fas fa-sun'></i>
        ) : (
          <i className='fas fa-moon'></i>
        )}
      </span>
    </div>
  );
};

ThemeToggleSwitch.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func,
};

export default ThemeToggleSwitch;
