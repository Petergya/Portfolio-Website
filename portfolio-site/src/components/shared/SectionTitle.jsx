import React from 'react';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="text-gray-600">{subtitle}</p>
    </div>
  );
};

export default SectionTitle;