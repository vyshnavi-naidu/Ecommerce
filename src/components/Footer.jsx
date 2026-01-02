import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="bg-slate-600 text-white w-full flex flex-col items-center text-center py-10 px-4">
      {/* Tagline */}
      <p className="italic max-w-2xl mb-6">
        Comfortwear served, raw and pure. stay.COMFY gang is ready to work and play, whenever, wherever.
        This is why we say: stay.COMFY — At home, In style, anytime.
      </p>

      {/* Brand Name */}
      <h1 className="text-xl italic mb-6">Stay.COMFY</h1>

      {/* Navigation Links */}
      <div className="flex space-x-6 mb-6">
        <Link to="/Home" className="hover:underline">Home</Link>
        <Link to="/shop" className="hover:underline">Shop</Link>
        <Link to="/Aboutus" className="hover:underline">About Us</Link>
        <Link to="/Contactus" className="hover:underline">Contact Us</Link>
      </div>

      {/* Social Media Icons */}
      <div className="flex space-x-6 mb-6">
         <a
              href="https://github.com/vyshnavi-naidu/"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <FaGithub size={30} className="hover:text-rose-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/vasamsetti-vyshnavi"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <CiLinkedin size={32} className="hover:text-blue-400" />
            </a>
      </div>

      {/* Copyright */}
      <p className="text-sm text-white">
        © 2025 Stay.COMFY — All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
