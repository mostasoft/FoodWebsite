import React from 'react'
import InventoryFilters from './comp/filters';
import InventoryList from './comp/list';
import FeaturedInventory from './comp/featured';
import SpecialOffers from './comp/Specials';
import NewsTips from './comp/news';
import Reviews from './comp/review';
import AboutUs from './comp/whyus';
import Hero from './../HomeComp/Hero';

const page = () => {
  return (
    <div>
        <Hero/>
        <InventoryFilters/>
        <InventoryList/>
        <FeaturedInventory/>
        <SpecialOffers/>
        <NewsTips/>
        <Reviews/>
        <AboutUs/>
    </div>
  )
}

export default page