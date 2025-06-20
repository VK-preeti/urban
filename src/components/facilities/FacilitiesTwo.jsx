//  import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { getFacilities } from '../../api/getFacilities';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
// import BlogDetails from './../../pages/BlogDetails';

// const ITEMS_PER_PAGE = 4;

// const cleanHTML = (htmlString) => {
//     if (typeof htmlString !== 'string') return '';

//     try {
//         const decodedString = new DOMParser().parseFromString(htmlString, 'text/html').body.textContent;
//         const strippedText = new DOMParser().parseFromString(decodedString, 'text/html').body.textContent;
//         return strippedText.trim();
//     } catch (error) {
//         console.error("Error in cleanHTML:", error);
//         return htmlString;
//     }
// };

// function FacilitiesTwo() {
//     const [facilities, setFacilities] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [totalPages, setTotalPages] = useState(1);
//     const [facilityBanner, setFacilityBanner] = useState(null);

//     useEffect(() => {
//         setLoading(true);
//         getFacilities(currentPage)
//             .then((response) => {
//                 const facilityData = response?.facility?.data;
//                 if (facilityData?.length) {
//                     setFacilities(facilityData);
//                     setFacilityBanner(response?.facility_banner);
//                     setTotalPages(response.facility.last_page);
//                     console.log("facilities data home page  ============>", facilityData);
//                 } else {
//                     setFacilities([]);
//                     setTotalPages(1);
//                 }
//             })
//             .catch((error) => {
//                 console.error('Error fetching facilities:', error);
//                 setFacilities([]);
//             })
//             .finally(() => setLoading(false));
//     }, [currentPage]);

//     const handlePageChange = (pageNumber) => {
//         if (pageNumber >= 1 && pageNumber <= totalPages) {
//             setCurrentPage(pageNumber);
//         }
//     };

//     // Render pagination controls
//     const renderPagination = () => {
//         if (totalPages <= 1) return null;

//         const pages = [];
//         for (let i = 1; i <= totalPages; i++) {
//             pages.push(
//                 <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
//                     <button className="page-link" onClick={() => handlePageChange(i)}>
//                         {i}
//                     </button>
//                 </li>
//             );
//         }

//        const buttonStyle = {
//         background: 'white',
//         color: 'black',
//         border: '1px solid var(--btn-1)',
//         };

//         const activeButtonStyle = {
//         background: 'var(--btn-1)',
//         color: 'white',
//         border: '1px solid var(--btn-1)',
//         };

//         return (
//             <nav aria-label="Facilities pagination" className="mt-4">
//               <ul className="pagination justify-content-center">
//   <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
//     <button
//       className="page-link"
//       onClick={() => handlePageChange(currentPage - 1)}
//       disabled={currentPage === 1}
//       style={buttonStyle}
//     >
//       Previous
//     </button>
//   </li>
//   {Array.from({ length: totalPages }, (_, i) => {
//     const pageNumber = i + 1;
//     const isActive = currentPage === pageNumber;

//     return (
//       <li key={i} className={`page-item ${isActive ? 'active' : ''}`}>
//         <button
//           className="page-link"
//           onClick={() => handlePageChange(pageNumber)}
//           style={isActive ? activeButtonStyle : buttonStyle}
//         >
//           {pageNumber}
//         </button>
//       </li>
//     );
//   })}

//   <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
//     <button
//       className="page-link"
//       onClick={() => handlePageChange(currentPage + 1)}
//       disabled={currentPage === totalPages}
//       style={buttonStyle}
//     >
//       Next
//     </button>
//   </li>
// </ul>
//             </nav>
//         );
//     };

//     // Facility card skeleton loader
//     const FacilityCardSkeleton = () => (
//         <div className="card rts__card no-border is__home radius-6" >
//             <div className="card-body">
//                 <div className="icon" style={{ height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                     <Skeleton circle height={60} width={60} />
//                 </div>
//                 <div>
//                     <Skeleton height={30} width={150} className="mb-15" />
//                 </div>
//                 <Skeleton count={3} />
//             </div>
//         </div>
//     );

//     // Render dynamic facility cards from API
//     const renderFacilityCards = () => {
//         if (loading) {
//             return Array(ITEMS_PER_PAGE).fill().map((_, index) => (
//                 <div key={`skeleton-${index}`} className="col-xl-3 col-lg-6 col-md-6">
//                     <FacilityCardSkeleton />
//                 </div>
//             ));
//         }

//         if (facilities.length === 0) {
//             return (
//                 <div className="col-12 text-center">
//                     <p>No facilities available.</p>
//                 </div>
//             );
//         }

//         return facilities.map((facility, index) => (
//             <div key={facility.id || index} className="col-xl-3 col-lg-6 col-md-6">
//                 <div 
//                     className="card rts__card no-border is__home radius-6"
//                     style={{
//                         transition: 'all 0.4s ease',
//                         overflow: 'hidden',
//                         cursor: 'pointer',
//                         height: '100%',
//                         position: 'relative',
//                         borderBottom: '3px solid transparent',
//                     }}
//                     // onMouseEnter={(e) => {
                       
//                     //     e.currentTarget.style.transform = 'scale(1.03)';
//                     //     e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
                        
                         
//                     //     e.currentTarget.style.borderBottom = '3px solid #3498db';
                        
                         
//                     //     if (!e.currentTarget.querySelector('.card-color-overlay')) {
//                     //     const overlay = document.createElement('div');
//                     //     overlay.className = 'card-color-overlay';
//                     //     overlay.style.position = 'absolute';
//                     //     overlay.style.top = '0';
//                     //     overlay.style.left = '0';
//                     //     overlay.style.width = '100%';
//                     //     overlay.style.height = '100%';
//                     //     overlay.style.background = 'linear-gradient(135deg, rgba(52, 152, 219, 0.1) 0%, rgba(155, 89, 182, 0.1) 100%)';
//                     //     overlay.style.opacity = '0';
//                     //     overlay.style.transition = 'opacity 0.5s ease';
//                     //     overlay.style.pointerEvents = 'none';
//                     //     overlay.style.zIndex = '1';
//                     //     e.currentTarget.appendChild(overlay);
                        
                         
//                     //     setTimeout(() => {
//                     //         overlay.style.opacity = '1';
//                     //     }, 10);
//                     //     } else {
//                     //     e.currentTarget.querySelector('.card-color-overlay').style.opacity = '1';
//                     //     }
                        
                         
//                     //     const cardTitle = e.currentTarget.querySelector('.card-title, h3, h4, h5');
//                     //     if (cardTitle) {
//                     //     cardTitle.style.transition = 'all 0.4s ease';
//                     //     cardTitle.style.color = '#3498db';
//                     //     cardTitle.style.textShadow = '0 2px 5px rgba(52, 152, 219, 0.3)';
//                     //     }
                        
                        
//                     //     const icons = e.currentTarget.querySelectorAll('i, svg');
//                     //     icons.forEach(icon => {
//                     //     icon.style.transition = 'all 0.4s ease';
//                     //     icon.style.color = '#9b59b2';
//                     //     icon.style.filter = 'drop-shadow(0 0 3px rgba(155, 89, 182, 0.5))';
//                     //     });
                        
                        
//                     //     const buttons = e.currentTarget.querySelectorAll('button, .btn');
//                     //     buttons.forEach(button => {
//                     //     button.style.transition = 'all 0.4s ease';
//                     //     button.style.backgroundColor = '#3498db';
//                     //     button.style.borderColor = '#3498db';
//                     //     button.style.color = '#ffffff';
//                     //     });
                        
                        
//                     //     const cardHeader = e.currentTarget.querySelector('.card-header');
//                     //     if (cardHeader) {
//                     //     cardHeader.style.transition = 'all 0.4s ease';
//                     //     cardHeader.style.backgroundColor = 'rgba(52, 152, 219, 0.1)';
//                     //     cardHeader.style.borderLeftColor = '#3498db';
//                     //     cardHeader.style.borderLeftWidth = '3px';
//                     //     cardHeader.style.borderLeftStyle = 'solid';
//                     //     }
                        
                        
//                     //     const cardFooter = e.currentTarget.querySelector('.card-footer');
//                     //     if (cardFooter) {
//                     //     cardFooter.style.transition = 'all 0.4s ease';
//                     //     cardFooter.style.backgroundColor = 'rgba(155, 89, 182, 0.05)';
//                     //     }
//                     // }}
//                     // onMouseLeave={(e) => {
                         
//                     //     e.currentTarget.style.transform = 'scale(1)';
//                     //     e.currentTarget.style.boxShadow = 'none';
//                     //     e.currentTarget.style.borderBottom = '3px solid transparent';
                        
                         
//                     //     const overlay = e.currentTarget.querySelector('.card-color-overlay');
//                     //     if (overlay) {
//                     //     overlay.style.opacity = '0';
//                     //     setTimeout(() => {
//                     //         overlay.remove();
//                     //     }, 500);
//                     //     }
                        
                        
//                     //     const cardTitle = e.currentTarget.querySelector('.card-title, h3, h4, h5');
//                     //     if (cardTitle) {
//                     //     cardTitle.style.color = '';
//                     //     cardTitle.style.textShadow = 'none';
//                     //     }
                        
                         
//                     //     const icons = e.currentTarget.querySelectorAll('i, svg');
//                     //     icons.forEach(icon => {
//                     //     icon.style.color = '';
//                     //     icon.style.filter = 'none';
//                     //     });
                        
                         
//                     //     const buttons = e.currentTarget.querySelectorAll('button, .btn');
//                     //     buttons.forEach(button => {
//                     //     button.style.backgroundColor = '';
//                     //     button.style.borderColor = '';
//                     //     button.style.color = '';
//                     //     });
                        
                         
//                     //     const cardHeader = e.currentTarget.querySelector('.card-header');
//                     //     if (cardHeader) {
//                     //     cardHeader.style.backgroundColor = '';
//                     //     cardHeader.style.borderLeftColor = '';
//                     //     cardHeader.style.borderLeftWidth = '';
//                     //     cardHeader.style.borderLeftStyle = '';
//                     //     }
                        
                         
//                     //     const cardFooter = e.currentTarget.querySelector('.card-footer');
//                     //     if (cardFooter) {
//                     //     cardFooter.style.backgroundColor = '';
//                     //     }
//                     // }}
//                     >
 
//                     <div className="card-body">
//                         <div className="icon" style={{ height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                             {facility.icon ? (
//                                 <img 
//                                     src={facility.icon} 
//                                     alt={facility.title || 'Facility icon'} 
//                                     style={{ maxHeight: '100%', width: 'auto', objectFit: 'contain' }}
//                                 />
//                             ) : (
//                                 <img 
//                                     src="/assets/images/icon/bed.svg" 
//                                     alt="Default facility icon" 
//                                     style={{ maxHeight: '100%', width: 'auto', objectFit: 'contain' }}
//                                 />
//                             )}
//                         </div>
//                         <Link>
//                             <h6 className="card-title h6 mb-15" style={{color: 'black'}}>{facility.title || 'Facility'}</h6>
//                         </Link>
//                         <p className="card-text">
//                             {(cleanHTML(facility.short_description) || 
//                              cleanHTML(facility.description) || 
//                              'Facility description not available.').split(/\s+/).slice(0, 20).join(' ')}
//                             {((cleanHTML(facility.short_description) || 
//                                cleanHTML(facility.description) || '').split(/\s+/).length > 20) ? '...' : ''}
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         ));
//     };

//     return (
//         <>
//             {/* facilities */}
//             <div className="rts__section facilities__area has__background has__shape py-90">
//                 <div className="section__shape">
//                     <img src="/assets/images/shape/facility-1.svg" alt="" />
//                 </div>
//                 <div className="container">
//                     <div className="row justify-content-center text-center mb-40">
//                         <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
//                             <div className="section__topbar">
//                                 {loading ? (
//                                     <>
//                                         <Skeleton width={100} height={30} className="mx-auto mb-3" />
//                                         <Skeleton width={200} height={40} className="mx-auto" />
//                                     </>
//                                 ) : (
//                                     <>
//                                         <span className="h6 subtitle__icon__three mx-auto">
//                                             {facilityBanner?.title || "Facilities"}
//                                         </span>
//                                         <h2 className="section__title">
//                                             {facilityBanner?.subtitle || "Hotel Facilities"}
//                                         </h2>
//                                     </>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                     <div className="row g-4 wow fadeInUp" data-wow-delay=".5s">
//                         {renderFacilityCards()}
//                     </div>
//                     {renderPagination()}
//                 </div>
//             </div>
//             {/* facilities end */}
//         </>
//     );
// }

// export default FacilitiesTwo;



  import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { getServiceFacilities } from '../../api/getServiceFacilities';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function FacilitiesTwo() {
  const [facilitiesData, setFacilities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getServiceFacilities()
      .then((data) => {
        if (data?.allFacility) {
          setFacilities(data.allFacility);
        }
        console.log("Facilities fetched ====>", data.allFacility);
      })
      .catch((err) => {
        console.error("Error fetching facilities:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  const stripHtml = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="rts__section facilities__area has__background has__shape py-90">
      <div className="section__shape">
        <img src="/assets/images/shape/facility-1.svg" alt="" />
      </div>
      <div className="container">
        <div className="row justify-content-center text-center mb-40">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
            <div className="section__topbar">
              <span className="h6 subtitle__icon__three mx-auto" style={{color: '#ab8a62'}}>Facilities</span>
              <h2 className="section__title">Hotel Facilities</h2>
            </div>
          </div>
        </div>

        {loading ? (
          <Skeleton count={1} height={200} />
        ) : (
          <Slider {...sliderSettings}>
            {facilitiesData.map((item, index) => (
              <div key={index} className="px-2">
                <div className="card rts__card no-border is__home radius-6" style={{minHeight: '300px', maxHeight: '100%'}}>
                  <div className="card-body text-center">
                    {/* Icon centered */}
                    <div className="icon mb-3 d-flex justify-content-center">
                      <img
                        src={item.icon}
                        alt={item.title}
                        style={{ height: '40px', width: '40px', objectFit: 'contain' }}
                      />
                    </div>
                    <Link to="#">
                      <span className="card-title h6 mb-15" style={{color: 'black'}}>{item.title}</span>
                    </Link>
                    <p className="card-text">{stripHtml(item.description)}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
}

export default FacilitiesTwo;

