import React from 'react';

const Contact = () => (
  <section id="contact" className="py-16 bg-gray-800 text-white min-h-screen flex flex-col justify-center">
    <div className="container mx-auto text-center">
      <h3 className="text-4xl font-semibold mb-8">Contact Us</h3>
      <form className="max-w-md mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 mb-4 rounded bg-gray-900 text-white"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 mb-4 rounded bg-gray-900 text-white"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-2 mb-4 rounded bg-gray-900 text-white"
        />
        <button className="bg-blue-600 py-2 px-4 rounded w-full">Send Message</button>
      </form>
    </div>
  </section>
);

export default Contact;
