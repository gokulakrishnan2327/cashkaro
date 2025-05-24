import { Clock } from 'lucide-react';
import flashlogo1 from "../assets/flash/flashlogo1.png"
import flashlogo2 from "../assets/flash/flashlogo2.png"
import flashlogo3 from "../assets/flash/flashlogo3.png"
import flashlogo4 from "../assets/flash/flashlogo4.png"
import flash1 from "../assets/flash/flash1.png"
import flash2 from "../assets/flash/flash2.png"
import flash3 from "../assets/flash/flash3.png"
import flash4 from "../assets/flash/flash4.png"
import flashbg from "../assets/flash/FlashDeal.jpg"

const FlashDeal = () => {
  const products = [
    {
      title: 'Diabetic care 1 month plan',
      subtitle: '',
      price: '₹99',
      originalPrice: '₹999',
      discount: '90% off',
      image: flash1,
      badge: flashlogo1,
      dealText: 'Grab deal'
    },
    {
      title: 'Any 5 home & hygiene products',
      price: '@ ₹196',
      discount: '70% off',
      image: flash2,
      badge: flashlogo2,
      dealText: 'Grab deal'
    },
    {
      title: 'Any cosy hoodie for men',
      price: '₹975',
      originalPrice: '₹2,599',
      discount: '70% off',
      image: flash3,
      badge: flashlogo3,
      dealText: 'Grab deal'
    },
    {
      title: 'Annual gold membership',
      price: '₹1,000',
      originalPrice: '₹2,400',
      image: flash4,
      badge: flashlogo4,
      dealText: 'Grab deal'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="rounded-lg p-6 text-white relative overflow-hidden">
        <img src={flashbg} className="absolute inset-0 w-full h-full object-cover " />

        <div className="relative z-10">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white-100 mb-4">FLASH DEAL</h2>

            <div className="inline-flex items-center justify-center bg-white text-gray-800 px-4 py-2 rounded-md text-sm md:text-base">
              <Clock className="w-4 h-4 mr-2 " />
              Deals ends in 23: 59: 59
            </div>
          </div>

          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto md:overflow-visible scroll-smooth pb-4">
            {products.map((product, index) => (
              <div
                key={index}
                className="min-w-[90%] md:min-w-0 bg-white rounded-lg p-4 text-gray-800 relative flex flex-col justify-between"
              >
                {product.discount && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full z-20">
                    {product.discount}
                  </div>
                )}

                <div className="flex justify-between items-start mb-3 relative">
                  <img src={product.badge} alt="badge" className="h-6 w-auto object-contain z-10" />
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-24 w-24 object-contain rounded-md absolute -top-10 right-2 z-20"
                  />
                </div>

                <div className="mt-12 mb-3">
                  <h3 className="text-sm font-semibold mb-1 line-clamp-2">{product.title}</h3>
                  {product.subtitle && (
                    <p className="text-xs text-gray-600 mb-2">{product.subtitle}</p>
                  )}
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-green-600">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                    )}
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white text-sm py-2 rounded-md hover:bg-blue-700 transition-colors">
                  {product.dealText}
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <button className="border border-gray-400 text-white text-sm px-14 py-2 rounded-md hover:bg-gray-100 transition">
              View all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashDeal;
