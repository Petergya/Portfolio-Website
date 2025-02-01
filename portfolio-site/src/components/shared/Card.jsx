import React from 'react';

const Card = ({ title, description, image }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      <h3 className="text-xl font-bold mt-4">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default Card;