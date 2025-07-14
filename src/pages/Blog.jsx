import React from 'react'
import TopBar from '../components/header/TopBar'
import HeaderOne from '../components/header/HeaderOne'
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne'
import BlogThree from '../components/blog/BlogThree'
import FooterOne from '../components/footer/FooterOne'
import BreadcrumbTwoCommon from '../components/breadcrumb/BreadcrumbTwoCommon'
import { Helmet } from 'react-helmet-async';

function Blog() {
  return (
    <div>
      <Helmet>
          <link rel="canonical" href="https://www.theurbanescape.in/blog" />
      </Helmet>
        <TopBar />
        <HeaderOne />
        {/* <BreadcrumbTwoCommon
            title="Our Blog" 
            description="Discover The blog where luxury, comfort, and adventure come together."
        /> */}

         <BreadcrumbOne
 
        title="Our Blog"
        description="At The Urban Escape we pride ourselves on delivering an exceptional experience."
        bannerType="blog"
        useApiHeading={true}
        useApiDescription={true}
      />
        <BlogThree />
        <FooterOne />

    </div>
  )
}

export default Blog