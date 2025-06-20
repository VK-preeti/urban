import React from 'react'
import TopBar from '../components/header/TopBar'
import HeaderOne from '../components/header/HeaderOne'
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne'
import RoomSeven from '../components/room/RoomSeven'
import TestimonialFive from '../components/testimonials/TestimonialFive'
import FooterOne from '../components/footer/FooterOne'

function RoomTwo() {
    return (
        <div> 
            <TopBar />
            <HeaderOne />
            {/* <BreadcrumbOne 
                title="Deluxe Room"
                description="A step up from the standard room, often with better views, more space, and additional amenities."
            /> */}
             <BreadcrumbOne
 
        title="Room"
        description="At The Urban Escape we pride ourselves on delivering an exceptional experience."
        bannerType="room"
        useApiHeading={true}
        useApiDescription={true}
      />
            <RoomSeven />
            <TestimonialFive />
            <FooterOne />
        </div>

    )
}

export default RoomTwo