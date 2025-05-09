import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
             <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-300">
      <h1 className="text-xl font-semibold tracking-wide">MyPortfolio</h1>
      <ul className="flex gap-6 text-sm font-medium">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/about" className="hover:underline">About</Link></li>
        <li><Link to="/projects" className="hover:underline">Projects</Link></li>
        <li><Link to="/contact" className="hover:underline">Contact</Link></li>
      </ul>
    </nav>
        </div>
    );
};

export default Navbar;
  