"use client"
import React, { Suspense } from 'react'
import InventoryFilters from './comp/filters';
import InventoryList from './comp/list';
import FeaturedInventory from './comp/featured';
import SpecialOffers from './comp/Specials';
import NewsTips from './comp/news';
import Reviews from './comp/review';
import AboutUs from './comp/whyus';
import FoodHero from './comp/Hero';

const page = () => {
  return (
      <Suspense fallback={<div>Loading...</div>}>
      <div>
        <FoodHero/>
        <InventoryFilters/>
        <InventoryList/>
        <FeaturedInventory/>
        <SpecialOffers/>
        <NewsTips/>
        <Reviews/>
        <AboutUs/>
    </div>
    </Suspense>
    
  )
}

export default page