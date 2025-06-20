import React from 'react'
import TopBar from '../components/header/TopBar'
import HeaderOne from '../components/header/HeaderOne'
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne'
import ActivitiesOne from '../components/activities/ActivitiesOne'
import FooterOne from '../components/footer/FooterOne'
// import BreadcrumbTwoCommon from '../components/breadcrumb/BreadcrumbTwoCommon'

function Activities() {
  return (
    <div>
        <TopBar />
        <HeaderOne />
        {/* <BreadcrumbTwoCommon
            title="Activities" 
            description="Our diverse range of activities is designed to offer something for everyone."
        /> */}
        <BreadcrumbOne
 
        title="Activities"
        description="At The Urban Escape we pride ourselves on delivering an exceptional experience."
        bannerType="acitivities"
        useApiHeading={true}
        useApiDescription={true}
      />

        <ActivitiesOne />
        <FooterOne />
    </div>
  )
}

export default Activities