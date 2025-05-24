import React from 'react';
import { Search, Menu, ChevronRight, Star, Clock } from 'lucide-react';
import topcategory1 from '../assets/topcategory1.png';
import topcategory2 from '../assets/topcategory2.png';
import topcategory3 from '../assets/topcategory3.png';
import topcategory4 from '../assets/topcategory4.png';
import topcategory5 from '../assets/topcategory5.png';
import topcategory6 from '../assets/topcategory6.png';
import topcategory7 from '../assets/topcategory7.png';
import topcategory8 from '../assets/topcategory8.png';
import topcategory9 from '../assets/topcategory9.png';
import topcategory10 from '../assets/topcategory10.png';

const topcategory = [
  topcategory1,
  topcategory2,
  topcategory3,
  topcategory4,
  topcategory5,
  topcategory6,
  topcategory7,
  topcategory8,
  topcategory9,
  topcategory10
];



const TopCategories = () => {
  const categories = [
    { name: 'New on CashKaro', color: 'bg-red-500' },
    { name: 'Fashion', color: 'bg-orange-500' },
    { name: 'Food & Grocery', color: 'bg-green-500' },
    { name: 'Mobile', color: 'bg-pink-500' },
    { name: 'Banking', color: 'bg-blue-500' },
    { name: 'Electronics', color: 'bg-purple-500' },
    { name: 'Beauty & Grooming', color: 'bg-red-400' },
    { name: 'Pharmacy', color: 'bg-teal-500' },
    { name: 'Hotel & Flights', color: 'bg-gray-500' },
    { name: 'Health & Wellness', color: 'bg-green-600' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-xl font-bold mb-6">Top Categories</h2>
      <div className="overflow-x-auto">
        <div className="flex space-x-6 pb-4 min-w-max md:grid md:grid-cols-5 lg:grid-cols-10 md:gap-4 md:space-x-0">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center min-w-[80px] cursor-pointer group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2 overflow-hidden border shadow-md group-hover:scale-105 transition-transform">
                <img src={topcategory[index]} alt={category.name} className="w-full h-full object-cover" />
              </div>
              <span className="text-xs text-center text-gray-700 font-medium leading-tight">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
