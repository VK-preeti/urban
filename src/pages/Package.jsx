import React from 'react'
import TopBar from '../components/header/TopBar'
import HeaderOne from '../components/header/HeaderOne'
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne'
// import ContactOne from '../components/contact/ContactOne'
 
import FooterOne from '../components/footer/FooterOne'
import PackagePage from '../components/packagepage/PackagePage'
 
 
 
 

function Package() {
  return (
    <div>
        <TopBar />
        <HeaderOne />
        {/* <BreadcrumbOne 
            title="Package " 
            description="Whether you have questions, need assistance, or simply want to share."
        /> */}
          <BreadcrumbOne
 
        title="Package"
        description="At The Urban Escape we pride ourselves on delivering an exceptional experience."
        bannerType="packages"
        useApiHeading={true}
        useApiDescription={true}
      />
        {/* <ContactOne /> */}
        <PackagePage />
        <FooterOne />
    </div>
  )
}

export default Package