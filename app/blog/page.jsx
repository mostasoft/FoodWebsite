import React from 'react'
import BlogHero from './comp/hero'
import FeaturedPosts from './comp/post'
import LatestPosts from './comp/latestPost'
import BlogSearch from './comp/blogSearch'
import BlogSidebar from './comp/blogside'
import TagsSection from './comp/tags'
import CallToAction from './comp/CTA'

const page = () => {
  return (
    <div>
      <BlogHero/>
      <FeaturedPosts/>
      <LatestPosts/>
      <BlogSearch/>
      <BlogSidebar/>
      <TagsSection/>
      <CallToAction/>
    </div>

  )
}

export default page