import React from 'react'
import TopBar from '../components/header/TopBar'
import HeaderOne from '../components/header/HeaderOne'
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne'
import ServiceFive from '../components/service/ServiceFive'
import ServiceOne from '../components/service/ServiceOne'
import TestimonialOne from '../components/testimonials/TestimonialOne'
import FooterOne from '../components/footer/FooterOne'
import TestimonialFive from '../components/testimonials/TestimonialFive'
import BreadcrumbTwoCommon from '../components/breadcrumb/BreadcrumbTwoCommon'

function Service() {
  return (
    <div>
        <TopBar />
        <HeaderOne />
        {/* <BreadcrumbTwoCommon 
            title="Our Service" 
            description="At The Urban Escape we pride ourselves on delivering an exceptional experience."
        /> */}

         <BreadcrumbOne
 
        title="Our Service"
        description="At The Urban Escape we pride ourselves on delivering an exceptional experience."
        bannerType="service"
        useApiHeading={true}
        useApiDescription={true}
      />
        
        <ServiceFive />
        <ServiceOne />
        <TestimonialFive />
        <FooterOne />
    </div>
  )
}

export default Service