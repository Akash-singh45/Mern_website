// src/components/ui/button.jsx

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Button = ({
  children,
  className = '',
  onClick,
  type = 'button',
  variant = 'primary',
}) => {
  const baseStyle = 'rounded-xl px-6 py-2 font-semibold transition-all duration-300 shadow-md';

  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-black hover:bg-gray-300',
    outline: 'border border-gray-400 text-gray-700 hover:bg-gray-100',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(baseStyle, variants[variant], className)}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
};
