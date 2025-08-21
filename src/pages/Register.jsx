import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const nameinp = useRef();
  const emailinp = useRef();
  const passwordinp = useRef();
  const cpinp = useRef();

  const [error, setError] = useState({});
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();

    const name = nameinp.current.value.trim();
    const email = emailinp.current.value.trim();
    const password = passwordinp.current.value.trim();
    const cp = cpinp.current.value.trim();

    // Validation
    if (!name && !email && !password && !cp) {
      setError({
        name: 'Please enter your name',
        email: 'Please enter your email',
        password: 'Please enter your password',
        cp: 'Please confirm your password',
      });
    } else if (!name) {
      setError({ name: 'Please enter your name' });
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
    } else if (!cp) {
      setError({ cp: 'Please confirm your password' });
    } else if (password !== cp) {
      setError({ cp: 'Passwords do not match' });
    } else {
      // Success: Save data
      localStorage.setItem(
        'registerdetails',
        JSON.stringify({ name, email, password })
      );

      // Clear form
      nameinp.current.value = '';
      emailinp.current.value = '';
      passwordinp.current.value = '';
      cpinp.current.value = '';

    
      navigate('/home');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
      <div className="max-w-md w-full font-semibold text-4xl py-10 px-30" >Stay.COMFY</div>
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Sign Up</h1>
        <form onSubmit={Submit} className="space-y-4">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block font-medium">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              ref={nameinp}
              placeholder="Enter your name"
              className="w-full border h-10 px-3 rounded shadow-sm focus:ring-2 focus:ring-blue-300 outline-none"
            />
            {error.name && <p className="text-red-600 text-sm">{error.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block font-medium">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              ref={emailinp}
              placeholder="Enter your email"
              className="w-full border h-10 px-3 rounded shadow-sm focus:ring-2 focus:ring-blue-300 outline-none"
            />
            {error.email && <p className="text-red-600 text-sm">{error.email}</p>}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block font-medium">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              ref={passwordinp}
              placeholder="Enter your password"
              className="w-full border h-10 px-3 rounded shadow-sm focus:ring-2 focus:ring-blue-300 outline-none"
            />
            {error.password && <p className="text-red-600 text-sm">{error.password}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="cp" className="block font-medium">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="cp"
              ref={cpinp}
              placeholder="Confirm your password"
              className="w-full border h-10 px-3 rounded shadow-sm focus:ring-2 focus:ring-blue-300 outline-none"
            />
            {error.cp && <p className="text-red-600 text-sm">{error.cp}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 active:bg-blue-800 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
