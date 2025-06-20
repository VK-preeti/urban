import React from 'react'
import HeaderOne from '../components/header/HeaderOne'
import BannerSeven from '../components/banner/BannerSeven'
import RoomFive from '../components/room/RoomFive'
import AboutSix from '../components/about/AboutSix'
import ServiceFour from '../components/service/ServiceFour'
import TestimonialSeven from '../components/testimonials/TestimonialSeven'
import FacilitiesSix from '../components/facilities/FacilitiesSix'
import EventOne from '../components/event/EventOne'
import FooterSix from '../components/footer/FooterSix'
import posts from '../components/data/data-room.json'

function HomeSeven() {
  return (
    <div>
        <HeaderOne />
        <BannerSeven />
        <RoomFive posts={posts}/>
        <AboutSix />
        <ServiceFour />
        <TestimonialSeven />
        <FacilitiesSix />
        <EventOne />
        <FooterSix />
    </div>
  )
}

export default HomeSeven