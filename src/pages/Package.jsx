import React from 'react'
import TopBar from '../components/header/TopBar'
import HeaderOne from '../components/header/HeaderOne'
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne'
// import ContactOne from '../components/contact/ContactOne'
 
import FooterOne from '../components/footer/FooterOne'
import PackagePage from '../components/packagepage/PackagePage'
import { Helmet } from 'react-helmet-async';
 
 
 


function Package() {
  return (
    <div>
            <Helmet>
                    <meta name="title" content ="The Urban Escape – Lake View Inn Stay in Scenic Bhimtal"/>
                    <meta name="description" content="Plan your Bhimtal getaway with The Urban Escape – Hotel Lake View Inn offers breathtaking views, cozy family stays, and easy access to local attractions" />
                    <meta name="keyword" content='Lake View Inn Stay in Scenic Bhimtal'/>
                    <link rel="canonical" href="https://www.theurbanescape.in/package" />
                    <meta name="google-site-verification" content="QJAIydbCFbUhHkO4u2l-Frzfy7iTQLBFuCPhjrLUdfU" />

            </Helmet>
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