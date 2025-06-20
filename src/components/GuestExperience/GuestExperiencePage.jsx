// import React, { Component } from 'react'
// import OfferOne from './OfferOne'
// import TopBar from '../header/TopBar'
// import HeaderOne from '../header/HeaderOne'
// import BreadcrumbOne from '../breadcrumb/BreadcrumbOne'
// import FooterOne from '../footer/FooterOne'
// import GuestExperience from './GuestExperience'
//  import { Rect } from './../../../node_modules/@restart/hooks/cjs/useResizeObserver.d';


// export class OfferPage extends Component {
//   render() {
//     return (
//       <div>
//          <TopBar />
//         <HeaderOne />
//         <BreadcrumbOne
//             title="Special Offer" 
//             description="Welcome to Bokinn, where luxury meets comfort in the heart of Canada." 
//         />
//         <GuestExperience />
//          <FooterOne />
//       </div>
//     )
//   }
// }

// export default OfferPage


import React from 'react'
 
import TopBar from '../header/TopBar'
import HeaderOne from '../header/HeaderOne'
import BreadcrumbOne from '../breadcrumb/BreadcrumbOne'
import FooterOne from '../footer/FooterOne'
import GuestExperience from './GuestExperience'
import GuestReviews from './GuestReviews'
import TestimonialFive from '../testimonials/TestimonialFive'
 

const GuestExperiencePage = () => {
  return (
    <div>
       <TopBar />
        <HeaderOne />
        {/* <BreadcrumbOne
            title="Guest Experience" 
            description="Welcome to Bokinn, where luxury meets comfort in the heart of Canada." 
        /> */}
          <BreadcrumbOne
 
        title="Guest Experience"
        description="At The Urban Escape we pride ourselves on delivering an exceptional experience."
        bannerType="guest"
        useApiHeading={true}
        useApiDescription={true}
      />
        <GuestExperience />
        <GuestReviews />
        <TestimonialFive />
         <FooterOne />
    </div>
  )
}

export default GuestExperiencePage
