// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css'; // Core Swiper styles
// import { Navigation } from 'swiper/modules';
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/scrollbar';
// import { Link } from 'react-router-dom';
// import { getHeroBanner } from './../../api/getHeroBanner';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';




// function BannerTwo() {


//      useEffect(() => {
//     getHeroBanner()
//       .then((data) => {
         
//       })
//       .catch((err) => {
//         console.error("Error fetching about us data:", err);
//       })
//       .finally(() => setLoading(false));
//   }, []); 


//     return (
//         <>
//             {/* banner area */}
//             <div className="rts__section banner__area is__home__one banner__height banner__center">
//                 <Swiper
//                     className="banner__slider overflow-hidden"
//                     modules={[Navigation]}
//                     direction="horizontal"
//                     slidesPerView={1}
//                     loop={true}
//                     navigation={{
//                         nextEl: ".next",
//                         prevEl: ".prev",
//                     }}
//                     speed={1000}
//                     effect="slide"
//                 >
//                     <div className="swiper-wrapper">
//                         {/* single slider item */}
//                         <SwiperSlide>
//                             <div className="banner__slider__image">
//                                 <img src="/assets/images/banner/4.webp" alt="" />
//                             </div>
//                             <div className="container">
//                                 <div className="row justify-content-center">
//                                     <div className="col-lg-10">
//                                         <div className="banner__slide__content">
//                                             <span className="h6 subtitle__icon">
//                                                 Welcome to Our Hotel
//                                             </span>
//                                             <h1>Luxury Stay Hotel Experience Comfort &amp; Elegance</h1>
//                                             <p className="sub__text">
//                                                 Choosing Bokinn was one of the best decisions we've ever
//                                                 made. They have proven to be a reliable and innovative
//                                                 partner
//                                             </p>
//                                             <Link
//                                                 to="/room-three"
//                                                 className="theme-btn btn-style fill no-border "
//                                             >
//                                                 <span>Discover Room</span>
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </SwiperSlide>
//                         {/* single slider item end */}
//                         {/* single slider item */}
//                         <SwiperSlide>
//                             <div className="banner__slider__image">
//                                 <img src="assets/images/banner/slides-1.webp" alt="" />
//                             </div>
//                             <div className="container">
//                                 <div className="row justify-content-center">
//                                     <div className="col-lg-10">
//                                         <div className="banner__slide__content">
//                                             <span className="h6 subtitle__icon">Welcome to Our Spa</span>
//                                             <h1>Lavish Getaway A Blend of Comfort &amp; Style</h1>
//                                             <p className="sub__text">
//                                                 Choosing Bokinn was one of the best decisions we've ever
//                                                 made. They have proven to be a reliable and innovative
//                                                 partner
//                                             </p>
//                                             <Link
//                                                 to="/room-four"
//                                                 className="theme-btn btn-style fill no-border "
//                                             >
//                                                 <span>Discover Room</span>
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </SwiperSlide>
//                         {/* single slider item end */}
//                     </div>
//                     <div className="rts__slider__nav">
//                         <div className="rts__slide">
//                             <div className="next" role="button">
//                                 <svg
//                                     width={40}
//                                     height={22}
//                                     viewBox="0 0 40 22"
//                                     fill="none"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <path
//                                         d="M1.255 9.75546H39.0404C39.7331 9.75546 40.2927 10.3151 40.2927 11.0078C40.2927 11.7005 39.7331 12.2601 39.0404 12.2601H4.28018L11.8803 19.8603C12.3695 20.3495 12.3695 21.1439 11.8803 21.6331C11.3911 22.1223 10.5967 22.1223 10.1075 21.6331L0.366619 11.8923C0.00657272 11.5322 -0.0990982 10.9961 0.0965805 10.5264C0.292259 10.0607 0.750149 9.75546 1.255 9.75546Z"
//                                         fill="#F1F1F1"
//                                     />
//                                     <path
//                                         d="M11.0077 0.00274277C11.3286 0.00274277 11.6495 0.124063 11.8921 0.370618C12.3813 0.859813 12.3813 1.65426 11.8921 2.14346L2.13955 11.896C1.65036 12.3852 0.855906 12.3852 0.366712 11.896C-0.122483 11.4068 -0.122483 10.6124 0.366712 10.1232L10.1193 0.370618C10.3658 0.124063 10.6868 0.00274277 11.0077 0.00274277Z"
//                                         fill="#F1F1F1"
//                                     />
//                                 </svg>
//                             </div>
//                         </div>
//                         <div className="rts__slide">
//                             <div className="prev" role="button">
//                                 <svg
//                                     width={40}
//                                     height={22}
//                                     viewBox="0 0 40 22"
//                                     fill="none"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <path
//                                         d="M39.0377 12.2445L1.25234 12.2445C0.559636 12.2445 -2.04305e-06 11.6849 -1.92194e-06 10.9922C-1.80082e-06 10.2995 0.559637 9.73987 1.25234 9.73987L36.0125 9.73987L28.4124 2.13974C27.9232 1.65055 27.9232 0.856096 28.4124 0.366901C28.9016 -0.122294 29.6961 -0.122293 30.1853 0.366901L39.9261 10.1077C40.2861 10.4678 40.3918 11.004 40.1961 11.4736C40.0005 11.9393 39.5426 12.2445 39.0377 12.2445Z"
//                                         fill="#F1F1F1"
//                                     />
//                                     <path
//                                         d="M29.2852 21.9973C28.9643 21.9973 28.6433 21.8759 28.4007 21.6294C27.9115 21.1402 27.9115 20.3457 28.4007 19.8565L38.1533 10.104C38.6425 9.61476 39.4369 9.61476 39.9261 10.104C40.4153 10.5932 40.4153 11.3876 39.9261 11.8768L30.1736 21.6294C29.927 21.8759 29.6061 21.9973 29.2852 21.9973Z"
//                                         fill="#F1F1F1"
//                                     />
//                                 </svg>
//                             </div>
//                         </div>
//                     </div>
//                 </Swiper>
//             </div>
//             {/* banner area end */}
//         </>

//     )
// }

// export default BannerTwo

 

import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Core Swiper styles
import { Navigation, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';
 
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { getHeroContent } from './../../api/getHeroContent';

function BannerTwo() {
  const [bannerData, setBannerData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getHeroContent()
      .then((data) => {
        setBannerData(data.sliders);
        console.log("banner data hero =================>", data.sliders);
      })
      .catch((err) => {
        console.error("Error fetching banner data:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {/* banner area */}
      <div className="rts__section banner__area is__home__one banner__height banner__center">
        {loading ? (
          // Skeleton loading UI
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="banner__slide__content">
                  <Skeleton height={40} width={200} className="mb-3" />
                  <Skeleton height={80} className="mb-3" />
                  <Skeleton height={60} className="mb-3" />
                  <Skeleton height={50} width={150} />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Swiper
            className="banner__slider overflow-hidden"
            modules={[Navigation, Autoplay]}
            direction="horizontal"
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: ".next",
              prevEl: ".prev",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={1000}
            effect="slide"
          >
            <div className="swiper-wrapper" >
              {/* Render dynamic banner slides from API */}
              {bannerData && bannerData.length > 0 ? (
                bannerData.map((slide, index) => (
                  <SwiperSlide key={slide.id || index} >
                    <div className="banner__slider__image">
                      <img 
                        src={slide.image || slide.imageUrl || "/assets/images/banner/4.webp"} 
                        alt={slide.title || "Banner"} 
                      />
                    </div>
                    <div className="container">
                      <div className="row justify-content-center">
                        <div className="col-lg-10">
                          <div className="banner__slide__content">
                            <span className="h6 subtitle__icon" style={{ visibility: 'hidden' }}>
                              {slide.subtitle || "Welcome to Our Hotel"}
                            </span>
                            <h1 style={{ visibility: 'hidden' }}>{slide.heading_top || "Luxury Stay Hotel Experience Comfort & Elegance"}</h1>
                            <h3   style={{ color: 'white'}} >
                              {slide.heading_bottom || "Choosing Bokinn was one of the best decisions we've ever made. They have proven to be a reliable and innovative partner"}
                            </h3>
                            <Link
                              to={slide.button_link || slide.buttonLink || "room"}
                              className="theme-btn btn-style fill no-border"
                            >
                              <span>{slide.button_text || slide.buttonText || "Discover Room"}</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              ) : (
                // Fallback slide if no data is available
                <SwiperSlide  >
                  <div className="banner__slider__image">
                    <img src="/assets/images/banner/4.webp" alt="Default Banner" />
                  </div>
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-10">
                        <div className="banner__slide__content">
                          <span className="h6 subtitle__icon" style={{ visibility: 'hidden' }}>
                            Welcome to Our Hotel
                          </span>
                          <h1 style={{ visibility: 'hidden' }}>Luxury Stay Hotel Experience Comfort &amp; Elegance</h1>
                          <h3    style={{ color: 'white'}}>
                            Choosing Bokinn was one of the best decisions we've ever
                            made. They have proven to be a reliable and innovative
                            partner
                          </h3>
                          <Link
                            to="room"
                            className="theme-btn btn-style fill no-border"
                          >
                            <span >Discover Room</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )}
            </div>
            <div className="rts__slider__nav">
              <div className="rts__slide">
                <div className="next" role="button">
                  <svg
                    width={40}
                    height={22}
                    viewBox="0 0 40 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.255 9.75546H39.0404C39.7331 9.75546 40.2927 10.3151 40.2927 11.0078C40.2927 11.7005 39.7331 12.2601 39.0404 12.2601H4.28018L11.8803 19.8603C12.3695 20.3495 12.3695 21.1439 11.8803 21.6331C11.3911 22.1223 10.5967 22.1223 10.1075 21.6331L0.366619 11.8923C0.00657272 11.5322 -0.0990982 10.9961 0.0965805 10.5264C0.292259 10.0607 0.750149 9.75546 1.255 9.75546Z"
                      fill="#F1F1F1"
                    />
                    <path
                      d="M11.0077 0.00274277C11.3286 0.00274277 11.6495 0.124063 11.8921 0.370618C12.3813 0.859813 12.3813 1.65426 11.8921 2.14346L2.13955 11.896C1.65036 12.3852 0.855906 12.3852 0.366712 11.896C-0.122483 11.4068 -0.122483 10.6124 0.366712 10.1232L10.1193 0.370618C10.3658 0.124063 10.6868 0.00274277 11.0077 0.00274277Z"
                      fill="#F1F1F1"
                    />
                  </svg>
                </div>
              </div>
              <div className="rts__slide">
                <div className="prev" role="button">
                  <svg
                    width={40}
                    height={22}
                    viewBox="0 0 40 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M39.0377 12.2445L1.25234 12.2445C0.559636 12.2445 -2.04305e-06 11.6849 -1.92194e-06 10.9922C-1.80082e-06 10.2995 0.559637 9.73987 1.25234 9.73987L36.0125 9.73987L28.4124 2.13974C27.9232 1.65055 27.9232 0.856096 28.4124 0.366901C28.9016 -0.122294 29.6961 -0.122293 30.1853 0.366901L39.9261 10.1077C40.2861 10.4678 40.3918 11.004 40.1961 11.4736C40.0005 11.9393 39.5426 12.2445 39.0377 12.2445Z"
                      fill="#F1F1F1"
                    />
                    <path
                      d="M29.2852 21.9973C28.9643 21.9973 28.6433 21.8759 28.4007 21.6294C27.9115 21.1402 27.9115 20.3457 28.4007 19.8565L38.1533 10.104C38.6425 9.61476 39.4369 9.61476 39.9261 10.104C40.4153 10.5932 40.4153 11.3876 39.9261 11.8768L30.1736 21.6294C29.927 21.8759 29.6061 21.9973 29.2852 21.9973Z"
                      fill="#F1F1F1"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Swiper>
        )}
      </div>
      {/* banner area end */}
    </>
  );
}

export default BannerTwo;