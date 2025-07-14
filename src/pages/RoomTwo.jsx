import React from 'react'
import TopBar from '../components/header/TopBar'
import HeaderOne from '../components/header/HeaderOne'
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne'
import RoomSeven from '../components/room/RoomSeven'
import TestimonialFive from '../components/testimonials/TestimonialFive'
import FooterOne from '../components/footer/FooterOne'
import { Helmet } from 'react-helmet-async';
import SEO from './Seo'

function RoomTwo() {
    return (
        <div> 
              <SEO
            title="Scenic Lakeview Stays in Bhimtal - The Urban Escape"
            description="Looking for the ideal homestay in Bhimtal? Discover The Urban Escape—offering cozy stays, breathtaking views, and a peaceful hill-station retreat. Book today!"
            keywords="Scenic Lakeview Stays in Bhimtal "
            canonical="https://www.theurbanescape.in/room"
          />
             {/* <Helmet>
                    <meta name="title" content ="Scenic Lakeview Stays in Bhimtal - The Urban Escape"/>
                    <meta name="description" content="Looking for the ideal homestay in Bhimtal? Discover The Urban Escape—offering cozy stays, breathtaking views, and a peaceful hill-station retreat. Book today!" />
                    <meta name="keyword" content='Scenic Lakeview Stays in Bhimtal '/>
                    <link rel="canonical" href="https://www.theurbanescape.in/room" />

            </Helmet> */}
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