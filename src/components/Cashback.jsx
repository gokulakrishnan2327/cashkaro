import React from 'react';
import work1 from '../assets/cashback/work1.png'
import work2 from '../assets/cashback/work2.png'
import work3 from '../assets/cashback/work3.png'
import work4 from '../assets/cashback/work4.png'
import work5 from '../assets/cashback/work5.png'
import refer from '../assets/cashback/Refer.png'
import popular1 from '../assets/cashback/coupon1.png'
import popular2 from '../assets/cashback/coupon2.png'
import popular3 from '../assets/cashback/coupon3.png'
import card1 from '../assets/cashback/Cards1.png'
import card2 from '../assets/cashback/Cards2.png'
import card3 from '../assets/cashback/Cards3.png'
import card4 from '../assets/cashback/Cards4.png'
import card5 from '../assets/cashback/Cards5.png'
import popular11 from '../assets/cashback/Popular1.png'
import popular12 from '../assets/cashback/Popular2.png'
import popular13 from '../assets/cashback/Popular3.png'
import ourword from '../assets/cashback/ourword.png'

const Cashback = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-6 bg-gray-50">

            <div className="mb-8">
                <h2 className="text-xl font-bold text-center text-gray-900 mb-6">How CashKaro Works</h2>

                <div className="hidden md:grid grid-cols-5 gap-4">
                    <img src={work1} alt="Visit CashKaro and pick your online store" className="w-full h-auto rounded-lg" />
                    <img src={work2} alt="Select the product you want to buy" className="w-full h-auto rounded-lg" />
                    <img src={work3} alt="Shop & pay on the store's website" className="w-full h-auto rounded-lg" />
                    <img src={work4} alt="Get CashBack on every order!" className="w-full h-auto rounded-lg" />
                    <img src={work4} alt="Transfer or redeem your earnings" className="w-full h-auto rounded-lg" />
                </div>

                <div className="md:hidden overflow-x-auto">
                    <div className="flex gap-4 pb-4" style={{ width: 'max-content' }}>
                        <img src={work1} alt="Visit CashKaro and pick your online store" className=" rounded-lg flex-shrink-0" />
                        <img src={work2} alt="Select the product you want to buy" className=" rounded-lg flex-shrink-0" />
                        <img src={work3} alt="Shop & pay on the store's website" className=" rounded-lg flex-shrink-0" />
                        <img src={work4} alt="Get CashBack on every order!" className=" rounded-lg flex-shrink-0" />
                        <img src={work5} alt="Transfer or redeem your earnings" className=" rounded-lg flex-shrink-0" />
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <img src={refer} alt="Zindagi Bhar Cashback Milega - Invite friends to CashKaro & Get ₹10% on EVERYTHING they earn Cashback" className="w-full h-auto rounded-lg sm:w-full sm:h-auto " />
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-bold text-center text-gray-900 mb-6">India's Best CashBack & Coupons Site</h2>

                <div className="hidden md:grid grid-cols-3 gap-6 max-w-4xl mx-auto">
                    <img src={popular1} alt="Highest Cashback Rated" className="w-full h-auto rounded-lg" />
                    <img src={popular2} alt="Trusted by 2 Crore+ Indians" className="w-full h-auto rounded-lg" />
                    <img src={popular3} alt="₹700 Crore+ Cashback Paid" className="w-full h-auto rounded-lg" />
                </div>

                <div className="md:hidden overflow-x-auto">
                    <div className="flex gap-4 pb-4" style={{ width: 'max-content' }}>
                        <img src={popular1} alt="Highest Cashback Rated" className="w-64 h-auto rounded-lg flex-shrink-0" />
                        <img src={popular2} alt="Trusted by 2 Crore+ Indians" className="w-64 h-auto rounded-lg flex-shrink-0" />
                        <img src={popular3} alt="₹700 Crore+ Cashback Paid" className="w-64 h-auto rounded-lg flex-shrink-0" />
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-bold text-center text-gray-900 mb-6">Today's Top Coupon Codes</h2>

                <div className="hidden md:grid grid-cols-5 mx-20 gap-4">
                    <img src={card1} alt="Flipkart - Flat 90% Off + Free Delivery" className="w-full h-auto rounded-lg" />
                    <img src={card2} alt="Myntra - Flat 40% Off + Rs. 200 Cashback" className="w-full h-auto rounded-lg" />
                    <img src={card3} alt="Amazon - Flat 80% Off Coupon Code" className="w-full h-auto rounded-lg" />
                    <img src={card4} alt="Ajio - Upto 80% Off Coupon Code" className="w-full h-auto rounded-lg" />
                    <img src={card5} alt="BigBasket - Upto 20% Cashback" className="w-full h-auto rounded-lg" />
                </div>

                <div className="md:hidden overflow-x-auto">
                    <div className="flex gap-4 pb-4" style={{ width: 'max-content' }}>
                        <img src={card1} alt="Flipkart - Flat 90% Off + Free Delivery" className="w-48 h-auto rounded-lg flex-shrink-0" />
                        <img src={card2} alt="Myntra - Flat 40% Off + Rs. 200 Cashback" className="w-48 h-auto rounded-lg flex-shrink-0" />
                        <img src={card3} alt="Amazon - Flat 80% Off Coupon Code" className="w-48 h-auto rounded-lg flex-shrink-0" />
                        <img src={card4} alt="Ajio - Upto 80% Off Coupon Code" className="w-48 h-auto rounded-lg flex-shrink-0" />
                        <img src={card5} alt="BigBasket - Upto 20% Cashback" className="w-48 h-auto rounded-lg flex-shrink-0" />
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-bold text-center text-gray-900 mb-6">Popular Sales Online</h2>

                <div className="hidden md:grid grid-cols-3 mx-20 px-10 gap-6">
                    <img src={popular11} alt="Amazon Sale" className="w-full h-auto rounded-lg" />
                    <img src={popular12} alt="Zomato Sale" className="w-full h-auto rounded-lg" />
                    <img src={popular13} alt="Blinkit Sale" className="w-full h-auto rounded-lg" />
                </div>

                <div className="md:hidden overflow-x-auto">
                    <div className="flex gap-4 pb-4" style={{ width: 'max-content' }}>
                        <img src={popular11} alt="Amazon Sale" className="w-72 h-auto rounded-lg flex-shrink-0" />
                        <img src={popular12} alt="Zomato Sale" className="w-72 h-auto rounded-lg flex-shrink-0" />
                        <img src={popular13} alt="Blinkit Sale" className="w-72 h-auto rounded-lg flex-shrink-0" />
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-bold text-center text-gray-900 mb-6">Don't Take Our Word</h2>

                <div className="hidden px-20 mx-10 md:grid grid-cols-1 gap-6">
                    <img src={ourword} alt="Customer Testimonial 1" className="w-full h-auto rounded-lg" />

                </div>

                <div className="md:hidden overflow-x-auto">
                    <div className="flex  gap-4 px-10 pb-4" style={{ width: 'max-content' }}>
                        <img src={ourword} alt="Customer Testimonial 1" className="w-72 h-auto rounded-lg flex-shrink-0" />

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Cashback;