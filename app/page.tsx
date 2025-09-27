import React from 'react'
import Hero from './HomeComp/Hero';
import FeaturedInventory from './HomeComp/fearured';
import AboutUs from './HomeComp/why';
import Services from './HomeComp/services';
import Testimonials from './HomeComp/reviews';
import Promotions from './HomeComp/specials';
import BlogSection from './HomeComp/blog';
import CTASection from './HomeComp/CTA';
import ShopSection from './HomeComp/shop';
import FoodMenu from './HomeComp/FoodMenu';

const page = () => {
  return (
    <div>
      <Hero />
      <FoodMenu/>
      <FeaturedInventory/>
      <ShopSection/>
      <BlogSection/>
      <Services/>
      <Promotions/>
      <Testimonials/>
      <AboutUs/>
      <CTASection/>

    </div>
  )
}

export default page