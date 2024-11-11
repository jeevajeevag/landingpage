import React from 'react';
import About from './About'; // Adjust the path if necessary

const HomePage = () => {
  return (
    <div>
      {/* Hero Section with Animation and Smooth Scrolling */}
      <section className="relative bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 h-screen flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="z-10 px-6 py-12 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6 animate__animated animate__fadeInUp animate__delay-1s">
            Cloud Solution
          </h1>
          <p className="text-xl mb-6 animate__animated animate__fadeInUp animate__delay-2s">
            We are one of the most effective Web Design Companies. Getting online is easy. Succeeding online is a different story.
          </p>
          <p className="text-lg mb-8 animate__animated animate__fadeInUp animate__delay-3s">
            You’ll need more than just a beautiful website to stand out. Conversion-based web design and a lead generating marketing plan are essential for online success.
          </p>
          <a
            href="#services" 
            className="bg-yellow-500 py-3 px-8 rounded-full text-lg font-semibold transform hover:scale-105 transition duration-300 animate__animated animate__fadeInUp animate__delay-4s"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-12 text-indigo-700 animate__animated animate__fadeInUp">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6">
          {/* Service 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 animate__animated animate__fadeInUp">
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">Web Design</h3>
            <p className="text-gray-600">
              Web design is the process of collecting ideas and aesthetically presenting them to the audience.
            </p>
          </div>
          {/* Service 2 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 animate__animated animate__fadeInUp">
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">Development</h3>
            <p className="text-gray-600">
              We devote our undivided attention to writing every line of code to make your ideas come to life.
            </p>
          </div>
          {/* Service 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 animate__animated animate__fadeInUp">
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">Marketing</h3>
            <p className="text-gray-600">
              We help you build brand authority and visibility through expert marketing strategies.
            </p>
          </div>
        </div>
      </section>
      {/* IT Solutions Section */}
      <section className="bg-indigo-700 py-20 text-white text-center">
        <h2 className="text-4xl font-bold mb-12 animate__animated animate__fadeInUp">
          IT Solutions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6">
          {/* IT Solution 1 */}
          <div className="bg-white text-indigo-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 animate__animated animate__fadeInUp">
            <h3 className="text-xl font-semibold mb-4">IT Infrastructure</h3>
            <p className="text-gray-700">
              The structured cabling system holds the entire IT & Telecoms communication network together.
            </p>
          </div>
          {/* IT Solution 2 */}
          <div className="bg-white text-indigo-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 animate__animated animate__fadeInUp">
            <h3 className="text-xl font-semibold mb-4">IT Cyber Security</h3>
            <p className="text-gray-700">
              We aim to protect your data by establishing security intelligence as an integral part of your infrastructure.
            </p>
          </div>
          {/* IT Solution 3 */}
          <div className="bg-white text-indigo-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 animate__animated animate__fadeInUp">
            <h3 className="text-xl font-semibold mb-4">Virtualization Solution</h3>
            <p className="text-gray-700">
              Server virtualization is the creation of virtual versions of your servers running on just one physical server.
            </p>
          </div>
        </div>
      </section>
      {/* About Section */}
    <About />

      {/* Testimonials Section */}
      <section id="testimonials" className="h-screen bg-purple-500 flex flex-col items-center justify-center text-white">
        <h2 className="text-4xl mb-4">What Our Clients Say</h2>
        <div className="w-full max-w-4xl p-4">
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
            <p>"The services provided were exceptional. Our experience was seamless and professional. Highly recommended!"</p>
            <p>- John Doe, CEO of Example Corp</p>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg mt-4">
            <p>"Our project was delivered on time and exceeded our expectations. We couldn't be happier with the outcome!"</p>
            <p>- Jane Smith, Founder of Tech Solutions</p>
          </div>
          {/* Add more testimonials here */}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-700 text-center text-white">
        <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-lg mb-8">Let us help you build a strong online presence with our expert services.</p>
        <a href="#contact" className="bg-yellow-500 py-3 px-8 rounded-full text-lg font-semibold hover:scale-105 transition duration-300">
          Contact Us
        </a>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800 text-white text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
        <p className="text-lg mb-6">We would love to hear from you! Reach out to us for any inquiries or feedback.</p>
        <form className="max-w-2xl mx-auto">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div className="mb-6">
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-2 border rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-yellow-500 py-3 px-8 rounded-full text-lg font-semibold hover:scale-105 transition duration-300"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default HomePage;
