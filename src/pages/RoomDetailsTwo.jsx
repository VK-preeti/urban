import React from 'react'
import TopBar from '../components/header/TopBar'
import HeaderOne from '../components/header/HeaderOne'
import RoomDetails2 from '../components/room-details/RoomDetailsTwo'
import SimilarRoom from '../components/room-details/SimilarRoom'
import FooterOne from '../components/footer/FooterOne'
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne'

function RoomDetailsTwo() {
  return (
    <div>
        <TopBar />
        <HeaderOne />
        {/* <BreadcrumbOne
            title="About Us" 
            description="Welcome to Bokinn, where luxury meets comfort in the heart of Canada." 
        /> */}

         <BreadcrumbOne
 
        title="Room"
        description="At The Urban Escape we pride ourselves on delivering an exceptional experience."
        bannerType="room"
        useApiHeading={true}
        useApiDescription={true}
      />
        <RoomDetails2 />
        <SimilarRoom />
        <FooterOne />
    </div>
  )
}

export default RoomDetailsTwo