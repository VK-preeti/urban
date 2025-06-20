// import React from 'react'
// import { Link, useParams } from 'react-router-dom';
// import Posts from '../data/data-room.json';

// function RoomDetails2() {
//     const { id } = useParams();
//     const roomPost = Posts.find(post => post.id === parseInt(id));

//     if (!roomPost) {
//         return <div>Post not found!</div>;
//     }
//     return (
//         <>
//             <div className="rts__section single page__hero__height page__hero__bg no__shadow" >
//                 <img src={`/assets/images/pages/room/${roomPost.bannerImg}`} alt="" />
//             </div>
//             {/* room details two top */}
//             <div className="rts__section">
//                 <div className="container">
//                     <div className="row justify-content-center">
//                         <div className="col-lg-8">
//                             <div className="room__details__top">
//                                 <span className="h2 price">{roomPost.price}</span>
//                                 <h1>{roomPost.title}</h1>
//                                 <div className="room__meta">
//                                     <span>
//                                         <i className="flaticon-construction" />
//                                         35 ft
//                                     </span>
//                                     <span>
//                                         <i className="flaticon-user" />5 Person
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* room details two top end */}
//             <>
//                 {/* room details area */}
//                 <div className="rts__section section__padding">
//                     <div className="container">
//                         <div className="row g-5 sticky-wrap">
//                             <div className="col-lg-8">
//                                 <div className="room__details">
//                                     <h4 className="mb-30">Room Description</h4>
//                                     <p>
//                                         Our elegantly appointed rooms and suites are designed to offer the
//                                         utmost in comfort and style. Each room features modern amenities,
//                                         plush furnishings, and thoughtful touches to ensure a relaxing
//                                         stay.
//                                         <br /> <br />
//                                         Indulge in a culinary journey at our on-site restaurants, where
//                                         our talented chefs create mouthwatering dishes using the freshest
//                                         local ingredients. Start your day with a sumptuous breakfast,
//                                         enjoy a leisurely lunch, and savor a gourmet dinner in an elegant
//                                         setting.
//                                     </p>
//                                     <h4 className="mb-40">Room Video</h4>
//                                     <div className="video__area mb-50 position-relative wow fadeInUp">
//                                         <div className="video__area__image is__room__details jara-mask-2 jarallax">
//                                             <img
//                                                 className="radius-10 jarallax-img"
//                                                 src="/assets/images/pages/video-bg.webp"
//                                                 alt=""
//                                             />
//                                         </div>
//                                         <div className="video--spinner__wrapper ">
//                                             <div className="rts__circle">
//                                                 <svg className="spinner" viewBox="0 0 100 100">
//                                                     <defs>
//                                                         <path
//                                                             id="circle-2"
//                                                             d="M50,50 m-37,0a37,37 0 1,1 74,0a37,37 0 1,1 -74,0"
//                                                         />
//                                                     </defs>
//                                                     <text>
//                                                         <textPath xlinkHref="#circle-2">
//                                                             Watch Now * Watch Now * Watch Full Video *
//                                                         </textPath>
//                                                     </text>
//                                                 </svg>
//                                                 <div className="rts__circle--icon">
//                                                     <a
//                                                         href="https://www.youtube.com/watch?v=qOwxqRGHy5Q"
//                                                         className="video-play"
//                                                     >
//                                                         <i className="flaticon-play" />
//                                                     </a>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <span className="h4 d-block mb-30">Room Amenities</span>
//                                     <div className="room__amenity mb-50">
//                                         <div className="group__row if__room__details__two">
//                                             <div className="single__item">
//                                                 <img
//                                                     src="/assets/images/icon/wifi.svg"
//                                                     height={30}
//                                                     width={36}
//                                                     alt=""
//                                                 />
//                                                 <span>Free Wifi</span>
//                                             </div>
//                                             <div className="single__item">
//                                                 <img
//                                                     src="/assets/images/icon/shower.svg"
//                                                     height={30}
//                                                     width={36}
//                                                     alt=""
//                                                 />
//                                                 <span>Shower</span>
//                                             </div>
//                                         </div>
//                                         <div className="group__row if__room__details__two">
//                                             <div className="single__item">
//                                                 <img
//                                                     src="/assets/images/icon/aeroplane.svg"
//                                                     height={30}
//                                                     width={36}
//                                                     alt=""
//                                                 />
//                                                 <span>Airport transport</span>
//                                             </div>
//                                             <div className="single__item">
//                                                 <img
//                                                     src="/assets/images/icon/balcony.svg"
//                                                     height={30}
//                                                     width={36}
//                                                     alt=""
//                                                 />
//                                                 <span>Balcony</span>
//                                             </div>
//                                         </div>
//                                         <div className="group__row if__room__details__two">
//                                             <div className="single__item">
//                                                 <img
//                                                     src="/assets/images/icon/refrigerator.svg"
//                                                     height={30}
//                                                     width={36}
//                                                     alt=""
//                                                 />
//                                                 <span>Refrigerator</span>
//                                             </div>
//                                             <div className="single__item">
//                                                 <img
//                                                     src="/assets/images/icon/support.svg"
//                                                     height={30}
//                                                     width={36}
//                                                     alt=""
//                                                 />
//                                                 <span>24/7 Support</span>
//                                             </div>
//                                         </div>
//                                         <div className="group__row if__room__details__two">
//                                             <div className="single__item">
//                                                 <img
//                                                     src="/assets/images/icon/desk.svg"
//                                                     height={30}
//                                                     width={36}
//                                                     alt=""
//                                                 />
//                                                 <span>Work Desk</span>
//                                             </div>
//                                             <div className="single__item">
//                                                 <img
//                                                     src="/assets/images/icon/fitness.svg"
//                                                     height={30}
//                                                     width={36}
//                                                     alt=""
//                                                 />
//                                                 <span>Fitness Center</span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <span className="h4 d-block mb-50">Room Features</span>
//                                     <div className="room__feature mb-20">
//                                         <div className="room__image__group row row-cols-md-2 row-cols-sm-1 mt-30 mb-50 gap-4 gap-md-0">
//                                             <div className="room__image__item">
//                                                 <img
//                                                     className="rounded-2"
//                                                     src="/assets/images/pages/room/r-d-1.webp"
//                                                     alt=""
//                                                 />
//                                             </div>
//                                             <div className="room__image__item">
//                                                 <img
//                                                     className="rounded-2"
//                                                     src="/assets/images/pages/room/r-d-2.webp"
//                                                     alt=""
//                                                 />
//                                             </div>
//                                         </div>
//                                         <div className="group__row is__room__details">
//                                             <ul className="list__item">
//                                                 <li>Children and extra beds</li>
//                                                 <li>Climate Control</li>
//                                             </ul>
//                                             <ul className="list__item">
//                                                 <li>Art and Decor</li>
//                                                 <li>Coffee/Tea Maker</li>
//                                             </ul>
//                                             <ul className="list__item">
//                                                 <li>High-End Bedding</li>
//                                                 <li>Smart Technology</li>
//                                             </ul>
//                                         </div>
//                                     </div>
//                                     <p>
//                                         Our elegantly appointed rooms and suites are designed to offer the
//                                         utmost in comfort and style. Each room features modern amenities,
//                                         plush furnishings, and thoughtful touches to ensure a relaxing
//                                         stay.
//                                     </p>
//                                 </div>
//                             </div>
//                             <div className="col-lg-4 sticky-item">
//                                 <div className="rts__booking__form has__background is__room__details sticky-item">
//                                     <form action="#" method="post" className="advance__search">
//                                         <h5 className="pt-0">Book Your Stay</h5>
//                                         <div className="advance__search__wrapper">
//                                             {/* single input */}
//                                             <div className="query__input wow fadeInUp">
//                                                 <label htmlFor="check__in" className="query__label">
//                                                     Check In
//                                                 </label>
//                                                 <div className="query__input__position">
//                                                     <input
//                                                         type="text"
//                                                         id="check__in"
//                                                         name="check__in"
//                                                         placeholder="15 Jun 2024"
//                                                         required=""
//                                                     />
//                                                     <div className="query__input__icon">
//                                                         <i className="flaticon-calendar" />
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             {/* single input end */}
//                                             {/* single input */}
//                                             <div className="query__input wow fadeInUp" data-wow-delay=".3s">
//                                                 <label htmlFor="check__out" className="query__label">
//                                                     Check Out
//                                                 </label>
//                                                 <div className="query__input__position">
//                                                     <input
//                                                         type="text"
//                                                         id="check__out"
//                                                         name="check__out"
//                                                         placeholder="15 May 2024"
//                                                         required=""
//                                                     />
//                                                     <div className="query__input__icon">
//                                                         <i className="flaticon-calendar" />
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             {/* single input end */}
//                                             {/* single input */}
//                                             <div className="query__input wow fadeInUp" data-wow-delay=".4s">
//                                                 <label htmlFor="adult" className="query__label">
//                                                     Adult
//                                                 </label>
//                                                 <div className="query__input__position">
//                                                     <select name="adult" id="adult" className="form-select">
//                                                         <option value={1}>1 Person</option>
//                                                         <option value={2}>2 Person</option>
//                                                         <option value={3}>3 Person</option>
//                                                         <option value={4}>4 Person</option>
//                                                         <option value={5}>5 Person</option>
//                                                         <option value={6}>6 Person</option>
//                                                         <option value={7}>7 Person</option>
//                                                     </select>
//                                                     <div className="query__input__icon">
//                                                         <i className="flaticon-user" />
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             {/* single input end */}
//                                             {/* single input */}
//                                             <div className="query__input wow fadeInUp" data-wow-delay=".5s">
//                                                 <label htmlFor="child" className="query__label">
//                                                     Child
//                                                 </label>
//                                                 <div className="query__input__position">
//                                                     <select name="child" id="child" className="form-select">
//                                                         <option value={1}>1 Child</option>
//                                                         <option value={2}>2 Child</option>
//                                                         <option value={3}>3 Child</option>
//                                                         <option value={4}>4 Child</option>
//                                                         <option value={5}>5 Child</option>
//                                                         <option value={6}>6 Child</option>
//                                                         <option value={7}>7 Child</option>
//                                                     </select>
//                                                     <div className="query__input__icon">
//                                                         <i className="flaticon-user" />
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             {/* single input end */}
//                                             {/* single input */}
//                                             <div className="query__input wow fadeInUp" data-wow-delay=".5s">
//                                                 <label htmlFor="room" className="query__label">
//                                                     Room
//                                                 </label>
//                                                 <div className="query__input__position">
//                                                     <select name="room" id="room" className="form-select">
//                                                         <option value={1}>1 Room</option>
//                                                         <option value={2}>2 Room</option>
//                                                         <option value={3}>3 Room</option>
//                                                         <option value={4}>4 Room</option>
//                                                         <option value={5}>5 Room</option>
//                                                     </select>
//                                                     <div className="query__input__icon is__svg">
//                                                         <img src="/assets/images/icon/room.svg" alt="" />
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             {/* single input end */}
//                                             {/* single input */}
//                                             <div className="query__input wow fadeInUp" data-wow-delay=".5s">
//                                                 <label htmlFor="exbed" className="query__label">
//                                                     Extra Bed
//                                                 </label>
//                                                 <div className="query__input__position">
//                                                     <select name="exbed" id="exbed" className="form-select">
//                                                         <option value={1}>1 Bed</option>
//                                                         <option value={2}>2 Bed</option>
//                                                         <option value={3}>3 Bed</option>
//                                                         <option value={4}>4 Bed</option>
//                                                     </select>
//                                                     <div className="query__input__icon is__svg">
//                                                         <img src="/assets/images/icon/bed-alt.svg" alt="" />
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             {/* single input end */}
//                                             <h5 className="p-0 mt-20">Extra Services</h5>
//                                             {/* checkbox item */}
//                                             <div className="query__input checkbox wow fadeInUp">
//                                                 <input type="checkbox" name="clean" id="clean" />
//                                                 <label htmlFor="clean">Room Clean</label>
//                                                 <span>$12 / Night</span>
//                                             </div>
//                                             {/* checkbox item end */}
//                                             {/* checkbox item */}
//                                             <div className="query__input checkbox wow fadeInUp">
//                                                 <input type="checkbox" name="parking" id="parking" />
//                                                 <label htmlFor="parking">Parking</label>
//                                                 <span>Free</span>
//                                             </div>
//                                             {/* checkbox item end */}
//                                             {/* checkbox item */}
//                                             <div className="query__input checkbox wow fadeInUp">
//                                                 <input type="checkbox" name="transport" id="transport" />
//                                                 <label htmlFor="transport">Airport transport</label>
//                                                 <span>$30 / Night</span>
//                                             </div>
//                                             {/* checkbox item end */}
//                                             {/* checkbox item */}
//                                             <div className="query__input checkbox wow fadeInUp">
//                                                 <input type="checkbox" name="pet" id="pet" />
//                                                 <label htmlFor="pet">Pet-Friendly</label>
//                                                 <span>$40 / Night</span>
//                                             </div>
//                                             {/* checkbox item end */}
//                                             {/* calculation */}
//                                             <div className="total__price">
//                                                 <span className="total h6 mb-0">Total Price</span>
//                                                 <span className="price h6 m-0">$82</span>
//                                             </div>
//                                             {/* calculation end */}
//                                             {/* submit button */}
//                                             <Link to='/cart'
//                                                 className="theme-btn btn-style fill no-border search__btn wow fadeInUp"
//                                                 data-wow-delay=".6s"
//                                             >
//                                                 <span>Book Your Room</span>
//                                             </Link>
//                                             {/* submit button end */}
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 {/* room details area end */}
//             </>

//         </>
//     )
// }

// export default RoomDetails2



//  import React, { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import Posts from '../data/data-room.json';
// import { getRoomDetails } from '../../api/getRoomDetails';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';

// function RoomDetails2() {
//     const { id } = useParams();
//     const roomPost = Posts.find(post => post.id === parseInt(id));


//     //   useEffect(() => {
//     //     getRoomDetails()
//     //       .then((data) => {
//     //         setSingleRoom(data.singleRoom);
//     //       })
//     //       .catch((err) => {
//     //         console.error("Error fetching about us data:", err);
//     //       })
//     //       .finally(() => setLoading(false));
//     //   }, []);

//     if (!roomPost) {
//         return <div>Post not found!</div>;
//     }
//     return (
//         <>
//             <div className="rts__section single page__hero__height page__hero__bg no__shadow" >
//                 <img src={`/assets/images/pages/room/${roomPost.bannerImg}`} alt="" />
//             </div>
//             {/* room details two top */}
//             <div className="rts__section">
//                 <div className="container">
//                     <div className="row justify-content-center">
//                         <div className="col-lg-8">
//                             <div className="room__details__top">
//                                 <span className="h2 price">{roomPost.price}</span>
//                                 <h1>{roomPost.title}</h1>
//                                 <div className="room__meta">
//                                     <span>
//                                         <i className="flaticon-construction" />
//                                         35 ft
//                                     </span>
//                                     <span>
//                                         <i className="flaticon-user" />5 Person
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* room details two top end */}
//             <>
//                 {/* room details area */}
//                 <div className="rts__section section__padding">
//                     <div className="container">
//                         <div className="row g-5 sticky-wrap">
//                             <div className="col-lg-8">
//                                 <div className="room__details">
//                                     <h4 className="mb-30">Room Description</h4>
//                                     <p>
//                                         Our elegantly appointed rooms and suites are designed to offer the
//                                         utmost in comfort and style. Each room features modern amenities,
//                                         plush furnishings, and thoughtful touches to ensure a relaxing
//                                         stay.
//                                         <br /> <br />
//                                         Indulge in a culinary journey at our on-site restaurants, where
//                                         our talented chefs create mouthwatering dishes using the freshest
//                                         local ingredients. Start your day with a sumptuous breakfast,
//                                         enjoy a leisurely lunch, and savor a gourmet dinner in an elegant
//                                         setting.
//                                     </p>
//                                     <h4 className="mb-40">Room Video</h4>
//                                     <div className="video__area mb-50 position-relative wow fadeInUp">
//                                         <div className="video__area__image is__room__details jara-mask-2 jarallax">
//                                             <img
//                                                 className="radius-10 jarallax-img"
//                                                 src="/assets/images/pages/video-bg.webp"
//                                                 alt=""
//                                             />
//                                         </div>
//                                         <div className="video--spinner__wrapper ">
//                                             <div className="rts__circle">
//                                                 <svg className="spinner" viewBox="0 0 100 100">
//                                                     <defs>
//                                                         <path
//                                                             id="circle-2"
//                                                             d="M50,50 m-37,0a37,37 0 1,1 74,0a37,37 0 1,1 -74,0"
//                                                         />
//                                                     </defs>
//                                                     <text>
//                                                         <textPath xlinkHref="#circle-2">
//                                                             Watch Now * Watch Now * Watch Full Video *
//                                                         </textPath>
//                                                     </text>
//                                                 </svg>
//                                                 <div className="rts__circle--icon">
//                                                     <a
//                                                         href="https://www.youtube.com/watch?v=qOwxqRGHy5Q"
//                                                         className="video-play"
//                                                     >
//                                                         <i className="flaticon-play" />
//                                                     </a>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <span className="h4 d-block mb-30">Room Amenities</span>
//                                     <div className="room__amenity mb-50">
//                                         <div className="group__row if__room__details__two">
//                                             <div className="single__item">
//                                                 <img
//                                                     src="/assets/images/icon/wifi.svg"
//                                                     height={30}
//                                                     width={36}
//                                                     alt=""
//                                                 />
//                                                 <span>Free Wifi</span>
//                                             </div>
//                                             <div className="single__item">
//                                                 <img
//                                                     src="/assets/images/icon/shower.svg"
//                                                     height={30}
//                                                     width={36}
//                                                     alt=""
//                                                 />
//                                                 <span>Shower</span>
//                                             </div>
//                                         </div>
//                                         <div className="group__row if__room__details__two">
//                                             <div className="single__item">
//                                                 <img
//                                                     src="/assets/images/icon/aeroplane.svg"
//                                                     height={30}
//                                                     width={36}
//                                                     alt=""
//                                                 />
//                                                 <span>Airport transport</span>
//                                             </div>
//                                             <div className="single__item">
//                                                 <img
//                                                     src="/assets/images/icon/balcony.svg"
//                                                     height={30}
//                                                     width={36}
//                                                     alt=""
//                                                 />
//                                                 <span>Balcony</span>
//                                             </div>
//                                         </div>
//                                         <div className="group__row if__room__details__two">
//                                             <div className="single__item">
//                                                 <img
//                                                     src="/assets/images/icon/refrigerator.svg"
//                                                     height={30}
//                                                     width={36}
//                                                     alt=""
//                                                 />
//                                                 <span>Refrigerator</span>
//                                             </div>
//                                             <div className="single__item">
//                                                 <img
//                                                     src="/assets/images/icon/support.svg"
//                                                     height={30}
//                                                     width={36}
//                                                     alt=""
//                                                 />
//                                                 <span>24/7 Support</span>
//                                             </div>
//                                         </div>
//                                         <div className="group__row if__room__details__two">
//                                             <div className="single__item">
//                                                 <img
//                                                     src="/assets/images/icon/desk.svg"
//                                                     height={30}
//                                                     width={36}
//                                                     alt=""
//                                                 />
//                                                 <span>Work Desk</span>
//                                             </div>
//                                             <div className="single__item">
//                                                 <img
//                                                     src="/assets/images/icon/fitness.svg"
//                                                     height={30}
//                                                     width={36}
//                                                     alt=""
//                                                 />
//                                                 <span>Fitness Center</span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <span className="h4 d-block mb-50">Room Features</span>
//                                     <div className="room__feature mb-20">
//                                         <div className="room__image__group row row-cols-md-2 row-cols-sm-1 mt-30 mb-50 gap-4 gap-md-0">
//                                             <div className="room__image__item">
//                                                 <img
//                                                     className="rounded-2"
//                                                     src="/assets/images/pages/room/r-d-1.webp"
//                                                     alt=""
//                                                 />
//                                             </div>
//                                             <div className="room__image__item">
//                                                 <img
//                                                     className="rounded-2"
//                                                     src="/assets/images/pages/room/r-d-2.webp"
//                                                     alt=""
//                                                 />
//                                             </div>
//                                         </div>
//                                         <div className="group__row is__room__details">
//                                             <ul className="list__item">
//                                                 <li>Children and extra beds</li>
//                                                 <li>Climate Control</li>
//                                             </ul>
//                                             <ul className="list__item">
//                                                 <li>Art and Decor</li>
//                                                 <li>Coffee/Tea Maker</li>
//                                             </ul>
//                                             <ul className="list__item">
//                                                 <li>High-End Bedding</li>
//                                                 <li>Smart Technology</li>
//                                             </ul>
//                                         </div>
//                                     </div>
//                                     <p>
//                                         Our elegantly appointed rooms and suites are designed to offer the
//                                         utmost in comfort and style. Each room features modern amenities,
//                                         plush furnishings, and thoughtful touches to ensure a relaxing
//                                         stay.
//                                     </p>
//                                 </div>
//                             </div>
//                             <div className="col-lg-4 sticky-item">
//                                 <div className="rts__booking__form has__background is__room__details sticky-item">
//                                     <form action="#" method="post" className="advance__search">
//                                         <h5 className="pt-0">Book Your Stay</h5>
//                                         <div className="advance__search__wrapper">
//                                             {/* single input */}
//                                             <div className="query__input wow fadeInUp">
//                                                 <label htmlFor="check__in" className="query__label">
//                                                     Check In
//                                                 </label>
//                                                 <div className="query__input__position">
//                                                     <input
//                                                         type="text"
//                                                         id="check__in"
//                                                         name="check__in"
//                                                         placeholder="15 Jun 2024"
//                                                         required=""
//                                                     />
//                                                     <div className="query__input__icon">
//                                                         <i className="flaticon-calendar" />
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             {/* single input end */}
//                                             {/* single input */}
//                                             <div className="query__input wow fadeInUp" data-wow-delay=".3s">
//                                                 <label htmlFor="check__out" className="query__label">
//                                                     Check Out
//                                                 </label>
//                                                 <div className="query__input__position">
//                                                     <input
//                                                         type="text"
//                                                         id="check__out"
//                                                         name="check__out"
//                                                         placeholder="15 May 2024"
//                                                         required=""
//                                                     />
//                                                     <div className="query__input__icon">
//                                                         <i className="flaticon-calendar" />
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             {/* single input end */}
//                                             {/* single input */}
//                                             <div className="query__input wow fadeInUp" data-wow-delay=".4s">
//                                                 <label htmlFor="adult" className="query__label">
//                                                     Adult
//                                                 </label>
//                                                 <div className="query__input__position">
//                                                     <select name="adult" id="adult" className="form-select">
//                                                         <option value={1}>1 Person</option>
//                                                         <option value={2}>2 Person</option>
//                                                         <option value={3}>3 Person</option>
//                                                         <option value={4}>4 Person</option>
//                                                         <option value={5}>5 Person</option>
//                                                         <option value={6}>6 Person</option>
//                                                         <option value={7}>7 Person</option>
//                                                     </select>
//                                                     <div className="query__input__icon">
//                                                         <i className="flaticon-user" />
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             {/* single input end */}
//                                             {/* single input */}
//                                             <div className="query__input wow fadeInUp" data-wow-delay=".5s">
//                                                 <label htmlFor="child" className="query__label">
//                                                     Child
//                                                 </label>
//                                                 <div className="query__input__position">
//                                                     <select name="child" id="child" className="form-select">
//                                                         <option value={1}>1 Child</option>
//                                                         <option value={2}>2 Child</option>
//                                                         <option value={3}>3 Child</option>
//                                                         <option value={4}>4 Child</option>
//                                                         <option value={5}>5 Child</option>
//                                                         <option value={6}>6 Child</option>
//                                                         <option value={7}>7 Child</option>
//                                                     </select>
//                                                     <div className="query__input__icon">
//                                                         <i className="flaticon-user" />
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             {/* single input end */}
//                                             {/* single input */}
//                                             <div className="query__input wow fadeInUp" data-wow-delay=".5s">
//                                                 <label htmlFor="room" className="query__label">
//                                                     Room
//                                                 </label>
//                                                 <div className="query__input__position">
//                                                     <select name="room" id="room" className="form-select">
//                                                         <option value={1}>1 Room</option>
//                                                         <option value={2}>2 Room</option>
//                                                         <option value={3}>3 Room</option>
//                                                         <option value={4}>4 Room</option>
//                                                         <option value={5}>5 Room</option>
//                                                     </select>
//                                                     <div className="query__input__icon is__svg">
//                                                         <img src="/assets/images/icon/room.svg" alt="" />
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             {/* single input end */}
//                                             {/* single input */}
//                                             <div className="query__input wow fadeInUp" data-wow-delay=".5s">
//                                                 <label htmlFor="exbed" className="query__label">
//                                                     Extra Bed
//                                                 </label>
//                                                 <div className="query__input__position">
//                                                     <select name="exbed" id="exbed" className="form-select">
//                                                         <option value={1}>1 Bed</option>
//                                                         <option value={2}>2 Bed</option>
//                                                         <option value={3}>3 Bed</option>
//                                                         <option value={4}>4 Bed</option>
//                                                     </select>
//                                                     <div className="query__input__icon is__svg">
//                                                         <img src="/assets/images/icon/bed-alt.svg" alt="" />
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             {/* single input end */}
//                                             <h5 className="p-0 mt-20">Extra Services</h5>
//                                             {/* checkbox item */}
//                                             <div className="query__input checkbox wow fadeInUp">
//                                                 <input type="checkbox" name="clean" id="clean" />
//                                                 <label htmlFor="clean">Room Clean</label>
//                                                 <span>$12 / Night</span>
//                                             </div>
//                                             {/* checkbox item end */}
//                                             {/* checkbox item */}
//                                             <div className="query__input checkbox wow fadeInUp">
//                                                 <input type="checkbox" name="parking" id="parking" />
//                                                 <label htmlFor="parking">Parking</label>
//                                                 <span>Free</span>
//                                             </div>
//                                             {/* checkbox item end */}
//                                             {/* checkbox item */}
//                                             <div className="query__input checkbox wow fadeInUp">
//                                                 <input type="checkbox" name="transport" id="transport" />
//                                                 <label htmlFor="transport">Airport transport</label>
//                                                 <span>$30 / Night</span>
//                                             </div>
//                                             {/* checkbox item end */}
//                                             {/* checkbox item */}
//                                             <div className="query__input checkbox wow fadeInUp">
//                                                 <input type="checkbox" name="pet" id="pet" />
//                                                 <label htmlFor="pet">Pet-Friendly</label>
//                                                 <span>$40 / Night</span>
//                                             </div>
//                                             {/* checkbox item end */}
//                                             {/* calculation */}
//                                             <div className="total__price">
//                                                 <span className="total h6 mb-0">Total Price</span>
//                                                 <span className="price h6 m-0">$82</span>
//                                             </div>
//                                             {/* calculation end */}
//                                             {/* submit button */}
//                                             <Link to='/cart'
//                                                 className="theme-btn btn-style fill no-border search__btn wow fadeInUp"
//                                                 data-wow-delay=".6s"
//                                             >
//                                                 <span>Book Your Room</span>
//                                             </Link>
//                                             {/* submit button end */}
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 {/* room details area end */}
//             </>

//         </>
//     )
// }

// export default RoomDetails2

//  import React, { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { getRoomDetails } from '../../api/getRoomDetails';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';

// function RoomDetails2() {
//     const { id } = useParams();
//     const [singleRoom, setSingleRoom] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         setLoading(true);
//         getRoomDetails()
//             .then((data) => {
//                 setSingleRoom(data.singleRoom);
//             })
//             .catch((err) => {
//                 console.error("Error fetching room details:", err);
//             })
//             .finally(() => setLoading(false));
//     }, [id]);

//     if (loading) {
//         return (
//             <div className="container py-5">
//                 <div className="row justify-content-center">
//                     <div className="col-lg-8">
//                         <Skeleton height={400} className="mb-4" />
//                         <Skeleton height={50} className="mb-3" />
//                         <Skeleton height={30} className="mb-4" />
//                         <Skeleton height={200} className="mb-4" count={3} />
//                     </div>
//                 </div>
//             </div>
//         );
//     }

//     if (!singleRoom) {
//         return <div className="container py-5">Room not found!</div>;
//     }

//     // Parse JSON strings if needed
//     const roomImages = typeof singleRoom.images === 'string' ? JSON.parse(singleRoom.images) : singleRoom.images;
    
//     return (
//         <>
//             <div className="rts__section single page__hero__height page__hero__bg no__shadow">
//                 <img src={singleRoom.banner_image} alt={singleRoom.title} />
//             </div>
//             {/* room details two top */}
//             <div className="rts__section">
//                 <div className="container">
//                     <div className="row justify-content-center">
//                         <div className="col-lg-8">
//                             <div className="room__details__top">
//                                 <span className="h2 price">${singleRoom.price || 'Price on request'}</span>
//                                 <h1>{singleRoom.title}</h1>
//                                 <div className="room__meta">
//                                     <span>
//                                         <i className="flaticon-construction" />
//                                         {singleRoom.size} ft
//                                     </span>
//                                     <span>
//                                         <i className="flaticon-user" />{singleRoom.person_allow} Person
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* room details two top end */}
//             <>
//                 {/* room details area */}
//                 <div className="rts__section section__padding">
//                     <div className="container">
//                         <div className="row g-5 sticky-wrap">
//                             <div className="col-lg-8">
//                                 <div className="room__details">
//                                     <h4 className="mb-30">Room Description</h4>
//                                     <div dangerouslySetInnerHTML={{ __html: singleRoom.details }} />
                                    
//                                     {singleRoom.video_link && (
//                                         <>
//                                             <h4 className="mb-40">Room Video</h4>
//                                             <div className="video__area mb-50 position-relative wow fadeInUp">
//                                                 <div className="video__area__image is__room__details jara-mask-2 jarallax">
//                                                     <img
//                                                         className="radius-10 jarallax-img"
//                                                         src="/assets/images/pages/video-bg.webp"
//                                                         alt=""
//                                                     />
//                                                 </div>
//                                                 <div className="video--spinner__wrapper">
//                                                     <div className="rts__circle">
//                                                         <svg className="spinner" viewBox="0 0 100 100">
//                                                             <defs>
//                                                                 <path
//                                                                     id="circle-2"
//                                                                     d="M50,50 m-37,0a37,37 0 1,1 74,0a37,37 0 1,1 -74,0"
//                                                                 />
//                                                             </defs>
//                                                             <text>
//                                                                 <textPath xlinkHref="#circle-2">
//                                                                     Watch Now * Watch Now * Watch Full Video *
//                                                                 </textPath>
//                                                             </text>
//                                                         </svg>
//                                                         <div className="rts__circle--icon">
//                                                             <a
//                                                                 href={singleRoom.video_link}
//                                                                 className="video-play"
//                                                             >
//                                                                 <i className="flaticon-play" />
//                                                             </a>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </>
//                                     )}
                                    
//                                     <span className="h4 d-block mb-30">Room Amenities</span>
//                                     <div className="room__amenity mb-50">
//                                         <div dangerouslySetInnerHTML={{ __html: singleRoom.amenities }} />
//                                         {/* Default amenities display if API doesn't provide enough detail */}
//                                         <div className="group__row if__room__details__two">
//                                             <div className="single__item">
//                                                 <img
//                                                     src="/assets/images/icon/wifi.svg"
//                                                     height={30}
//                                                     width={36}
//                                                     alt=""
//                                                 />
//                                                 <span>Free Wifi</span>
//                                             </div>
//                                             <div className="single__item">
//                                                 <img
//                                                     src="/assets/images/icon/shower.svg"
//                                                     height={30}
//                                                     width={36}
//                                                     alt=""
//                                                 />
//                                                 <span>Shower</span>
//                                             </div>
//                                         </div>
//                                     </div>
                                    
//                                     <span className="h4 d-block mb-50">Room Features</span>
//                                     <div className="room__feature mb-20">
//                                         <div className="room__image__group row row-cols-md-2 row-cols-sm-1 mt-30 mb-50 gap-4 gap-md-0">
//                                             {roomImages && roomImages.length >= 2 && (
//                                                 <>
//                                                     <div className="room__image__item">
//                                                         <img
//                                                             className="rounded-2"
//                                                             src={roomImages[0]}
//                                                             alt={singleRoom.title}
//                                                         />
//                                                     </div>
//                                                     <div className="room__image__item">
//                                                         <img
//                                                             className="rounded-2"
//                                                             src={roomImages[1]}
//                                                             alt={singleRoom.title}
//                                                         />
//                                                     </div>
//                                                 </>
//                                             )}
//                                         </div>
//                                         <div dangerouslySetInnerHTML={{ __html: singleRoom.features }} />
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-lg-4 sticky-item">
//                                 <div className="rts__booking__form has__background is__room__details sticky-item">
//                                     <form action="#" method="post" className="advance__search">
//                                         <h5 className="pt-0">Book Your Stay</h5>
//                                         <div className="advance__search__wrapper">
//                                             {/* single input */}
//                                             <div className="query__input wow fadeInUp">
//                                                 <label htmlFor="check__in" className="query__label">
//                                                     Check In
//                                                 </label>
//                                                 <div className="query__input__position">
//                                                     <input
//                                                         type="text"
//                                                         id="check__in"
//                                                         name="check__in"
//                                                         placeholder="15 Jun 2024"
//                                                         required=""
//                                                     />
//                                                     <div className="query__input__icon">
//                                                         <i className="flaticon-calendar" />
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             {/* single input end */}
//                                             {/* single input */}
//                                             <div className="query__input wow fadeInUp" data-wow-delay=".3s">
//                                                 <label htmlFor="check__out" className="query__label">
//                                                     Check Out
//                                                 </label>
//                                                 <div className="query__input__position">
//                                                     <input
//                                                         type="text"
//                                                         id="check__out"
//                                                         name="check__out"
//                                                         placeholder="15 May 2024"
//                                                         required=""
//                                                     />
//                                                     <div className="query__input__icon">
//                                                         <i className="flaticon-calendar" />
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             {/* single input end */}
//                                             {/* single input */}
//                                             <div className="query__input wow fadeInUp" data-wow-delay=".4s">
//                                                 <label htmlFor="adult" className="query__label">
//                                                     Adult
//                                                 </label>
//                                                 <div className="query__input__position">
//                                                     <select name="adult" id="adult" className="form-select">
//                                                         <option value={1}>1 Person</option>
//                                                         <option value={2}>2 Person</option>
//                                                         <option value={3}>3 Person</option>
//                                                         <option value={4}>4 Person</option>
//                                                         <option value={5}>5 Person</option>
//                                                         <option value={6}>6 Person</option>
//                                                         <option value={7}>7 Person</option>
//                                                     </select>
//                                                     <div className="query__input__icon">
//                                                         <i className="flaticon-user" />
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             {/* single input end */}
//                                             {/* single input */}
//                                             <div className="query__input wow fadeInUp" data-wow-delay=".5s">
//                                                 <label htmlFor="child" className="query__label">
//                                                     Child
//                                                 </label>
//                                                 <div className="query__input__position">
//                                                     <select name="child" id="child" className="form-select">
//                                                         <option value={1}>1 Child</option>
//                                                         <option value={2}>2 Child</option>
//                                                         <option value={3}>3 Child</option>
//                                                         <option value={4}>4 Child</option>
//                                                         <option value={5}>5 Child</option>
//                                                         <option value={6}>6 Child</option>
//                                                         <option value={7}>7 Child</option>
//                                                     </select>
//                                                     <div className="query__input__icon">
//                                                         <i className="flaticon-user" />
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             {/* single input end */}
//                                             {/* single input */}
//                                             <div className="query__input wow fadeInUp" data-wow-delay=".5s">
//                                                 <label htmlFor="room" className="query__label">
//                                                     Room
//                                                 </label>
//                                                 <div className="query__input__position">
//                                                     <select name="room" id="room" className="form-select">
//                                                         <option value={1}>1 Room</option>
//                                                         <option value={2}>2 Room</option>
//                                                         <option value={3}>3 Room</option>
//                                                         <option value={4}>4 Room</option>
//                                                         <option value={5}>5 Room</option>
//                                                     </select>
//                                                     <div className="query__input__icon is__svg">
//                                                         <img src="/assets/images/icon/room.svg" alt="" />
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             {/* single input end */}
//                                             {/* single input */}
//                                             <div className="query__input wow fadeInUp" data-wow-delay=".5s">
//                                                 <label htmlFor="exbed" className="query__label">
//                                                     Extra Bed
//                                                 </label>
//                                                 <div className="query__input__position">
//                                                     <select name="exbed" id="exbed" className="form-select">
//                                                         <option value={1}>1 Bed</option>
//                                                         <option value={2}>2 Bed</option>
//                                                         <option value={3}>3 Bed</option>
//                                                         <option value={4}>4 Bed</option>
//                                                     </select>
//                                                     <div className="query__input__icon is__svg">
//                                                         <img src="/assets/images/icon/bed-alt.svg" alt="" />
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             {/* single input end */}
//                                             <h5 className="p-0 mt-20">Extra Services</h5>
//                                             {/* checkbox item */}
//                                             <div className="query__input checkbox wow fadeInUp">
//                                                 <input type="checkbox" name="clean" id="clean" />
//                                                 <label htmlFor="clean">Room Clean</label>
//                                                 <span>$12 / Night</span>
//                                             </div>
//                                             {/* checkbox item end */}
//                                             {/* checkbox item */}
//                                             <div className="query__input checkbox wow fadeInUp">
//                                                 <input type="checkbox" name="parking" id="parking" />
//                                                 <label htmlFor="parking">Parking</label>
//                                                 <span>Free</span>
//                                             </div>
//                                             {/* checkbox item end */}
//                                             {/* checkbox item */}
//                                             <div className="query__input checkbox wow fadeInUp">
//                                                 <input type="checkbox" name="transport" id="transport" />
//                                                 <label htmlFor="transport">Airport transport</label>
//                                                 <span>$30 / Night</span>
//                                             </div>
//                                             {/* checkbox item end */}
//                                             {/* checkbox item */}
//                                             <div className="query__input checkbox wow fadeInUp">
//                                                 <input type="checkbox" name="pet" id="pet" />
//                                                 <label htmlFor="pet">Pet-Friendly</label>
//                                                 <span>$40 / Night</span>
//                                             </div>
//                                             {/* checkbox item end */}
//                                             {/* calculation */}
//                                             <div className="total__price">
//                                                 <span className="total h6 mb-0">Total Price</span>
//                                                 <span className="price h6 m-0">$82</span>
//                                             </div>
//                                             {/* calculation end */}
//                                             {/* submit button */}
//                                             <Link to='/cart'
//                                                 className="theme-btn btn-style fill no-border search__btn wow fadeInUp"
//                                                 data-wow-delay=".6s"
//                                             >
//                                                 <span>Book Your Room</span>
//                                             </Link>
//                                             {/* submit button end */}
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 {/* room details area end */}
//             </>
//         </>
//     )
// }

// export default RoomDetails2

// import React, { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { getRoomDetails } from '../../api/getRoomDetails';
// // import { getRoomById } from '../../api/getRoomById'; // Add this import
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';

// function RoomDetails2() {
//     const { id } = useParams();
//     const [singleRoom, setSingleRoom] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         // Make sure we have an ID before fetching
//         if (!id) {
//             console.error("Room ID is undefined");
//             setLoading(false);
//             return;
//         }

//         setLoading(true);
        
//         // Use getRoomById instead of getRoomDetails to get specific room data
//         getRoomDetails(id)
//             .then((data) => {
//                 if (data && data.singleRoom) {
//                     setSingleRoom(data.singleRoom);
//                     console.log("room details page ==============>", data.singleRoom )
//                 } else {
//                     console.error("Room data not found for ID:", id);
//                 }
//             })
//             .catch((err) => {
//                 console.error(`Error fetching room details for ID ${id}:`, err);
//             })
//             .finally(() => setLoading(false));
//     }, [id]); // Re-fetch if the ID changes

//     if (loading) {
//         return (
//             <div className="container py-5">
//                 <div className="row justify-content-center">
//                     <div className="col-lg-8">
//                         <Skeleton height={400} className="mb-4" />
//                         <Skeleton height={50} className="mb-3" />
//                         <Skeleton height={30} className="mb-4" />
//                         <Skeleton height={200} className="mb-4" count={3} />
//                     </div>
//                 </div>
//             </div>
//         );
//     }

//     if (!singleRoom) {
//         return (
//             <div className="container py-5 text-center">
//                 <h3>Room not found!</h3>
//                 <p>The room with ID {id} could not be found.</p>
//                 <Link to="/rooms" className="theme-btn btn-style fill mt-4">
//                     <span>Back to Rooms</span>
//                 </Link>
//             </div>
//         );
//     }

//     // Parse JSON strings if needed
//     const roomImages = typeof singleRoom.images === 'string' 
//         ? JSON.parse(singleRoom.images) 
//         : (Array.isArray(singleRoom.images) ? singleRoom.images : []);
    
//     return (
//         <>
//             <div className="rts__section single page__hero__height page__hero__bg no__shadow">
//                 <img 
//                     src={singleRoom.banner_image || singleRoom.thumbnail || '/assets/images/placeholder-room.webp'} 
//                     alt={singleRoom.title} 
//                 />
//             </div>
//             {/* Room details two top */}
//             <div className="rts__section">
//                 <div className="container">
//                     <div className="row justify-content-center">
//                         <div className="col-lg-8">
//                             <div className="room__details__top">
//                                 <span className="h2 price">${singleRoom.price || 'Price on request'}</span>
//                                 <h1>{singleRoom.title}</h1>
//                                 <div className="room__meta">
//                                     <span>
//                                         <i className="flaticon-construction" />
//                                         {singleRoom.size} ft
//                                     </span>
//                                     <span>
//                                         <i className="flaticon-user" />{singleRoom.person_allow} Person
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* Room details two top end */}
//             <>
//                 {/* Room details area */}
//                 <div className="rts__section section__padding">
//                     <div className="container">
//                         <div className="row g-5 sticky-wrap">
//                             <div className="col-lg-8">
//                                 <div className="room__details">
//                                     <h4 className="mb-30">Room Description</h4>
//                                     <div dangerouslySetInnerHTML={{ __html: singleRoom.details }} />
                                    
//                                     {singleRoom.video_link && (
//                                         <>
//                                             <h4 className="mb-40">Room Video</h4>
//                                             <div className="video__area mb-50 position-relative wow fadeInUp">
//                                                 <div className="video__area__image is__room__details jara-mask-2 jarallax">
//                                                     <img
//                                                         className="radius-10 jarallax-img"
//                                                         src="/assets/images/pages/video-bg.webp"
//                                                         alt=""
//                                                     />
//                                                 </div>
//                                                 <div className="video--spinner__wrapper">
//                                                     <div className="rts__circle">
//                                                         <svg className="spinner" viewBox="0 0 100 100">
//                                                             <defs>
//                                                                 <path
//                                                                     id="circle-2"
//                                                                     d="M50,50 m-37,0a37,37 0 1,1 74,0a37,37 0 1,1 -74,0"
//                                                                 />
//                                                             </defs>
//                                                             <text>
//                                                                 <textPath xlinkHref="#circle-2">
//                                                                     Watch Now * Watch Now * Watch Full Video *
//                                                                 </textPath>
//                                                             </text>
//                                                         </svg>
//                                                         <div className="rts__circle--icon">
//                                                             <a
//                                                                 href={singleRoom.video_link}
//                                                                 className="video-play"
//                                                             >
//                                                                 <i className="flaticon-play" />
//                                                             </a>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </>
//                                     )}
                                    
//                                     <span className="h4 d-block mb-30">Room Amenities</span>
//                                     <div className="room__amenity mb-50">
//                                         {singleRoom.amenities ? (
//                                             <div dangerouslySetInnerHTML={{ __html: singleRoom.amenities }} />
//                                         ) : (
//                                             // Default amenities display if API doesn't provide data
//                                             <div className="group__row if__room__details__two">
//                                                 <div className="single__item">
//                                                     <img
//                                                         src="/assets/images/icon/wifi.svg"
//                                                         height={30}
//                                                         width={36}
//                                                         alt=""
//                                                     />
//                                                     <span>Free Wifi</span>
//                                                 </div>
//                                                 <div className="single__item">
//                                                     <img
//                                                         src="/assets/images/icon/shower.svg"
//                                                         height={30}
//                                                         width={36}
//                                                         alt=""
//                                                     />
//                                                     <span>Shower</span>
//                                                 </div>
//                                             </div>
//                                         )}
//                                     </div>
                                    
//                                     <span className="h4 d-block mb-50">Room Features</span>
//                                     <div className="room__feature mb-20">
//                                         <div className="room__image__group row row-cols-md-2 row-cols-sm-1 mt-30 mb-50 gap-4 gap-md-0">
//                                             {roomImages && roomImages.length >= 2 ? (
//                                                 <>
//                                                     <div className="room__image__item">
//                                                         <img
//                                                             className="rounded-2"
//                                                             src={roomImages[0]}
//                                                             alt={singleRoom.title}
//                                                         />
//                                                     </div>
//                                                     <div className="room__image__item">
//                                                         <img
//                                                             className="rounded-2"
//                                                             src={roomImages[1]}
//                                                             alt={singleRoom.title}
//                                                         />
//                                                     </div>
//                                                 </>
//                                             ) : (
//                                                 // Fallback if no room images are available
//                                                 <div className="col-12 text-center">
//                                                     <img
//                                                         className="rounded-2"
//                                                         src={singleRoom.thumbnail || '/assets/images/placeholder-room.webp'}
//                                                         alt={singleRoom.title}
//                                                     />
//                                                 </div>
//                                             )}
//                                         </div>
//                                         {singleRoom.features && (
//                                             <div dangerouslySetInnerHTML={{ __html: singleRoom.features }} />
//                                         )}
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-lg-4 sticky-item">
//                                 <div className="rts__booking__form has__background is__room__details sticky-item">
//                                     <form action="#" method="post" className="advance__search">
//                                         <h5 className="pt-0">Book Your Stay</h5>
//                                         <div className="advance__search__wrapper">
//                                             {/* single input */}
//                                             <div className="query__input wow fadeInUp">
//                                                 <label htmlFor="check__in" className="query__label">
//                                                     Check In
//                                                 </label>
//                                                 <div className="query__input__position">
//                                                     <input
//                                                         type="text"
//                                                         id="check__in"
//                                                         name="check__in"
//                                                         placeholder="15 Jun 2024"
//                                                         required=""
//                                                     />
//                                                     <div className="query__input__icon">
//                                                         <i className="flaticon-calendar" />
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             {/* single input end */}
//                                             {/* single input */}
//                                             <div className="query__input wow fadeInUp" data-wow-delay=".3s">
//                                                 <label htmlFor="check__out" className="query__label">
//                                                     Check Out
//                                                 </label>
//                                                 <div className="query__input__position">
//                                                     <input
//                                                         type="text"
//                                                         id="check__out"
//                                                         name="check__out"
//                                                         placeholder="15 May 2024"
//                                                         required=""
//                                                     />
//                                                     <div className="query__input__icon">
//                                                         <i className="flaticon-calendar" />
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             {/* single input end */}
//                                             {/* single input */}
//                                             <div className="query__input wow fadeInUp" data-wow-delay=".4s">
//                                                 <label htmlFor="adult" className="query__label">
//                                                     Adult
//                                                 </label>
//                                                 <div className="query__input__position">
//                                                     <select name="adult" id="adult" className="form-select">
//                                                         <option value={1}>1 Person</option>
//                                                         <option value={2}>2 Person</option>
//                                                         <option value={3}>3 Person</option>
//                                                         <option value={4}>4 Person</option>
//                                                         <option value={5}>5 Person</option>
//                                                         <option value={6}>6 Person</option>
//                                                         <option value={7}>7 Person</option>
//                                                     </select>
//                                                     <div className="query__input__icon">
//                                                         <i className="flaticon-user" />
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             {/* single input end */}
//                                             {/* single input */}
//                                             <div className="query__input wow fadeInUp" data-wow-delay=".5s">
//                                                 <label htmlFor="child" className="query__label">
//                                                     Child
//                                                 </label>
//                                                 <div className="query__input__position">
//                                                     <select name="child" id="child" className="form-select">
//                                                         <option value={1}>1 Child</option>
//                                                         <option value={2}>2 Child</option>
//                                                         <option value={3}>3 Child</option>
//                                                         <option value={4}>4 Child</option>
//                                                         <option value={5}>5 Child</option>
//                                                         <option value={6}>6 Child</option>
//                                                         <option value={7}>7 Child</option>
//                                                     </select>
//                                                     <div className="query__input__icon">
//                                                         <i className="flaticon-user" />
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             {/* single input end */}
//                                             {/* single input */}
//                                             <div className="query__input wow fadeInUp" data-wow-delay=".5s">
//                                                 <label htmlFor="room" className="query__label">
//                                                     Room
//                                                 </label>
//                                                 <div className="query__input__position">
//                                                     <select name="room" id="room" className="form-select">
//                                                         <option value={1}>1 Room</option>
//                                                         <option value={2}>2 Room</option>
//                                                         <option value={3}>3 Room</option>
//                                                         <option value={4}>4 Room</option>
//                                                         <option value={5}>5 Room</option>
//                                                     </select>
//                                                     <div className="query__input__icon is__svg">
//                                                         <img src="/assets/images/icon/room.svg" alt="" />
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             {/* single input end */}
//                                             {/* single input */}
//                                             <div className="query__input wow fadeInUp" data-wow-delay=".5s">
//                                                 <label htmlFor="exbed" className="query__label">
//                                                     Extra Bed
//                                                 </label>
//                                                 <div className="query__input__position">
//                                                     <select name="exbed" id="exbed" className="form-select">
//                                                         <option value={1}>1 Bed</option>
//                                                         <option value={2}>2 Bed</option>
//                                                         <option value={3}>3 Bed</option>
//                                                         <option value={4}>4 Bed</option>
//                                                     </select>
//                                                     <div className="query__input__icon is__svg">
//                                                         <img src="/assets/images/icon/bed-alt.svg" alt="" />
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             {/* single input end */}
//                                             <h5 className="p-0 mt-20">Extra Services</h5>
//                                             {/* checkbox item */}
//                                             <div className="query__input checkbox wow fadeInUp">
//                                                 <input type="checkbox" name="clean" id="clean" />
//                                                 <label htmlFor="clean">Room Clean</label>
//                                                 <span>$12 / Night</span>
//                                             </div>
//                                             {/* checkbox item end */}
//                                             {/* checkbox item */}
//                                             <div className="query__input checkbox wow fadeInUp">
//                                                 <input type="checkbox" name="parking" id="parking" />
//                                                 <label htmlFor="parking">Parking</label>
//                                                 <span>Free</span>
//                                             </div>
//                                             {/* checkbox item end */}
//                                             {/* checkbox item */}
//                                             <div className="query__input checkbox wow fadeInUp">
//                                                 <input type="checkbox" name="transport" id="transport" />
//                                                 <label htmlFor="transport">Airport transport</label>
//                                                 <span>$30 / Night</span>
//                                             </div>
//                                             {/* checkbox item end */}
//                                             {/* checkbox item */}
//                                             <div className="query__input checkbox wow fadeInUp">
//                                                 <input type="checkbox" name="pet" id="pet" />
//                                                 <label htmlFor="pet">Pet-Friendly</label>
//                                                 <span>$40 / Night</span>
//                                             </div>
//                                             {/* checkbox item end */}
//                                             {/* calculation */}
//                                             <div className="total__price">
//                                                 <span className="total h6 mb-0">Total Price</span>
//                                                 <span className="price h6 m-0">${singleRoom.price || 0}</span>
//                                             </div>
//                                             {/* calculation end */}
//                                             {/* submit button */}
//                                             <Link to={`/cart?roomId=${id}`}
//                                                 className="theme-btn btn-style fill no-border search__btn wow fadeInUp"
//                                                 data-wow-delay=".6s"
//                                             >
//                                                 <span>Book Your Room</span>
//                                             </Link>
//                                             {/* submit button end */}
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 {/* room details area end */}
//             </>
//         </>
//     )
// }

// export default RoomDetails2


// RoomDetails.jsx

 import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Posts from '../data/data-room.json';
// import { getRoomDetails } from '../../api/getRoomDetails';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useLocation, useParams } from 'react-router-dom';

function RoomDetails() {
    const location = useLocation();
    const { roomData } = location.state || {}; // get data from state
    const { slug } = useParams(); // fallback: get ID from URL

    if (!roomData) {
        return <div>No room data found. Please go back and try again.</div>;
    }

    const {
  banner_image,
  title,
  person_allow,
  size,
  price,
  details,
  features,
  amenities,
  video_link,
  images,
//   category,
} = roomData;

 


    return (
        
  <>
            <div className="rts__section single page__hero__height page__hero__bg no__shadow" >
                {/* <img src={`/assets/images/pages/room/${bannerImg}`} alt="" /> */}
                 <img src={banner_image} alt={title} />
            </div>
            {/* room details two top */}
            <div className="rts__section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="room__details__top">
                                {/* <span className="h2 price">₹{price}</span> */}
                                <h1>{title}</h1>
                                <div className="room__meta">
                                    <span>
                                        <i className="flaticon-construction" />
                                        {size} sq ft
                                    </span>
                                    <span>
                                        <i className="flaticon-user" />{person_allow}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* room details two top end */}
            <>
                {/* room details area */}
                <div className="rts__section section__padding">
                    <div className="container">
                        <div className="row g-5 sticky-wrap">
                            <div className="col-lg-8">
                                <div className="room__details">
                                    <h4 className="mb-30">Room Description</h4>
                                    {/* <p>
                                        Our elegantly appointed rooms and suites are designed to offer the
                                        utmost in comfort and style. Each room features modern amenities,
                                        plush furnishings, and thoughtful touches to ensure a relaxing
                                        stay.
                                        <br /> <br />
                                        Indulge in a culinary journey at our on-site restaurants, where
                                        our talented chefs create mouthwatering dishes using the freshest
                                        local ingredients. Start your day with a sumptuous breakfast,
                                        enjoy a leisurely lunch, and savor a gourmet dinner in an elegant
                                        setting.
                                    </p> */}
                                    {/* <p > </p> */}
                                    <div dangerouslySetInnerHTML={{ __html: details }} />

                                    <h4 className="mb-40">Room Video</h4>
                                    <div className="video__area mb-50 position-relative wow fadeInUp">
                                        <div className="video__area__image is__room__details jara-mask-2 jarallax">
                                            <img
                                                className="radius-10 jarallax-img"
                                                src="/assets/images/pages/video-bg.webp"
                                                alt=""
                                            />
                                        </div>
                                        <div className="video--spinner__wrapper ">
                                            <div className="rts__circle">
                                                <svg className="spinner" viewBox="0 0 100 100">
                                                    <defs>
                                                        <path
                                                            id="circle-2"
                                                            d="M50,50 m-37,0a37,37 0 1,1 74,0a37,37 0 1,1 -74,0"
                                                        />
                                                    </defs>
                                                    <text>
                                                        <textPath xlinkHref="#circle-2">
                                                            Watch Now * Watch Now * Watch Full Video *
                                                        </textPath>
                                                    </text>
                                                </svg>
                                                <div className="rts__circle--icon">
                                                    <a
                                                        href={video_link}
                                                        className="video-play"
                                                    >
                                                        <i className="flaticon-play" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="h4 d-block mb-30">Room Amenities</span>
                                    <div className="room__amenity mb-50">
                                        <div className="group__row if__room__details__two">
                                            {/* <div className="single__item"> */}
                                               <div className="single__item" dangerouslySetInnerHTML={{ __html: amenities }} />

                                            {/* </div> */}
                                        </div>
                                    </div>
                                    {/* <span className="h4 d-block mb-50">Room Features</span>
                                    <div className="room__feature mb-20">
                                        <div className="room__image__group row row-cols-md-2 row-cols-sm-1 mt-30 mb-50 gap-4 gap-md-0">
                                            <div className="room__image__item">
                                                <img
                                                    className="rounded-2"
                                                    src="/assets/images/pages/room/r-d-1.webp"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="room__image__item">
                                                <img
                                                    className="rounded-2"
                                                    src="/assets/images/pages/room/r-d-2.webp"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div className="group__row is__room__details">
                                            <ul className="list__item">
                                                <li>Children and extra beds</li>
                                                <li>Climate Control</li>
                                            </ul>
                                            <ul className="list__item">
                                                <li>Art and Decor</li>
                                                <li>Coffee/Tea Maker</li>
                                            </ul>
                                            <ul className="list__item">
                                                <li>High-End Bedding</li>
                                                <li>Smart Technology</li>
                                            </ul>
                                        </div>
                                    </div> */}


                                    {/* <p>
                                        Our elegantly appointed rooms and suites are designed to offer the
                                        utmost in comfort and style. Each room features modern amenities,
                                        plush furnishings, and thoughtful touches to ensure a relaxing
                                        stay.
                                    </p> */}

                                     <span className="h4 d-block mb-50">Room Features</span>
                                    <div className="room__feature mb-20">
                                        <div className="room__image__group row row-cols-md-2 row-cols-sm-1 mt-30 mb-50 gap-4 gap-md-0">
                                            <div className="room__image__item">
                                                <img
                                                    className="rounded-2"
                                                    src={images}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="room__image__item">
                                                <img
                                                    className="rounded-2"
                                                    src={images}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div className="group__row is__room__details">
                                            {/* <ul className="list__item"> */}
                                               <div className="list__item" dangerouslySetInnerHTML={{ __html: features }} />
                                            {/* </ul> */}
                                        </div>
                                    </div>
                                </div>
                            </div>






                            <div className="col-lg-4 sticky-item">
                                <div className="rts__booking__form has__background is__room__details sticky-item">
                                    <form action="#" method="post" className="advance__search">
                                        <h5 className="pt-0" style={{fontWeight: 'bold'}}>Book Your Stay</h5>
                                        <div className="advance__search__wrapper">
                                            {/* single input */}
                                            <div className="query__input wow fadeInUp">
                                                <label htmlFor="check__in" className="query__label">
                                                    Check In
                                                </label>
                                                <div className="query__input__position">
                                                    <input
                                                        type="text"
                                                        id="check__in"
                                                        name="check__in"
                                                        placeholder="15 Jun 2024"
                                                        required=""
                                                    />
                                                    <div className="query__input__icon">
                                                        <i className="flaticon-calendar" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* single input end */}
                                            {/* single input */}
                                            <div className="query__input wow fadeInUp" data-wow-delay=".3s">
                                                <label htmlFor="check__out" className="query__label">
                                                    Check Out
                                                </label>
                                                <div className="query__input__position">
                                                    <input
                                                        type="text"
                                                        id="check__out"
                                                        name="check__out"
                                                        placeholder="15 May 2024"
                                                        required=""
                                                    />
                                                    <div className="query__input__icon">
                                                        <i className="flaticon-calendar" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* single input end */}
                                            {/* single input */}
                                            <div className="query__input wow fadeInUp" data-wow-delay=".4s">
                                                <label htmlFor="adult" className="query__label">
                                                    Adult
                                                </label>
                                                <div className="query__input__position">
                                                    <select name="adult" id="adult" className="form-select">
                                                        <option value={1}>1 Person</option>
                                                        <option value={2}>2 Person</option>
                                                        <option value={3}>3 Person</option>
                                                        <option value={4}>4 Person</option>
                                                        <option value={5}>5 Person</option>
                                                        <option value={6}>6 Person</option>
                                                        <option value={7}>7 Person</option>
                                                    </select>
                                                    <div className="query__input__icon">
                                                        <i className="flaticon-user" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* single input end */}
                                            {/* single input */}
                                            <div className="query__input wow fadeInUp" data-wow-delay=".5s">
                                                <label htmlFor="child" className="query__label">
                                                    Child
                                                </label>
                                                <div className="query__input__position">
                                                    <select name="child" id="child" className="form-select">
                                                        <option value={1}>1 Child</option>
                                                        <option value={2}>2 Child</option>
                                                        <option value={3}>3 Child</option>
                                                        <option value={4}>4 Child</option>
                                                        <option value={5}>5 Child</option>
                                                        <option value={6}>6 Child</option>
                                                        <option value={7}>7 Child</option>
                                                    </select>
                                                    <div className="query__input__icon">
                                                        <i className="flaticon-user" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* single input end */}
                                            {/* single input */}
                                            <div className="query__input wow fadeInUp" data-wow-delay=".5s">
                                                <label htmlFor="room" className="query__label">
                                                    Room
                                                </label>
                                                <div className="query__input__position">
                                                    <select name="room" id="room" className="form-select">
                                                        <option value={1}>1 Room</option>
                                                        <option value={2}>2 Room</option>
                                                        <option value={3}>3 Room</option>
                                                        <option value={4}>4 Room</option>
                                                        <option value={5}>5 Room</option>
                                                    </select>
                                                    <div className="query__input__icon is__svg">
                                                        <img src="/assets/images/icon/room.svg" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* single input end */}
                                            {/* single input */}
                                            <div className="query__input wow fadeInUp" data-wow-delay=".5s">
                                                <label htmlFor="exbed" className="query__label">
                                                    Extra Bed
                                                </label>
                                                <div className="query__input__position">
                                                    <select name="exbed" id="exbed" className="form-select">
                                                        <option value={1}>1 Bed</option>
                                                        <option value={2}>2 Bed</option>
                                                        <option value={3}>3 Bed</option>
                                                        <option value={4}>4 Bed</option>
                                                    </select>
                                                    <div className="query__input__icon is__svg">
                                                        <img src="/assets/images/icon/bed-alt.svg" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* single input end */}
                                            {/* <h5 className="p-0 mt-20">Extra Services</h5>
                                             
                                            <div className="query__input checkbox wow fadeInUp">
                                                <input type="checkbox" name="clean" id="clean" />
                                                <label htmlFor="clean">Room Clean</label>
                                                <span>$12 / Night</span>
                                            </div>
                                             
                                            <div className="query__input checkbox wow fadeInUp">
                                                <input type="checkbox" name="parking" id="parking" />
                                                <label htmlFor="parking">Parking</label>
                                                <span>Free</span>
                                            </div>
                                            
                                            <div className="query__input checkbox wow fadeInUp">
                                                <input type="checkbox" name="transport" id="transport" />
                                                <label htmlFor="transport">Airport transport</label>
                                                <span>$30 / Night</span>
                                            </div>
                                             
                                            <div className="query__input checkbox wow fadeInUp">
                                                <input type="checkbox" name="pet" id="pet" />
                                                <label htmlFor="pet">Pet-Friendly</label>
                                                <span>$40 / Night</span>
                                            </div>
                                             
                                            <div className="total__price">
                                                <span className="total h6 mb-0">Total Price</span>
                                                <span className="price h6 m-0">$82</span>
                                            </div> */}
                                            
                                            <Link to='https://www.asiatech.in/booking_engine/index3.php?token=MTY='
                                                className="theme-btn btn-style fill no-border search__btn wow fadeInUp"
                                                data-wow-delay=".6s"
                                            >
                                                <span>Book Your Room</span>
                                            </Link>
                                            {/* submit button end */}
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* room details area end */}
            </>

        </>
    );
}

export default RoomDetails;
