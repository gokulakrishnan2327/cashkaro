import React from 'react';
import { Search, Menu, ChevronRight, Star, Clock } from 'lucide-react';
import HeaderSearch from "./components/HeaderSearch"
import MainBanner from "./components/MainBanner"
import TopCategories from "./components/TopCategories"
import TopCashbackStores from "./components/TopCashbackStores"
import DealCards from "./components/DealCards"
import FlashDeal from './components/FlashDeal';
import ExclusiveOffers from './components/ExclusiveOffers';
import SalesSections from './components/SalesSections';
import TopSellingOffers from './components/TopSellingOffers';
import Cashback from './components/Cashback';
import TestimonialsSection from './components/TestimonialsSection';
import FooterSection from './components/FooterSection';


const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderSearch />
      <MainBanner />
      <TopCategories />
      {/* <TopCashbackStores />
      <DealCards /> */}
      <ExclusiveOffers/>
      <FlashDeal/>
      <SalesSections/>
      <TopSellingOffers/>
      <Cashback/>
      <TestimonialsSection/>
      <FooterSection/>
    </div>
  );
};

export default App;