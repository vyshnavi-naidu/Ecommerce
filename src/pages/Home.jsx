import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="font-sans dark:bg-gray-900">
      <Navbar />

      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Image with hover scale */}
        <Link to="/shop" className="transition-transform duration-300 hover:scale-105">
          <img
            src="https://static.wixstatic.com/media/2feeec_5fad5efbfdd0477cabfb3fe42e8d8173~mv2.jpg"
            alt="Hero Left"
            className="w-full h-full object-cover"
          />
        </Link>

        {/* Right Text with hover underline on CTA */}
        <div
          className="bg-cover bg-center text-white p-8 md:p-12 flex flex-col justify-center items-start"
          style={{
            backgroundImage:
              'url("https://static.wixstatic.com/media/2feeec_a6c484a2829348a0a846718c853f8435~mv2.jpg")',
          }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl italic mb-4 leading-snug">
            Comfy Chic <br />
            LoungeWear
          </h1>
          <p className="text-base sm:text-lg lg:text-xl italic mb-4">
            Experience Elegance and Comfort Everyday
          </p>
          <Link
            to="/shop"
            className="text-base sm:text-lg lg:text-xl italic underline hover:opacity-80 transition duration-300"
          >
            Shop Collection
          </Link>
        </div>
      </div>

      {/* Featured Offers Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-12 my-16">
        {/* Card 1 */}
        <div className="text-center group transition duration-300 hover:scale-105">
          <Link to="/shop">
            <img
              src="https://static.wixstatic.com/media/2feeec_cb27cc10dbf34c1eac1b9b93d5e97fea~mv2.jpg"
              alt="Offer 1"
              className="w-full object-cover"
            />
          </Link>
          <h2 className="text-xl sm:text-2xl italic mt-4">25% Off Loungewear Sets</h2>
          <Link
            to="/shop"
            className="text-lg italic underline hover:opacity-80 transition duration-300"
          >
            Shop Now
          </Link>
        </div>

        {/* Card 2 */}
        <div className="text-center group transition duration-300 hover:scale-105">
          <Link to="/shop">
            <img
              src="https://static.wixstatic.com/media/2feeec_5f4cd2f898904955ab88f37b2996faaa~mv2.jpg"
              alt="Offer 2"
              className="w-full object-cover"
            />
          </Link>
          <h2 className="text-xl sm:text-2xl italic mt-4">Introducing: Comfort Zone</h2>
          <Link
            to="/shop"
            className="text-lg italic underline hover:opacity-80 transition duration-300"
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* Final Banner Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-12 my-16">
        <Link to="/shop" className="transition-transform duration-300 hover:scale-105">
          <img
            src="https://static.wixstatic.com/media/2feeec_772afa4c38664ad1ab57b12541811f90~mv2.jpg"
            alt="Banner"
            className="w-full object-cover"
          />
        </Link>

        <div
          className="bg-cover bg-center text-white p-8 md:p-12 flex flex-col justify-center items-start"
          style={{
            backgroundImage:
              'url("https://static.wixstatic.com/media/2feeec_b14e688197094634bfdc50e9b6ef12bd~mv2.jpg")',
          }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl italic mb-4">At Home. In Style</h1>
          <Link
            to="/shop"
            className="text-base sm:text-lg lg:text-xl italic underline hover:opacity-80 transition duration-300"
          >
            View More
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
