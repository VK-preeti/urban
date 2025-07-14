import React from 'react'
import TopBar from '../components/header/TopBar'
import HeaderOne from '../components/header/HeaderOne'
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne'
import ContactOne from '../components/contact/ContactOne'
import FooterOne from '../components/footer/FooterOne'
import BreadcrumbTwoCommon from '../components/breadcrumb/BreadcrumbTwoCommon'
import { Helmet } from 'react-helmet-async';

function Contact() {
  return (
    <div>
      <Helmet>
                 <link rel="canonical" href="https://www.theurbanescape.in/contact" />
      </Helmet>
        <TopBar />
        <HeaderOne />
        {/* <BreadcrumbTwoCommon
            title="Contact Us" 
            description="Whether you have questions, need assistance, or simply want to share."
        /> */}
        <BreadcrumbOne
 
        title="Contact Us"
        description="At The Urban Escape we pride ourselves on delivering an exceptional experience."
        bannerType="contact"
        useApiHeading={true}
        useApiDescription={true}
      />

        
        <ContactOne />
        <FooterOne />
    </div>
  )
}

export default Contact