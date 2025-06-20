// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom'
// import { jarallax } from 'jarallax';
// import { getFacilities } from '../../api/FacilitiesApi';
 
 

// function FacilitiesSeven() {

      

//      useEffect(() => {
//         getFacilities().then(data => {
           
//           console.log("About us get api of facilities data============>", data);
//         });
//       }, []);


//     useEffect(() => {
//                 function isMobileDevice() {
//                     return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
//                 }
                
//                 if (!isMobileDevice()) {
//                     document.querySelectorAll('.jarallax').forEach(element => {
//                         jarallax(element, {});
//                     });
//                 } else {
//                     console.log('Jarallax skipped on mobile devices');
//                 }
                
//             }, []);
//     return (
//         <>
//             {/* our facility */}
//             <div className="rts__section facility__area is__about has__background has__shape">
//                 <div className="section__shape wow fadeInRight" data-wow-delay=".5s">
//                     <img src="/assets/images/pages/about-shape.svg" alt="" />
//                 </div>
//                 <div className="container">
//                     <div className="row g-5 align-items-center">
//                         <div className="col-lg-6">
//                             <div className="facility__content">
//                                 <div className="section__content__left">
//                                     <span className="h6 subtitle__icon__two d-block wow fadeInUp">
//                                         Facilities 
//                                     </span>
//                                     <h2 className="content__title h2 lh-1">Hotel Facilities</h2>
//                                 </div>
//                                 <div className="row mt-20 g-5 wow fadeInUp" data-wow-delay=".5s">
//                                     <div className="col-lg-6 col-md-6">
//                                         <div className="card rts__card no-border is__home__three">
//                                             <div className="card-body">
//                                                 <div className="icon">
//                                                     <img src="/assets/images/icon/bed.svg" alt="" />
//                                                 </div>
//                                                 <Link href="#">
//                                                     <h6 className="card-title h6 mb-15">Rooms and Suites</h6>
//                                                 </Link>
//                                                 <p className="card-text">
//                                                     Varied types of rooms, from standard to luxury suites,
//                                                     equipped with essentials like beds.
//                                                 </p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-6 col-md-6">
//                                         <div className="card rts__card no-border is__home__three">
//                                             <div className="card-body">
//                                                 <div className="icon">
//                                                     <img src="/assets/images/icon/security.svg" alt="" />
//                                                 </div>
//                                                 <Link href="#">
//                                                     <h6 className="card-title h6 mb-15">24-Hour Security</h6>
//                                                 </Link>
//                                                 <p className="card-text">
//                                                     On-site security personnel and best surveillance. from
//                                                     standard to luxury suites,Secure storage for valuables.
//                                                 </p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-6 col-md-6">
//                                         <div className="card rts__card no-border is__home__three">
//                                             <div className="card-body">
//                                                 <div className="icon">
//                                                     <img src="/assets/images/icon/gym.svg" alt="" />
//                                                 </div>
//                                                 <Link href="#">
//                                                     <h6 className="card-title h6 mb-15">Fitness Center</h6>
//                                                 </Link>
//                                                 <p className="card-text">
//                                                     Equipped with exercise machines and weights.Offering
//                                                     massages, facials, and other treatments.
//                                                 </p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-6 col-md-6">
//                                         <div className="card rts__card no-border is__home__three">
//                                             <div className="card-body">
//                                                 <div className="icon">
//                                                     <img src="/assets/images/icon/swimming-pool.svg" alt="" />
//                                                 </div>
//                                                 <Link href="#">
//                                                     <h6 className="card-title h6 mb-15">Swimming Pool</h6>
//                                                 </Link>
//                                                 <p className="card-text">
//                                                     Indoor or outdoor pools for leisure or exercise.Offering
//                                                     massages, facials, and other treatments
//                                                 </p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-6">
//                             <div className="facility__image jara-mask-3 jarallax">
//                                 <img
//                                     height={765}
//                                     width={605}
//                                     className="jarallax-img"
//                                     src="/assets/images/index-3/facility.webp"
//                                     alt=""
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* our facility end */}
//         </>

//     )
// }

// export default FacilitiesSeven
  
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { jarallax } from 'jarallax';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { getFacilities } from '../../api/getFacilities';
import { jarallax, jarallaxVideo } from 'jarallax';
import 'jarallax/dist/jarallax.css';


const ITEMS_PER_PAGE = 4;

const cleanHTML = (htmlString) => {
    if (typeof htmlString !== 'string') return '';

    try {
        const decodedString = new DOMParser().parseFromString(htmlString, 'text/html').body.textContent;
        const strippedText = new DOMParser().parseFromString(decodedString, 'text/html').body.textContent;
        return strippedText.trim();
    } catch (error) {
        console.error("Error in cleanHTML:", error);
        return htmlString;
    }
};

function FacilitiesSeven() {
    const [facilities, setFacilities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [facilityBanner, setFacilityBanner] = useState(null);  

    useEffect(() => {
        setLoading(true);
        getFacilities(currentPage)
            .then((response) => {
                const facilityData = response?.facility?.data;
                if (facilityData?.length) {
                    setFacilities(facilityData);
                    setFacilityBanner(response?.facility_banner);  
                    setTotalPages(response.facility.last_page);
                    console.log("facilities data ============>", response.facility)
                } else {
                    setFacilities([]);
                    setTotalPages(1);
                }
            })
            .catch((error) => {
                console.error('Error fetching facilities:', error);
                setFacilities([]);
            })
            .finally(() => setLoading(false));
    }, [currentPage]);

    useEffect(() => {
    if (facilityBanner && !/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        const elements = document.querySelectorAll('.jarallax');
        jarallax(elements, { speed: 0.5 });

        // Cleanup to destroy jarallax instances on unmount or re-render
        return () => {
            elements.forEach(el => {
                if (el.jarallax) {
                    el.jarallax.destroy();
                }
            });
        };
    }
}, [facilityBanner]);


    const renderSkeletonCards = () => {
        return Array.from({ length: ITEMS_PER_PAGE }).map((_, idx) => (
            <div className="col-lg-6 col-md-6" key={idx}>
                <div className="card rts__card no-border is__home__three">
                    <div className="card-body">
                        <div className="icon">
                            <Skeleton circle width={50} height={50} />
                        </div>
                        <h6 className="card-title h6 mb-15">
                            <Skeleton width={`60%`} />
                        </h6>
                        <p className="card-text">
                            <Skeleton count={3} />
                        </p>
                    </div>
                </div>
            </div>
        ));
    };

    const renderFacilityCards = () => {
        if (loading) return renderSkeletonCards();
        if (!facilities.length) return <div className="text-center">No facilities available.</div>;

        return facilities.map((facility, index) => {
            const description = cleanHTML(facility.description);
            return (
                <div className="col-lg-6 col-md-6" key={facility.id || index} style={{
                        transition: 'all 0.4s ease',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        height: '100%',
                        position: 'relative',
                        borderBottom: '3px solid transparent',
                    }}
                     >
                    <div className="card rts__card no-border is__home__three" >
                        <div className="card-body">
                            <div className="icon">
                                <img
                                    src={facility.icon || 'N/A'}
                                    className="rounded-circle"
                                    style={{ width: '64px', height: '64px', objectFit: 'cover' }}
                                    alt="icon"
                                />
                            </div>
                            <Link to="#">
                                <h6 className="card-title h6 mb-15" style={{color: 'black', fontsize: '1.5rem'}}>{facility.title || 'N/A'}</h6>
                            </Link>
                            <p className="card-text">
                                {description.length > 100 ? `${description.substring(0, 100)}...` : description}
                            </p>
                        </div>
                    </div>
                </div>
            );
        });
    };

    const renderPagination = () => {
        if (totalPages <= 1) return null;

        return (
            <div className="text-center mt-4">
                <button
                    className="btn btn-sm btn-outline-dark mx-1"
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                    Prev
                </button>
                {[...Array(totalPages)].map((_, i) => (
                    <button
                        key={i}
                        className={`btn btn-sm mx-1 ${currentPage === i + 1 ? 'btn-dark' : 'btn-outline-dark'}`}
                        onClick={() => setCurrentPage(i + 1)}
                    >
                        {i + 1}
                    </button>
                ))}
                <button
                    className="btn btn-sm btn-outline-dark mx-1"
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        );
    };

    return (
        <div className="rts__section facility__area is__about has__background has__shape">
            <div className="section__shape wow fadeInRight" data-wow-delay=".5s">
                <img src="/assets/images/pages/about-shape.svg" alt="" />
            </div>
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="facility__content">
                            <div className="section__content__left">
                                <span className="h6 subtitle__icon__two d-block wow fadeInUp">Facilities</span>
                                <h2 className="content__title h2 lh-1">Hotel Facilities</h2>
                            </div>
                            <div className="row mt-20 g-5 wow fadeInUp" data-wow-delay=".5s">
                                {renderFacilityCards()}
                            </div>
                            {renderPagination()}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        {facilityBanner ? (
                        <div className="facility__image jara-mask-3 jarallax"   
                  >
                        <img
                            height={765}
                            width={605}
                            className="jarallax-img"
                            src={facilityBanner}
                            alt="Facility Banner"
                        />
                        </div>
                    ) : (
                        <Skeleton height={765} width={605} />
                    )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FacilitiesSeven;
