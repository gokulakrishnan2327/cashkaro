import React from 'react';
import pinkfriday from '../assets/sales/pinkfriday.png'
import nyka from '../assets/sales/nyka.png'
import Myntra from '../assets/sales/Myntra.png'
import buykaro from '../assets/sales/buykaro.png'
import saleproduct1 from '../assets/sales/saleproduct1.png'
import saleproduct2 from '../assets/sales/saleproduct2.png'
import saleproduct3 from '../assets/sales/saleproduct3.png'
import saleproduct4 from '../assets/sales/saleproduct4.png'
import saleproduct5 from '../assets/sales/saleproduct5.png'
import saleproduct6 from '../assets/sales/saleproduct6.png'

const NykaaPinkFridaySale = () => {
    const deals = [
        {
            title: 'Upto 60% off',
            subtitle: 'on Luxury Beauty & perfumes',
            cashback: 'Upto 7% Cashback',
            bonus: '+ ₹90 Bonus Cashback',
            bgColor: 'bg-gradient-to-br from-pink-400 via-purple-500 to-purple-600',
            productImage: saleproduct1,
            logoImage: nyka
        },
        {
            title: 'Upto 35% off',
            subtitle: 'on Loreal Paris products',
            cashback: 'Upto 7% Cashback',
            bonus: '+ ₹90 Bonus Cashback',
            bgColor: 'bg-gradient-to-br from-pink-400 via-purple-500 to-purple-600',
            productImage: saleproduct2,
            logoImage: nyka
        },
        {
            title: 'Upto 35% off',
            subtitle: 'on Loreal Paris products',
            cashback: 'Upto 7% Cashback',
            bonus: '+ ₹90 Bonus Cashback',
            bgColor: 'bg-gradient-to-br from-pink-400 via-purple-500 to-purple-600',
            productImage: saleproduct2,
            logoImage: nyka
        },
        {
            title: 'Buy 2 get 1 Free',
            subtitle: 'on MAC + Flat 8% off',
            cashback: 'Upto 7% Cashback',
            bonus: '+ ₹90 Bonus Cashback',
            bgColor: 'bg-gradient-to-br from-pink-400 via-purple-500 to-purple-600',
            productImage: saleproduct1,
            logoImage: nyka
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Nykaa- Pink Friday Sale</h2>
                <button className="text-blue-600 text-sm font-medium hover:underline">
                    View All →
                </button>
            </div>

            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {deals.map((deal, index) => (
                    <div key={index} className={`${deal.bgColor} rounded-lg p-4 text-white relative overflow-hidden min-h-[200px]`}>
                        <div className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                            Limited period offer
                        </div>
                        <div className="absolute top-3 left-3 bg-white rounded px-2 py-1">
                            <img src={nyka} alt="Nykaa Logo" className="h-4" />
                        </div>

                        <div className="absolute right-4 bottom-16 w-20 h-20">
                            <img src={deal.productImage} alt="Beauty products" className="w-full h-full object-contain" />
                        </div>

                        <div className="relative z-10 mt-12">
                            <h3 className="text-lg font-bold mb-1">{deal.title}</h3>
                            <p className="text-sm mb-4 opacity-90">{deal.subtitle}</p>

                            <div className="mb-2">
                                <div className="flex items-center mb-1">
                                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded mr-2 font-medium">CK</span>
                                    <span className="text-sm font-medium">{deal.cashback}</span>
                                </div>
                                {deal.bonus && (
                                    <div className="text-xs opacity-90">{deal.bonus}</div>
                                )}
                            </div>

                            <button className="bg-white absolute -bottom-2 right-1 text-blue-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
                                Grab Deal
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="md:hidden overflow-x-auto pb-4">
                <div className="flex gap-4" style={{ width: 'max-content' }}>
                    {deals.map((deal, index) => (
                        <div key={index} className={`${deal.bgColor} rounded-lg p-4 text-white relative overflow-hidden min-h-[200px] w-64 flex-shrink-0`}>
                            <div className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                                Limited period offer
                            </div>
                            <div className="absolute top-3 left-3 bg-white rounded px-2 py-1">
                                <img src={nyka} alt="Nykaa Logo" className="h-4" />
                            </div>

                            <div className="absolute right-4 bottom-16 w-20 h-20">
                                <img src={deal.productImage} alt="Beauty products" className="w-full h-full object-contain" />
                            </div>

                            <div className="relative z-10 mt-12">
                                <h3 className="text-lg font-bold mb-1">{deal.title}</h3>
                                <p className="text-sm mb-4 opacity-90">{deal.subtitle}</p>

                                <div className="mb-2">
                                    <div className="flex items-center mb-1">
                                        <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded mr-2 font-medium">CK</span>
                                        <span className="text-sm font-medium">{deal.cashback}</span>
                                    </div>
                                    {deal.bonus && (
                                        <div className="text-xs opacity-90">{deal.bonus}</div>
                                    )}
                                </div>

                                <button className="bg-white absolute -bottom-2 right-1 text-blue-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
                                    Grab Deal
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


const BuykaroLowestPrices = () => {
    const products = [
        {
            title: 'Whisky smoke & mania combo 50ml each',
            price: '₹427',
            originalPrice: '₹1498',
            image: saleproduct2,
            bgColor: 'bg-gradient-to-br from-blue-500 to-blue-600'
        },
        {
            title: 'Charcoal facewash & peel off mask combo',
            price: '₹170',
            originalPrice: '₹600',
            image: saleproduct3,
            bgColor: 'bg-gradient-to-br from-blue-500 to-blue-600'
        },
        {
            title: 'Aircase vegan leather travel kit',
            price: '₹189',
            originalPrice: '₹999',
            image: saleproduct4,
            bgColor: 'bg-gradient-to-br from-blue-500 to-blue-600',
            badge: 'Limited period offer'
        },
        {
            title: 'Charcoal facewash & peel off mask combo',
            price: '₹170',
            originalPrice: '₹600',
            image: saleproduct1,
            bgColor: 'bg-gradient-to-br from-blue-500 to-blue-600'
        }
    ];

   return (
        <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Buykaro at Lowest Prices</h2>
                <button className="text-blue-600 text-sm font-medium hover:underline">
                    View All →
                </button>
            </div>

            {/* Desktop Grid - Hidden on mobile */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {products.map((product, index) => (
                    <div key={index} className={`${product.bgColor} rounded-lg p-4 text-white relative overflow-hidden min-h-[200px]`}>
                        {product.badge && (
                            <div className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                                {product.badge}
                            </div>
                        )}

                        <div className="absolute top-3 left-3 bg-white rounded px-2 py-1">
                            <img src={buykaro} alt="Buykaro Logo" className="h-4" />
                        </div>

                        <div className="absolute right-4 top-12 w-16 h-16">
                            <img src={product.image} alt={product.title} className="w-full h-full object-contain" />
                        </div>
 
                        <div className="relative z-10 mt-16">
                            <h3 className="text-sm font-medium mb-4 leading-tight max-w-[60%]">{product.title}</h3>

                            <div className="flex items-center mb-4">
                                <span className="text-xl font-bold mr-2">{product.price}</span>
                                <span className="text-sm line-through opacity-70">{product.originalPrice}</span>
                            </div>

                            <button className="bg-white absolute -bottom-2 right-1 text-blue-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
                                Grab Deal
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="md:hidden overflow-x-auto pb-4">
                <div className="flex gap-4" style={{ width: 'max-content' }}>
                    {products.map((product, index) => (
                        <div key={index} className={`${product.bgColor} rounded-lg p-4 text-white relative overflow-hidden min-h-[200px] w-64 flex-shrink-0`}>
                            {product.badge && (
                                <div className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                                    {product.badge}
                                </div>
                            )}

                            <div className="absolute top-3 left-3 bg-white rounded px-2 py-1">
                                <img src={buykaro} alt="Buykaro Logo" className="h-4" />
                            </div>

                            <div className="absolute right-4 top-12 w-16 h-16">
                                <img src={product.image} alt={product.title} className="w-full h-full object-contain" />
                            </div>
 
                            <div className="relative z-10 mt-16">
                                <h3 className="text-sm font-medium mb-4 leading-tight max-w-[60%]">{product.title}</h3>

                                <div className="flex items-center mb-4">
                                    <span className="text-xl font-bold mr-2">{product.price}</span>
                                    <span className="text-sm line-through opacity-70">{product.originalPrice}</span>
                                </div>

                                <button className="bg-white absolute -bottom-2 right-1 text-blue-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
                                    Grab Deal
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
const MyntraBestDeals = () => {
    const deals = [
        {
            title: 'Get everything Under ₹299',
            cashback: 'Upto 6% Cashback',
            image: saleproduct6,
            bgColor: 'bg-gradient-to-br from-orange-100 to-orange-200',
            textColor: 'text-gray-800'
        },
        {
            title: 'Shop for Products worth ₹1200 or more',
            cashback: 'Flat ₹350 Cashback',
            image: saleproduct5,
            bgColor: 'bg-gradient-to-br from-orange-100 to-orange-200',
            textColor: 'text-gray-800'
        },
        {
            title: 'Shop Get Flat 70% off or more',
            cashback: 'Flat ₹350 Cashback',
            image: saleproduct4,
            bgColor: 'bg-gradient-to-br from-orange-100 to-orange-200',
            textColor: 'text-gray-800'
        },
        {
            title: 'Get everything Under ₹299',
            cashback: 'Upto 6% Cashback',
            image: saleproduct6,
            bgColor: 'bg-gradient-to-br from-orange-100 to-orange-200',
            textColor: 'text-gray-800'
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Myntra- Best Deals</h2>
                <button className="text-blue-600 text-sm font-medium hover:underline">
                    View All →
                </button>
            </div>

            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {deals.map((deal, index) => (
                    <div key={index} className={`${deal.bgColor} rounded-lg p-4 ${deal.textColor} relative overflow-hidden min-h-[200px]`}>
                        <div className="absolute top-3 left-3 bg-white rounded px-2 py-1">
                            <img src={Myntra} alt="Myntra Logo" className="h-4" />
                        </div>
                        <div className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                            Limited period offer
                        </div>

                        <div className="absolute right-4 bottom-16 w-20 h-24">
                            <img src={deal.image} alt="Fashion models" className="w-full h-full object-cover rounded" />
                        </div>

                        <div className="relative z-10 mt-12">
                            <h3 className="text-sm font-medium mb-4 leading-tight max-w-[60%]">{deal.title}</h3>

                            <div className="mb-4">
                                <div className="flex items-center">
                                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded mr-2 font-medium">CK</span>
                                    <span className="text-sm font-medium">{deal.cashback}</span>
                                </div>
                            </div>

                            <button className="bg-white absolute -bottom-10 right-1 text-blue-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
                                Grab Deal
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="md:hidden overflow-x-auto pb-4">
                <div className="flex gap-4" style={{ width: 'max-content' }}>
                    {deals.map((deal, index) => (
                        <div key={index} className={`${deal.bgColor} rounded-lg p-4 ${deal.textColor} relative overflow-hidden min-h-[200px] w-64 flex-shrink-0`}>
                            <div className="absolute top-3 left-3 bg-white rounded px-2 py-1">
                                <img src={Myntra} alt="Myntra Logo" className="h-4" />
                            </div>
                            <div className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                                Limited period offer
                            </div>

                            <div className="absolute right-4 bottom-16 w-20 h-24">
                                <img src={deal.image} alt="Fashion models" className="w-full h-full object-cover rounded" />
                            </div>

                            <div className="relative z-10 mt-12">
                                <h3 className="text-sm font-medium mb-4 leading-tight max-w-[60%]">{deal.title}</h3>

                                <div className="mb-4">
                                    <div className="flex items-center">
                                        <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded mr-2 font-medium">CK</span>
                                        <span className="text-sm font-medium">{deal.cashback}</span>
                                    </div>
                                </div>

                                <button className="bg-white absolute -bottom-10 right-1 text-blue-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
                                    Grab Deal
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
const SalesSections = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <NykaaPinkFridaySale />
            <BuykaroLowestPrices />
            <MyntraBestDeals />
        </div>
    );
};

export default SalesSections;