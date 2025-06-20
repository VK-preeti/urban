// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css'; // Core Swiper styles
// import { Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/scrollbar';
// import RoomCardOne from './RoomCardOne';

// function RoomTwo({ posts = [] }) { // Default value to prevent 'undefined' error
//     return (
//         <>
//             {/* our room */}
//             <div className="rts__section section__padding">
//                 <div className="container">
//                     <div className="row">
//                         <div className="section__wrapper mb-40 wow fadeInUp">
//                             <div className="section__content__left">
//                                 <span className="h6 subtitle__icon__two d-block wow fadeInUp">
//                                     Room
//                                 </span>
//                                 <h2 className="content__title h2 lh-1">Our Rooms</h2>
//                             </div>
//                             <div className="section__content__right">
//                                 <p>
//                                     Our rooms offer a harmonious blend of comfort and elegance,
//                                     designed to provide an exceptional stay for every guest. Each room
//                                     features plush bedding, high-quality linens, and a selection of
//                                     pillows to ensure a restful night's sleep.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                     {/* row end */}
//                     <div className="row">
//                         <Swiper
//                             className="room__slider overflow-hidden wow fadeInUp"
//                             data-wow-delay=".5s"
//                             modules={[Pagination]}
//                             slidesPerView={3} // Show only 1 slide at a time
//                             spaceBetween={30}
//                             loop={posts.length > 1} // Loop only if more than 1 slide
//                             centeredSlides={true}
//                             autoplay={false}
//                             pagination={{
//                                 el: ".rts-pagination",
//                                 clickable: true,
//                             }}
//                             speed={1000}
//                             breakpoints={{
//                                 0: { slidesPerView: 1 },
//                                 575: { slidesPerView: 1 },
//                                 768: { slidesPerView: 2 },
//                                 1200: { slidesPerView: 3 },
//                                 1400: { slidesPerView: 3 },
//                             }}
//                         >
//                             {/* Dynamic Room Data - Slice to show a specific range */}
//                             {posts.length > 0 ? (
//                                 posts.slice(2, 6).map((data) => ( // Adjust slice to show posts from 4th to 6th
//                                     <SwiperSlide key={data.id}>
//                                         <RoomCardOne
//                                             roomID={data.id}
//                                             roomImage={data.image}
//                                             roomTitle={data.title}
//                                             roomPrice={data.price}
//                                         />
//                                     </SwiperSlide>
//                                 ))
//                             ) : (
//                                 <SwiperSlide>
//                                     <p className="text-center">No rooms available</p>
//                                 </SwiperSlide>
//                             )}
//                         </Swiper>
//                         {/* pagination button */}
//                         <div className="rts__pagination">
//                             <div className="rts-pagination" />
//                         </div>
//                         {/* pagination button end */}
//                     </div>
//                 </div>
//             </div>
//             {/* our room end */}
//         </>
//     );
// }

// export default RoomTwo;


// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css'; // Core Swiper styles
// import { Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/scrollbar';
// import RoomCardOne from './RoomCardOne';

// function RoomTwo({ posts = [] }) { // Default value to prevent 'undefined' error
//     return (
//         <>
//             {/* our room */}
//             <div className="rts__section section__padding">
//                 <div className="container">
//                     <div className="row">
//                         <div className="section__wrapper mb-40 wow fadeInUp">
//                             <div className="section__content__left">
//                                 <span className="h6 subtitle__icon__two d-block wow fadeInUp">
//                                     Room
//                                 </span>
//                                 <h2 className="content__title h2 lh-1">Our Rooms</h2>
//                             </div>
//                             <div className="section__content__right">
//                                 <p>
//                                     Our rooms offer a harmonious blend of comfort and elegance,
//                                     designed to provide an exceptional stay for every guest. Each room
//                                     features plush bedding, high-quality linens, and a selection of
//                                     pillows to ensure a restful night's sleep.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                     {/* row end */}
//                     <div className="row">
//                         <Swiper
//                             className="room__slider overflow-hidden wow fadeInUp"
//                             data-wow-delay=".5s"
//                             modules={[Pagination]}
//                             slidesPerView={3} // Show only 1 slide at a time
//                             spaceBetween={30}
//                             loop={posts.length > 1} // Loop only if more than 1 slide
//                             centeredSlides={true}
//                             autoplay={false}
//                             pagination={{
//                                 el: ".rts-pagination",
//                                 clickable: true,
//                             }}
//                             speed={1000}
//                             breakpoints={{
//                                 0: { slidesPerView: 1 },
//                                 575: { slidesPerView: 1 },
//                                 768: { slidesPerView: 2 },
//                                 1200: { slidesPerView: 3 },
//                                 1400: { slidesPerView: 3 },
//                             }}
//                         >
//                             {/* Dynamic Room Data - Slice to show a specific range */}
//                             {posts.length > 0 ? (
//                                 posts.slice(2, 6).map((data) => ( // Adjust slice to show posts from 4th to 6th
//                                     <SwiperSlide key={data.id}>
//                                         <RoomCardOne
//                                             roomID={data.id}
//                                             roomImage={data.image}
//                                             roomTitle={data.title}
//                                             roomPrice={data.price}
//                                         />
//                                     </SwiperSlide>
//                                 ))
//                             ) : (
//                                 <SwiperSlide>
//                                     <p className="text-center">No rooms available</p>
//                                 </SwiperSlide>
//                             )}
//                         </Swiper>
//                         {/* pagination button */}
//                         <div className="rts__pagination">
//                             <div className="rts-pagination" />
//                         </div>
//                         {/* pagination button end */}
//                     </div>
//                 </div>
//             </div>
//             {/* our room end */}
//         </>
//     );
// }

// export default RoomTwo;


//  import React, { useEffect, useState, useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css'; // Core Swiper styles
// import { Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/scrollbar';
// import RoomCardOne from './RoomCardOne';
// import { getSimilarRoom } from '../../api/getSimilarRoom'; 
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
// import WOW from 'wowjs';

// function RoomTwo() {
//     const [posts, setPosts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const contentLoaded = useRef(false);
//     const wowInitialized = useRef(false);
//     const swiperRef = useRef(null);

//     // Fetch room data
//     useEffect(() => {
//         setLoading(true);
//         getSimilarRoom()
//             .then(data => {
//                 if (data && data.rooms) {
//                     console.log('Fetched room data:', data.rooms);
//                     setPosts(data.rooms);
//                     contentLoaded.current = true;
//                 } else {
//                     setError('Invalid data format received.');
//                 }
//                 setLoading(false);
//             })
//             .catch(err => {
//                 console.error('Error fetching rooms:', err);
//                 setError('Failed to fetch rooms. Please try again.');
//                 setLoading(false);
//             });
//     }, []);

//     // Initialize or reinitialize WOW.js after content loads
//     useEffect(() => {
//         if (!loading && contentLoaded.current && !wowInitialized.current) {
//             // Small delay to ensure DOM is fully rendered with content
//             const timer = setTimeout(() => {
//                 const wow = new WOW.WOW({
//                     boxClass: 'wow',
//                     animateClass: 'animated',
//                     offset: 0,
//                     mobile: true,
//                     live: false
//                 });
//                 wow.init();
                
//                 // Force WOW to re-scan the DOM to find all elements
//                 if (typeof wow.sync === 'function') {
//                     wow.sync();
//                 }
                
//                 wowInitialized.current = true;
                
//                 // Add observer for any future content changes
//                 const observer = new MutationObserver((mutations) => {
//                     if (wowInitialized.current && typeof window.WOW === 'function') {
//                         // Small delay to allow DOM to settle
//                         setTimeout(() => {
//                             if (typeof wow.sync === 'function') {
//                                 wow.sync();
//                             }
//                         }, 100);
//                     }
//                 });
                
//                 // Start observing content changes in the room slider
//                 const container = document.querySelector('.room__slider');
//                 if (container) {
//                     observer.observe(container, { 
//                         childList: true, 
//                         subtree: true,
//                         attributes: true
//                     });
//                 }

//                 return () => {
//                     observer.disconnect();
//                 };
//             }, 300);
            
//             return () => clearTimeout(timer);
//         }
//     }, [loading, posts]); // Added posts as dependency to re-trigger when data arrives

//     // Manually update Swiper after content loads
//     useEffect(() => {
//         if (posts.length > 0 && swiperRef.current && swiperRef.current.swiper) {
//             setTimeout(() => {
//                 swiperRef.current.swiper.update();
//             }, 100);
//         }
//     }, [posts]);

//     const getFirstImage = (imagesString) => {
//         try {
//             if (!imagesString) return '';
//             const images = JSON.parse(imagesString);
//             return Array.isArray(images) && images.length > 0 ? images[0] : '';
//         } catch (err) {
//             console.error("Error parsing image JSON:", err);
//             return '';
//         }
//     };

//     return (
//         <>
//             {/* our room */}
//             <div className="rts__section section__padding">
//                 <div className="container">
//                     <div className="row">
//                         <div className="section__wrapper mb-40 wow fadeInUp" data-wow-duration="1s">
//                             <div className="section__content__left">
//                                 <span className="h6 subtitle__icon__two d-block wow fadeInUp" data-wow-duration="1.2s">
//                                     Room
//                                 </span>
//                                 <h2 className="content__title h2 lh-1">Our Rooms</h2>
//                             </div>
//                             <div className="section__content__right">
//                                 <p>
//                                     Our rooms offer a harmonious blend of comfort and elegance,
//                                     designed to provide an exceptional stay for every guest...
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                     {/* row end */}
//                     <div className="row">
//                         {loading ? (
//                             <div className="text-center">
//                                 <Skeleton count={3} height={300} />
//                             </div>
//                         ) : error ? (
//                             <p className="text-center text-danger">{error}</p>
//                         ) : posts.length === 0 ? (
//                             <p className="text-center">No rooms available</p>
//                         ) : (
//                             <div className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".5s">
//                                 <Swiper
//                                     ref={swiperRef}
//                                     className="room__slider overflow-hidden"
//                                     modules={[Pagination]}
//                                     slidesPerView={3}
//                                     spaceBetween={30}
//                                     loop={posts.length > 1}
//                                     centeredSlides={posts.length > 2}
//                                     autoplay={false}
//                                     pagination={{
//                                         el: ".rts-pagination",
//                                         clickable: true,
//                                     }}
//                                     speed={1000}
//                                     breakpoints={{
//                                         0: { slidesPerView: 1 },
//                                         575: { slidesPerView: 1 },
//                                         768: { slidesPerView: 2 },
//                                         1200: { slidesPerView: 3 },
//                                         1400: { slidesPerView: 3 },
//                                     }}
//                                     onUpdate={(swiper) => {
//                                         console.log("Swiper updated");
//                                     }}
//                                 >
//                                     {Array.isArray(posts) && posts.map((data, index) => (
//                                         <SwiperSlide key={data.id || index}>
//                                             <div className="wow fadeInUp" data-wow-duration="1.8s" data-wow-delay={`${(index + 1) * 0.2}s`}>
//                                                 <RoomCardOne
//                                                     roomID={data.id}
//                                                     roomImage={data.banner_image || getFirstImage(data.images)}
//                                                     roomTitle={data.title}
//                                                     roomPrice={data.price}
//                                                     roomSize={data.size}
//                                                     roomCapacity={data.person_allow}
//                                                 />
//                                             </div>
//                                         </SwiperSlide>
//                                     ))}
//                                 </Swiper>
//                             </div>
//                         )}

//                         {/* pagination button */}
//                         <div className="rts__pagination">
//                             <div className="rts-pagination" />
//                         </div>
//                         {/* pagination button end */}
//                     </div>
//                 </div>
//             </div>
//             {/* our room end */}
//         </>
//     );
// }

// export default RoomTwo;


import React, { useEffect, useState, Suspense } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Core Swiper styles
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { getSimilarRoom } from '../../api/getSimilarRoom'; 

// Lazy load the RoomCardOne component
const RoomCardOne = React.lazy(() => import('./RoomCardOne'));

// Image lazy loading component
// const LazyImage = ({ src, alt, className }) => {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [inView, setInView] = useState(false);
  
//   useEffect(() => {
//     // Use Intersection Observer to detect when element is in viewport
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setInView(true);
//           observer.disconnect();
//         }
//       },
//       { rootMargin: '200px' } // Start loading image when it's 200px from viewport (increased for better UX)
//     );
    
//     // Create a unique ID based on src URL
//     const uniqueId = src ? `lazy-img-${src.split('/').pop().substring(0, 10)}` : 'lazy-img-placeholder';
//     const currentElem = document.getElementById(uniqueId);
    
//     if (currentElem) {
//       observer.observe(currentElem);
//     }
    
//     return () => {
//       if (currentElem) {
//         observer.unobserve(currentElem);
//       }
//     };
//   }, [src]);
  
//   // Create a unique ID based on src URL
//   const uniqueId = src ? `lazy-img-${src.split('/').pop().substring(0, 10)}` : 'lazy-img-placeholder';

const LazyImage = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const imgRef = React.useRef();

  useEffect(() => {
    setIsLoaded(false); // reset when src changes
    setInView(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    const currentElem = imgRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) observer.unobserve(currentElem);
    };
  }, [src]);
  
  return (
    <div className={`lazy-image-container ${className || ''}`} ref={imgRef}>
      {!isLoaded && <Skeleton height="100%" />}
      {inView && (
        <img
          src={src}
          alt={alt || "Room image"}
          style={{ opacity: isLoaded ? 1 : 0 }}
          onLoad={() => setIsLoaded(true)}
          className="lazy-loaded-image"
        />
      )}
    </div>
  );
};

// Lazy-loaded room card wrapper
const LazyRoomCard = ({ roomID, roomImage, roomTitle, roomPrice, roomSize, roomCapacity, roomSlug, roomDetails }) => {
  return (
    <Suspense fallback={<div className="room-card-skeleton"><Skeleton height={400} /></div>}>
      <RoomCardOne
        roomID={roomID}
        roomImage={roomImage}
        roomTitle={roomTitle}
        roomPrice={roomPrice}
        roomSize={roomSize}
        roomCapacity={roomCapacity}
        roomSlug={roomSlug}
        roomDetails={roomDetails}
        LazyImage={LazyImage}
      />
    </Suspense>
  );
};

function RoomTwo() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [visibleSlides, setVisibleSlides] = useState([]);
    const [swiperInstance, setSwiperInstance] = useState(null);

    useEffect(() => {
        setLoading(true);
        getSimilarRoom()
            .then(data => {
                if (data && data.rooms) {
                    // Process the room data to ensure all required fields exist
                    const processedRooms = data.rooms.map(room => ({
                        ...room,
                        // Ensure slug exists for router navigation
                        roomSlug: room.slug || room.id,
                        // Make sure room details is available
                        roomDetails: room.details || room.description || ''
                    }));
                    
                    setPosts(processedRooms);
                    console.log('Fetched room data:', processedRooms);
                    
                    // Initialize with first 5 slides visible to ensure we have enough for the slider
                    const initialVisibleCount = Math.min(5, processedRooms.length);
                    setVisibleSlides(processedRooms.slice(0, initialVisibleCount).map(room => room.id));
                } else {
                    setError('Invalid data format received.');
                }
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching rooms:', err);
                setError('Failed to fetch rooms. Please try again.');
                setLoading(false);
            });
    }, []);

    const getFirstImage = (imagesString) => {
        if (!imagesString) return '';
        
        try {
            const images = JSON.parse(imagesString);
            return Array.isArray(images) && images.length > 0 ? images[0] : '';
        } catch (err) {
            // If parsing fails, check if it's already a string URL
            return typeof imagesString === 'string' ? imagesString : '';
        }
    };

    // Handle slide change to load additional slides as needed
    const handleSlideChange = (swiper) => {
        if (!posts || posts.length === 0) return;
        
        const { activeIndex, slides } = swiper;
        const newVisibleSlides = [];
        
        // Mark current slide and more adjacent slides visible to ensure 3 cards are always loaded
        for (let i = Math.max(0, activeIndex - 2); i <= Math.min(slides.length - 1, activeIndex + 3); i++) {
            const realIndex = i % posts.length;
            const slide = posts[realIndex];
            if (slide) {
                newVisibleSlides.push(slide.id);
            }
        }
        
        setVisibleSlides(prev => [...new Set([...prev, ...newVisibleSlides])]);
    };
    
    // Check if there are enough posts to use autoplay and loop
    const shouldEnableAutoplay = posts.length > 3;

    return (
        <>
            {/* our room */}
            <div className="rts__section section__padding">
                <div className="container">
                    <div className="row">
                        <div className="section__wrapper mb-40 wow fadeInUp">
                            <div className="section__content__left">
                                <span className="h6 subtitle__icon__two d-block wow fadeInUp">
                                    Room
                                </span>
                                <h2 className="content__title h2 lh-1">Our Rooms</h2>
                            </div>
                            <div className="section__content__right">
                                <p>
                                    Our rooms offer a harmonious blend of comfort and elegance,
                                    designed to provide an exceptional stay for every guest.Each room features plush bedding, high-quality linens, and a selection of pillows to ensure a restful night's sleep.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* row end */}
                    <div className="row">
                        {loading ? (
                            <div className="skeleton-container">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="skeleton-room">
                                        <Skeleton height={300} />
                                        <Skeleton height={30} width="70%" style={{ marginTop: 10 }} />
                                        <Skeleton height={20} width="40%" style={{ marginTop: 10 }} />
                                    </div>
                                ))}
                            </div>
                        ) : error ? (
                            <p className="text-center text-danger">{error}</p>
                        ) : posts.length === 0 ? (
                            <p className="text-center">No rooms available at the moment.</p>
                        ) : (
                            <Swiper
                                className="room__slider overflow-hidden wow fadeInUp"
                                data-wow-delay=".5s"
                                modules={[Pagination, Autoplay]}
                                slidesPerView={3}
                                spaceBetween={0}
                                loop={shouldEnableAutoplay}
                                centeredSlides={false}
                                autoplay={shouldEnableAutoplay ? {
                                    delay: 3000,
                                    disableOnInteraction: false
                                } : false}
                                pagination={{
                                    el: ".rts-pagination",
                                    clickable: true,
                                }}
                                speed={1000}
                                breakpoints={{
                                    0: { slidesPerView: 1 },
                                    575: { slidesPerView: 1 },
                                    768: { slidesPerView: 2 },
                                    1200: { slidesPerView: 3 },
                                    1400: { slidesPerView: 3 },
                                }}
                                onSlideChange={handleSlideChange}
                                onInit={(swiper) => {
                                    setSwiperInstance(swiper);
                                    handleSlideChange(swiper);
                                }}
                            >
                                {posts.map((data) => (
                                    <SwiperSlide key={data.id}  >
                                        {visibleSlides.includes(data.id) ? (
                                            <LazyRoomCard
                                                roomID={data.id}
                                                roomImage={data.banner_image || getFirstImage(data.images)}
                                                roomTitle={data.title}
                                                roomPrice={data.price}
                                                roomSize={data.size}
                                                roomCapacity={data.person_allow}
                                                roomSlug={data.slug || data.id}
                                                roomDetails={data.details || data.description}
                                            />
                                        ) : (
                                            <div className="room-card-skeleton">
                                                <Skeleton height={400} />
                                            </div>
                                        )}
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        )}

                        {/* pagination button */}
                        {posts.length > 0 && (
                            <div className="rts__pagination">
                                <div className="rts-pagination" style={{display: 'flex', justifyContent: 'center'}} />
                            </div>
                        )}
                        {/* pagination button end */}
                    </div>
                </div>
            </div>
            {/* our room end */}

            {/* CSS for lazy loading */}
            <style jsx>{`

             

                .lazy-image-container {
                    position: relative;
                    width: 100%;
                    height: 0;
                    padding-top: 66.67%; /* 3:2 aspect ratio */
                    overflow: hidden;
                }
                
                .image-placeholder {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: #f0f0f0;
                }
                
                .lazy-loaded-image {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: opacity 0.3s ease;
                }
                
                .skeleton-container {
                    display: flex;
                    gap: 20px;
                    width: 100%;
                    flex-wrap: wrap;
                }
                
                .skeleton-room {
                    flex: 1;
                    min-width: 300px;
                    margin-bottom: 20px;
                }
                
                .room-card-skeleton {
                    width: 100%;
                    border-radius: 8px;
                    overflow: hidden;
                }
                
                @media (max-width: 768px) {
                    .skeleton-container {
                        flex-direction: column;
                    }
                    
                    .skeleton-room {
                        width: 100%;
                    }
                         
                }

            `}</style>
        </>
    );
}

export default RoomTwo;

 