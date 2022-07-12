import React from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = ({ onClick, children }) => {
  return (
    <div className={s.btnContainer}>
      <button type="button" onClick={onClick} className={s.Button}>
        {children}
        Load more
      </button>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.element,
};

export default Button;
