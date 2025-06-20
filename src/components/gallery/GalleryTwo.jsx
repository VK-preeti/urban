// import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css'; // Core Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/scrollbar';
// import Modal from './Modal';
// // import Modal from './Modal'; // Import the Modal component

// function GalleryTwo() {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [modalImage, setModalImage] = useState('');

//     // Function to open the modal with the selected image
//     const openModal = (imageSrc) => {
//         setModalImage(imageSrc);
//         setIsModalOpen(true);
//     };

//     // Function to close the modal
//     const closeModal = () => {
//         setIsModalOpen(false);
//     };

//     return (
//         <>
//             {/* gallery */}
//             <div className="rts__section pb-120">
//                 <div className="container">
//                     <div className="row position-relative justify-content-center text-center mb-30">
//                         <div className="col-lg-6 wow fadeInUp">
//                             <div className="section__topbar">
//                                 <span className="h6 subtitle__icon__three mx-auto">Gallery</span>
//                                 <h2 className="section__title">Our Gallery</h2>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <Swiper
//                             className="gallery__slider overflow-hidden gallery"
//                             direction="horizontal"
//                             slidesPerView={4}
//                             spaceBetween={30}
//                             grabCursor={true}
//                             loop={true}
//                             centeredSlides={false}
//                             autoplay={{
//                                 delay: 3000,
//                             }}
//                             speed={1000}
//                             effect="slide"
//                             breakpoints={{
//                                 0: { slidesPerView: 1 },
//                                 575: { slidesPerView: 2 },
//                                 768: { slidesPerView: 3 },
//                                 1200: { slidesPerView: 3 },
//                                 1400: { slidesPerView: 4 },
//                             }}
//                         >
//                             {/* single gallery image */}
//                             <SwiperSlide>
//                                 <div className="gallery__item">
//                                     <img
//                                         src="/assets/images/index-3/gallery/1.webp"
//                                         alt=""
//                                         height={300}
//                                         width={300}
//                                         onClick={() => openModal("assets/images/index-3/gallery/1.webp")}
//                                         style={{ cursor: "pointer" }}
//                                     />
//                                 </div>
//                             </SwiperSlide>
//                             {/* single gallery image end */}
//                             {/* single gallery image */}
//                             <SwiperSlide>
//                             <div className="gallery__item">
//                                     <img
//                                         src="/assets/images/index-3/gallery/2.webp"
//                                         alt=""
//                                         height={300}
//                                         width={300}
//                                         onClick={() => openModal("assets/images/index-3/gallery/2.webp")}
//                                         style={{ cursor: "pointer" }}
//                                     />
//                                 </div>
//                             </SwiperSlide>
//                             {/* single gallery image end */}
//                             {/* single gallery image */}
//                             <SwiperSlide>
//                             <div className="gallery__item">
//                                     <img
//                                         src="/assets/images/index-3/gallery/3.webp"
//                                         alt=""
//                                         height={300}
//                                         width={300}
//                                         onClick={() => openModal("assets/images/index-3/gallery/3.webp")}
//                                         style={{ cursor: "pointer" }}
//                                     />
//                                 </div>
//                             </SwiperSlide>
//                             {/* single gallery image end */}
//                             {/* single gallery image */}
//                             <SwiperSlide>
//                             <div className="gallery__item">
//                                     <img
//                                         src="/assets/images/index-3/gallery/4.webp"
//                                         alt=""
//                                         height={300}
//                                         width={300}
//                                         onClick={() => openModal("assets/images/index-3/gallery/4.webp")}
//                                         style={{ cursor: "pointer" }}
//                                     />
//                                 </div>
//                             </SwiperSlide>
//                             {/* single gallery image end */}
//                             {/* single gallery image */}
//                             <SwiperSlide>
//                             <div className="gallery__item">
//                                     <img
//                                         src="/assets/images/index-3/gallery/5.webp"
//                                         alt=""
//                                         height={300}
//                                         width={300}
//                                         onClick={() => openModal("assets/images/index-3/gallery/5.webp")}
//                                         style={{ cursor: "pointer" }}
//                                     />
//                                 </div>
//                             </SwiperSlide>
//                             {/* single gallery image end */}
//                         </Swiper>
//                     </div>
//                 </div>
//             </div>
//             {/* gallery end */}
//             <Modal isOpen={isModalOpen} closeModal={closeModal} imageSrc={modalImage} />
//         </>

//     )
// }

// export default GalleryTwo
  
 

// import React, { useState, useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/scrollbar';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
// import { getGallery } from '../../api/getGallery';
// import './GalleryTwo.css';

// const GalleryTwo = ({ limit }) => {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [modalImage, setModalImage] = useState('');
//     const [gallery, setGallery] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [hoveredItem, setHoveredItem] = useState(null);

//     const cleanHTML = (htmlString) => {
//         if (typeof htmlString !== 'string') return '';
//         try {
//             const decodedString = new DOMParser().parseFromString(htmlString, 'text/html').body.textContent;
//             return decodedString.trim();
//         } catch (error) {
//             console.error("Error in cleanHTML:", error);
//             return htmlString;
//         }
//     };

//     const getSlicedDetails = (details) => {
//         const cleanDetails = cleanHTML(details);
//         const words = cleanDetails.split(' ');
//         return words.slice(0, 30).join(' ') + (words.length > 30 ? '...' : '');
//     };

//     useEffect(() => {
//         getGallery()
//             .then((data) => {
//                 if (data && data.rooms) {
//                     setGallery(data.rooms);
//                 }
//             })
//             .catch((err) => {
//                 console.error("Error fetching gallery data:", err);
//             })
//             .finally(() => setLoading(false));
//     }, []);

//     const openModal = (imageSrc) => {
//         setModalImage(imageSrc);
//         setIsModalOpen(true);
//         document.body.style.overflow = 'hidden';
//     };

//     const closeModal = () => {
//         setIsModalOpen(false);
//         document.body.style.overflow = 'auto';
//     };

//     const LoadingSkeleton = () => (
//         <div className="row">
//             {[...Array(4)].map((_, index) => (
//                 <div key={index} className="col-md-3">
//                     <Skeleton height={300} />
//                 </div>
//             ))}
//         </div>
//     );

//     return (
//         <>
//             <div className="rts__section pb-120">
//                 <div className="container">
//                     <div className="row position-relative justify-content-center text-center mb-30">
//                         <div className="col-lg-6 wow fadeInUp">
//                             <div className="section__topbar">
//                                 <span className="h6 subtitle__icon__three mx-auto">Gallery</span>
//                                 <h2 className="section__title">Our Gallery</h2>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="row">
//                         {loading ? (
//                             <LoadingSkeleton />
//                         ) : (
//                            (gallery.slice(0, limit || gallery.length)).map((room) => (
//                                 <div 
//                                     key={room.id} 
//                                     className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4"
//                                     onMouseEnter={() => setHoveredItem(room.id)}
//                                     onMouseLeave={() => setHoveredItem(null)}
//                                 >
//                                     <div className="gallery__item">
//                                         <div className="gallery__item__inner">
//                                             <img
//                                                 src={room.image}
//                                                 alt={room.title}
//                                                 height={300}
//                                                 width="100%"
//                                                 style={{ 
//                                                     cursor: 'pointer', 
//                                                     objectFit: 'cover',
//                                                     transition: 'all 0.3s ease'
//                                                 }}
//                                             />
//                                             <div className="gallery__overlay">
//                                                 <h3>{room.title}</h3>
//                                                 <p>{getSlicedDetails(room.details)}</p>
//                                             </div>
//                                             {hoveredItem === room.id && (
//                                                 <div className="view-image-button">
//                                                     <button 
//                                                         className="btn btn-primary"
//                                                         onClick={() => openModal(room.image)}
//                                                     >
//                                                         View Image
//                                                     </button>
//                                                 </div>
//                                             )}
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))
//                         )}
//                     </div>
//                 </div>
//             </div>

//             {/* Modal */}
//             {isModalOpen && (
//                 <div className="modal-backdrop" onClick={closeModal}>
//                     <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//                         <button className="modal-close" onClick={closeModal}>
//                             &times;
//                         </button>
//                         <img 
//                             src={modalImage} 
//                             alt="Gallery" 
//                             className="modal-image" 
//                             onError={(e) => {
//                                 e.target.onerror = null; 
//                                 e.target.src = '/path/to/fallback-image.jpg';
//                             }}
//                         />
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

//  export default GalleryTwo;

 import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Modal from './Modal';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { getGallery } from '../../api/getGallery';
// import './GalleryTwo.css';

function GalleryTwo() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');
    const [gallery, setGallery] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getGallery()
            .then((data) => {
                if (data && data.rooms) {
                    setGallery(data.rooms);
                }
            })
            .catch((err) => {
                console.error("Error fetching gallery data:", err);
            })
            .finally(() => setLoading(false));
    }, []);

    const openModal = (imageSrc) => {
        setModalImage(imageSrc);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const LoadingSkeleton = () => (
        <div className="row">
            {[...Array(4)].map((_, index) => (
                <div key={index} className="col-md-3">
                    <Skeleton height={300} />
                </div>
            ))}
        </div>
    );

    return (
        <>
        {/* Internal CSS for mobile fixes */}
            <style>{`
                @media (max-width: 575.98px) {
                    .gallery__item {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .gallery__item img {
                        margin: 0 auto;
                        display: block;
                    }
                    .swiper-slide {
                        margin-right: 0 !important;
                    }
                }
            `}</style>
            <div className="rts__section pb-60">
                <div className="container">
                    <div className="row position-relative justify-content-center text-center mb-30">
                        <div className="col-lg-6 wow fadeInUp">
                            <div className="section__topbar">
                                <span className="h6 subtitle__icon__three mx-auto">Gallery</span>
                                <h2 className="section__title">Our Gallery</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {loading ? (
                            <LoadingSkeleton />
                        ) : (
                           <Swiper
                            className="gallery__slider overflow-hidden gallery"
                            direction="horizontal"
                            slidesPerView={4}
                            spaceBetween={30}
                            grabCursor={true}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                            }}
                            speed={1000}
                            effect="slide"
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 0,
                                    centeredSlides: true, // <- Optional, for center alignment
                                },
                                575: {
                                    slidesPerView: 2,
                                    spaceBetween: 15,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                                1200: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                                1400: {
                                    slidesPerView: 4,
                                    spaceBetween: 30,
                                },
                            }}
                        >

                                {gallery.length > 0 ? (
                                    gallery.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="gallery__item">
                                                <img
                                                    src={item.image}
                                                    alt={item.title || "Gallery Image"}
                                                    height={300}
                                                    width={300}
                                                    onClick={() => openModal(item.image)}
                                                    style={{ cursor: "pointer" }}
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))
                                ) : (
                                    [1, 2, 3, 4, 5].map((num) => (
                                        <SwiperSlide key={num}>
                                            <div className="gallery__item">
                                                <img
                                                    src={`/assets/images/index-3/gallery/${num}.webp`}
                                                    alt=""
                                                    height={300}
                                                    width={300}
                                                    onClick={() => openModal(`/assets/images/index-3/gallery/${num}.webp`)}
                                                    style={{ cursor: "pointer" }}
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))
                                )}
                            </Swiper>
                        )}
                    </div>
                </div>
            </div>

            <Modal isOpen={isModalOpen} closeModal={closeModal} imageSrc={modalImage} />
        </>
    );
}

export default GalleryTwo;
