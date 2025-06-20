// import React, { useEffect } from 'react'
// import WOW from 'wowjs';

// function BreadcrumbOne({ title, description, bgImage }) {
//     useEffect(() => {
//         const wow = new WOW.WOW(); // Properly initialize WOW.js
//         wow.init();
//     }, []);
//     return (
//         <>
//             {/* page header */}
//             <div
//                 className="rts__section page__hero__height page__hero__bg"
//                 style={{ backgroundImage: `url(${bgImage || '/assets/images/pages/header__bg.webp'})` }}
//             >
//                 <div className="container">
//                     <div className="row align-items-center justify-content-center">
//                         <div className="col-lg-12">
//                             <div className="page__hero__content">
//                                 <h1 className="wow fadeInUp">{title}</h1>
//                                 <p className="wow fadeInUp font-sm">{description}</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* page header end */}
//         </>
//     )
// }

// export default BreadcrumbOne

 
// import React, { useEffect, useState } from 'react';
// import WOW from 'wowjs';
// import { getHeroBanner } from '../../api/getHeroBanner';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';

// function BreadcrumbOne({ title, description }) {
//   const [bgImage, setBgImage] = useState(null); // null initially
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     getHeroBanner()
//       .then((data) => {
//         if (data?.bannerData?.about_banner) {
//           setBgImage(data.bannerData.about_banner);
//         }
//         console.log("banner data ============>", data.bannerData);
//       })
//       .catch((err) => {
//         console.error("Error fetching banner image:", err);
//       })
//       .finally(() => setLoading(false));
//   }, []);

//   useEffect(() => {
//     const wow = new WOW.WOW();
//     wow.init();
//   }, []);

//   return (
//     <>
//       {/* page header */}
//       {loading ? (
//         <div className="rts__section page__hero__height page__hero__bg">
//           <Skeleton height={400} />
//         </div>
//       ) : (
//         <div
//           className="rts__section page__hero__height page__hero__bg"
//           style={{ backgroundImage: `url(${bgImage || '/assets/images/pages/header__bg.webp'})` }}
//         >
//           <div className="container">
//             <div className="row align-items-center justify-content-center">
//               <div className="col-lg-12">
//                 <div className="page__hero__content">
//                   <h1 className="wow fadeInUp">{title}</h1>
//                   <p className="wow fadeInUp font-sm">{description}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//       {/* page header end */}
//     </>
//   );
// }

// export default BreadcrumbOne;
 

 import React, { useEffect, useState } from 'react';
import WOW from 'wowjs';
import { getHeroBanner } from '../../api/getHeroBanner';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import '../global.css';

function BreadcrumbOne({
  title,
  description,
  bannerType = 'about',
  useApiHeading = false,
  useApiDescription = false
}) {
  const [bannerData, setBannerData] = useState({
    image: null,
    heading: null,
    description: null
  });
  const [loading, setLoading] = useState(true);

  // Utility to parse HTML-encoded string to plain text
  const parseHTML = (htmlContent) => {
    if (!htmlContent) return null;
    const temp = document.createElement('div');
    temp.innerHTML = htmlContent;
    return temp.textContent || temp.innerText || '';
  };

 


  useEffect(() => {
    getHeroBanner()
      .then((data) => {
        if (data?.bannerData) {
          const bd = data.bannerData;

          // Map based on bannerType
          const bannerMapping = {
            about: {
              image: bd.about_banner,
              heading: bd.about_banner_heading,
              description: bd.about_banner_description
            },
            room: {
              image: bd.room_banner,
              heading: bd.room_banner_heading,
              description: bd.room_banner_description
            },
            event: {
              image: bd.event_banner,
              heading: bd.event_banner_heading,
              description: bd.event_banner_description
            },
            wedding: {
              image: bd.wedding_banner || bd.event_banner,
              heading: bd.wedding_banner_heading || bd.event_banner_heading,
              description: bd.wedding_banner_description || bd.event_banner_description
            },
            business: {
              image: bd.business_banner || bd.event_banner,
              heading: bd.business_banner_heading || bd.event_banner_heading,
              description: bd.business_banner_description || bd.event_banner_description
            },
            satsang: {
              image: bd.satsang_banner,
              heading: bd.satsang_banner_heading,
              description: bd.satsang_banner_description
            },
            offer: {
              image: bd.offer_banner,
              heading: bd.offer_banner_heading,
              description: bd.offer_banner_description
            },
            gallery: {
              image: bd.gallery_banner,
              heading: bd.gallery_banner_heading,
              description: bd.gallery_banner_description
            },
            guest: {
              image: bd.guest_banner,
              heading: bd.guest_banner_heading,
              description: bd.guest_banner_description
            },
             acitivities: {
              image: bd.activity_banner,
              heading: bd.activity_banner_heading,
              description: bd.activity_banner_description
            },
             blog: {
              image: bd.blog_banner,
              heading: bd.blog_banner_heading,
              description: bd.blog_banner_description
            },
             contact: {
              image: bd.contact_banner,
              heading: bd.contact_banner_heading,
              description: bd.contact_banner_description
            },
             restaurant: {
              image: bd.restaurant_banner,
              heading: bd.restaurant_banner_heading,
              description: bd.restaurant_banner_description
            },
             service: {
              image: bd.service_banner,
              heading: bd.service_banner_heading,
              description: bd.service_banner_description
            },
             packages: {
              image: bd.package_banner,
              heading: bd.package_banner_heading,
              description: bd.package_banner_description
            }

          };

          const selectedBanner = bannerMapping[bannerType] || bannerMapping.about;
          setBannerData(selectedBanner);
          console.log("hero banner breadcrum part ==============>",data.bannerData )
        }
      })
      .catch((err) => {
        console.error(`Error fetching ${bannerType} banner:`, err);
      })
      .finally(() => setLoading(false));
  }, [bannerType]);

  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  return (
    <>
      {loading ? (
        <div className="rts__section page__hero__height page__hero__bg">
          <Skeleton height={400} />
        </div>
      ) : (
        <div
          className="rts__section page__hero__height page__hero__bg"
          style={{
            backgroundImage: `url(${bannerData.image || '/assets/images/pages/header__bg.webp'})`
          }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-12">
                <div className="page__hero__content text-center">
                  <h1 className="wow fadeInUp" style={{visibility: 'visible'}}>
                    {useApiHeading ? parseHTML(bannerData.heading) : title}
                  </h1>
                  <p className="wow fadeInUp font-sm">
                    {/* {useApiDescription ? parseHTML(bannerData.description) : description} */}
                   {useApiDescription && bannerData.description
                    ? parseHTML(bannerData.description)
                    : description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BreadcrumbOne;
