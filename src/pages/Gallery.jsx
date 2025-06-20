import React from 'react'
import TopBar from '../components/header/TopBar'
import HeaderOne from '../components/header/HeaderOne'
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne'
import GalleryFive from '../components/gallery/GalleryFive'
import VideoThree from '../components/videos/VideoThree'
import FooterOne from '../components/footer/FooterOne'
import GalleryFour from '../components/gallery/GalleryFour'
import GalleryThree from '../components/gallery/GalleryThree'
import GalleryTwo from '../components/gallery/GalleryTwo'
import GalleryOne from '../components/gallery/GalleryOne'
import VideoTwo from '../components/videos/VideoTwo'

function Gallery() {
  return (
    <div>
        <TopBar />
        <HeaderOne />
        {/* <BreadcrumbOne 
            title="Gallery" 
            description="where every image tells a story of luxury, comfort, and unparalleled hospitality"
        /> */}
         <BreadcrumbOne
 
        title="Gallery"
        description="At The Urban Escape we pride ourselves on delivering an exceptional experience."
        bannerType="gallery"
        useApiHeading={true}
        useApiDescription={true}
      />
        {/* <GalleryTwo /> */}
        <GalleryFive />
        <VideoTwo />
        <FooterOne />
    </div>
  )
}

export default Gallery