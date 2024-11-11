import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../Assets/logo.png'; // Your logo image path

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu toggle

  // Toggle dropdown open and close
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-white p-4 fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <img
          src={logo}  // Corrected path to logo
          alt="Logo"
          className="h-10"  // Adjust logo height
        />

        {/* Hamburger Icon for Mobile View */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Navigation */}
        <nav className={`flex items-center space-x-6 lg:flex ${isMobileMenuOpen ? 'flex-col absolute bg-gray-800 w-full p-4 top-20 left-0' : 'hidden'}`}>
          {/* Home Link */}
          <Link to="/" className="px-4 py-2 text-white rounded-lg focus:outline-none hover:bg-gray-700">
            Home
          </Link>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="px-4 py-2 text-white rounded-lg focus:outline-none hover:bg-gray-700"
            >
              Services
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white text-gray-800 border border-gray-200 rounded-md shadow-lg z-10">
                <ul className="py-2">
                  <li className="hover:bg-gray-100">
                    <a href="#infrastructure" className="block px-4 py-2 hover:text-blue-600">
                      IT Infrastructure
                    </a>
                  </li>
                  <li className="hover:bg-gray-100">
                    <a href="#cybersecurity" className="block px-4 py-2 hover:text-blue-600">
                      IT Cyber Security
                    </a>
                  </li>
                  <li className="hover:bg-gray-100">
                    <a href="#virtualization" className="block px-4 py-2 hover:text-blue-600">
                      Virtualization Solution
                    </a>
                  </li>
                  <li className="hover:bg-gray-100">
                    <a href="#cloud" className="block px-4 py-2 hover:text-blue-600">
                      Cloud Solution
                    </a>
                  </li>
                  <li className="hover:bg-gray-100">
                    <a href="#professional" className="block px-4 py-2 hover:text-blue-600">
                      Professional Services
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>

        
          <Link to="/contact" className="px-4 py-2 text-white rounded-lg focus:outline-none hover:bg-gray-700">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
