import React from 'react'
import TopBar from '../components/header/TopBar'
import HeaderOne from '../components/header/HeaderOne'
import RoomDetails2 from '../components/room-details/RoomDetailsTwo'
import SimilarRoom from '../components/room-details/SimilarRoom'
import FooterOne from '../components/footer/FooterOne'
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne'
import RoomDetailsSimilar from '../components/room-details/RoomDetailsSimilar'

function RoomDetailsSimilarPage() {
  return (
    <div>
        <TopBar />
        <HeaderOne />
        {/* <BreadcrumbOne
            title="About Us" 
            description="Welcome to Bokinn, where luxury meets comfort in the heart of Canada." 
        /> */}
        <RoomDetailsSimilar />
        {/* <SimilarRoom /> */}
        <FooterOne />
    </div>
  )
}

export default RoomDetailsSimilarPage