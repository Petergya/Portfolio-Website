import React from 'react';
import SectionTitle from '../shared/SectionTitle';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      comment: 'Great work! The website is exactly what we needed.',
    },
    {
      name: 'Jane Smith',
      comment: 'Highly recommend! Very professional and responsive.',
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <SectionTitle title="Testimonials" subtitle="What our clients say" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-600">"{testimonial.comment}"</p>
            <p className="text-gray-800 font-bold mt-4">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;