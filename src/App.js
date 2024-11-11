import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // Correct path
import Contact from './components/Contact'; // Your Contact page component
import Testimonials from './components/Testimonials'; // Testimonials page
import HomePage from './components/HomePage';  // Update the import to match the filename
import About from './components/About';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} /> {/* Add this route */}

        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials />} /> {/* Add this route */}

      </Routes>
    </Router>
  );
}

export default App;
