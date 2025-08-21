import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-fuchsia-100 w-full flex flex-col items-center text-center py-10 px-4">
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
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-xl hover:text-blue-600 transition"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-xl hover:text-pink-500 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="text-xl hover:text-sky-500 transition"
        >
          <FaTwitter />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm text-stone-600">
        © 2025 Stay.COMFY — All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
