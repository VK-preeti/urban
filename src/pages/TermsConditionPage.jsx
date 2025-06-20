import React from 'react'
import TermsCondition from '../components/footer/TermsCondition'
import TopBar from '../components/header/TopBar'
import HeaderOne from '../components/header/HeaderOne'
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne'
import FooterOne from '../components/footer/FooterOne'
import BreadcrumbTwoCommon from '../components/breadcrumb/BreadcrumbTwoCommon'


const TermsConditionPage = () => {
  return (
    <div>
      <TopBar />
        <HeaderOne />
        <BreadcrumbTwoCommon 
            title="Terms & Conditions " 
            description="Whether you have questions, need assistance, or simply want to share."
        />
      <TermsCondition />
         <FooterOne />
    </div>
  )
}

export default TermsConditionPage
