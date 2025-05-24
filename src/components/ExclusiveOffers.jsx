import { Search, Menu, ChevronRight, Star, Clock } from 'lucide-react';
import amazon from "../assets/exclusive/exclusive1.png"
import flipkart from "../assets/exclusive/exclusive2.png"
import myntra from "../assets/exclusive/exclusive3.png"
import sbi from "../assets/exclusive/exclusive4.png"
import megter from "../assets/exclusive/exclusive5.png"

const ExclusiveOffers = () => {
 const offers = [
  {
    name: 'Amazon',
    logo: amazon,
    reward: 'Flat 5% Rewards',
    terms: 'Reward rates & terms',
    label: 'Increased Cashback',
    labelColor: 'bg-pink-500',
    bgColor: 'bg-blue-50',
    timer: null
  },
  {
    name: 'The Man Company',
    logo: megter, // Just an example
    reward: 'Upto 39% Cashback',
    terms: 'Cashback rates & terms',
    label: 'Limited Period Offer',
    labelColor: 'bg-purple-500',
    bgColor: 'bg-gray-50',
    timer: null
  },
  {
    name: 'Flipkart',
    logo: flipkart,
    reward: 'Flat 5% Rewards',
    terms: 'Ends in 23: 59: 59',
    label: 'Live now',
    labelColor: 'bg-red-500',
    bgColor: 'bg-blue-50',
    timer: ''
  },
  {
    name: 'Myntra',
    logo: myntra,
    reward: 'Flat 5% Rewards',
    terms: 'Ends in 23: 59: 59',
    label: 'Live now',
    labelColor: 'bg-red-500',
    bgColor: 'bg-pink-50',
    timer: ''
  },
  {
    name: 'SBI',
    logo: sbi,
    reward: 'Upto ₹1,800 Rewards',
    terms: 'Reward rates & terms',
    label: 'Live now',
    labelColor: 'bg-red-500',
    bgColor: 'bg-blue-50',
    timer: null
  },
  {
    name: 'MAGZTER',
    logo: megter,
    reward: 'Flat ₹3,999 Cashback',
    terms: 'Cashback rates & terms',
    label: 'Live now',
    labelColor: 'bg-red-500',
    bgColor: 'bg-green-50',
    timer: null
  },{
    name: 'Amazon',
    logo: amazon,
    reward: 'Flat 5% Rewards',
    terms: 'Reward rates & terms',
    label: 'Increased Cashback',
    labelColor: 'bg-pink-500',
    bgColor: 'bg-blue-50',
    timer: null
  },
  {
    name: 'The Man Company',
    logo: megter, // Just an example
    reward: 'Upto 39% Cashback',
    terms: 'Cashback rates & terms',
    label: 'Limited Period Offer',
    labelColor: 'bg-purple-500',
    bgColor: 'bg-gray-50',
    timer: null
  },
  {
    name: 'Flipkart',
    logo: flipkart,
    reward: 'Flat 5% Rewards',
    terms: 'Ends in 23: 59: 59',
    label: 'Live now',
    labelColor: 'bg-red-500',
    bgColor: 'bg-blue-50',
    timer: ''
  },
  {
    name: 'Myntra',
    logo: myntra,
    reward: 'Flat 5% Rewards',
    terms: 'Ends in 23: 59: 59',
    label: 'Live now',
    labelColor: 'bg-red-500',
    bgColor: 'bg-pink-50',
    timer: ''
  },
  {
    name: 'SBI',
    logo: sbi,
    reward: 'Upto ₹1,800 Rewards',
    terms: 'Reward rates & terms',
    label: 'Live now',
    labelColor: 'bg-red-500',
    bgColor: 'bg-blue-50',
    timer: null
  },
  {
    name: 'MAGZTER',
    logo: megter,
    reward: 'Flat ₹3,999 Cashback',
    terms: 'Cashback rates & terms',
    label: 'Live now',
    labelColor: 'bg-red-500',
    bgColor: 'bg-green-50',
    timer: null
  }
];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-xl font-bold">Exclusive Offers for You</h2>
    <button className="text-blue-600 text-sm font-medium flex items-center hover:underline">
      View All <ChevronRight className="w-4 h-4 ml-1" />
    </button>
  </div>

  <div className="flex gap-3 overflow-x-auto md:hidden pb-4">
    {offers.map((offer, index) => (
      <div
        key={`mobile-${index}`}
        className={`${offer.bgColor} min-w-[240px] rounded-lg p-3 border border-gray-200 flex-shrink-0 relative`}
      >
        <span className={`absolute -top-2 left-2 text-xs px-2 py-1 rounded-full text-white ${offer.labelColor}`}>
          {offer.label}
        </span>

        <div className="flex justify-center items-center h-16 mb-3">
          <img src={offer.logo} alt={offer.name} className="h-8 object-contain" />
        </div>

        {offer.timer && (
          <div className="flex items-center text-xs text-gray-600 mb-2 justify-center">
            <Clock className="w-3 h-3 mr-1" />
            {offer.timer}
          </div>
        )}

        <div className="text-center mb-3">
          <div className="font-semibold text-sm">{offer.reward}</div>
          <div className="text-xs text-gray-600">{offer.terms}</div>
        </div>

        <button className="w-full bg-blue-600 text-white text-sm py-2 rounded-md hover:bg-blue-700 transition-colors">
          {offer.reward.includes('Rewards') ? 'Flat 5% Rewards' : 'Shop Now'}
        </button>
      </div>
    ))}
  </div>

  <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
    {offers.map((offer, index) => (
      <div
        key={`desktop-${index}`}
        className={`${offer.bgColor} rounded-lg p-3 border border-gray-200 relative hover:shadow-md transition-shadow`}
      >
        <span className={`absolute -top-2 left-2 text-xs px-2 py-1 rounded-full text-white ${offer.labelColor}`}>
          {offer.label}
        </span>

        <div className="flex justify-center items-center h-16 mb-3">
          <img src={offer.logo} alt={offer.name} className="h-8 object-contain" />
        </div>

        {offer.timer && (
          <div className="flex items-center text-xs text-gray-600 mb-2 justify-center">
            <Clock className="w-3 h-3 mr-1" />
            {offer.timer}
          </div>
        )}

        <div className="text-center mb-3">
          <div className="font-semibold text-sm">{offer.reward}</div>
          <div className="text-xs text-gray-600">{offer.terms}</div>
        </div>

        <button className="w-full bg-blue-600 text-white text-sm py-2 rounded-md hover:bg-blue-700 transition-colors">
          {offer.reward.includes('Rewards') ? 'Flat 5% Rewards' : 'Shop Now'}
        </button>
      </div>
    ))}
  </div>
</div>

  );
};
export default ExclusiveOffers;