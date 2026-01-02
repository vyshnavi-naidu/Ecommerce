import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Product = () => {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const navigate = useNavigate();
  const { id } = useParams();

  const product = products.find((product) => product.id === parseInt(id));
  
  const [size, setSize] = useState("");
  const [error, setError] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSizeChange(e) {
    const selectedSize = e.target.value;
    setSize(selectedSize);
    if (selectedSize) setError("");
  }

  const Addtocart = (product) => {
    let cart = [];
    try {
      cart = JSON.parse(localStorage.getItem("cart")) || [];
    } catch (e) {
      cart = [];
    }

    const exists = cart.some((item) => item.id === product.id && item.size === size);

    if (!size) {
      setError("Please select the size");
      return;
    }

    if (!exists) {
      const cartItem = {
        ...product,
        size,
        quantity,
      };

      cart.push(cartItem);
      localStorage.setItem("cart", JSON.stringify(cart));
      navigate("/cart");
    } else {
      alert("This item is already in the cart with the selected size.");
    }
  };

  const buyNowFromProduct = () => {
    if (!size) {
      setError("Please select size before placing order.");
      return;
    }

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

    const newOrder = {
      date: new Date().toISOString(),
      items: [{
        ...product,
        price: Number(product.price),
        quantity: quantity,
        size: size,
      }],
    };

    localStorage.setItem("orders", JSON.stringify([...existingOrders, newOrder]));

    
    navigate("/orders");
  };

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const totalPrice = product ? product.price * quantity : 0;

  if (!product) return <div className="text-center py-10">Product not found.</div>;

  return (
    <div>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 md:px-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-md mx-auto object-cover rounded-md"
          />

          <div className="space-y-6">
            <h1 className="text-2xl font-semibold">{product.name}</h1>
            <p className="text-xl text-stone-700 font-semibold">&#8377; {totalPrice}</p>

            {/* Size Selector */}
            <div>
              <label className="block mb-2 font-semibold">Size*:</label>
              <select
                onChange={handleSizeChange}
                value={size}
                className="w-full md:w-40 border border-stone-400 rounded px-3 py-2"
              >
                <option value="">Select size</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
              {error && <p className="text-red-600 mt-1">{error}</p>}
            </div>

            {/* Quantity */}
            <div>
              <label className="block mb-2 font-semibold">Quantity*:</label>
              <div className="flex items-center border border-stone-400 w-max rounded px-3 py-2 space-x-4">
                <button onClick={decreaseQty} className="text-lg font-bold">-</button>
                <span>{quantity}</span>
                <button onClick={increaseQty} className="text-lg font-bold">+</button>
              </div>
            </div>

            {/* Buttons */}
            <div className="space-y-3">
              <button
                onClick={() => Addtocart(product)}
                className="bg-slate-700 hover:bg-slate-800 text-white w-full md:w-80 py-2 rounded"
              >
                Add to Cart
              </button>
              <button
                onClick={buyNowFromProduct}
                className="bg-blue-800 hover:bg-blue-600 text-white w-full md:w-80 py-2 rounded"
              >
                Buy Now
              </button>
            </div>

            {/* Info */}
            <div className="text-stone-800 mt-6">
              <h2 className="font-semibold mb-2">Product Info:</h2>
              <p>
                I'm a product description. This is a great place to "sell" your product and grab buyers' attention. Describe your product clearly and concisely.
              </p>
            </div>

            <details className="text-stone-800 mt-4">
              <summary className="font-semibold cursor-pointer">Return and Refund Policy</summary>
              <p className="mt-2">
                I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase.
              </p>
            </details>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Product;
