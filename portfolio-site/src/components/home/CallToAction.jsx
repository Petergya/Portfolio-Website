import React from 'react';
import Button from '../shared/Button';

const CallToAction = () => {
  return (
    <div className="bg-blue-500 text-white py-12 text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
      <p className="text-xl mb-8">Let's work together to bring your ideas to life.</p>
      {/* <Button onClick={() => alert('Contact me clicked!')} className="bg-white text-blue-500 hover:bg-gray-100">
        Contact Me
      </Button> */}
       <Button onClick={() => alert('Contact me!')}>Contact me</Button>
    </div>
  );
};

export default CallToAction;