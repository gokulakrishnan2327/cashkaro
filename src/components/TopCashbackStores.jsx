import { Search, Menu, ChevronRight, Star, Clock } from 'lucide-react';
const TopCashbackStores = () => {
  const stores = [
    {
      name: 'Amazon',
      logo: '/api/placeholder/80/40',
      reward: 'Flat 5% Rewards',
      terms: 'Reward rates & terms',
      label: 'Increased Cashback',
      bgColor: 'bg-blue-50'
    },
    {
      name: 'The Man Company',
      logo: '/api/placeholder/80/40',
      reward: 'Upto 39% Cashback',
      terms: 'Cashback rates & terms',
      label: 'Limited Period Offer',
      bgColor: 'bg-gray-50'
    },
    {
      name: 'Flipkart',
      logo: '/api/placeholder/80/40',
      reward: 'Flat 5% Rewards',
      terms: 'Ends in 23: 59: 59',
      label: 'Live now',
      bgColor: 'bg-blue-50'
    },
    {
      name: 'Myntra',
      logo: '/api/placeholder/80/40',
      reward: 'Flat 5% Rewards',
      terms: 'Ends in 23: 59: 59',
      label: 'Live now',
      bgColor: 'bg-pink-50'
    },
    {
      name: 'SBI',
      logo: '/api/placeholder/80/40',
      reward: 'Upto ₹1,800 Rewards',
      terms: 'Reward rates & terms',
      label: 'Live now',
      bgColor: 'bg-blue-50'
    },
    {
      name: 'MAGZTER',
      logo: '/api/placeholder/80/40',
      reward: 'Flat ₹3,999 Cashback',
      terms: 'Cashback rates & terms',
      label: 'Live now',
      bgColor: 'bg-green-50'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Exclusive Offers for You</h2>
        <button className="text-blue-600 text-sm font-medium flex items-center">
          View All <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {stores.map((store, index) => (
          <div key={index} className={`${store.bgColor} rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow`}>
            <div className="flex justify-between items-start mb-3">
              <img src={store.logo} alt={store.name} className="h-8 object-contain" />
              <span className={`text-xs px-2 py-1 rounded-full text-white ${
                store.label === 'Increased Cashback' ? 'bg-pink-500' : 
                store.label === 'Limited Period Offer' ? 'bg-purple-500' : 'bg-red-500'
              }`}>
                {store.label}
              </span>
            </div>
            
            <div className="mb-3">
              <div className="font-semibold text-sm mb-1">{store.reward}</div>
              <div className="text-xs text-gray-600">{store.terms}</div>
            </div>
            
            <button className="w-full bg-blue-600 text-white text-sm py-2 rounded-md hover:bg-blue-700 transition-colors">
              Shop Now
            </button>
          </div>
        ))}
      </div>
      
      {/* Second row for mobile layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mt-4">
        {stores.slice(0, 6).map((store, index) => (
          <div key={`row2-${index}`} className={`${store.bgColor} rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow`}>
            <div className="flex justify-between items-start mb-3">
              <img src={store.logo} alt={store.name} className="h-8 object-contain" />
              <span className="text-xs px-2 py-1 rounded-full text-white bg-red-500">
                Live now
              </span>
            </div>
            
            <div className="mb-3">
              <div className="font-semibold text-sm mb-1">{store.reward}</div>
              <div className="text-xs text-gray-600">{store.terms}</div>
            </div>
            
            <button className="w-full bg-blue-600 text-white text-sm py-2 rounded-md hover:bg-blue-700 transition-colors">
              Shop Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};


export default TopCashbackStores