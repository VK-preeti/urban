import React from 'react'
import TopBar from '../components/header/TopBar'
import HeaderOne from '../components/header/HeaderOne'
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne'
// import ContactOne from '../components/contact/ContactOne'
import Wedding from '../components/weddingpart/Wedding'
import FooterOne from '../components/footer/FooterOne'
 
 
 
 
 

function WeddingPage() {

    
  return (
    <div>
        <TopBar />
        <HeaderOne />
        {/* <BreadcrumbOne 
            title="Wedding Experience" 
            description="Whether you have questions, need assistance, or simply want to share."
        /> */}
          <BreadcrumbOne
 
        title="Wedding Experience"
        description="At The Urban Escape we pride ourselves on delivering an exceptional experience."
        bannerType="wedding"
        useApiHeading={true}
        useApiDescription={true}
      />
        {/* <ContactOne /> */}
        <Wedding />
        <FooterOne />
    </div>
  )
}

export default WeddingPage