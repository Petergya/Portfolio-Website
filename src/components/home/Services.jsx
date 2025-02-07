import React from 'react';
import Card from '../shared/Card';
import SectionTitle from '../shared/SectionTitle';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'I build modern and responsive websites using React and Tailwind CSS.',
      image: 'https://via.placeholder.com/400x200',
    },
    {
      title: 'UI/UX Design',
      description: 'I design user-friendly interfaces for web and mobile applications.',
      image: 'https://via.placeholder.com/400x200',
    },
    {
      title: 'SEO Optimization',
      description: 'I optimize websites for better search engine rankings.',
      image: 'https://via.placeholder.com/400x200',
    },
  ];

  return (
    <div className="py-12">
      <SectionTitle title="Our Services" subtitle="What we offer" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index} title={service.title} description={service.description} image={service.image} />
        ))}
      </div>
    </div>
  );
};

export default Services;