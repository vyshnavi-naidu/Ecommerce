import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const MyOrders = () => {
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];

    // Flatten each order into individual items with date
    const allItems = storedOrders.flatMap(order =>
      order.items.map(item => ({
        ...item,
        date: order.date,
      }))
    );

    setOrderItems(allItems);
  }, []);

  const clearOrders = () => {
    if (window.confirm("Are you sure you want to clear all orders?")) {
      localStorage.removeItem("orders");
      setOrderItems([]);
    }
  };

  return (
    <div className="min-h-screen">
      <h2 className="text-3xl text-center pt-10 mb-8">Orders</h2>

      {orderItems.length === 0 ? (
        <p className="text-2xl text-black text-center my-20 px-4">
          No orders yet.
          <br />
          Go and{" "}
          <Link to="/shop" className="underline text-blue-500 text-lg">
            SHOP NOW
          </Link>
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-20">
          {orderItems.map((item, index) => (
            <div
              key={`${item.name}-${item.size}-${item.date}-${index}`}
              className="flex flex-row  border border-fuchsia-300 rounded-xl shadow-sm p-4 text-stone-800"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={`Image of ${item.name}`}
                className="w-28 h-28 object-contain rounded mr-4"
              />

              {/* Content */}
              <div className="flex flex-col justify-between space-y-1">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p>
                  Order Date:{" "}
                  {new Date(item.date).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p>Quantity: {item.quantity}</p>
                <p>Size: {item.size}</p>
                <p> Total Price: ₹{item.price * item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Clear Orders */}
      <div className="flex justify-center my-10">
        <button
          onClick={clearOrders}
          className="bg-fuchsia-100 hover:bg-fuchsia-200 text-stone-800 font-semibold py-2 px-6 rounded transition"
          aria-label="Clear all orders"
        >
          Clear Order History
        </button>
      </div>

      {/* Continue Shopping */}
      <div className="text-center mb-10">
        <Link to="/shop">
          <button className="bg-green-100 hover:bg-green-200 px-6 py-2 rounded text-lg">
            Continue to Shop
          </button>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default MyOrders;
