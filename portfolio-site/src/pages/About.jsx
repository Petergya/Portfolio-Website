import React from 'react';
import SectionTitle from '../components/shared/SectionTitle';

const About = () => {
  return (
    <div className="container mx-auto p-8">
      <SectionTitle title="About Me" subtitle="Learn more about who I am" />
      <p className="text-lg text-gray-700">
        I'm a passionate web developer with expertise in React, Tailwind CSS, and modern web technologies.
      </p>
    </div>
  );
};

export default About;