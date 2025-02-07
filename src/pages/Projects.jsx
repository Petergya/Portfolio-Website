import React from 'react';
import Card from '../components/shared/Card';
import SectionTitle from '../components/shared/SectionTitle';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'A responsive website built with React and Tailwind CSS.',
      image: 'https://via.placeholder.com/400x200',
    },
    {
      title: 'Project 2',
      description: 'An e-commerce platform with a modern UI.',
      image: 'https://via.placeholder.com/400x200',
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <SectionTitle title="My Projects" subtitle="Check out my work" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} title={project.title} description={project.description} image={project.image} />
        ))}
      </div>
    </div>
  );
};

export default Projects;