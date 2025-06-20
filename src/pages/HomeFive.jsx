import React from 'react'
import HeaderFour from '../components/header/HeaderFour'
import BannerFive from '../components/banner/BannerFive'
import AdvanceForm from '../components/form/AdvanceForm'
import AboutFour from '../components/about/AboutFour'
import RoomThree from '../components/room/RoomThree'
import ServiceTwo from '../components/service/ServiceTwo'
import FacilitiesFour from '../components/facilities/FacilitiesFour'
import TestimonialFive from '../components/testimonials/TestimonialFive'
import BlogTwo from '../components/blog/BlogTwo'
import NewsletterTwo from '../components/newsletter/NewsletterTwo'
import FooterFour from '../components/footer/FooterFour'
import posts from '../components/data/data-room.json'

function HomeFive() {
  return (
    <div>
        <HeaderFour />
        <BannerFive />
        <AdvanceForm />
        <AboutFour />
        <RoomThree posts={posts}/>
        <ServiceTwo />
        <FacilitiesFour />
        <TestimonialFive />
        <BlogTwo />
        <NewsletterTwo />
        <FooterFour />
    </div>
  )
}

export default HomeFive