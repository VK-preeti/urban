import React from 'react'
import TopBar from '../components/header/TopBar'
import HeaderOne from '../components/header/HeaderOne'
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne'
import FooterOne from '../components/footer/FooterOne'
import MiceDetails from '../components/mice/MiceDetails'
import EventTwo from '../components/event/EventTwo'
import EventTwoSatsang from '../components/event/EventTwoSatsang'

function MicePageSastang() {
  return (
    <div>
        <TopBar />
        <HeaderOne />
        {/* <BreadcrumbOne 
            title="Satsang  " 
            description="At The Urban Escape we pride ourselves on delivering an exceptional experience."
        /> */}

        <BreadcrumbOne
 
        title="Satsang"
        description="At The Urban Escape we pride ourselves on delivering an exceptional experience."
        bannerType="satsang"
        useApiHeading={true}
        useApiDescription={true}
      />
       
       {/* <MiceDetails /> */}
       <EventTwoSatsang />
         
        <FooterOne />
    </div>
  )
}

export default MicePageSastang;