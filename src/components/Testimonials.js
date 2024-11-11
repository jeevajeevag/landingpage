import React from 'react';

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-4xl mb-4">Testimonials</h2>
      <div className="space-y-4">
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
          <p>"The services provided were exceptional. Our experience was seamless and professional. Highly recommended!"</p>
          <p>- John Doe, CEO of Example Corp</p>
        </div>
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
          <p>"Our project was delivered on time and exceeded our expectations. We couldn't be happier with the outcome!"</p>
          <p>- Jane Smith, Founder of Tech Solutions</p>
        </div>
        {/* Add more testimonials here */}
      </div>
    </div>
  );
};

export default Testimonials;
