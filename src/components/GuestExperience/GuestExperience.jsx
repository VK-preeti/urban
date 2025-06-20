//  import React, { useState, useEffect, useRef } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row, Col, Card, Nav, Button } from 'react-bootstrap';
// import { FaStar, FaQuoteLeft, FaPlayCircle, FaChevronLeft, FaChevronRight, FaUser } from 'react-icons/fa';
// import './GuestExperience.css'; // We'll create this for custom animations
// import { getVedioGuest } from '../../api/getVedioGuest';

// const GuestExperience = () => {
//   const [activeReview, setActiveReview] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeVideo, setActiveVideo] = useState(0);
//   const [animatedElements, setAnimatedElements] = useState({});
//   const sectionRef = useRef(null);
//     const [aboutus, setAboutus] = useState({});
//     const [loading, setLoading] = useState(true);

//   useEffect(() => {
//       getVedioGuest()
//         .then((data) => {
//           setAboutus(data.rooms);
//           console.log("data vedio review upward================>", data.rooms );
//         })
//         .catch((err) => {
//           console.error("Error fetching about us data:", err);
//         })
//         .finally(() => setLoading(false));
//     }, []);

//   // Sample reviews data with placeholder images instead of external URLs
//   const reviews = [
//     {
//       id: 1,
//       name: "Sarah Johnson",
//       rating: 5,
//       text: "The experience was absolutely phenomenal! The staff was attentive, the accommodations were pristine, and the amenities exceeded all expectations.",
//       avatar: "S"
//     },
//     {
//       id: 2,
//       name: "Michael Anderson",
//       rating: 5,
//       text: "I've stayed at many luxury hotels, but this one truly stands out. The attention to detail and personalized service made our stay unforgettable.",
//       avatar: "M"
//     },
//     {
//       id: 3,
//       name: "Emma Roberts",
//       rating: 4,
//       text: "Beautiful location and excellent service. The guest experience team went above and beyond to make our anniversary special. Will definitely return!",
//       avatar: "E"
//     }
//   ];

//   // Sample videos data
//   const videos = [
//     {
//       id: 1,
//       title: "Luxury Room Tour",
//       description: "Take a virtual tour of our premium luxury rooms",
//       embedId: "ScMzIvxBSi4"
//     },
//     {
//       id: 2,
//       title: "Spa & Wellness",
//       description: "Experience our award-winning spa facilities",
//       embedId: "KkFnm-LFT-Q"
//     },
//     {
//       id: 3,
//       title: "Dining Experience",
//       description: "Discover our gourmet cuisine and dining options",
//       embedId: "jM1aEU-l-aw"
//     }
//   ];

//   // Feature data
//   const features = [
//     {
//       title: "Personalized Service",
//       description: "Our staff is trained to anticipate your needs before you even ask.",
//       icon: "bi-person-check"
//     },
//     {
//       title: "Luxury Amenities",
//       description: "From spa treatments to gourmet dining, indulge in the finest amenities.",
//       icon: "bi-stars"
//     },
//     {
//       title: "Memorable Experiences",
//       description: "Create lasting memories with our curated experiences and activities.",
//       icon: "bi-heart"
//     }
//   ];

//   // Animation for reviews carousel
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveReview((prevActive) => (prevActive + 1) % reviews.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [reviews.length]);

//   // Manual navigation for reviews
//   const navigateReview = (direction) => {
//     if (direction === 'next') {
//       setActiveReview((prevActive) => (prevActive + 1) % reviews.length);
//     } else {
//       setActiveReview((prevActive) => (prevActive - 1 + reviews.length) % reviews.length);
//     }
//   };

//   // Scroll animation observer
//   useEffect(() => {
//     const observerOptions = {
//       threshold: 0.1,
//       rootMargin: '0px 0px -100px 0px'
//     };

//     const handleIntersect = (entries, observer) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           const targetId = entry.target.getAttribute('data-animation-id');
//           if (targetId) {
//             setAnimatedElements(prev => ({
//               ...prev,
//               [targetId]: true
//             }));
//           }
          
//           // Main section visibility
//           if (entry.target === sectionRef.current) {
//             setIsVisible(true);
//           }
//         }
//       });
//     };

//     const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
//     // Observe main section
//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }
    
//     // Observe all animated elements
//     document.querySelectorAll('[data-animation-id]').forEach(el => {
//       observer.observe(el);
//     });

//     return () => {
//       observer.disconnect();
//     };
//   }, []);

//   // Generate star ratings
//   const renderStars = (rating) => {
//     return Array(5).fill(0).map((_, i) => (
//       <FaStar key={i} className={i < rating ? "text-warning" : "text-muted"} />
//     ));
//   };

//   // Generate avatar when no image is available
//   const renderAvatar = (initial) => {
//     const colors = ["#4e73df", "#1cc88a", "#f6c23e", "#e74a3b", "#36b9cc"];
//     const colorIndex = initial.charCodeAt(0) % colors.length;
    
//     return (
//       <div 
//         className="rounded-circle d-flex align-items-center justify-content-center mb-3 mx-auto" 
//         style={{ 
//           width: '100px', 
//           height: '100px', 
//           backgroundColor: colors[colorIndex],
//           color: 'white',
//           fontSize: '2.5rem',
//           fontWeight: 'bold'
//         }}
//       >
//         {initial}
//       </div>
//     );
//   };

//   return (
//     <div 
//       id="guest-experience-section" 
//       ref={sectionRef}
//       className={`py-5 ${isVisible ? 'animate-fade-in visible' : 'invisible'}`}
//     >
//       <Container fluid className="px-md-5">
//         <Row className="mb-5">
//           <Col>
//             <div className="text-center mb-5" data-animation-id="title">
//               <h2 className={`display-4 fw-bold text-gradient ${animatedElements['title'] ? 'animate-slide-up' : ''}`}>
//                 The Ultimate Guest Experience
//               </h2>
//               <p className={`fs-5 text-muted mt-3 ${animatedElements['title'] ? 'animate-fade-in-delay' : ''}`}>
//                 Discover what makes our hospitality stand apart from the rest
//               </p>
//               <div className={`divider mx-auto ${animatedElements['title'] ? 'animate-grow' : ''}`}></div>
//             </div>
//           </Col>
//         </Row>

//         {/* Multiple Videos Section */}
//         <Row className="mb-5">
//           <Col lg={10} className="mx-auto">
//             {/* Video Navigation */}
//             <Nav 
//               variant="tabs" 
//               className="mb-3 justify-content-center flex-nowrap video-tabs" 
//               activeKey={activeVideo}
//             >
//               {videos.map((video, idx) => (
//                 <Nav.Item key={video.id} className="mx-1">
//                   <Nav.Link 
//                     eventKey={idx} 
//                     onClick={() => setActiveVideo(idx)}
//                     className={`d-flex align-items-center ${idx === activeVideo ? 'active' : ''}`}
//                   >
//                     <FaPlayCircle className="me-2" />
//                     <span className="d-none d-sm-inline">{video.title}</span>
//                     <span className="d-inline d-sm-none">Video {idx + 1}</span>
//                   </Nav.Link>
//                 </Nav.Item>
//               ))}
//             </Nav>
            
//             {/* Video Player */}
//             <div 
//               className={`ratio ratio-16x9 shadow-lg rounded overflow-hidden video-container`}
//               data-animation-id="video"
//             >
//               {videos.map((video, idx) => (
//                 <iframe 
//                   key={video.id}
//                   src={`https://www.youtube.com/embed/${video.embedId}`}
//                   title={video.title}
//                   allowFullScreen
//                   className={`rounded ${idx === activeVideo ? 'd-block' : 'd-none'}`}
//                 ></iframe>
//               ))}
//               <div className={`video-overlay ${animatedElements['video'] ? 'animate-fade-out' : ''}`}></div>
//             </div>
            
//             {/* Video Description */}
//             <p className={`text-center mt-3 fs-5 ${animatedElements['video'] ? 'animate-fade-in-delay' : ''}`}>
//               {videos[activeVideo].description}
//             </p>
//           </Col>
//         </Row>

//         {/* Reviews Section */}
//         {/* <Row className="mb-5 mt-5" data-animation-id="reviews">
//           <Col lg={10} className="mx-auto">
//             <div className={`text-center mb-4 ${animatedElements['reviews'] ? 'animate-slide-up' : ''}`}>
//               <h3 className="fw-bold">What Our Guests Say</h3>
//               <div className="divider mx-auto"></div>
//             </div>
            
//             <div className="position-relative testimonial-container">
              
//               <div className="testimonial-carousel">
//                 {reviews.map((review, idx) => (
//                   <div 
//                     key={review.id} 
//                     className={`testimonial-item text-center p-4 ${idx === activeReview ? 'active' : ''}`}
//                   >
//                     {renderAvatar(review.avatar)}
//                     <div className="mb-2">{renderStars(review.rating)}</div>
//                     <div className="quote-icon mb-3">
//                       <FaQuoteLeft size={24} className="text-primary opacity-50" />
//                     </div>
//                     <p className="testimonial-text mb-3">{review.text}</p>
//                     <h5 className="testimonial-name">{review.name}</h5>
//                   </div>
//                 ))}
//               </div>
              
              
//               <div className="testimonial-nav">
//                 <Button 
//                   variant="light" 
//                   className="testimonial-btn prev-btn shadow-sm"
//                   onClick={() => navigateReview('prev')}
//                 >
//                   <FaChevronLeft />
//                 </Button>
//                 <Button 
//                   variant="light" 
//                   className="testimonial-btn next-btn shadow-sm"
//                   onClick={() => navigateReview('next')}
//                 >
//                   <FaChevronRight />
//                 </Button>
//               </div>
              
              
//               <div className="testimonial-indicators">
//                 {reviews.map((_, idx) => (
//                   <button 
//                     key={idx} 
//                     className={`indicator ${idx === activeReview ? 'active' : ''}`} 
//                     onClick={() => setActiveReview(idx)}
//                   ></button>
//                 ))}
//               </div>
//             </div>
//           </Col>
//         </Row> */}

//         {/* Feature Highlights */}
//         <Row className="mt-5 gx-4 gy-4">
//           {features.map((feature, idx) => (
//             <Col key={idx} md={6} lg={4}>
//               <div 
//                 data-animation-id={`feature-${idx}`}
//                 className={`text-center p-4 h-100 border rounded shadow-sm feature-card ${
//                   animatedElements[`feature-${idx}`] ? 'animate-slide-up' : ''
//                 }`}
//                 style={{ animationDelay: `${idx * 0.2}s` }}
//               >
//                 <div className="feature-icon bg-primary bg-gradient text-white rounded-circle mb-3 mx-auto d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
//                   <i className={`bi ${feature.icon} fs-4`}></i>
//                 </div>
//                 <h4>{feature.title}</h4>
//                 <p className="text-muted">{feature.description}</p>
//               </div>
//             </Col>
//           ))}
//         </Row>

//         {/* Call to Action */}
//         <Row className="mt-5 pt-3">
//           <Col md={8} lg={6} className="mx-auto text-center">
//             <div 
//               data-animation-id="cta"
//               className={`p-4 rounded-lg shadow bg-gradient-primary text-white cta-section ${
//                 animatedElements['cta'] ? 'animate-scale-in' : ''
//               }`}
//             >
//               <h3 className="mb-3">Ready to Experience Luxury?</h3>
//               <p className="mb-4">Book your stay now and discover why our guests keep coming back.</p>
//               <Button variant="light" className="btn-lg px-4">Book Now</Button>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default GuestExperience;

 

import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Nav, Button, Spinner } from 'react-bootstrap';
import { FaStar, FaQuoteLeft, FaPlayCircle, FaChevronLeft, FaChevronRight, FaUser } from 'react-icons/fa';
import './GuestExperience.css'; // We'll create this for custom animations
import { getVedioGuest } from '../../api/getVedioGuest';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Link } from 'react-router-dom';

const GuestExperience = () => {
  const [activeReview, setActiveReview] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeVideo, setActiveVideo] = useState(0);
  const [animatedElements, setAnimatedElements] = useState({});
  const sectionRef = useRef(null);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getVedioGuest()
      .then((data) => {
        // Transform the API data into the format needed for videos
        if (data && data.rooms && Array.isArray(data.rooms)) {
          const formattedVideos = data.rooms.map((item) => ({
            id: item.id,
            title: item.category,
            description: `Experience our ${item.category.toLowerCase()} services`,
            videoLink: item.video_link,
            createdAt: item.created_at,
            status: item.status
          }));
          
          setVideos(formattedVideos);
          console.log("Formatted video data:", formattedVideos);
        } else {
          console.error("Invalid data format received from API:", data);
          setVideos([]);
        }
      })
      .catch((err) => {
        console.error("Error fetching videos data:", err);
        setVideos([]);
      })
      .finally(() => setLoading(false));
  }, []);

  // Sample reviews data with placeholder images instead of external URLs
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      text: "The experience was absolutely phenomenal! The staff was attentive, the accommodations were pristine, and the amenities exceeded all expectations.",
      avatar: "S"
    },
    {
      id: 2,
      name: "Michael Anderson",
      rating: 5,
      text: "I've stayed at many luxury hotels, but this one truly stands out. The attention to detail and personalized service made our stay unforgettable.",
      avatar: "M"
    },
    {
      id: 3,
      name: "Emma Roberts",
      rating: 4,
      text: "Beautiful location and excellent service. The guest experience team went above and beyond to make our anniversary special. Will definitely return!",
      avatar: "E"
    }
  ];

  // Feature data
  const features = [
    {
      title: "Personalized Service",
      description: "Our staff is trained to anticipate your needs before you even ask.",
      icon: "bi-person-check"
    },
    {
      title: "Luxury Amenities",
      description: "From spa treatments to gourmet dining, indulge in the finest amenities.",
      icon: "bi-stars"
    },
    {
      title: "Memorable Experiences",
      description: "Create lasting memories with our curated experiences and activities.",
      icon: "bi-heart"
    }
  ];

  // Animation for reviews carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReview((prevActive) => (prevActive + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  // Manual navigation for reviews
  const navigateReview = (direction) => {
    if (direction === 'next') {
      setActiveReview((prevActive) => (prevActive + 1) % reviews.length);
    } else {
      setActiveReview((prevActive) => (prevActive - 1 + reviews.length) % reviews.length);
    }
  };

  // Scroll animation observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const targetId = entry.target.getAttribute('data-animation-id');
          if (targetId) {
            setAnimatedElements(prev => ({
              ...prev,
              [targetId]: true
            }));
          }
          
          // Main section visibility
          if (entry.target === sectionRef.current) {
            setIsVisible(true);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Observe main section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    // Observe all animated elements
    document.querySelectorAll('[data-animation-id]').forEach(el => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Generate star ratings
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <FaStar key={i} className={i < rating ? "text-warning" : "text-muted"} />
    ));
  };

  // Generate avatar when no image is available
  const renderAvatar = (initial) => {
    const colors = ["#4e73df", "#1cc88a", "#f6c23e", "#e74a3b", "#36b9cc"];
    const colorIndex = initial.charCodeAt(0) % colors.length;
    
    return (
      <div 
        className="rounded-circle d-flex align-items-center justify-content-center mb-3 mx-auto" 
        style={{ 
          width: '100px', 
          height: '100px', 
          backgroundColor: colors[colorIndex],
          color: 'white',
          fontSize: '2.5rem',
          fontWeight: 'bold'
        }}
      >
        {initial}
      </div>
    );
  };

  // Extract video ID from Pexels URL
   const getEmbedUrl = (url) => {
  if (!url) return null;

  try {
    const parsed = new URL(url);

    // YouTube
    if (parsed.hostname.includes('youtube.com') && parsed.searchParams.get('v')) {
      return `https://www.youtube.com/embed/${parsed.searchParams.get('v')}`;
    }

    if (parsed.hostname === 'youtu.be') {
      return `https://www.youtube.com/embed/${parsed.pathname.slice(1)}`;
    }

    // Vimeo
    if (parsed.hostname.includes('vimeo.com')) {
      const vimeoId = parsed.pathname.split('/').pop();
      return `https://player.vimeo.com/video/${vimeoId}`;
    }

  } catch (err) {
    console.error("Invalid URL format:", url);
    return null;
  }

  return null;
};


  // Skeleton component for feature icons
  const FeatureIconSkeleton = () => (
    <div className="position-relative">
      <Skeleton 
        circle 
        height={60} 
        width={60} 
        className="mb-3 mx-auto"
      />
    </div>
  );

  // Skeleton component for video thumbnails
  const VideoThumbnailSkeleton = () => (
    <div className="w-100">
      <Skeleton height={400} className="w-100 rounded" />
      <Skeleton height={24} width="70%" className="mt-3 mx-auto" />
    </div>
  );

  // Skeleton component for feature cards
  const FeatureCardSkeleton = () => (
    <div className="p-4 h-100 border rounded shadow-sm">
      <FeatureIconSkeleton />
      <Skeleton height={28} width="70%" className="mb-2 mx-auto" />
      <Skeleton count={2} className="mx-auto" />
    </div>
  );

  // Skeleton component for video tabs
  const VideoTabsSkeleton = () => (
    <div className="d-flex justify-content-center mb-3">
      {[1, 2, 3].map((_, idx) => (
        <Skeleton key={idx} height={40} width={100} className="mx-1" />
      ))}
    </div>
  );

  return (
    <div 
      id="guest-experience-section" 
      ref={sectionRef}
      className={`py-5 ${isVisible ? 'animate-fade-in visible' : 'invisible'}`}
    >
      <Container fluid className="px-md-5">
        <Row className="mb-5">
          <Col>
            <div className="text-center mb-5" data-animation-id="title">
              {/* <h2 className={`display-4 fw-bold text-gradient ${animatedElements['title'] ? 'animate-slide-up' : ''}`}>
                The Ultimate Guest Experience
              </h2> */}
               <span className="h6 subtitle__icon__two d-block wow fadeInUp">
                   The Ultimate Guest Experience
                </span>
              {/* <p className={`fs-5 text-muted mt-3 ${animatedElements['title'] ? 'animate-fade-in-delay' : ''}`}>
                Discover what makes our hospitality stand apart from the rest
              </p> */}

              <h2 class="content__title h2 lh-1"> Discover what makes our hospitality stand apart from the rest   </h2>
              <div className={`divider mx-auto ${animatedElements['title'] ? 'animate-grow' : ''}`}></div>
            </div>
          </Col>
        </Row>

        {/* Videos Section */}
        <Row className="mb-5">
          <Col lg={10} className="mx-auto">
            {loading ? (
              <div className="py-4">
                <VideoTabsSkeleton />
                <VideoThumbnailSkeleton />
              </div>
            ) : videos.length > 0 ? (
              <>
                {/* Video Navigation */}
                <Nav 
                  variant="tabs" 
                  className="mb-3 justify-content-center flex-nowrap video-tabs" 
                  activeKey={activeVideo}
                >
                  {videos.map((video, idx) => (
                    <Nav.Item key={video.id} className="mx-1">
                      <Nav.Link 
                        eventKey={idx} 
                        onClick={() => setActiveVideo(idx)}
                        className={`d-flex align-items-center ${idx === activeVideo ? 'active' : ''}`}
                      >
                        <FaPlayCircle className="me-2" />
                        <span className="d-none d-sm-inline">{video.title}</span>
                        <span className="d-inline d-sm-none">Video {idx + 1}</span>
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
                
                {/* Video Player */}
                <div 
                  className={`ratio ratio-16x9 shadow-lg rounded overflow-hidden video-container`}
                  data-animation-id="video"
                >
                  {videos.map((video, idx) => {
                    // const embedUrl = getPexelsEmbedUrl(video.videoLink);
                    const embedUrl = getEmbedUrl(video.videoLink);

                    
                    return embedUrl ? (
                      <iframe 
                        key={video.id}
                        src={embedUrl}
                        title={video.title}
                        allowFullScreen
                        className={`rounded ${idx === activeVideo ? 'd-block' : 'd-none'}`}
                      ></iframe>
                    ) : (
                      <div 
                        key={video.id} 
                        className={`d-flex align-items-center justify-content-center bg-light rounded ${idx === activeVideo ? 'd-flex' : 'd-none'}`}
                      >
                        <div className="text-center p-4">
                          <FaPlayCircle size={48} className="text-muted mb-3" />
                          <h5>Video preview not available</h5>
                          <p className="mb-0">
                            <a href={video.videoLink} target="_blank" rel="noopener noreferrer">
                              Open video in a new tab
                            </a>
                          </p>
                        </div>
                      </div>
                    );
                  })}
                  <div className={`video-overlay ${animatedElements['video'] ? 'animate-fade-out' : ''}`}></div>
                </div>
                
                {/* Video Description */}
                <p className={`text-center mt-3 fs-5 ${animatedElements['video'] ? 'animate-fade-in-delay' : ''}`}>
                  {videos[activeVideo]?.description || 'Experience our premium services'}
                </p>
              </>
            ) : (
              <div className="text-center py-5 border rounded">
                <FaPlayCircle size={48} className="text-muted mb-3" />
                <h4>No videos available</h4>
                <p>Please check back later for our featured content.</p>
              </div>
            )}
          </Col>
        </Row>

        {/* Feature Highlights */}
        {/* <Row className="mt-5 gx-4 gy-4">
          {loading ? (
            // Skeleton loading state for features
            Array(3).fill(0).map((_, idx) => (
              <Col key={idx} md={6} lg={4}>
                <FeatureCardSkeleton />
              </Col>
            ))
          ) : (
            // Actual features
            features.map((feature, idx) => (
              <Col key={idx} md={6} lg={4}>
                <div 
                  data-animation-id={`feature-${idx}`}
                  className={`text-center p-4 h-100 border rounded shadow-sm feature-card ${
                    animatedElements[`feature-${idx}`] ? 'animate-slide-up' : ''
                  }`}
                  style={{ animationDelay: `${idx * 0.2}s` }}
                >
                  <div className="feature-icon  bg-gradient text-white rounded-circle mb-3 mx-auto d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', backgroundColor: 'var(--btn-1)' }}>
                    <i className={`bi ${feature.icon} fs-4`}></i>
                  </div>
                  <h4>{feature.title}</h4>
                  <p className="text-muted">{feature.description}</p>
                </div>
              </Col>
            ))
          )}
        </Row> */}

        {/* Call to Action */}
        <Row className="mt-5 pt-3">
          <Col md={8} lg={6} className="mx-auto text-center">
            {loading ? (
              <div className="p-4 rounded-lg shadow">
                <Skeleton height={36} width="60%" className="mb-3 mx-auto" />
                <Skeleton height={20} count={2} width="80%" className="mb-3 mx-auto" />
                <Skeleton height={44} width={120} className="mx-auto" />
              </div>
            ) : (
              <div 
                data-animation-id="cta"
                className={`p-4 rounded-lg shadow bg-gradient-primary text-white cta-section ${
                  animatedElements['cta'] ? 'animate-scale-in' : ''
                }`}
              >
                <h3 className="mb-3" style={{color: 'black'}}>Ready to Experience Luxury?</h3>
                <p className="mb-4" style={{color: 'black'}}>Book your stay now and discover why our guests keep coming back.</p>
                 <Link to='https://www.asiatech.in/booking_engine/index3.php?token=MTY='
            className="theme-btn btn-style fill no-border search__btn wow fadeInUp text-cen"
            data-wow-delay=".6s"
        >
            <span>Book Your Room</span>
        </Link>

              </div>
            )}
          </Col>
        </Row>

        {/* Reviews Section */}
        
      </Container>
    </div>
  );
};

export default GuestExperience;