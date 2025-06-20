// import React from 'react'
// import TopBar from '../components/header/TopBar'
// import HeaderOne from '../components/header/HeaderOne'
// import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne'
// import FooterOne from '../components/footer/FooterOne'
// import MiceDetails from '../components/mice/MiceDetails'
// import EventTwo from '../components/event/EventTwo'
// import EventTwoBusiness from '../components/event/EventTwoBusiness'

// function MicePageBusiness() {
//   return (
//     <div>
//         <TopBar />
//         <HeaderOne />
        // <BreadcrumbOne 
        //     title="Business Conferences" 
        //     description="At The Urban Escape we pride ourselves on delivering an exceptional experience."
        // />
       
//        {/* <MiceDetails /> */}
//        <EventTwoBusiness />
         
//         <FooterOne />
//     </div>
//   )
// }

// export default MicePageBusiness;
 

import React from 'react';
import TopBar from '../components/header/TopBar';
import HeaderOne from '../components/header/HeaderOne';
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne';
import FooterOne from '../components/footer/FooterOne';
import EventTwoBusiness from '../components/event/EventTwoBusiness';

function MicePageBusiness() {
  return (
    <div>
      {/* Top header */}
      <TopBar />

      {/* Main header */}
      <HeaderOne />

      {/* Dynamic Breadcrumb with business banner */}
      <BreadcrumbOne
        title="Business Conferences"
        description="At The Urban Escape we pride ourselves on delivering an exceptional experience."
        bannerType="business"
        useApiHeading={true}
        useApiDescription={true}
      />

      {/* Business Events section */}
      <EventTwoBusiness />

      {/* Footer */}
      <FooterOne />
    </div>
  );
}

export default MicePageBusiness;
