import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-auto">
      <p>&copy; 2023 My Portfolio. All rights reserved.</p>
      <ul className="flex justify-center space-x-4 mt-2">
        <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
        <li><a href="#" className="hover:text-gray-400">Terms of Service</a></li>
      </ul>
    </footer>
  );
};

export default Footer;