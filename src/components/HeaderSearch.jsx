import { Search, Menu, ChevronRight, Star, Clock } from 'lucide-react';
import logo from "../assets/orgLogos.png"
const HeaderSearch = () => {
  return (
    <div className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src={logo} className="text-2xl font-bold text-blue-600"></img>
            <button className="md:hidden">
              <Menu className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex-1 max-w-md mx-4 relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for any brand or product"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <ul className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-lg shadow-lg mt-1 hidden">
              <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">Popular searches</li>
            </ul>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <span className="text-sm">₹12,102.4</span> 
            </div>  
            <button className="text-sm text-gray-600 hover:text-gray-800">Help</button>
            <button className="text-sm text-gray-600 hover:text-gray-800">Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderSearch;