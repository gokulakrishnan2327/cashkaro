
import React from 'react';
import test1 from '../assets/testimonial/Frame1.png'
import test2 from '../assets/testimonial/Frame2.png'
import test3 from '../assets/testimonial/Frame3.png'
import test4 from '../assets/testimonial/Frame4.png'

const TestimonialsSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-white">
      <div className="text-center mb-8">
        <button className="inline-flex items-center gap-2 text-lg font-semibold text-gray-900 hover:text-gray-700">
          Popular Stores
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      <div className="text-center mb-12">
        <button className="inline-flex items-center gap-2 text-lg font-semibold text-gray-900 hover:text-gray-700">
          Popular Categories
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Meet Our Superstars</h2>
        
        <div className="hidden md:grid grid-cols-4 gap-6">
          <img src={test1} alt="Anushka Ranjan - CashKaro.com is a trustworthy and highly professional cashback website" className="w-full h-auto " />
          <img src={test2} alt="Anushka Ranjan - This CashKaro cashback app is truly awesome" className="w-full h-auto " />
          <img src={test3} alt="Anushka Ranjan - CashKaro is an amazing app, incredibly innovative" className="w-full h-auto " />
          <img src={test4} alt="Anushka Ranjan - My experience with CashKaro has been fantastic" className="w-full h-auto " />
        </div>
        
        <div className="md:hidden overflow-x-auto">
          <div className="flex gap-4 pb-4" style={{ width: 'max-content' }}>
            <img src={test1} alt="Anushka Ranjan - CashKaro.com is a trustworthy and highly professional cashback website" className="w-72 h-auto  flex-shrink-0" />
            <img src={test2} alt="Anushka Ranjan - This CashKaro cashback app is truly awesome" className="w-72 h-auto rounded-lg shadow-sm flex-shrink-0" />
            <img src={test3} alt="Anushka Ranjan - CashKaro is an amazing app, incredibly innovative" className="w-72 h-auto rounded-lg shadow-sm flex-shrink-0" />
            <img src={test4} alt="Anushka Ranjan - My experience with CashKaro has been fantastic" className="w-72 h-auto rounded-lg shadow-sm flex-shrink-0" />
          </div>
        </div>
      </div>
    </div>
  );
};


export default TestimonialsSection