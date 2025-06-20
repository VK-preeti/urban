// import React, { useState } from 'react'
// import Modal from './Modal';

// function GalleryFour() {
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
//             <div className="rts__section section__padding">
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
//                     <div className="row g-30 gallery">
//                         <div className="col-lg-4 col-md-6">
//                             <div className="gallery__item">
//                                 <img
//                                     src="/assets/images/pages/resturant/gallery/1.webp"
//                                     alt=""
//                                     onClick={() => openModal("assets/images/pages/resturant/gallery/1.webp")}
//                                     style={{ cursor: "pointer" }}
//                                 />
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                             <div className="gallery__item">
//                                 <img
//                                     src="/assets/images/pages/resturant/gallery/2.webp"
//                                     alt=""
//                                     onClick={() => openModal("assets/images/pages/resturant/gallery/2.webp")}
//                                     style={{ cursor: "pointer" }}
//                                 />
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                             <div className="gallery__item">
//                                 <img
//                                     src="/assets/images/pages/resturant/gallery/3.webp"
//                                     alt=""
//                                     onClick={() => openModal("assets/images/pages/resturant/gallery/3.webp")}
//                                     style={{ cursor: "pointer" }}
//                                 />
//                             </div>
//                         </div>
//                         <div className="col-lg-6 col-md-6">
//                             <div className="gallery__item">
//                                 <img
//                                     src="/assets/images/pages/resturant/gallery/4.webp"
//                                     alt=""
//                                     onClick={() => openModal("assets/images/pages/resturant/gallery/4.webp")}
//                                     style={{ cursor: "pointer" }}
//                                 />
//                             </div>
//                         </div>
//                         <div className="col-lg-6 col-md-6">
//                             <div className="gallery__item">
//                                 <img
//                                     src="/assets/images/pages/resturant/gallery/5.webp"
//                                     alt=""
//                                     onClick={() => openModal("assets/images/pages/resturant/gallery/5.webp")}
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

// export default GalleryFour

  
 import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import { getRestaurantGallery } from '../../api/getRestaurantGallery';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './GalleryFour.css'; // Make sure to create/import the CSS below

function GalleryFour() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');
    const [gallery, setGallery] = useState([]);
    const [loading, setLoading] = useState(true);

    const openModal = (imageSrc) => {
        setModalImage(imageSrc);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        getRestaurantGallery()
            .then((data) => {
                if (data?.restImages) {
                    setGallery(data.restImages);
                    console.log("gallery restaurant data=================>", data.restImages);
                }
            })
            .catch((err) => {
                console.error("Error fetching restaurant gallery data:", err);
            })
            .finally(() => setLoading(false));
    }, []);

    const chunkGallery = (items) => {
    const result = [];
    let i = 0;
    let toggle = true; // true: 3 items, false: 2 items

    while (i < items.length) {
        const chunkSize = toggle ? 3 : 2;
        result.push(items.slice(i, i + chunkSize));
        i += chunkSize;
        toggle = !toggle;
    }
    return result;
};


    return (
        <div className="restaurant-gallery">
            <div className="restaurant-gallery__section section__padding">
                <div className="container">
                    <div className="row justify-content-center text-center mb-40">
                        <div className="col-lg-7 wow fadeInUp" data-wow-delay=".3s">
                            <div className="section__topbar">
                                <span className="h6 subtitle__icon__three mx-auto">Gallery</span>
                                <h2 className="section__title">Our Restaurant Gallery</h2>
                            </div>
                            <p>
                                Discover a taste of elegance through our curated gallery of gourmet creations.
                            </p>
                        </div>
                    </div>

                    {/* Responsive Masonry Grid */}
                    <div className="restaurant-gallery__grid">
                        {!loading &&
                        chunkGallery(gallery).map((row, rowIndex) => (
                            <div className={`restaurant-gallery__row row-${row.length}`} key={rowIndex}>
                                {row.map((item, index) => (
                                    <div className="restaurant-gallery__item" key={item.id || index}>
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            onClick={() => openModal(item.image)}
                                            className="restaurant-gallery__img"
                                        />
                                    </div>
                                ))}
                            </div>
                        ))
                    }

                    </div>
                </div>
            </div>
            <Modal isOpen={isModalOpen} closeModal={closeModal} imageSrc={modalImage} />
        </div>
    );
}

export default GalleryFour;
