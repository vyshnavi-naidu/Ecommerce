import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Login = () => {
  const emailinp = useRef();
  const passwordinp = useRef();
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();

    const email = emailinp.current.value.trim();
    const password = passwordinp.current.value.trim();

    // Validation
    if (!email && !password) {
      setError({
        email: 'Please enter your email',
        password: 'Please enter your password',
      });
    } else if (!email) {
      setError({ email: 'Please enter your email' });
    } else if (!email.includes('@') || email.length < 9) {
      setError({ email: 'Invalid email format' });
    } else if (!password) {
      setError({ password: 'Please enter your password' });
    } else if (password.length < 8) {
      setError({
        password: 'Password must be at least 8 characters',
      });
    } else {
      // Store data in localStorage
      localStorage.setItem(
        'logindetails',
        JSON.stringify({ email, password })
      );

      // Clear inputs
      emailinp.current.value = '';
      passwordinp.current.value = '';

      // Redirect or notify user
      alert('Login successful!');
      navigate('/');
    }
  };

  return (
    <div>
      <Navbar />

      <div className="max-w-md mx-auto my-20 bg-white p-8 rounded-md shadow-md">
        <form onSubmit={Submit} className="space-y-5">
          <h1 className="text-3xl font-bold text-center">Login</h1>

          <div>
            <label htmlFor="email" className="block font-medium">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              ref={emailinp}
              placeholder="Enter your email"
              className="w-full border h-10 px-3 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            {error.email && (
              <p className="text-red-600 text-sm mt-1">{error.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block font-medium">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              ref={passwordinp}
              placeholder="Enter your password"
              className="w-full border h-10 px-3 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            {error.password && (
              <p className="text-red-600 text-sm mt-1">{error.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 active:bg-blue-800 focus:bg-blue-800 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
