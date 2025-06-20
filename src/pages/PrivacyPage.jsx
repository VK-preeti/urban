import React from 'react'
import Privacy from '../components/footer/Privacy'
import TopBar from '../components/header/TopBar'
import HeaderOne from '../components/header/HeaderOne'
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne'
import FooterOne from '../components/footer/FooterOne'
import BreadcrumbTwoCommon from '../components/breadcrumb/BreadcrumbTwoCommon'
 

const PrivacyPage = () => {
  return (
    <div>
        <TopBar />
        <HeaderOne />
        <BreadcrumbTwoCommon
            title="Privacy Policy " 
            description="Whether you have questions, need assistance, or simply want to share."
        />
        <Privacy />
        <FooterOne />
      
    </div>
  )
}

export default PrivacyPage
