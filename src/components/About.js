import React from 'react';
import logo from '../Assets/logo.png';
import one from '../Assets/one.png';
import two from '../Assets/two.png';
import three from '../Assets/three.png';

const About = () => (
  <section>
    {/* Hero Section */}
    <section className="relative bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 h-screen flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <img
            src={logo} // Path to your logo
            alt="Logo"
            className="mx-auto h-24 mb-6" // Adjust the height as needed
          />
          <h2 className="text-5xl font-bold mb-4">Abiding Technologies</h2>
          <p className="text-xl mb-8">Expert IT Consulting Services Tailored for Your Success</p>
          <a href="#contact" className="bg-blue-600 py-2 px-4 rounded">Get Started</a>
        </div>
      </div>
    </section>

    {/* Cards Section */}
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Who We Are Card */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
            <div className="flex justify-center mt-6 mb-4">
              <img
                src={one} // Replace with the correct path for the card image
                alt="Who We Are"
                className="w-32 h-32 object-cover rounded-full" // Small size and centered
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Who We Are</h3>
              <p className="text-gray-600">
                We are a team of San Diego web design and development professionals who love partnering with good people and businesses to help them achieve online success.
              </p>
            </div>
          </div>

          {/* What We Do Card */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
            <div className="flex justify-center mt-6 mb-4">
              <img
                src={two} // Replace with the correct path for the card image
                alt="What We Do"
                className="w-32 h-32 object-cover rounded-full" // Small size and centered
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">What We Do</h3>
              <p className="text-gray-600">
                We’re focused on honing our crafts and bringing everything we have to the table for our clients. We create custom, functional websites focused on converting your users into customers.
              </p>
            </div>
          </div>

          {/* Why We Do It Card */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
            <div className="flex justify-center mt-6 mb-4">
              <img
                src={three} // Replace with the correct path for the card image
                alt="Why We Do It"
                className="w-32 h-32 object-cover rounded-full" // Small size and centered
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Why We Do It</h3>
              <p className="text-gray-600">
                Each of us loves what we do and we feel that spirit helps translate into the quality of our work. Working with clients who love their work combines into a fun, wonderful partnership for everyone involved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
);

export default About;
