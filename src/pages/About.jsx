import React from 'react'
import TopBar from '../components/header/TopBar'
import HeaderOne from '../components/header/HeaderOne'
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne'
import AboutFour from '../components/about/AboutFour'
import FacilitiesSeven from '../components/facilities/FacilitiesSeven'
import TeamOne from '../components/team/TeamOne'
// import TestimonialOne from '../components/testimonials/TestimonialOne'
import FooterOne from '../components/footer/FooterOne'
import TestimonialFive from './../components/testimonials/TestimonialFive';
 

function About() {
  return (
    <div>
        <TopBar />
        <HeaderOne />
        {/* <BreadcrumbOne
            title="About Us" 
            description="Welcome to Bokinn, where luxury meets comfort in the heart of Canada." 
        /> */}
         <BreadcrumbOne
 
        title="About Us"
        description="At The Urban Escape we pride ourselves on delivering an exceptional experience."
        bannerType="about"
        useApiHeading={true}
        useApiDescription={true}
      />
        <AboutFour />
        <FacilitiesSeven />
        <TeamOne />
        {/* <TestimonialOne /> */}
        {/* <TestimonialTwo /> */}
       
        <TestimonialFive />
        

        <FooterOne />
    </div>
  )
}

export default About