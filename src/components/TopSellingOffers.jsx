import React from 'react';
import product1 from '../assets/amazonsale/product1.png'
import product2 from '../assets/amazonsale/product2.png'
import product3 from '../assets/amazonsale/product3.png'
import product4 from '../assets/amazonsale/product4.png'
import product5 from '../assets/amazonsale/product5.png'
import product6 from '../assets/amazonsale/product6.png'
const ProductCard = ({ 
  imageSrc, 
  imageAlt, 
  brand, 
  title, 
  originalPrice, 
  discountedPrice, 
  discountPercent, 
  cashbackAmount, 
  finalPrice,
  isAtBestPrice = false 
}) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 flex flex-col h-full">
      <div className="relative mb-3">
        <img 
          src={imageSrc} 
          alt={imageAlt}
          className="w-full h-32 object-contain rounded-md"
        />
        {/* <div className="absolute top-2 left-2 bg-yellow-400 text-black text-xs px-2 py-1 rounded">
          🏷️
        </div> */}
      </div>

      <div className="text-xs text-gray-600 mb-1">{brand}</div>
      <div className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 flex-grow">
        {title}
      </div>
      <div className="mb-2">
        {originalPrice && (
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs text-gray-500 line-through">₹{originalPrice}</span>
            <span className="text-xs text-red-600 font-medium">₹{discountedPrice}</span>
            <span className="text-xs text-green-600 font-medium">({discountPercent}% off)</span>
          </div>
        )}
      </div>
      {cashbackAmount && (
        <div className="text-xs text-gray-700 mb-2">
          After Cashback of ₹{cashbackAmount}
        </div>
      )}

      {isAtBestPrice && (
        <div className="text-xs text-orange-600 font-medium mb-2">
          Product at its best price
        </div>
      )}

      <div className="mt-auto">
        <div className="text-xs text-gray-600 mb-1">Final price</div>
        <div className="text-lg font-bold text-gray-900">₹{finalPrice}</div>
      </div>
    </div>
  );
};

const TopSellingOffers = () => {
  const products = [
    {
      imageSrc: product1,
      imageAlt: "The derma co Sunscreen",
      brand: "The derma co",
      title: "Aqua Matte Sunscreen gel with SPF 50",
      originalPrice: "399",
      discountedPrice: "319",
      discountPercent: "20",
      cashbackAmount: "81",
      finalPrice: "325"
    },
    {
      imageSrc: product2,
      imageAlt: "WOW Skin Science Shampoo",
      brand: "WOW Skin Science",
      title: "Wow skin science shampoo and body wash 2 in 1 cruelty f...",
      originalPrice: "399",
      discountedPrice: "319",
      discountPercent: "20",
      cashbackAmount: "81",
      finalPrice: "325"
    },
    {
      imageSrc: product3,
      imageAlt: "OnePlus Nord CE 3 Lite 5G Phone",
      brand: "One Plus",
      title: "OnePlus Nord CE 3 Lite 5G",
      originalPrice: "19,999",
      discountedPrice: "19,314",
      discountPercent: "3",
      cashbackAmount: "68",
      finalPrice: "19,246"
    },
    {
      imageSrc: product4,
      imageAlt: "Samsung Galaxy Z Fold 4 5G",
      brand: "Samsung",
      title: "Samsung Galaxy Z Fold 4 5G",
      originalPrice: "1,11,999",
      discountedPrice: "1,97,999",
      discountPercent: "10",
      cashbackAmount: "30",
      finalPrice: "1,11,969"
    },
    {
      imageSrc: product5,
      imageAlt: "OnePlus 10R 5G Phone",
      brand: "One Plus",
      title: "OnePlus 10R 5G",
      originalPrice: "",
      discountedPrice: "",
      discountPercent: "",
      cashbackAmount: "",
      finalPrice: "44,667",
      isAtBestPrice: true
    },
    {
      imageSrc: product6,
      imageAlt: "WOW Skin Science Shampoo and Body Wash",
      brand: "WOW Skin Science",
      title: "Wow skin science shampoo and body wash 2 in 1 cruelty f...",
      originalPrice: "399",
      discountedPrice: "319",
      discountPercent: "20",
      cashbackAmount: "6",
      finalPrice: "325"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Amazon - Top Selling Offers</h2>
        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1">
          View All →
        </button>
      </div>

      <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
  {products.map((product, index) => (
    <ProductCard key={`desktop-${index}`} {...product} />
  ))}
</div>

      {/* <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Amazon - Top Selling Offers</h2>
        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1">
          View All →
        </button>
      </div> */}

      <div className="block lg:hidden overflow-x-auto">
  <div className="flex gap-4 w-max">
    {products.map((product, index) => (
      <div className="min-w-[250px] max-w-[250px]" key={index}>
        <ProductCard {...product} />
      </div>
    ))}
  </div>
</div>
    </div>
  );
};

export default TopSellingOffers;