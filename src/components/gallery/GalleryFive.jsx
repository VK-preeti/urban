// import React, { useState } from 'react'
// import Modal from './Modal';


// function GalleryFive() {
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
//             {/* restaurant room */}
//             <div className="rts__section pt-120">
//                 <div className="container">
//                     <div className="row justify-content-center text-center mb-40">
//                         <div className="col-lg-7 wow fadeInUp" data-wow-delay=".3s">
//                             <div className="section__topbar">
//                                 <span className="h6 subtitle__icon__three mx-auto">Gallery</span>
//                                 <h2 className="section__title">Our Restaurant Gallery</h2>
//                             </div>
//                             <p>
//                                 Our rooms offer a harmonious blend of comfort and elegance, designed
//                                 to provide an exceptional stay for every guest Each room features
//                                 plush bedding.
//                             </p>
//                         </div>
//                     </div>
//                     <div className="row g-30 gallery"  >
//                         <div className="col-lg-4 col-md-6">
//                             <div className="gallery__item">
//                                 <span className='gallery__link'></span>
//                                 <img
//                                     src="/assets/images/pages/gallery/1.webp"
//                                     alt=""
//                                     onClick={() => openModal("assets/images/pages/gallery/1.webp")}
//                                     style={{ cursor: "pointer" }}
//                                 />
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                             <div className="gallery__item">
//                                 <span className='gallery__link'></span>
//                                 <img
//                                     src="/assets/images/pages/gallery/2.webp"
//                                     alt=""
//                                     onClick={() => openModal("assets/images/pages/gallery/2.webp")}
//                                     style={{ cursor: "pointer" }}
//                                 />
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                             <div className="gallery__item">
//                                 <span className='gallery__link'></span>
//                                 <img
//                                     src="/assets/images/pages/gallery/3.webp"
//                                     alt=""
//                                     onClick={() => openModal("assets/images/pages/gallery/3.webp")}
//                                     style={{ cursor: "pointer" }}
//                                 />
//                             </div>
//                         </div>
//                         <div className="col-lg-6 col-md-6">
//                             <div className="gallery__item">
//                                 <span className='gallery__link'></span>
//                                 <img
//                                     src="/assets/images/pages/gallery/4.webp"
//                                     alt=""
//                                     onClick={() => openModal("assets/images/pages/gallery/4.webp")}
//                                     style={{ cursor: "pointer" }}
//                                 />
//                             </div>
//                         </div>
//                         <div className="col-lg-6 col-md-6">
//                             <div className="gallery__item">
//                                 <span className='gallery__link'></span>
//                                 <img
//                                     src="/assets/images/pages/gallery/5.webp"
//                                     alt=""
//                                     onClick={() => openModal("assets/images/pages/gallery/5.webp")}
//                                     style={{ cursor: "pointer" }}
//                                 />
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                             <div className="gallery__item">
//                                 <span className='gallery__link'></span>
//                                 <img
//                                     src="/assets/images/pages/gallery/6.webp"
//                                     alt=""
//                                     onClick={() => openModal("assets/images/pages/gallery/6.webp")}
//                                     style={{ cursor: "pointer" }}
//                                 />
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                             <div className="gallery__item">
//                                 <span className='gallery__link'></span>
//                                 <img
//                                     src="/assets/images/pages/gallery/7.webp"
//                                     alt=""
//                                     onClick={() => openModal("assets/images/pages/gallery/7.webp")}
//                                     style={{ cursor: "pointer" }}
//                                 />
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                             <div className="gallery__item">
//                                 <span className='gallery__link'></span>
//                                 <img
//                                     src="/assets/images/pages/gallery/8.webp"
//                                     alt=""
//                                     onClick={() => openModal("assets/images/pages/gallery/8.webp")}
//                                     style={{ cursor: "pointer" }}
//                                 />
//                             </div>
//                         </div>
                        
//                     </div>
//                 </div>
//             </div>
//             {/* restaurant room end */}
//             <Modal isOpen={isModalOpen} closeModal={closeModal} imageSrc={modalImage} />
//         </>

//     )
// }

// export default GalleryFive

//  import React, { useState, useEffect } from 'react'
// import Modal from './Modal';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
// import { getGallery } from '../../api/getGallery';

// function GalleryFive() {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [modalImage, setModalImage] = useState('');
//     const [gallery, setGallery] = useState([]);
//     const [loading, setLoading] = useState(true);
    
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

//     // Function to open the modal with the selected image
//     const openModal = (imageSrc) => {
//         setModalImage(imageSrc);
//         setIsModalOpen(true);
//     };

//     // Function to close the modal
//     const closeModal = () => {
//         setIsModalOpen(false);
//     };

//     const LoadingSkeleton = () => (
//         <div className="row g-30">
//             {[...Array(8)].map((_, index) => (
//                 <div key={index} className={index < 3 ? "col-lg-4 col-md-6" : 
//                                           index < 5 ? "col-lg-6 col-md-6" : "col-lg-4 col-md-6"}>
//                     <div className="gallery__item">
//                         <Skeleton height={300} />
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );

//     return (
//         <>
//             {/* restaurant room */}
//             <div className="rts__section pt-120">
//                 <div className="container">
//                     <div className="row justify-content-center text-center mb-40">
//                         <div className="col-lg-7 wow fadeInUp" data-wow-delay=".3s">
//                             <div className="section__topbar">
//                                 <span className="h6 subtitle__icon__three mx-auto">Gallery</span>
//                                 <h2 className="section__title">Our Resort Gallery</h2>
//                             </div>
//                             <p>
//                                 Our rooms offer a harmonious blend of comfort and elegance, designed
//                                 to provide an exceptional stay for every guest Each room features
//                                 plush bedding.
//                             </p>
//                         </div>
//                     </div>
                    
//                     {loading ? (
//                         <LoadingSkeleton />
//                     ) : (
//                         <div className="row g-30 gallery">
//                             {gallery && gallery.length > 0 ? (
//                                 gallery.map((item, index) => (
//                                     <div key={index} className={
//                                         index < 3 ? "col-lg-4 col-md-6" : 
//                                         index < 5 ? "col-lg-6 col-md-6" : "col-lg-4 col-md-6"
//                                     }>
//                                         <div className="gallery__item" style={{padding: '10px'}}>
//                                             <span className='gallery__link'></span>
//                                             <img
//                                                 src={item.image || `/assets/images/pages/gallery/${index + 1}.webp`}
//                                                 alt={item.title || `Gallery image ${index + 1}`}
//                                                 onClick={() => openModal(item.image || `/assets/images/pages/gallery/${index + 1}.webp`)}
//                                                 style={{ cursor: "pointer" }}
//                                             />
//                                         </div>
//                                     </div>
//                                 ))
//                             ) : (
//                                 // Fallback to static gallery if API returns no data
//                                 <>
//                                     <div className="col-lg-4 col-md-6">
//                                         <div className="gallery__item" style={{padding: '10px'}}>
//                                             <span className='gallery__link'></span>
//                                             <img
//                                                 src="/assets/images/pages/gallery/1.webp"
//                                                 alt="Gallery image 1"
//                                                 onClick={() => openModal("/assets/images/pages/gallery/1.webp")}
//                                                 style={{ cursor: "pointer" }}
//                                             />
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-4 col-md-6">
//                                         <div className="gallery__item" style={{padding: '10px'}}>
//                                             <span className='gallery__link'></span>
//                                             <img
//                                                 src="/assets/images/pages/gallery/2.webp"
//                                                 alt="Gallery image 2"
//                                                 onClick={() => openModal("/assets/images/pages/gallery/2.webp")}
//                                                 style={{ cursor: "pointer" }}
//                                             />
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-4 col-md-6">
//                                         <div className="gallery__item" style={{padding: '10px'}}>
//                                             <span className='gallery__link'></span>
//                                             <img
//                                                 src="/assets/images/pages/gallery/3.webp"
//                                                 alt="Gallery image 3"
//                                                 onClick={() => openModal("/assets/images/pages/gallery/3.webp")}
//                                                 style={{ cursor: "pointer" }}
//                                             />
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-6 col-md-6">
//                                         <div className="gallery__item" style={{padding: '10px'}}>
//                                             <span className='gallery__link'></span>
//                                             <img
//                                                 src="/assets/images/pages/gallery/4.webp"
//                                                 alt="Gallery image 4"
//                                                 onClick={() => openModal("/assets/images/pages/gallery/4.webp")}
//                                                 style={{ cursor: "pointer" }}
//                                             />
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-6 col-md-6">
//                                         <div className="gallery__item" style={{padding: '10px'}}>
//                                             <span className='gallery__link'></span>
//                                             <img
//                                                 src="/assets/images/pages/gallery/5.webp"
//                                                 alt="Gallery image 5"
//                                                 onClick={() => openModal("/assets/images/pages/gallery/5.webp")}
//                                                 style={{ cursor: "pointer" }}
//                                             />
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-4 col-md-6">
//                                         <div className="gallery__item" style={{padding: '10px'}}>
//                                             <span className='gallery__link'></span>
//                                             <img
//                                                 src="/assets/images/pages/gallery/6.webp"
//                                                 alt="Gallery image 6"
//                                                 onClick={() => openModal("/assets/images/pages/gallery/6.webp")}
//                                                 style={{ cursor: "pointer" }}
//                                             />
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-4 col-md-6">
//                                         <div className="gallery__item" style={{padding: '10px'}}>
//                                             <span className='gallery__link'></span>
//                                             <img
//                                                 src="/assets/images/pages/gallery/7.webp"
//                                                 alt="Gallery image 7"
//                                                 onClick={() => openModal("/assets/images/pages/gallery/7.webp")}
//                                                 style={{ cursor: "pointer" }}
//                                             />
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-4 col-md-6">
//                                         <div className="gallery__item" style={{padding: '10px'}}>
//                                             <span className='gallery__link'></span>
//                                             <img
//                                                 src="/assets/images/pages/gallery/8.webp"
//                                                 alt="Gallery image 8"
//                                                 onClick={() => openModal("/assets/images/pages/gallery/8.webp")}
//                                                 style={{ cursor: "pointer" }}
//                                             />
//                                         </div>
//                                     </div>
//                                 </>
//                             )}
//                         </div>
//                     )}
//                 </div>
//             </div>
//             {/* restaurant room end */}
//             <Modal isOpen={isModalOpen} closeModal={closeModal} imageSrc={modalImage} />
//         </>
//     )
// }

// export default GalleryFive

import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { getGallery } from '../../api/getGallery';
import './GalleryFive.css';

function GalleryFive() {
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

    const chunkGallery = (data) => {
        const chunks = [];
        let index = 0;
        let toggle = true;

        while (index < data.length) {
            const size = toggle ? 3 : 2;
            chunks.push(data.slice(index, index + size));
            index += size;
            toggle = !toggle;
        }

        return chunks;
    };

    const LoadingSkeleton = () => (
        <div className="row g-30">
            {[...Array(8)].map((_, index) => (
                <div key={index} className="col-lg-4 col-md-6">
                    <div className="gallery__item">
                        <Skeleton height={300} />
                    </div>
                </div>
            ))}
        </div>
    );

    const fallbackImages = [
        "/assets/images/pages/gallery/1.webp",
        "/assets/images/pages/gallery/2.webp",
        "/assets/images/pages/gallery/3.webp",
        "/assets/images/pages/gallery/4.webp",
        "/assets/images/pages/gallery/5.webp",
        "/assets/images/pages/gallery/6.webp",
        "/assets/images/pages/gallery/7.webp",
        "/assets/images/pages/gallery/8.webp"
    ];

    return (
        <>
            <div className="rts__section pt-120">
                <div className="container">
                    <div className="row justify-content-center text-center mb-40">
                        <div className="col-lg-7 wow fadeInUp" data-wow-delay=".3s">
                            <div className="section__topbar">
                                <span className="h6 subtitle__icon__three mx-auto">Gallery</span>
                                <h2 className="section__title">Our Resort Gallery</h2>
                            </div>
                            <p>
                                Our rooms offer a harmonious blend of comfort and elegance, designed
                                to provide an exceptional stay for every guest. Each room features
                                plush bedding.
                            </p>
                        </div>
                    </div>

                    {loading ? (
                        <LoadingSkeleton />
                    ) : (
                        <div className="gallery">
                            {(gallery.length > 0 ? chunkGallery(gallery) : chunkGallery(fallbackImages)).map((group, groupIndex) => (
                                <div className="row g-30" key={groupIndex}>
                                    {group.map((item, index) => {
                                        const imageSrc = typeof item === 'string' ? item : item.image;
                                        const imageAlt = typeof item === 'string' ? `Fallback image ${index + 1}` : item.title || `Gallery image ${index + 1}`;
                                        const groupSize = group.length;
                                        const colClass = groupSize === 3 ? "col-lg-4 col-md-6" : "col-lg-6 col-md-6";

                                        return (
                                            <div key={index} className={colClass}>
                                        <div className="gallery__item-five">
                                            <span className="gallery__link-five"></span>
                                            <img
                                            src={imageSrc}
                                            alt={imageAlt}
                                            onClick={() => openModal(imageSrc)}
                                            style={{ cursor: "pointer" }}
                                            />
                                        </div>
                                        </div>
                                        );
                                    })}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <Modal isOpen={isModalOpen} closeModal={closeModal} imageSrc={modalImage} />
        </>
    );
}

export default GalleryFive;

