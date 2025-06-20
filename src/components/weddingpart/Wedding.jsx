// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Card, Button, Form, Carousel } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaHeart, FaGlassCheers, FaRing, FaCalendarAlt, FaUtensils, FaCamera } from 'react-icons/fa';

// const Wedding = () => {
//   const [isVisible, setIsVisible] = useState({
//     hero: false,
//     packages: false,
//     gallery: false,
//     testimonials: false,
//     form: false
//   });

//   // Animation observer
//   useEffect(() => {
//     const observerOptions = {
//       threshold: 0.2,
//       rootMargin: '0px 0px -50px 0px'
//     };

//     const observerCallback = (entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           setIsVisible(prev => ({
//             ...prev,
//             [entry.target.id.replace('section-', '')]: true
//           }));
//         }
//       });
//     };

//     const observer = new IntersectionObserver(observerCallback, observerOptions);
    
//     const sections = document.querySelectorAll('section[id^="section-"]');
//     sections.forEach(section => {
//       observer.observe(section);
//     });

//     return () => {
//       sections.forEach(section => {
//         observer.unobserve(section);
//       });
//     };
//   }, []);

//   // Wedding packages data
//   const weddingPackages = [
//     {
//       id: 1,
//       name: "Intimate Elegance",
//       price: "$5,999",
//       capacity: "Up to 50 guests",
//       features: [
//         "Beachfront ceremony setup",
//         "3-hour reception with appetizers",
//         "Wedding cake",
//         "Bridal bouquet & boutonniere",
//         "Professional photography (4 hours)",
//         "Wedding coordinator"
//       ],
//       image: "/api/placeholder/600/400",
//       icon: <FaHeart />
//     },
//     {
//       id: 2,
//       name: "Grand Celebration",
//       price: "$12,999",
//       capacity: "Up to 120 guests",
//       features: [
//         "Garden or beachfront ceremony",
//         "5-hour premium open bar reception",
//         "Three-course plated dinner",
//         "Custom wedding cake",
//         "Floral arrangements & decorations",
//         "Photography & videography package",
//         "Bridal suite for wedding night"
//       ],
//       image: "/api/placeholder/600/400",
//       icon: <FaGlassCheers />
//     },
//     {
//       id: 3,
//       name: "Luxury Destination",
//       price: "$24,999",
//       capacity: "Up to 200 guests",
//       features: [
//         "Exclusive venue use for weekend",
//         "Welcome reception for all guests",
//         "Ceremony with custom design",
//         "6-hour premium reception",
//         "Five-course gourmet dinner",
//         "Live music & entertainment",
//         "Full weekend coordination",
//         "Three nights in presidential suite"
//       ],
//       image: "/api/placeholder/600/400",
//       icon: <FaRing />
//     }
//   ];

//   // Gallery images
//   const galleryImages = [
//     { id: 1, src: "/api/placeholder/800/600", alt: "Beach ceremony setup" },
//     { id: 2, src: "/api/placeholder/800/600", alt: "Elegant ballroom reception" },
//     { id: 3, src: "/api/placeholder/800/600", alt: "Sunset wedding" },
//     { id: 4, src: "/api/placeholder/800/600", alt: "Garden ceremony" },
//     { id: 5, src: "/api/placeholder/800/600", alt: "Wedding cake" },
//     { id: 6, src: "/api/placeholder/800/600", alt: "Reception table setting" }
//   ];

//   // Testimonials
//   const testimonials = [
//     {
//       id: 1,
//       name: "Jessica & Michael",
//       date: "June 2024",
//       text: "Our wedding at Moonlit Resort was an absolute dream. The staff took care of every detail, allowing us to fully enjoy our special day. The beachfront ceremony was breathtaking!",
//       image: "/api/placeholder/100/100"
//     },
//     {
//       id: 2,
//       name: "Amanda & Christopher",
//       date: "September 2024",
//       text: "From the planning process to the execution, everything was flawless. Our guests are still talking about the amazing food and beautiful venue. We couldn't have asked for more perfect memories.",
//       image: "/api/placeholder/100/100"
//     },
//     {
//       id: 3,
//       name: "Laura & Daniel",
//       date: "November 2024",
//       text: "Having our destination wedding here was the best decision we made. The wedding coordinator was exceptional, and the resort provided a magical backdrop for our celebration. Worth every penny!",
//       image: "/api/placeholder/100/100"
//     }
//   ];

//   return (
//     <div className="wedding-page">
//       {/* Hero Section */}
//       {/* <section id="section-hero" className="position-relative">
//         <div className="hero-image w-100 position-relative" style={{ 
//           height: '80vh', 
//           backgroundImage: 'url("/api/placeholder/1920/1080")',
//           backgroundSize: 'cover', 
//           backgroundPosition: 'center',
//           backgroundColor: '#888'
//         }}>
//           <div className="overlay position-absolute w-100 h-100 top-0 start-0" style={{ 
//             backgroundColor: 'rgba(0,0,0,0.4)'
//           }}></div>
//           <Container className="h-100 d-flex align-items-center">
//             <Row className="w-100">
//               <Col lg={8} className="text-white position-relative">
//                 <div className={`hero-content p-4 ${isVisible.hero ? 'animate__animated animate__fadeInUp' : ''}`}>
//                   <h1 className="display-3 fw-bold mb-4">Your Dream Wedding Awaits</h1>
//                   <p className="fs-4 mb-4">Create timeless memories at our breathtaking resort with stunning ocean views and world-class service</p>
//                   <div className="d-flex flex-wrap gap-3">
//                     <Button variant="primary" size="lg" className="rounded-pill px-4">Explore Packages</Button>
//                     <Button variant="outline-light" size="lg" className="rounded-pill px-4">Schedule a Tour</Button>
//                   </div>
//                 </div>
//               </Col>
//             </Row>
//           </Container>
//         </div>
//       </section> */}

//       {/* Introduction */}
//       <section className="py-5 bg-light">
//         <Container>
//           <Row className="justify-content-center text-center">
//             <Col lg={8}>
//               <h2 className="display-5 mb-4">Begin Your Forever at Moonlit Resort</h2>
//               <p className="lead mb-4">
//                 Our award-winning venue offers the perfect backdrop for your special day, whether you're dreaming of a 
//                 beachfront ceremony, a garden celebration, or an elegant ballroom reception.
//               </p>
//               <hr className="w-25 mx-auto my-4" />
//               <p>
//                 With personalized wedding packages, expert planners, and breathtaking locations, we ensure every detail 
//                 is perfect from "yes" to "I do." Our dedicated team will help you create a customized experience that 
//                 reflects your unique love story.
//               </p>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       {/* Packages Section */}
//       {/* <section id="section-packages" className="py-5">
//         <Container>
//           <h2 className="text-center display-5 mb-5">Wedding Packages</h2>
//           <Row>
//             {weddingPackages.map((pkg, index) => (
//               <Col lg={4} md={6} className="mb-4" key={pkg.id}>
//                 <Card className={`h-100 shadow package-card border-0 ${isVisible.packages ? `animate__animated animate__fadeInUp animate__delay-${index}s` : ''}`}>
//                   <div className="position-relative">
//                     <Card.Img variant="top" src={pkg.image} alt={pkg.name} />
//                     <div className="package-icon position-absolute" style={{
//                       top: '15px',
//                       right: '15px',
//                       backgroundColor: 'var(--bs-primary)',
//                       width: '50px',
//                       height: '50px',
//                       borderRadius: '50%',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       color: 'white',
//                       fontSize: '1.5rem'
//                     }}>
//                       {pkg.icon}
//                     </div>
//                   </div>
//                   <Card.Body>
//                     <Card.Title className="fs-4 fw-bold">{pkg.name}</Card.Title>
//                     <Card.Subtitle className="mb-3 text-primary fs-5">{pkg.price}</Card.Subtitle>
//                     <Card.Text className="mb-2 text-muted">{pkg.capacity}</Card.Text>
//                     <hr />
//                     <ul className="list-unstyled">
//                       {pkg.features.map((feature, i) => (
//                         <li key={i} className="mb-2">
//                           <span className="me-2">✓</span> {feature}
//                         </li>
//                       ))}
//                     </ul>
//                   </Card.Body>
//                   <Card.Footer className="bg-white border-0 pb-4">
//                     <Button variant="outline-primary" className="w-100">Learn More</Button>
//                   </Card.Footer>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </Container>
//       </section> */}

//       {/* Venue Highlights */}
//       <section className="py-5 bg-light">
//         <Container>
//           <h2 className="text-center display-5 mb-5">Perfect Venues for Every Style</h2>
//           <Row className="g-4">
//             <Col md={4}>
//               <div className="venue-card text-center p-4">
//                 <div className="venue-icon mb-3 mx-auto d-flex align-items-center justify-content-center" style={{
//                   backgroundColor: 'var(--bs-primary)',
//                   color: 'white',
//                   width: '80px',
//                   height: '80px',
//                   borderRadius: '50%',
//                   fontSize: '2rem'
//                 }}>
//                   <FaUtensils />
//                 </div>
//                 <h3>Grand Ballroom</h3>
//                 <p>Our elegant ballroom accommodates up to 300 guests with crystal chandeliers, customizable lighting, and a sophisticated ambiance perfect for grand celebrations.</p>
//               </div>
//             </Col>
//             <Col md={4}>
//               <div className="venue-card text-center p-4">
//                 <div className="venue-icon mb-3 mx-auto d-flex align-items-center justify-content-center" style={{
//                   backgroundColor: 'var(--bs-primary)',
//                   color: 'white',
//                   width: '80px',
//                   height: '80px',
//                   borderRadius: '50%',
//                   fontSize: '2rem'
//                 }}>
//                   <FaHeart />
//                 </div>
//                 <h3>Beachfront Ceremony</h3>
//                 <p>Say "I do" with your toes in the sand and panoramic ocean views as your backdrop. Our pristine beach offers a romantic setting for ceremonies of any size.</p>
//               </div>
//             </Col>
//             <Col md={4}>
//               <div className="venue-card text-center p-4">
//                 <div className="venue-icon mb-3 mx-auto d-flex align-items-center justify-content-center" style={{
//                   backgroundColor: 'var(--bs-primary)',
//                   color: 'white',
//                   width: '80px',
//                   height: '80px',
//                   borderRadius: '50%',
//                   fontSize: '2rem'
//                 }}>
//                   <FaCamera />
//                 </div>
//                 <h3>Garden Terrace</h3>
//                 <p>Our lush tropical gardens offer a tranquil setting with vibrant florals, cascading fountains, and natural beauty perfect for intimate ceremonies and cocktail receptions.</p>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       {/* Gallery Section */}
//       <section id="section-gallery" className="py-5">
//         <Container>
//           <h2 className="text-center display-5 mb-5">Wedding Gallery</h2>
//           <Row className="g-4">
//             {galleryImages.map((image, index) => (
//               <Col lg={4} md={6} key={image.id}>
//                 <div className={`gallery-item position-relative overflow-hidden ${isVisible.gallery ? `animate__animated animate__zoomIn animate__delay-${index % 3}s` : ''}`}>
//                   <img 
//                     src={image.src} 
//                     alt={image.alt} 
//                     className="img-fluid w-100" 
//                     style={{ height: '250px', objectFit: 'cover' }}
//                   />
//                   <div className="gallery-overlay position-absolute start-0 top-0 w-100 h-100 d-flex align-items-center justify-content-center">
//                     <p className="text-white m-0 p-3 text-center">{image.alt}</p>
//                   </div>
//                 </div>
//               </Col>
//             ))}
//           </Row>
//           <div className="text-center mt-5">
//             <Button variant="outline-primary" size="lg" className="rounded-pill px-4">View Full Gallery</Button>
//           </div>
//         </Container>
//       </section>

//       {/* Testimonials */}
//       <section id="section-testimonials" className="py-5 bg-light">
//         <Container>
//           <h2 className="text-center display-5 mb-5">Happy Couples</h2>
//           <Row>
//             <Col lg={10} className="mx-auto">
//               <Carousel controls={true} indicators={true} className={isVisible.testimonials ? 'animate__animated animate__fadeIn' : ''}>
//                 {testimonials.map(testimonial => (
//                   <Carousel.Item key={testimonial.id}>
//                     <div className="testimonial-item text-center p-4">
//                       <img 
//                         src={testimonial.image} 
//                         alt={testimonial.name} 
//                         className="rounded-circle mb-4"
//                         style={{ width: '100px', height: '100px', objectFit: 'cover' }}
//                       />
//                       <h5 className="mb-1">{testimonial.name}</h5>
//                       <p className="text-muted mb-4">{testimonial.date}</p>
//                       <blockquote className="blockquote">
//                         <p className="fs-5 mb-4">"{testimonial.text}"</p>
//                       </blockquote>
//                     </div>
//                   </Carousel.Item>
//                 ))}
//               </Carousel>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       {/* Planning Timeline */}
//       <section className="py-5">
//         <Container>
//           <h2 className="text-center display-5 mb-5">Wedding Planning Timeline</h2>
//           <Row className="justify-content-center">
//             <Col lg={10}>
//               <div className="timeline position-relative">
//                 {[
//                   { month: "12+ Months Before", tasks: ["Book your venue", "Select your wedding date", "Begin researching vendors"] },
//                   { month: "9 Months Before", tasks: ["Select and book key vendors", "Start shopping for wedding attire", "Create guest list"] },
//                   { month: "6 Months Before", tasks: ["Send save-the-dates", "Book accommodations for guests", "Plan honeymoon"] },
//                   { month: "3 Months Before", tasks: ["Send invitations", "Finalize menu and cake", "Schedule final dress fittings"] },
//                   { month: "1 Month Before", tasks: ["Confirm all details with vendors", "Create wedding day timeline", "Finalize guest count"] }
//                 ].map((period, index) => (
//                   <div key={index} className="timeline-item row mb-5 position-relative">
//                     <div className="col-md-3">
//                       <div className="timeline-date bg-primary text-white p-3 rounded text-center position-relative">
//                         {period.month}
//                       </div>
//                     </div>
//                     <div className="col-md-9">
//                       <div className="timeline-content p-4 shadow-sm bg-white rounded">
//                         <ul className="mb-0">
//                           {period.tasks.map((task, i) => (
//                             <li key={i} className="mb-2">{task}</li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       {/* Contact Form */}
//       <section id="section-form" className="py-5 bg-primary text-white">
//         <Container>
//           <Row className="justify-content-center">
//             <Col lg={8} className={`text-center ${isVisible.form ? 'animate__animated animate__fadeInUp' : ''}`}>
//               <h2 className="display-5 mb-4">Begin Your Wedding Journey</h2>
//               <p className="lead mb-5">Contact our wedding specialists to start planning your perfect day</p>
              
//               <Card className="border-0 p-4 text-dark">
//                 <Card.Body>
//                   <Form>
//                     <Row className="g-3">
//                       <Col md={6}>
//                         <Form.Group>
//                           <Form.Label>Your Name</Form.Label>
//                           <Form.Control type="text" placeholder="Enter your name" />
//                         </Form.Group>
//                       </Col>
//                       <Col md={6}>
//                         <Form.Group>
//                           <Form.Label>Partner's Name</Form.Label>
//                           <Form.Control type="text" placeholder="Enter your partner's name" />
//                         </Form.Group>
//                       </Col>
//                       <Col md={6}>
//                         <Form.Group>
//                           <Form.Label>Email</Form.Label>
//                           <Form.Control type="email" placeholder="Enter email" />
//                         </Form.Group>
//                       </Col>
//                       <Col md={6}>
//                         <Form.Group>
//                           <Form.Label>Phone</Form.Label>
//                           <Form.Control type="tel" placeholder="Enter phone number" />
//                         </Form.Group>
//                       </Col>
//                       <Col md={6}>
//                         <Form.Group>
//                           <Form.Label>Estimated Guest Count</Form.Label>
//                           <Form.Select>
//                             <option>Select guest count</option>
//                             <option>Less than 50</option>
//                             <option>50-100</option>
//                             <option>100-150</option>
//                             <option>150-200</option>
//                             <option>200+</option>
//                           </Form.Select>
//                         </Form.Group>
//                       </Col>
//                       <Col md={6}>
//                         <Form.Group>
//                           <Form.Label>Preferred Wedding Date</Form.Label>
//                           <Form.Control type="date" />
//                         </Form.Group>
//                       </Col>
//                       <Col md={12}>
//                         <Form.Group>
//                           <Form.Label>Additional Details</Form.Label>
//                           <Form.Control as="textarea" rows={3} placeholder="Tell us about your vision for your special day" />
//                         </Form.Group>
//                       </Col>
//                       <Col md={12} className="text-center mt-4">
//                         <Button variant="primary" size="lg" className="px-5">Submit Request</Button>
//                       </Col>
//                     </Row>
//                   </Form>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       {/* Additional Services */}
//       <section className="py-5">
//         <Container>
//           <h2 className="text-center display-5 mb-5">Additional Wedding Services</h2>
//           <Row className="g-4">
//             {[
//               { 
//                 title: "Rehearsal Dinner", 
//                 description: "Begin your wedding celebration with an elegant rehearsal dinner in one of our private dining rooms or beachfront settings.",
//                 icon: <FaCalendarAlt className="mb-3 text-primary" size={40} />
//               },
//               { 
//                 title: "Wedding Spa Packages", 
//                 description: "Relax before your big day with bridal party spa packages including massages, facials, and beauty treatments.",
//                 icon: <FaHeart className="mb-3 text-primary" size={40} />
//               },
//               { 
//                 title: "Post-Wedding Brunch", 
//                 description: "Extend your celebration with a farewell brunch for guests, featuring gourmet cuisine and mimosas.",
//                 icon: <FaGlassCheers className="mb-3 text-primary" size={40} />
//               }
//             ].map((service, index) => (
//               <Col md={4} key={index}>
//                 <div className="text-center p-4 h-100 border rounded shadow-sm">
//                   {service.icon}
//                   <h4 className="mb-3">{service.title}</h4>
//                   <p className="text-muted">{service.description}</p>
//                   <Button variant="link" className="mt-3">Learn More</Button>
//                 </div>
//               </Col>
//             ))}
//           </Row>
//         </Container>
//       </section>

//       {/* Call to Action */}
//       <section className="py-5 text-white" style={{ 
//         backgroundImage: 'url("/api/placeholder/1920/600")',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundColor: '#888',
//         position: 'relative'
//       }}>
//         <div className="overlay position-absolute w-100 h-100 top-0 start-0" style={{ 
//           backgroundColor: 'rgba(0,0,0,0.6)'
//         }}></div>
//         <Container className="position-relative">
//           <Row className="justify-content-center text-center">
//             <Col lg={8}>
//               <h2 className="display-4 mb-4">Start Planning Your Dream Wedding Today</h2>
//               <p className="lead mb-4">
//                 Our wedding specialists are ready to help you create memories that will last a lifetime
//               </p>
//               <Button variant="light" size="lg" className="me-3 mb-2 mb-md-0">
//                 Download Wedding Brochure
//               </Button>
//               <Button variant="outline-light" size="lg">
//                 Schedule a Tour
//               </Button>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       {/* Custom CSS for animations */}
//       <style jsx>{`
//         /* Gallery hover effect */
//         .gallery-item {
//           cursor: pointer;
//           transition: all 0.3s ease;
//         }
        
//         .gallery-overlay {
//           background-color: rgba(0,0,0,0.7);
//           opacity: 0;
//           transition: all 0.3s ease;
//         }
        
//         .gallery-item:hover .gallery-overlay {
//           opacity: 1;
//         }
        
//         .gallery-item:hover {
//           transform: scale(1.03);
//         }
        
//         /* Timeline styling */
//         .timeline::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           bottom: 0;
//           left: 25%;
//           width: 2px;
//           margin-left: -1px;
//           background-color: var(--bs-primary);
//         }
        
//         @media (max-width: 767.98px) {
//           .timeline::before {
//             left: 50%;
//           }
//         }
        
//         /* Adding animate.css classes */
//         .animate__animated {
//           animation-duration: 1s;
//         }
        
//         .animate__delay-0s {
//           animation-delay: 0.1s;
//         }
        
//         .animate__delay-1s {
//           animation-delay: 0.3s;
//         }
        
//         .animate__delay-2s {
//           animation-delay: 0.5s;
//         }
        
//         /* Package card hover effect */
//         .package-card {
//           transition: all 0.3s ease;
//         }
        
//         .package-card:hover {
//           transform: translateY(-10px);
//           box-shadow: 0 1rem 3rem rgba(0,0,0,.175) !important;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Wedding;

 
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form, Carousel, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHeart, FaGlassCheers, FaRing, FaCalendarAlt, FaUtensils, FaCamera, FaEnvelope, FaMapMarkerAlt, FaPhone, FaPlay } from 'react-icons/fa';
import WeddingContactForm from './WeddingContactForm';
import TestimonialFive from '../testimonials/TestimonialFive';
import ServiceFive from '../service/ServiceFive';
import WeddingPlanning from './WeddingPlanning';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { getWeddingVenue } from './../../api/getWeddingVenue';
 

const Wedding = () => {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    intro: false,
    packages: false,
    venues: false,
    gallery: false,
    testimonials: false,
    timeline: false,
    form: false,
    services: false,
    cta: false
  });
  
  const [venues, setVenues] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Fetch venues and gallery data from API
  useEffect(() => {
    setLoading(true);
    getWeddingVenue()
      .then((data) => {
        if (data?.status && data?.allVenuses) {
          setVenues(data.allVenuses);
          console.log("wedding venues data===========>", data.allVenuses);
        }
        
        if (data?.status && data?.wedPhoto) {
          setGalleryImages(data.wedPhoto);
          console.log("wedding gallery data===========>", data.wedPhoto);
        }
      })
      .catch((err) => {
        console.error("Error fetching wedding data:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  // Animation observer with enhanced threshold
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id.replace('section-', '')]: true
          }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    const sections = document.querySelectorAll('section[id^="section-"]');
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  // Default venue icons to use when no icon is provided
  const venueIcons = [FaUtensils, FaHeart, FaCamera];
  
  // Fallback gallery images in case the API fails
  const fallbackGalleryImages = [
    { id: 1, image: "https://img.veenaworld.com/wp-content/uploads/2020/07/Dynasty-Resort.jpg?imwidth=1080", title: "Beach ceremony setup" },
    { id: 2, image: "https://img.veenaworld.com/wp-content/uploads/2020/07/Dynasty-Resort.jpg?imwidth=1080", title: "Elegant ballroom reception" },
    { id: 3, image: "https://img.veenaworld.com/wp-content/uploads/2020/07/Dynasty-Resort.jpg?imwidth=1080", title: "Sunset wedding" },
    { id: 4, image: "https://img.veenaworld.com/wp-content/uploads/2020/07/Dynasty-Resort.jpg?imwidth=1080", title: "Garden ceremony" },
    { id: 5, image: "https://img.veenaworld.com/wp-content/uploads/2020/07/Dynasty-Resort.jpg?imwidth=1080", title: "Wedding cake" },
    { id: 6, image: "https://img.veenaworld.com/wp-content/uploads/2020/07/Dynasty-Resort.jpg?imwidth=1080", title: "Reception table setting" }
  ];

  // Helper function to sanitize HTML - use with caution
  const createMarkup = (html) => {
    return { __html: html };
  };
  
  return (
    <div className="wedding-page">
      
      {/* Venue Highlights */}
      <section id="section-venues" className="py-5 bg-light">
        <Container>
          <h2 className={`content__title h2 lh-1 text-center ${isVisible.venues ? 'animate__animated animate__fadeInDown' : ''}`}>Your Perfect Wedding Venue Awaits</h2>
          <Row className="g-4">
            {loading ? (
              // Loading state for venues
              Array(3).fill(0).map((_, index) => (
                <Col md={4} key={`venue-skeleton-${index}`}>
                  <div className="venue-card text-center p-4">
                    <Skeleton circle height={80} width={80} className="mb-3 mx-auto" />
                    <Skeleton height={30} width="60%" className="mb-3 mx-auto" />
                    <Skeleton count={3} className="mb-1" />
                  </div>
                </Col>
              ))
            ) : venues.length > 0 ? (
              // Display API venues
              venues.map((venue, index) => (
                <Col md={4} key={venue.id}>
                  <div className={`venue-card text-center p-4 ${isVisible.venues ? `animate__animated animate__zoomIn animate__delay-${index % 3}s` : ''}`} style={{
                        transition: 'all 0.4s ease',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        height: '100%',
                        position: 'relative',
                        borderBottom: '3px solid transparent',
                    }}
                     >
                    <div className="venue-icon mb-3 mx-auto d-flex align-items-center justify-content-center" style={{
                      backgroundColor: 'var(--btn-1)',
                      color: 'white',
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      fontSize: '2rem'
                    }}>
                      {venue.icon ? (
                        <img src={venue.icon} alt={venue.title} className="img-fluid" style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
                      ) : (
                        React.createElement(venueIcons[index % venueIcons.length])
                      )}
                    </div>
                    <h3>{venue.title}</h3>
                    <div dangerouslySetInnerHTML={createMarkup(venue.description)} />
                  </div>
                </Col>
              ))
            ) : (
              // Fallback venues if API returns empty
              <>
                <Col md={4}>
                  <div className={`venue-card text-center p-4 ${isVisible.venues ? 'animate__animated animate__zoomIn animate__delay-0s' : ''}`}>
                    <div className="venue-icon mb-3 mx-auto d-flex align-items-center justify-content-center" style={{
                      backgroundColor: 'var(--btn-1)',
                      color: 'white',
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      fontSize: '2rem'
                    }}>
                      <FaUtensils />
                    </div>
                    <h3>Grand Ballroom</h3>
                    <p>Our elegant ballroom accommodates up to 300 guests with crystal chandeliers, customizable lighting, and a sophisticated ambiance perfect for grand celebrations.</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className={`venue-card text-center p-4 ${isVisible.venues ? 'animate__animated animate__zoomIn animate__delay-1s' : ''}`}>
                    <div className="venue-icon mb-3 mx-auto d-flex align-items-center justify-content-center" style={{
                      backgroundColor: 'var(--btn-1)',
                      color: 'white',
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      fontSize: '2rem'
                    }}>
                      <FaHeart />
                    </div>
                    <h3>Beachfront Ceremony</h3>
                    <p>Say "I do" with your toes in the sand and panoramic ocean views as your backdrop. Our pristine beach offers a romantic setting for ceremonies of any size.</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className={`venue-card text-center p-4 ${isVisible.venues ? 'animate__animated animate__zoomIn animate__delay-2s' : ''}`}>
                    <div className="venue-icon mb-3 mx-auto d-flex align-items-center justify-content-center" style={{
                      backgroundColor: 'var(--btn-1)',
                      color: 'white',
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      fontSize: '2rem'
                    }}>
                      <FaCamera />
                    </div>
                    <h3>Garden Terrace</h3>
                    <p>Our lush tropical gardens offer a tranquil setting with vibrant florals, cascading fountains, and natural beauty perfect for intimate ceremonies and cocktail receptions.</p>
                  </div>
                </Col>
              </>
            )}
          </Row>
        </Container>
      </section>

      {/* Gallery Section */}
      <section id="section-gallery" className="py-5">
        <Container>
          <h2 className={`content__title h2 lh-1 text-center ${isVisible.gallery ? 'animate__animated animate__fadeInDown' : ''}`}>Wedding Gallery</h2>
          <Row className="g-4">
            {loading ? (
              // Loading state for gallery
              Array(6).fill(0).map((_, index) => (
                <Col lg={4} md={6} key={`gallery-skeleton-${index}`}>
                  <Skeleton height={250} className="w-100" />
                </Col>
              ))
            ) : galleryImages.length > 0 ? (
              // Display API gallery images
              galleryImages.map((image, index) => (
                <Col lg={4} md={6} key={image.id}>
                  <div 
                    className={`gallery-item position-relative overflow-hidden ${isVisible.gallery ? `animate__animated animate__zoomIn animate__delay-${index % 3}s` : ''}`}
                    onClick={() => {
                      setSelectedItem(image);
                      setShowModal(true);
                    }}
                  >
                    <img 
                      src={image.image} 
                      alt={image.title} 
                      className="img-fluid w-100" 
                      style={{ height: '250px', objectFit: 'cover' }}
                    />
                    <div className="gallery-overlay position-absolute start-0 top-0 w-100 h-100 d-flex align-items-center justify-content-center">
                      <div className="text-white m-0 p-3 text-center">
                        <h5>{image.title}</h5>
                        {image.video_link && (
                          <div className="video-indicator mt-2">
                            <FaPlay className="me-2" />
                            <span>Watch Video</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Col>
              ))
            ) : (
              // Fallback gallery if API returns empty
              fallbackGalleryImages.map((image, index) => (
                <Col lg={4} md={6} key={image.id}>
                  <div 
                    className={`gallery-item position-relative overflow-hidden ${isVisible.gallery ? `animate__animated animate__zoomIn animate__delay-${index % 3}s` : ''}`}
                    onClick={() => {
                      setSelectedItem(image);
                      setShowModal(true);
                    }}
                  >
                    <img 
                      src={image.image} 
                      alt={image.title} 
                      className="img-fluid w-100" 
                      style={{ height: '250px', objectFit: 'cover' }}
                    />
                    <div className="gallery-overlay position-absolute start-0 top-0 w-100 h-100 d-flex align-items-center justify-content-center">
                      <div className="text-white m-0 p-3 text-center">
                        <h5>{image.title}</h5>
                      </div>
                    </div>
                  </div>
                </Col>
              ))
            )}
          </Row>
          {/* <div className="text-center mt-5">
             <Button variant="outline-primary" size="lg" className="rounded-pill px-4 btn-custom-outline">View Full Gallery</Button>  
          </div> */}
        </Container>
      </section>

      {/* Testimonials */}
      <TestimonialFive />

      {/* Planning Timeline */}
       <WeddingPlanning />

       <WeddingContactForm />

      {/* Additional Services */}
       <ServiceFive />

      {/* Call to Action */}
      {/* <section id="section-cta" className="py-5 text-white" style={{ 
        backgroundImage: 'url("/api/placeholder/1920/600")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#888',
        position: 'relative'
      }}>
        <div className="overlay position-absolute w-100 h-100 top-0 start-0" style={{ 
          backgroundColor: 'rgba(187, 183, 183, 0.6)'
        }}></div>
        <Container className="position-relative">
          <Row className="justify-content-center text-center">
            <Col lg={8} className={isVisible.cta ? 'animate__animated animate__pulse' : ''}>
              <h2 className="display-4 mb-4">Start Planning Your Dream Wedding Today</h2>
              <p className="lead mb-4">
                Our wedding specialists are ready to help you create memories that will last a lifetime
              </p>
            <a href="/assets/pdf/privacy-policy.pdf" download target="_blank" rel="noopener noreferrer">
            <Button variant="light" size="lg" className="me-3 mb-2 mb-md-0 btn-custom-light">
              Download Wedding Brochure
            </Button>
          </a>


              
            </Col>
          </Row>
        </Container>
      </section> */}

      {/* Gallery Modal */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        centered
        className="gallery-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>{selectedItem?.title || 'Gallery Item'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedItem?.video_link ? (
            <div className="ratio ratio-16x9">
              <iframe
                src={selectedItem.video_link}
                title={selectedItem.title}
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          ) : (
            <img 
              src={selectedItem?.image} 
              alt={selectedItem?.title} 
              className="img-fluid w-100"
            />
          )}
          {selectedItem?.details && (
            <div className="mt-3" dangerouslySetInnerHTML={createMarkup(selectedItem.details)} />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Custom CSS for animations */}
      <style jsx>{`
        /* Custom colors */
        .btn-custom {
          background-color: var(--btn-1) !important;
          border-color: var(--btn-1) !important;
        }
        
        .btn-custom-outline {
          color: var(--btn-1) !important;
          border-color: var(--btn-1) !important;
        }
        
        .btn-custom-outline:hover {
          background-color: var(--btn-1) !important;
          color: white !important;
        }
        
        .btn-custom-light:hover {
          color: var(--btn-1) !important;
        }
        
        /* Gallery hover effect */
        .gallery-item {
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .gallery-overlay {
          background-color: rgba(0,0,0,0.7);
          opacity: 0;
          transition: all 0.3s ease;
        }
        
        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }
        
        .gallery-item:hover {
          transform: scale(1.03);
        }
        
        /* Timeline styling */
        .timeline::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 25%;
          width: 2px;
          margin-left: -1px;
          background-color: var(--btn-1);
        }
        
        @media (max-width: 767.98px) {
          .timeline::before {
            left: 50%;
          }
        }
        
        /* Adding animate.css classes */
        .animate__animated {
          animation-duration: 1s;
        }
        
        .animate__delay-0s {
          animation-delay: 0.1s;
        }
        
        .animate__delay-1s {
          animation-delay: 0.3s;
        }
        
        .animate__delay-2s {
          animation-delay: 0.5s;
        }
        
        .animate__delay-3s {
          animation-delay: 0.7s;
        }
        
        .animate__delay-4s {
          animation-delay: 0.9s;
        }
        
        /* Package card hover effect */
        .package-card {
          transition: all 0.4s ease;
        }
        
        .package-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 1rem 3rem rgba(0,0,0,.175) !important;
        }
        
        /* Service card hover effect */
        .service-card {
          transition: all 0.3s ease;
        }
        
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 0.5rem 1rem rgba(0,0,0,.15) !important;
          border-color: var(--btn-1);
        }
        
        /* Venue card hover effect */
        .venue-card {
          transition: all 0.3s ease;
          border-radius: 8px;
          background-color: white;
          box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,.075);
        }
        
        .venue-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 0.5rem 1rem rgba(0,0,0,.15) !important;
        }
        
        /* Video indicator in gallery */
        .video-indicator {
          display: inline-flex;
          align-items: center;
          background-color: rgba(0, 0, 0, 0.5);
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.875rem;
          transition: all 0.3s ease;
        }
        
        .gallery-item:hover .video-indicator {
          background-color: var(--btn-1);
        }
        
        /* Gallery modal */
        .gallery-modal .modal-content {
          background-color: #f8f9fa;
          border: none;
          border-radius: 8px;
          overflow: hidden;
        }
        
        .gallery-modal .modal-header {
          border-bottom: 1px solid rgba(0,0,0,0.1);
          background-color: white;
        }
        
        .gallery-modal .modal-footer {
          border-top: 1px solid rgba(0,0,0,0.1);
          background-color: white;
        }
      `}</style>
    </div>
  );
};

export default Wedding;