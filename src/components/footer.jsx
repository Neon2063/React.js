// src/components/Footer.jsx
import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left side */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-semibold text-white">MyWebsite</h2>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Center links */}
        <ul className="flex gap-6 text-sm">
          <li><a href="#" className="hover:text-white">Home</a></li>
          <li><a href="#" className="hover:text-white">About</a></li>
          <li><a href="#" className="hover:text-white">Services</a></li>
          <li><a href="#" className="hover:text-white">Contact</a></li>
        </ul>

        {/* Right side social icons */}
        <div className="flex gap-5 mt-4 md:mt-0">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub className="text-2xl hover:text-white" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter className="text-2xl hover:text-white" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-2xl hover:text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
