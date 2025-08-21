import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const storedCart = JSON.parse(localStorage.getItem("cart"));
      if (Array.isArray(storedCart)) {
        const cartWithQuantity = storedCart.map(item => ({
          ...item,
          price: Number(item.price),
          quantity: Number(item.quantity) || 1
        }));
        setCartItems(cartWithQuantity);
      } else {
        setCartItems([]);
      }
    } catch (error) {
      console.error("error", error);
      setCartItems([]);
    }
  }, []);

  const size = (index, size) => {
    const updatedCart = [...cartItems];
    updatedCart[index].size = size;
    setCartItems(updatedCart);
    setError(prev => ({ ...prev, [index]: "" }));
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const buyNow = (item, index) => {
    if (!item.size) {
      setError(prev => ({ ...prev, [index]: "Please select size before placing order." }));
      return;
    }

    setError(prev => {
      const updated = { ...prev };
      delete updated[index];
      return updated;
    });

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    const newOrder = {
      date: new Date().toISOString(),
      items: [item]
    };

    localStorage.setItem("orders", JSON.stringify([...existingOrders, newOrder]));

    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    navigate("/orders");
  };

  const buyAllNow = () => {
    const missingSizes = cartItems
      .map((item, index) => (!item.size ? index : null))
      .filter(index => index !== null);

    if (missingSizes.length > 0) {
      const newErrors = {};
      missingSizes.forEach(index => {
        newErrors[index] = "Please select size before placing order.";
      });
      setError(prev => ({ ...prev, ...newErrors }));
      return;
    }

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    const newOrder = {
      date: new Date().toISOString(),
      items: cartItems,
    };

    localStorage.setItem("orders", JSON.stringify([...existingOrders, newOrder]));
    setCartItems([]);
    localStorage.removeItem("cart");
    setError({});
    navigate("/orders");
  };

  const remove = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const increaseQty = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += 1;
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decreaseQty = (index) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCartItems(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const totalCartPrice = cartItems.reduce(
    (total, item) => total + (Number(item.price) * Number(item.quantity)),
    0
  );

  return (
    <div>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/shop">
          <h1 className="text-xl font-bold text-stone-800 mb-6">
            &#9665; CART (items: {cartItems.length})
          </h1>
        </Link>

        {cartItems.length === 0 ? (
          <p className="text-center text-stone-600">
            Cart is Empty. <br />
            Go and <Link to="/shop" className="underline text-blue-500">SHOP NOW</Link>
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cartItems.map((item, index) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row bg-white shadow-md rounded-md overflow-hidden"
              >
                {/* Image */}
                <div className="flex-shrink-0 w-full sm:w-40 p-4 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-w-full max-h-48 object-contain"
                  />
                </div>

                {/* Details */}
                <div className="flex flex-col flex-grow p-6">
                  <h2 className="text-xl font-semibold text-stone-800">{item.name}</h2>
                  <p className="text-lg font-medium mt-1">
                    &#8377; {Number(item.price) * Number(item.quantity)}
                  </p>

                  {/* Size Selector */}
                  <div className="mt-4">
                    <label className="block mb-1 font-medium">Size*:</label>
                    <select
                      value={item.size || ""}
                      onChange={(e) => size(index, e.target.value)}
                      className="border border-stone-400 rounded px-3 py-2 w-full sm:w-40"
                    >
                      <option value="">Select size</option>
                      <option value="XS">XS</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                    </select>
                    {error[index] && <p className="text-red-600 text-sm mt-1">{error[index]}</p>}
                  </div>

                  {/* Quantity */}
                  <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                    <label className="block mb-1 font-medium">Qty*:</label>
                    <div className="flex items-center border border-stone-400 rounded w-max px-3 py-1 space-x-4">
                      <button onClick={() => decreaseQty(index)} className="text-lg font-bold">-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQty(index)} className="text-lg font-bold">+</button>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-3 mt-auto pt-4 w-full sm:w-50">
                    <button
                      onClick={() => remove(item.id)}
                      className="bg-red-200 hover:bg-red-300 px-4 py-2 rounded w-full sm:w-auto"
                    >
                      Remove
                    </button>
                    <button
                      onClick={() => buyNow(item, index)}
                      className="bg-green-200 hover:bg-green-300 px-4 py-2 rounded w-full sm:w-auto"
                    >
                      Place Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Price Summary */}
        {cartItems.length > 0 && (
          <div className="w-full content-center mx-auto mt-8 p-6 shadow-md bg-fuchsia-50 rounded-md space-y-2 text-lg">
            <h2 className="font-semibold">Price Details ({cartItems.length} item{cartItems.length !== 1 ? 's' : ''})</h2>
            <p>Total Price: &#8377; {totalCartPrice}</p>

            {/* Buy All Now Button */}
            <button
              onClick={buyAllNow}
              className="bg-green-300 px-4 py-2 rounded mt-4 hover:bg-green-400 w-full sm:w-auto"
            >
              Buy All Now
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
