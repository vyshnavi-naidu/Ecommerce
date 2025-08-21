import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { BiCart } from "react-icons/bi";

const Navbar = () => {
  const [userName, setUserName] = useState('');
  const [itemsInCart, setItemsInCart] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);



  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('registerdetails'));
    if (storedUser?.name) setUserName(storedUser.name);

    const cartItems = JSON.parse(localStorage.getItem('cart'));
    setItemsInCart(cartItems || []);
  }, []);

  return (
    <nav className="bg-fuchsia-100 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/Home">
              <h1 className="text-2xl italic hover:opacity-80 transition duration-300">
                <span className="text-lg italic">Stay.</span>COMFY
              </h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-15 items-center text-lg  ">
            <Link to="/Home" className="hover:text-stone-500 transition">Home</Link>
            <Link to="/shop" className="hover:text-stone-500 transition">Shop</Link>
            <Link to="/Aboutus" className="hover:text-stone-500 transition">About Us</Link>
            <Link to="/Contactus" className="hover:text-stone-500 transition">Contact Us</Link>
            <Link to="/cart" className="hover:text-stone-500 transition flex flex-row"> Cart<BiCart className='h-7'/></Link>
            <Link to="/orders" className="hover:text-stone-500 transition">My Orders</Link>
            {userName ? (
              <span className=" font-medium  italic">Hi, {userName}</span>
            ) : (
              <Link to="/Login" className="hover:text-stone-500 transition">Login</Link>
            )}
          
          </div>
          

          {/*  (Mobile Only) */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl focus:outline-none"
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-fuchsia-50 px-4 pb-4 space-y-2 ">
          <Link to="/Home" onClick={() => setMenuOpen(false)} className="block hover:text-stone-500">Home</Link>
          <Link to="/shop" onClick={() => setMenuOpen(false)} className="block hover:text-stone-500">Shop</Link>
          <Link to="/Aboutus" onClick={() => setMenuOpen(false)} className="block hover:text-stone-500">About Us</Link>
          <Link to="/Contactus" onClick={() => setMenuOpen(false)} className="block hover:text-stone-500">Contact Us</Link>
          <Link to="/cart" onClick={() => setMenuOpen(false)} className="block hover:text-stone-500">
            Cart ({itemsInCart.length})
          </Link>
          <Link to="/orders" onClick={() => setMenuOpen(false)} className="block hover:text-stone-500">My Orders</Link>
          {userName ? (
            <span className="block text-base font-medium text-black italic">Hi, {userName}</span>
          ) : (
            <Link to="/Login" onClick={() => setMenuOpen(false)} className="block hover:text-stone-500">Login</Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
