const DealCards = () => {
  const deals = [
    {
      title: 'Best deals on Televisions',
      subtitle: 'Starting ₹7,599',
      bgImage: '/api/placeholder/400/200',
      bgColor: 'bg-gradient-to-r from-cyan-500 to-blue-600'
    },
    {
      title: 'Best of Rental Services',
      subtitle: 'Up to 50% off',
      bgImage: '/api/placeholder/400/200',
      bgColor: 'bg-gradient-to-r from-green-500 to-teal-600'
    },
    {
      title: 'Quality dry fruits at best price',
      subtitle: 'Up to 50% off',
      bgImage: '/api/placeholder/400/200',
      bgColor: 'bg-gradient-to-r from-orange-500 to-red-600'
    },
    {
      title: 'Booking.com',
      subtitle: '5% Cashback on hotel booking',
      bgImage: '/api/placeholder/400/200',
      bgColor: 'bg-gradient-to-r from-blue-600 to-purple-600'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-xl font-bold mb-6">Blockbuster Deals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {deals.slice(0, 2).map((deal, index) => (
          <div key={index} className={`${deal.bgColor} rounded-lg p-6 text-white relative overflow-hidden min-h-[160px] cursor-pointer hover:scale-105 transition-transform`}>
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-2">{deal.title}</h3>
              <p className="text-sm mb-4">{deal.subtitle}</p>
              <button className="bg-white text-gray-800 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold mb-6">Deal Shorts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {deals.slice(2).map((deal, index) => (
          <div key={index} className={`${deal.bgColor} rounded-lg p-6 text-white relative overflow-hidden min-h-[140px] cursor-pointer hover:scale-105 transition-transform`}>
            <div className="relative z-10">
              <h3 className="text-base font-bold mb-2">{deal.title}</h3>
              <p className="text-sm mb-4">{deal.subtitle}</p>
              <button className="bg-white text-gray-800 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
                {deal.title.includes('Booking.com') ? 'Book Now' : 'Shop Now'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealCards