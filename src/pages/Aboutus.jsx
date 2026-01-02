import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Aboutus = () => {
  return (
    <div>
      <Navbar />

      {/* Header */}
      <div className="flex flex-col items-center mt-16 px-4 text-center">
        <h1 className="text-3xl font-semibold text-stone-700 italic">Comfort Zone</h1>
        <p className="text-stone-600 mt-2">
          Breathable, soft fabrics crafted for all-day comfort — perfect for every season.
        </p>
      </div>

      {/* Section 1 - Our Mission */}
      <div className="bg-slate-600 text-white mt-16 mx-4 md:mx-20 rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row items-center md:gap-10 px-6 md:px-16 py-10">
          <img
            src="https://static.wixstatic.com/media/2feeec_723258111ae2451a92192bc23984505c~mv2.jpg"
            alt="Our mission at stay.COMFY"
            className="h-64 md:h-80 object-cover rounded shadow-md"
          />
          <div className="mt-6 md:mt-0 md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">OUR MISSION</h2>
            <p className="text-white">
              At stay.COMFY, our mission is simple — to craft premium, comfortable, and timeless clothing that brings together quality, style, and affordability.
              We are driven by the belief that fashion should be accessible, durable, and proudly homegrown.
              With complete control over every step — from fabric to finished garment — we are committed to delivering clothing that not only looks good but feels good and lasts long.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2 - Our Team */}
      <div className="bg-slate-600 text-white mt-16 mx-4 md:mx-20 rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row-reverse items-center md:gap-10 px-6 md:px-16 py-10">
          <img
            src="https://onewayclothing.co.in/cdn/shop/files/OUR_MISSION_1.svg?v=1751611774&width=800"
            alt="Meet the team behind stay.COMFY"
            className="h-64 md:h-80 object-contain rounded"
          />
          <div className="mt-6 md:mt-0 md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">OUR TEAM</h2>
            <p>
              stay.COMFY is a comfort-focused clothing brand, born from the rich legacy of stay.COMFY, a Ludhiana-based fabric and garment manufacturer.
              What began as a specialization in high-quality fabric production has grown into a complete in-house clothing brand — from weaving fabrics to manufacturing garments and even printing — all under one roof.
              This allows us to maintain strict quality control and ensure every product reflects our commitment to comfort, durability, and style.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3 - Our Philosophy */}
      <div className="mt-20 px-6 md:px-20">
        <h2 className="text-2xl italic mb-10 text-center">OUR PHILOSOPHY</h2>
        <div className="grid grid-cols-1 mb-10 md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-white shadow-md p-6 rounded-lg text-center hover:shadow-xl transition duration-300">
            <img
              src="https://onewayclothing.co.in/cdn/shop/files/Frame_1.png?v=1680262040&width=200"
              alt="Cotton comfort"
              className="mx-auto mb-4"
            />
            <h3 className="text-sm font-semibold text-stone-700 mb-2">COTTON RICH COMFORT</h3>
            <p className="text-stone-600">
              Breathable, soft fabrics crafted for all-day comfort — perfect for every season.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md p-6 rounded-lg text-center hover:shadow-xl transition duration-300">
            <img
              src="https://onewayclothing.co.in/cdn/shop/files/Frame_2.png?v=1680262040&width=200"
              alt="Timeless everyday essentials"
              className="mx-auto mb-4"
            />
            <h3 className="text-sm font-semibold text-stone-700 mb-2">TIMELESS EVERYDAY ESSENTIALS</h3>
            <p className="text-stone-600">
              Basics designed with a style edge that never go out of fashion, suitable for all age groups.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md p-6 rounded-lg text-center hover:shadow-xl transition duration-300">
            <img
              src="https://onewayclothing.co.in/cdn/shop/files/Frame_3.png?v=1680262040&width=200"
              alt="Durable quality"
              className="mx-auto mb-4"
            />
            <h3 className="text-sm font-semibold text-stone-700 mb-2">DURABLE, LONG LASTING QUALITY</h3>
            <p className="text-stone-600">
              Premium construction and materials that stand the test of time — made to be worn, loved, and lived in.
            </p>
          </div>
        </div>
      </div>

      {/* Section 4 - Trusted by Thousands */}
      <div className="mt-20 px-6 md:px-20 mb-20">
        <h2 className="text-2xl text-center text-stone-800 font-semibold mb-10">Trusted by Thousands</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {/* Stat 1 */}
          <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition duration-300">
            <h3 className="text-4xl font-bold text-slate-700 mb-2">500+</h3>
            <p className="text-stone-600 font-medium">Products Available</p>
          </div>

          {/* Stat 2 */}
          <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition duration-300">
            <h3 className="text-4xl font-bold text-slate-700 mb-2">1200+</h3>
            <p className="text-stone-600 font-medium">Orders Completed</p>
          </div>

          {/* Stat 3 */}
          <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition duration-300">
            <h3 className="text-4xl font-bold text-slate-700 mb-2">900+</h3>
            <p className="text-stone-600 font-medium">Happy Customers</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Aboutus;
