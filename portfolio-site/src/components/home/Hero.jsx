import React from 'react';
import Button from '../shared/Button';

const Hero = () => {
  return (
    <div className="bg-green-400 text-white py-32 text-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-xl mb-8">I build modern and responsive websites.</p>
      <Button onClick={() => alert('Get Started clicked!')}>Get Started</Button>
    </div>
  );
};

export default Hero;