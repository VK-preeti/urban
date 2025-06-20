//  import React, { useEffect, useState, lazy, Suspense } from 'react';
// import { useParams, useLocation } from 'react-router-dom';
// import axios from 'axios';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
// import { getRoomDetailsSimilar } from '../../api/getRoomDetailsSimilar';

// // Lazy load the SimilarRoom component
// const SimilarRoom = lazy(() => import('./SimilarRoom'));

// // Loading placeholders
// const ImageSkeleton = () => <Skeleton height={400} />;
// const ContentSkeleton = () => (
//   <>
//     <Skeleton height={50} width={200} />
//     <Skeleton height={30} count={2} />
//     <Skeleton height={200} />
//     <Skeleton height={30} count={3} />
//   </>
// );

// const RoomDetailsSimilar = () => {
//     const { slug } = useParams();
//     const location = useLocation();
//     const [roomData, setRoomData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [imagesLoaded, setImagesLoaded] = useState({});

    
//   // In your component
// useEffect(() => {
//     setLoading(true);
//     // Use the slug from params or from location state
//     const roomSlug = slug || (location.state && location.state.roomSlug);
    
//     if (!roomSlug) {
//         setError('Room ID not found');
//         setLoading(false);
//         return;
//     }
    
//     // Call API function with the slug parameter
//     getRoomDetailsSimilar(roomSlug)
//         .then((data) => {
//             if (data && data.singleRoom) {
//                 setRoomData(data.singleRoom);
//             } else {
//                 setError('Room not found');
//             }
//         })
//         .catch((err) => {
//             console.error('Error fetching room details:', err);
//             setError('Failed to load room details');
//         })
//         .finally(() => setLoading(false));
    
//     // Scroll to top when component mounts
//     window.scrollTo(0, 0);
// }, [slug, location.state]);

//     // Function to parse JSON strings
//     const parseJsonIfString = (data) => {
//         if (typeof data === 'string') {
//             try {
//                 return JSON.parse(data);
//             } catch (e) {
//                 return data;
//             }
//         }
//         return data;
//     };

//     // Track image loading
//     const handleImageLoad = (imageId) => {
//         setImagesLoaded(prev => ({
//             ...prev,
//             [imageId]: true
//         }));
//     };

//     if (loading) {
//         return (
//             <div className="loading-container py-5">
//                 <ContentSkeleton />
//             </div>
//         );
//     }

//     if (error || !roomData) {
//         return (
//             <div className="error-container text-center py-5">
//                 <div className="alert alert-danger" role="alert">
//                     {error || 'Room not found'}
//                 </div>
//             </div>
//         );
//     }

//     // Parse images if they're stored as a JSON string
//     const images = parseJsonIfString(roomData.images);
//     const roomImages = Array.isArray(images) ? images : [roomData.banner_image];
//     let imageArray = [];
//     try {
//         imageArray = JSON.parse(roomData.images);
//     } catch (e) {
//         console.error("Invalid image JSON", e);
//     }

//     const handleImageError = (key) => {
//         setImagesLoaded(prev => ({ ...prev, [key]: true }));
//         const fallback = "../../../public/assets/images/th.jpeg";
//         const imageEl = document.querySelector(`img[data-key="${key}"]`);
//         if (imageEl) imageEl.src = fallback;
//         };


//     return (
//         <>
//             <div className="rts__section single page__hero__height page__hero__bg no__shadow">
//                 {!imagesLoaded.banner && <ImageSkeleton />}
//                 <img 
//                     src={roomData.banner_image} 
//                     alt={roomData.title} 
//                     style={!imagesLoaded.banner ? { display: 'none' } : {}} 
//                     onLoad={() => handleImageLoad('banner')}
//                     loading="lazy"
//                 />
//             </div>
            
//             {/* room details two top */}
//             <div className="rts__section">
//                 <div className="container">
//                     <div className="row justify-content-center">
//                         <div className="col-lg-8">
//                             <div className="room__details__top">
//                                 {/* <span className="h2 price">₹{roomData.price}</span> */}
//                                 <h1>{roomData.title}</h1>
//                                 <div className="room__meta">
//                                     <span>
//                                         <i className="flaticon-construction" />
//                                         {roomData.size} ft
//                                     </span>
//                                     <span>
//                                         <i className="flaticon-user" />{roomData.person_allow}
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
            
//             {/* room details area */}
//             <div className="rts__section section__padding">
//                 <div className="container">
//                     <div className="row g-5 sticky-wrap">
//                         <div className="col-lg-8">
//                             <div className="room__details">
//                                 <h4 className="mb-30">Room Description</h4>
//                                 <div dangerouslySetInnerHTML={{ __html: roomData.details }} />

//                                 <h4 className="mb-40">Room Video</h4>
//                                 <div className="video__area mb-50 position-relative wow fadeInUp">
//                                     <div className="video__area__image is__room__details jarallax">
//                                         {!imagesLoaded.video && <ImageSkeleton />}
//                                         <img
//                                             className="radius-10 jarallax-img"
//                                             src="/assets/images/pages/video-bg.webp"
//                                             alt="Video Background"
//                                             loading="lazy"
//                                             style={!imagesLoaded.video ? { display: 'none' } : {}}
//                                             onLoad={() => handleImageLoad('video')}
//                                         />
//                                     </div>
//                                     <div className="video--spinner__wrapper">
//                                         <div className="rts__circle">
//                                             <svg className="spinner" viewBox="0 0 100 100">
//                                                 <defs>
//                                                     <path
//                                                         id="circle-2"
//                                                         d="M50,50 m-37,0a37,37 0 1,1 74,0a37,37 0 1,1 -74,0"
//                                                     />
//                                                 </defs>
//                                                 <text>
//                                                     <textPath xlinkHref="#circle-2">
//                                                         Watch Now * Watch Now * Watch Full Video *
//                                                     </textPath>
//                                                 </text>
//                                             </svg>
//                                             <div className="rts__circle--icon">
//                                                 <a
//                                                     href={roomData.video_link}
//                                                     className="video-play"
//                                                 >
//                                                     <i className="flaticon-play" />
//                                                 </a>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
                                
//                                 <span className="h4 d-block mb-30">Room Amenities</span>
//                                 <div className="room__amenity mb-50">
//                                     {/* <div className="group__row if__room__details__two"> */}
//                                         <div className="single__item" dangerouslySetInnerHTML={{ __html: roomData.amenities }} />
//                                     {/* </div> */}
//                                 </div>
                                
//                                 <span className="h4 d-block mb-50">Room Features</span>
//                                 <div className="room__feature mb-20">
//                                     <div className="room__image__group row row-cols-md-2 row-cols-sm-1 mt-30 mb-50 gap-4 gap-md-0">
                                         

//             <div className="room__image__item">
//                                     {!imagesLoaded.feature1 && <ImageSkeleton />}
//                                     {imageArray[0] && (
//                                         <img
//                                         className="rounded-2"
//                                         src={imageArray[0]}
//                                         alt="Room Feature 1"
//                                         loading="lazy"
//                                         style={{ display: imagesLoaded.feature1 ? 'block' : 'none' }}
//                                         onLoad={() => handleImageLoad('feature1')}
//                                         onError={() => handleImageError('feature1')}
//                                         />
//                                     )}
//                                     </div>

//                                     <div className="room__image__item">
//                                     {!imagesLoaded.feature2 && <ImageSkeleton />}
//                                     {imageArray[1] && (
//                                         <img
//                                         className="rounded-2"
//                                         src={imageArray[1]}
//                                         alt="Room Feature 2"
//                                         loading="lazy"
//                                         style={{ display: imagesLoaded.feature2 ? 'block' : 'none' }}
//                                         onLoad={() => handleImageLoad('feature2')}
//                                         onError={() => handleImageError('feature2')}
//                                         />
//                                     )}
//                                     </div>

//                                     </div>
//                                     {/* <div className="group__row is__room__details"> */}
//                                         <div className="list__item" dangerouslySetInnerHTML={{ __html: roomData.features }} />
//                                     {/* </div> */}
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="col-lg-4 sticky-item">
//                             <div className="rts__booking__form has__background is__room__details sticky-item">
//                                 <form action="#" method="post" className="advance__search">
//                                     <h5 className="pt-0">Book Your Stay</h5>
//                                     <div className="advance__search__wrapper">
//                                         {/* single input */}
//                                         <div className="query__input wow fadeInUp">
//                                             <label htmlFor="check__in" className="query__label">
//                                                 Check In
//                                             </label>
//                                             <div className="query__input__position">
//                                                 <input
//                                                     type="text"
//                                                     id="check__in"
//                                                     name="check__in"
//                                                     placeholder="15 Jun 2024"
//                                                     required=""
//                                                 />
//                                                 <div className="query__input__icon">
//                                                     <i className="flaticon-calendar" />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         {/* single input end */}
//                                         {/* single input */}
//                                         <div className="query__input wow fadeInUp" data-wow-delay=".3s">
//                                             <label htmlFor="check__out" className="query__label">
//                                                 Check Out
//                                             </label>
//                                             <div className="query__input__position">
//                                                 <input
//                                                     type="text"
//                                                     id="check__out"
//                                                     name="check__out"
//                                                     placeholder="15 May 2024"
//                                                     required=""
//                                                 />
//                                                 <div className="query__input__icon">
//                                                     <i className="flaticon-calendar" />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         {/* Rest of the booking form inputs */}
//                                         {/* ... (Other form inputs) */}
//                                         <div className="query__input wow fadeInUp" data-wow-delay=".4s">
//                                             <label htmlFor="adult" className="query__label">
//                                                 Adult
//                                             </label>
//                                             <div className="query__input__position">
//                                                 <select name="adult" id="adult" className="form-select">
//                                                     <option value={1}>1 Person</option>
//                                                     <option value={2}>2 Person</option>
//                                                     <option value={3}>3 Person</option>
//                                                     <option value={4}>4 Person</option>
//                                                     <option value={5}>5 Person</option>
//                                                     <option value={6}>6 Person</option>
//                                                     <option value={7}>7 Person</option>
//                                                 </select>
//                                                 <div className="query__input__icon">
//                                                     <i className="flaticon-user" />
//                                                 </div>
//                                             </div>
//                                         </div>
                                        
//                                         <div className="query__input wow fadeInUp" data-wow-delay=".5s">
//                                             <label htmlFor="child" className="query__label">
//                                                 Child
//                                             </label>
//                                             <div className="query__input__position">
//                                                 <select name="child" id="child" className="form-select">
//                                                     <option value={1}>1 Child</option>
//                                                     <option value={2}>2 Child</option>
//                                                     <option value={3}>3 Child</option>
//                                                     <option value={4}>4 Child</option>
//                                                     <option value={5}>5 Child</option>
//                                                     <option value={6}>6 Child</option>
//                                                     <option value={7}>7 Child</option>
//                                                 </select>
//                                                 <div className="query__input__icon">
//                                                     <i className="flaticon-user" />
//                                                 </div>
//                                             </div>
//                                         </div>
                                        
//                                         <div className="query__input wow fadeInUp" data-wow-delay=".5s">
//                                             <label htmlFor="room" className="query__label">
//                                                 Room
//                                             </label>
//                                             <div className="query__input__position">
//                                                 <select name="room" id="room" className="form-select">
//                                                     <option value={1}>1 Room</option>
//                                                     <option value={2}>2 Room</option>
//                                                     <option value={3}>3 Room</option>
//                                                     <option value={4}>4 Room</option>
//                                                     <option value={5}>5 Room</option>
//                                                 </select>
//                                                 <div className="query__input__icon is__svg">
//                                                     <img src="/assets/images/icon/room.svg" alt="" loading="lazy" />
//                                                 </div>
//                                             </div>
//                                         </div>
                                        
//                                         <div className="query__input wow fadeInUp" data-wow-delay=".5s">
//                                             <label htmlFor="exbed" className="query__label">
//                                                 Extra Bed
//                                             </label>
//                                             <div className="query__input__position">
//                                                 <select name="exbed" id="exbed" className="form-select">
//                                                     <option value={1}>1 Bed</option>
//                                                     <option value={2}>2 Bed</option>
//                                                     <option value={3}>3 Bed</option>
//                                                     <option value={4}>4 Bed</option>
//                                                 </select>
//                                                 <div className="query__input__icon is__svg">
//                                                     <img src="/assets/images/icon/bed-alt.svg" alt="" loading="lazy" />
//                                                 </div>
//                                             </div>
//                                         </div>
                                        
                                        
                                        
//                                         <a href="https://www.asiatech.in/booking_engine/index3.php?token=MTY="
//                                             className="theme-btn btn-style fill no-border search__btn wow fadeInUp"
//                                             data-wow-delay=".6s"
//                                         >
//                                             <span>Book Your Room</span>
//                                         </a>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
            
//             {/* Lazy load the SimilarRoom component */}
//             <Suspense fallback={<div className="py-5"><ContentSkeleton /></div>}>
//                 <SimilarRoom />
//             </Suspense>
//         </>
//     );
// };

// export default RoomDetailsSimilar;

 

// import React, { useEffect, useState, lazy, Suspense } from 'react';
// import { useParams, useLocation } from 'react-router-dom';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
// import { getRoomDetailsSimilar } from '../../api/getRoomDetailsSimilar';

// // Lazy load the SimilarRoom component
// const SimilarRoom = lazy(() => import('./SimilarRoom'));

// // Loading placeholders
// const ImageSkeleton = () => <Skeleton height={400} />;
// const ContentSkeleton = () => (
//   <>
//     <Skeleton height={50} width={200} />
//     <Skeleton height={30} count={2} />
//     <Skeleton height={200} />
//     <Skeleton height={30} count={3} />
//   </>
// );

// const RoomDetailsSimilar = () => {
//     const { slug } = useParams();
//     const location = useLocation();
//     const [roomData, setRoomData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [imagesLoaded, setImagesLoaded] = useState({});
//     const [imageArray, setImageArray] = useState([]);
    
//     useEffect(() => {
//         setLoading(true);
//         // Use the slug from params or from location state
//         const roomSlug = slug || (location.state && location.state.roomSlug);
        
//         if (!roomSlug) {
//             setError('Room ID not found');
//             setLoading(false);
//             return;
//         }
        
//         // Call API function with the slug parameter
//         getRoomDetailsSimilar(roomSlug)
//             .then((data) => {
//                 if (data && data.singleRoom) {
//                     setRoomData(data.singleRoom);
                    
//                     // Parse images correctly once we have the data
//                     try {
//                         const parsedImages = parseJsonIfString(data.singleRoom.images);
//                         setImageArray(Array.isArray(parsedImages) ? parsedImages : [data.singleRoom.banner_image]);
//                     } catch (e) {
//                         console.error("Error parsing images:", e);
//                         setImageArray([data.singleRoom.banner_image]);
//                     }
//                 } else {
//                     setError('Room not found');
//                 }
//             })
//             .catch((err) => {
//                 console.error('Error fetching room details:', err);
//                 setError('Failed to load room details');
//             })
//             .finally(() => setLoading(false));
        
//         // Scroll to top when component mounts
//         window.scrollTo(0, 0);
//     }, [slug, location.state]);

//     // Function to parse JSON strings
//     const parseJsonIfString = (data) => {
//         if (typeof data === 'string') {
//             try {
//                 return JSON.parse(data);
//             } catch (e) {
//                 return data;
//             }
//         }
//         return data;
//     };

//     // Track image loading
//     const handleImageLoad = (imageId) => {
//         setImagesLoaded(prev => ({
//             ...prev,
//             [imageId]: true
//         }));
//     };

//     // Handle image loading errors
//     const handleImageError = (imageId) => {
//         console.log(`Image with id ${imageId} failed to load`);
//         setImagesLoaded(prev => ({ 
//             ...prev, 
//             [imageId]: true 
//         }));
        
//         // Set fallback image
//         const imageEl = document.querySelector(`[data-key="${imageId}"]`);
//         if (imageEl) {
//             imageEl.src = "/assets/images/th.jpeg";
//         }
//     };

//     if (loading) {
//         return (
//             <div className="loading-container py-5">
//                 <ContentSkeleton />
//             </div>
//         );
//     }

//     if (error || !roomData) {
//         return (
//             <div className="error-container text-center py-5">
//                 <div className="alert alert-danger" role="alert">
//                     {error || 'Room not found'}
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <>
//             <div className="rts__section single page__hero__height page__hero__bg no__shadow">
//                 {!imagesLoaded.banner && <ImageSkeleton />}
//                 <img 
//                     src={roomData.banner_image} 
//                     alt={roomData.title} 
//                     style={!imagesLoaded.banner ? { display: 'none' } : {}} 
//                     onLoad={() => handleImageLoad('banner')}
//                     onError={() => handleImageError('banner')}
//                     data-key="banner"
//                     loading="lazy"
//                 />
//             </div>
            
//             {/* room details two top */}
//             <div className="rts__section">
//                 <div className="container">
//                     <div className="row justify-content-center">
//                         <div className="col-lg-8">
//                             <div className="room__details__top">
//                                 <h1>{roomData.title}</h1>
//                                 <div className="room__meta">
//                                     <span>
//                                         <i className="flaticon-construction" />
//                                         {roomData.size} ft
//                                     </span>
//                                     <span>
//                                         <i className="flaticon-user" />{roomData.person_allow}
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
            
//             {/* room details area */}
//             <div className="rts__section section__padding">
//                 <div className="container">
//                     <div className="row g-5 sticky-wrap">
//                         <div className="col-lg-8">
//                             <div className="room__details">
//                                 <h4 className="mb-30">Room Description</h4>
//                                 <div dangerouslySetInnerHTML={{ __html: roomData.details }} />

//                                 <h4 className="mb-40">Room Video</h4>
//                                 <div className="video__area mb-50 position-relative wow fadeInUp">
//                                     <div className="video__area__image is__room__details jarallax">
//                                         {!imagesLoaded.video && <ImageSkeleton />}
//                                         <img
//                                             className="radius-10 jarallax-img"
//                                             src="/assets/images/pages/video-bg.webp"
//                                             alt="Video Background"
//                                             loading="lazy"
//                                             style={!imagesLoaded.video ? { display: 'none' } : {}}
//                                             onLoad={() => handleImageLoad('video')}
//                                             onError={() => handleImageError('video')}
//                                             data-key="video"
//                                         />
//                                     </div>
//                                     <div className="video--spinner__wrapper">
//                                         <div className="rts__circle">
//                                             <svg className="spinner" viewBox="0 0 100 100">
//                                                 <defs>
//                                                     <path
//                                                         id="circle-2"
//                                                         d="M50,50 m-37,0a37,37 0 1,1 74,0a37,37 0 1,1 -74,0"
//                                                     />
//                                                 </defs>
//                                                 <text>
//                                                     <textPath xlinkHref="#circle-2">
//                                                         Watch Now * Watch Now * Watch Full Video *
//                                                     </textPath>
//                                                 </text>
//                                             </svg>
//                                             <div className="rts__circle--icon">
//                                                 <a
//                                                     href={roomData.video_link}
//                                                     className="video-play"
//                                                 >
//                                                     <i className="flaticon-play" />
//                                                 </a>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
                                
//                                 <span className="h4 d-block mb-30">Room Amenities</span>
//                                 <div className="room__amenity mb-50">
//                                     <div className="single__item" dangerouslySetInnerHTML={{ __html: roomData.amenities }} />
//                                 </div>
                                
//                                 <span className="h4 d-block mb-50">Room Features</span>
//                                 <div className="room__feature mb-20">
//                                     <div className="room__image__group row row-cols-md-2 row-cols-sm-1 mt-30 mb-50 gap-4 gap-md-0">
//                                         {imageArray.slice(0, 4).map((image, index) => (
//                                             <div className="room__image__item" key={`feature-${index}`}>
//                                                 {!imagesLoaded[`feature${index}`] && <ImageSkeleton />}
//                                                 <img
//                                                     className="rounded-2"
//                                                     src={image}
//                                                     alt={`Room Feature ${index + 1}`}
//                                                     loading="lazy"
//                                                     style={{ display: imagesLoaded[`feature${index}`] ? 'block' : 'none' }}
//                                                     onLoad={() => handleImageLoad(`feature${index}`)}
//                                                     onError={() => handleImageError(`feature${index}`)}
//                                                     data-key={`feature${index}`}
//                                                 />
//                                             </div>
//                                         ))}
                                        
//                                         {/* If less than 2 images in array, add placeholders */}
//                                         {imageArray.length === 0 && (
//                                             <>
//                                                 <div className="room__image__item">
//                                                     <img
//                                                         className="rounded-2"
//                                                         src="/assets/images/th.jpeg"
//                                                         alt="Room Feature Placeholder"
//                                                         loading="lazy"
//                                                     />
//                                                 </div>
//                                                 <div className="room__image__item">
//                                                     <img
//                                                         className="rounded-2"
//                                                         src="/assets/images/th.jpeg"
//                                                         alt="Room Feature Placeholder"
//                                                         loading="lazy"
//                                                     />
//                                                 </div>
//                                             </>
//                                         )}
                                        
//                                         {imageArray.length === 1 && (
//                                             <div className="room__image__item">
//                                                 <img
//                                                     className="rounded-2"
//                                                     src="/assets/images/th.jpeg"
//                                                     alt="Room Feature Placeholder"
//                                                     loading="lazy"
//                                                 />
//                                             </div>
//                                         )}
//                                     </div>
                                    
//                                     <div className="list__item" dangerouslySetInnerHTML={{ __html: roomData.features }} />
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="col-lg-4 sticky-item">
//                             <div className="rts__booking__form has__background is__room__details sticky-item">
//                                 <form action="#" method="post" className="advance__search">
//                                     <h5 className="pt-0">Book Your Stay</h5>
//                                     <div className="advance__search__wrapper">
//                                         {/* single input */}
//                                         <div className="query__input wow fadeInUp">
//                                             <label htmlFor="check__in" className="query__label">
//                                                 Check In
//                                             </label>
//                                             <div className="query__input__position">
//                                                 <input
//                                                     type="text"
//                                                     id="check__in"
//                                                     name="check__in"
//                                                     placeholder="15 Jun 2024"
//                                                     required=""
//                                                 />
//                                                 <div className="query__input__icon">
//                                                     <i className="flaticon-calendar" />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         {/* single input end */}
//                                         {/* single input */}
//                                         <div className="query__input wow fadeInUp" data-wow-delay=".3s">
//                                             <label htmlFor="check__out" className="query__label">
//                                                 Check Out
//                                             </label>
//                                             <div className="query__input__position">
//                                                 <input
//                                                     type="text"
//                                                     id="check__out"
//                                                     name="check__out"
//                                                     placeholder="15 May 2024"
//                                                     required=""
//                                                 />
//                                                 <div className="query__input__icon">
//                                                     <i className="flaticon-calendar" />
//                                                 </div>
//                                             </div>
//                                         </div>
                                        
//                                         <div className="query__input wow fadeInUp" data-wow-delay=".4s">
//                                             <label htmlFor="adult" className="query__label">
//                                                 Adult
//                                             </label>
//                                             <div className="query__input__position">
//                                                 <select name="adult" id="adult" className="form-select">
//                                                     <option value={1}>1 Person</option>
//                                                     <option value={2}>2 Person</option>
//                                                     <option value={3}>3 Person</option>
//                                                     <option value={4}>4 Person</option>
//                                                     <option value={5}>5 Person</option>
//                                                     <option value={6}>6 Person</option>
//                                                     <option value={7}>7 Person</option>
//                                                 </select>
//                                                 <div className="query__input__icon">
//                                                     <i className="flaticon-user" />
//                                                 </div>
//                                             </div>
//                                         </div>
                                        
//                                         <div className="query__input wow fadeInUp" data-wow-delay=".5s">
//                                             <label htmlFor="child" className="query__label">
//                                                 Child
//                                             </label>
//                                             <div className="query__input__position">
//                                                 <select name="child" id="child" className="form-select">
//                                                     <option value={1}>1 Child</option>
//                                                     <option value={2}>2 Child</option>
//                                                     <option value={3}>3 Child</option>
//                                                     <option value={4}>4 Child</option>
//                                                     <option value={5}>5 Child</option>
//                                                     <option value={6}>6 Child</option>
//                                                     <option value={7}>7 Child</option>
//                                                 </select>
//                                                 <div className="query__input__icon">
//                                                     <i className="flaticon-user" />
//                                                 </div>
//                                             </div>
//                                         </div>
                                        
//                                         <div className="query__input wow fadeInUp" data-wow-delay=".5s">
//                                             <label htmlFor="room" className="query__label">
//                                                 Room
//                                             </label>
//                                             <div className="query__input__position">
//                                                 <select name="room" id="room" className="form-select">
//                                                     <option value={1}>1 Room</option>
//                                                     <option value={2}>2 Room</option>
//                                                     <option value={3}>3 Room</option>
//                                                     <option value={4}>4 Room</option>
//                                                     <option value={5}>5 Room</option>
//                                                 </select>
//                                                 <div className="query__input__icon is__svg">
//                                                     <img src="/assets/images/icon/room.svg" alt="" loading="lazy" />
//                                                 </div>
//                                             </div>
//                                         </div>
                                        
//                                         <div className="query__input wow fadeInUp" data-wow-delay=".5s">
//                                             <label htmlFor="exbed" className="query__label">
//                                                 Extra Bed
//                                             </label>
//                                             <div className="query__input__position">
//                                                 <select name="exbed" id="exbed" className="form-select">
//                                                     <option value={1}>1 Bed</option>
//                                                     <option value={2}>2 Bed</option>
//                                                     <option value={3}>3 Bed</option>
//                                                     <option value={4}>4 Bed</option>
//                                                 </select>
//                                                 <div className="query__input__icon is__svg">
//                                                     <img src="/assets/images/icon/bed-alt.svg" alt="" loading="lazy" />
//                                                 </div>
//                                             </div>
//                                         </div>
                                        
//                                         <a href="https://www.asiatech.in/booking_engine/index3.php?token=MTY="
//                                             className="theme-btn btn-style fill no-border search__btn wow fadeInUp"
//                                             data-wow-delay=".6s"
//                                         >
//                                             <span>Book Your Room</span>
//                                         </a>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
            
//             {/* Lazy load the SimilarRoom component */}
//             <Suspense fallback={<div className="py-5"><ContentSkeleton /></div>}>
//                 <SimilarRoom />
//             </Suspense>
//         </>
//     );
// };

// export default RoomDetailsSimilar;


import React, { useEffect, useState, lazy, Suspense, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { getRoomDetailsSimilar } from '../../api/getRoomDetailsSimilar';

// Lazy load the SimilarRoom component
const SimilarRoom = lazy(() => import('./SimilarRoom'));

// Loading placeholders
const ImageSkeleton = () => <Skeleton height={400} />;
const ContentSkeleton = () => (
  <>
    <Skeleton height={50} width={200} />
    <Skeleton height={30} count={2} />
    <Skeleton height={200} />
    <Skeleton height={30} count={3} />
  </>
);

const RoomDetailsSimilar = () => {
    const { slug } = useParams();
    const location = useLocation();
    const [roomData, setRoomData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [imagesLoaded, setImagesLoaded] = useState({});
    const [imageArray, setImageArray] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const sliderInterval = useRef(null);
    
    useEffect(() => {
        setLoading(true);
        // Use the slug from params or from location state
        const roomSlug = slug || (location.state && location.state.roomSlug);
        
        if (!roomSlug) {
            setError('Room ID not found');
            setLoading(false);
            return;
        }
        
        // Call API function with the slug parameter
        getRoomDetailsSimilar(roomSlug)
            .then((data) => {
                if (data && data.singleRoom) {
                    setRoomData(data.singleRoom);
                    
                    // Parse images correctly once we have the data
                    try {
                        const parsedImages = parseJsonIfString(data.singleRoom.images);
                        const images = Array.isArray(parsedImages) ? parsedImages : [data.singleRoom.banner_image];
                        setImageArray(images);
                        
                        // Preload images
                        preloadImages(images);
                    } catch (e) {
                        console.error("Error parsing images:", e);
                        setImageArray([data.singleRoom.banner_image]);
                    }
                } else {
                    setError('Room not found');
                }
            })
            .catch((err) => {
                console.error('Error fetching room details:', err);
                setError('Failed to load room details');
            })
            .finally(() => setLoading(false));
        
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
        
        return () => {
            // Clean up interval on unmount
            if (sliderInterval.current) {
                clearInterval(sliderInterval.current);
            }
        };
    }, [slug, location.state]);

    // Preload images for better performance
    const preloadImages = (images) => {
        images.forEach((img, index) => {
            const image = new Image();
            image.src = img;
            image.onload = () => handleImageLoad(`feature${index}`);
            image.onerror = () => handleImageError(`feature${index}`);
        });
    };

    // Start auto slider
    useEffect(() => {
        if (imageArray.length > 1) {
            sliderInterval.current = setInterval(() => {
                setCurrentImageIndex(prev => (prev + 1) % imageArray.length);
            }, 5000); // Change image every 5 seconds
            
            return () => {
                if (sliderInterval.current) {
                    clearInterval(sliderInterval.current);
                }
            };
        }
    }, [imageArray.length]);

    // Function to parse JSON strings
    const parseJsonIfString = (data) => {
        if (typeof data === 'string') {
            try {
                return JSON.parse(data);
            } catch (e) {
                return data;
            }
        }
        return data;
    };

    // Track image loading
    const handleImageLoad = (imageId) => {
        setImagesLoaded(prev => ({
            ...prev,
            [imageId]: true
        }));
    };

    // Handle image loading errors
    const handleImageError = (imageId) => {
        console.log(`Image with id ${imageId} failed to load`);
        setImagesLoaded(prev => ({ 
            ...prev, 
            [imageId]: true 
        }));
    };

    // Manual navigation for slider
    const goToImage = (index) => {
        setCurrentImageIndex(index);
        // Reset the auto-slider timer
        if (sliderInterval.current) {
            clearInterval(sliderInterval.current);
            sliderInterval.current = setInterval(() => {
                setCurrentImageIndex(prev => (prev + 1) % imageArray.length);
            }, 5000);
        }
    };

    if (loading) {
        return (
            <div className="loading-container py-5">
                <ContentSkeleton />
            </div>
        );
    }

    if (error || !roomData) {
        return (
            <div className="error-container text-center py-5">
                <div className="alert alert-danger" role="alert">
                    {error || 'Room not found'}
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="rts__section single page__hero__height page__hero__bg no__shadow">
                {!imagesLoaded.banner && <ImageSkeleton />}
                <img 
                    src={roomData.banner_image} 
                    alt={roomData.title} 
                    style={!imagesLoaded.banner ? { display: 'none' } : {}} 
                    onLoad={() => handleImageLoad('banner')}
                    onError={() => handleImageError('banner')}
                    data-key="banner"
                    loading="lazy"
                />
            </div>
            
            {/* room details two top */}
            <div className="rts__section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="room__details__top">
                                <h1>{roomData.title}</h1>
                                <div className="room__meta">
                                    <span>
                                        <i className="flaticon-construction" />
                                        {roomData.size} sq ft
                                    </span>
                                    <span>
                                        <i className="flaticon-user" />{roomData.person_allow}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* room details area */}
            <div className="rts__section section__padding">
                <div className="container">
                    <div className="row g-5 sticky-wrap">
                        <div className="col-lg-8">
                            <div className="room__details">
                                <h4 className="mb-30">Room Description</h4>
                                <div dangerouslySetInnerHTML={{ __html: roomData.details }} />

                                <h4 className="mb-40">Room Video</h4>
                                <div className="video__area mb-50 position-relative wow fadeInUp">
                                    <div className="video__area__image is__room__details jarallax">
                                        {!imagesLoaded.video && <ImageSkeleton />}
                                        <img
                                            className="radius-10 jarallax-img"
                                            src="/assets/images/banner/roombanner.jpg"
                                            alt="Video Background"
                                            loading="lazy"
                                            style={!imagesLoaded.video ? { display: 'none' } : {}}
                                            onLoad={() => handleImageLoad('video')}
                                            onError={() => handleImageError('video')}
                                            data-key="video"
                                        />
                                    </div>
                                    <div className="video--spinner__wrapper">
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
                                                    href={roomData.video_link}
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
                                    <div className="single__item" dangerouslySetInnerHTML={{ __html: roomData.amenities }} />
                                </div>
                                
                                <span className="h4 d-block mb-50">Room Features</span>
                                <div className="room__feature mb-20">
                                    <div className="room__image__slider ">
                                        {loading ? (
                                            <ImageSkeleton />
                                        ) : (
                                            <>
                                                <div className="slider-container ">
                                                    {imageArray.length > 0 ? (
                                                        <div className="slider-main-image ">
                                                            {!imagesLoaded[`feature${currentImageIndex}`] && <ImageSkeleton />}
                                                            <img
                                                                src={imageArray[currentImageIndex] || '/assets/images/th.jpeg'}
                                                                alt={`Room Feature ${currentImageIndex + 1}`}
                                                                loading="lazy"
                                                                style={{
                                                                    display: imagesLoaded[`feature${currentImageIndex}`] ? 'block' : 'none',
                                                                    width: '100%',
                                                                    height: '400px',
                                                                    objectFit: 'cover',
                                                                    borderRadius: '10px',
                                                                    marginBottom: '20px',
                                                                }}
                                                                onLoad={() => handleImageLoad(`feature${currentImageIndex}`)}
                                                                onError={(e) => {
                                                                    handleImageError(`feature${currentImageIndex}`);
                                                                    e.target.src = '/assets/images/th.jpeg';
                                                                }}
                                                            />
                                                        </div>
                                                    ) : (
                                                        <img
                                                            src="/assets/images/th.jpeg"
                                                            alt="Room Feature Placeholder"
                                                            style={{
                                                                width: '100%',
                                                                height: '400px',
                                                                objectFit: 'cover',
                                                                borderRadius: '10px'
                                                            }}
                                                        />
                                                    )}
                                                </div>
                                                
                                                {/* {imageArray.length > 1 && (
                                                    <div className="slider-thumbnails">
                                                        {imageArray.map((img, index) => (
                                                            <div 
                                                                key={`thumb-${index}`}
                                                                className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                                                                onClick={() => goToImage(index)}
                                                            >
                                                                <img
                                                                    src={img}
                                                                    alt={`Thumbnail ${index + 1}`}
                                                                    loading="lazy"
                                                                    style={{
                                                                        width: '100%',
                                                                        height: '60px',
                                                                        objectFit: 'cover',
                                                                        borderRadius: '5px',
                                                                        cursor: 'pointer',
                                                                        opacity: imagesLoaded[`feature${index}`] ? 1 : 0
                                                                    }}
                                                                    onLoad={() => handleImageLoad(`feature${index}`)}
                                                                    onError={(e) => {
                                                                        handleImageError(`feature${index}`);
                                                                        e.target.src = '/assets/images/th.jpeg';
                                                                    }}
                                                                />
                                                                {!imagesLoaded[`feature${index}`] && (
                                                                    <Skeleton height={60} style={{ position: 'absolute', top: 0, left: 0 }} />
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>
                                                )} */}
                                            </>
                                        )}
                                    </div>
                                    
                                    <div className="list__item" dangerouslySetInnerHTML={{ __html: roomData.features }} />
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
                                                    <img src="/assets/images/icon/room.svg" alt="" loading="lazy" />
                                                </div>
                                            </div>
                                        </div>
                                        
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
                                                    <img src="/assets/images/icon/bed-alt.svg" alt="" loading="lazy" />
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <a href="https://www.asiatech.in/booking_engine/index3.php?token=MTY="
                                            className="theme-btn btn-style fill no-border search__btn wow fadeInUp"
                                            data-wow-delay=".6s"
                                        >
                                            <span>Book Your Room</span>
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Lazy load the SimilarRoom component */}
            <Suspense fallback={<div className="py-5"><ContentSkeleton /></div>}>
                <SimilarRoom />
            </Suspense>
        </>
    );
};

export default RoomDetailsSimilar;