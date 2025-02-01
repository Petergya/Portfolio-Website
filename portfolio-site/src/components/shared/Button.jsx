import React from 'react';

const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;