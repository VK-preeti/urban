import React from 'react'
import TopBar from '../components/header/TopBar'
import HeaderOne from '../components/header/HeaderOne'
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne'
import RoomNine from '../components/room/RoomNine'
import TestimonialSix from '../components/testimonials/TestimonialSix'
import FooterOne from '../components/footer/FooterOne'

function RoomFour() {
    return (
        <div>
            <TopBar />
            <HeaderOne />
            <BreadcrumbOne
                title="Deluxe Room"
                description="A step up from the standard room, often with better views, more space, and additional amenities."
            />
            <RoomNine />
            <TestimonialSix className="section__padding" />
            <FooterOne />
        </div>
    )
}

export default RoomFour