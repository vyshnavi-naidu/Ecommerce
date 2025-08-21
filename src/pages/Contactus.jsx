import React, { useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contactus = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const checkboxRef = useRef();
  const [error, setError] = useState({});
  const [success, setSuccess] = useState('');

  const Submit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const message = messageRef.current.value.trim();
    const isChecked = checkboxRef.current.checked;

    let errors = {};
    if (!name) errors.name = "Please enter your name";
    if (!email) errors.email = "Please enter your email";
    if (!isChecked) errors.check = "Please check the box to continue";

    if (Object.keys(errors).length > 0) {
      setError(errors);
      setSuccess('');
      return;
    }

    // Clear form and show success
    setError({});
    alert("Thank you for contacting us!");
    nameRef.current.value = '';
    emailRef.current.value = '';
    messageRef.current.value = '';
    checkboxRef.current.checked = false;
  };

  return (
    <div>
      <Navbar />

      {/* Header */}
      <div className="flex flex-col justify-center items-center mt-10 px-4 text-center">
        <h1 className="text-3xl font-semibold">Contact Us</h1>
        <p className="max-w-3xl mt-3 text-stone-600">
          We love to hear from you on our customer service, merchandise, website, or any topics you want to share with us.
          Your comments and suggestions will be appreciated. Please complete the form below.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-16 px-4 md:px-20 items-center bg-fuchsia-100 py-10 rounded-lg">
        
        {/* Left: Image */}
        <div className="flex justify-center">
          <img
            src="https://static.wixstatic.com/media/2feeec_14f35120d6d34866857b1ff023452771~mv2.jpg/v1/crop/x_965,y_747,w_5124,h_7124/fill/w_810,h_1126,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/GettyImages-1159196631.jpg"
            alt="Contact Us"
            className="rounded-lg shadow-md w-full h-96 object-cover max-w-md"
          />
        </div>

        {/* Right: Form */}
        <div className="m-4 md:m-10">
          <h2 className="text-2xl text-stone-800 font-semibold mb-4">Write to Us</h2>
          <p className="text-stone-700 mb-6">Email: info.comfy@gmail.com</p>

          <form className="space-y-5 flex flex-col" onSubmit={Submit}>
            <div>
              <label htmlFor="name" className="block font-medium">Name*</label>
              <input
                type="text"
                id="name"
                ref={nameRef}
                className="border w-full h-10 px-3 rounded"
              />
              {error.name && <p className="text-red-500 text-sm mt-1">{error.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block font-medium">Email*</label>
              <input
                type="email"
                id="email"
                ref={emailRef}
                className="border w-full h-10 px-3 rounded"
              />
              {error.email && <p className="text-red-500 text-sm mt-1">{error.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block font-medium">Leave us a message</label>
              <textarea
                id="message"
                rows="4"
                ref={messageRef}
                className="border w-full px-3 py-2 rounded"
                placeholder="Type your message here..."
              ></textarea>
            </div>

            <div className="flex items-center">
              <input type="checkbox" id="check" ref={checkboxRef} />
              <label htmlFor="check" className="ml-2">Yes, subscribe me to continue</label>
            </div>
            {error.check && <p className="text-red-500 text-sm">{error.check}</p>}

            <button
              type="submit"
              className="bg-stone-700 hover:bg-stone-800 text-white px-6 py-2 rounded transition"
            >
              Submit
            </button>

            {success && <p className="text-green-600 text-sm mt-4">{success}</p>}
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contactus;
