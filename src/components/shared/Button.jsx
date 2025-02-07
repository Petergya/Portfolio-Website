import React from 'react';

const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;