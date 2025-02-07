import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "A responsive website built with React and Tailwind CSS.",
      link: "#",
    },
    {
      id: 2,
      title: "Project 2",
      description: "An e-commerce platform with a modern UI and seamless user experience.",
      link: "#",
    },
    {
      id: 3,
      title: "Project 3",
      description: "A portfolio website showcasing my skills and projects.",
      link: "#",
    },
  ];

  return (
    <main className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a
              href={project.link}
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;