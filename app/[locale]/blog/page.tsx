import HeroCommon from '@/components/common/section/HeroCommon'
import BlogList from '@/section/blog/BlogList'
import SpotlightBlog from '@/section/blog/SpotlightBlog'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "Blogs | Hianatra"
}

function Courses() {
  return (
    <>
      <HeroCommon
        smallTitle=''
        largeTitle='Blogs.'
      />
      <SpotlightBlog />
      <BlogList />
    </>
  )
}
export default Courses