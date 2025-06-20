//  import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Card, Button, Badge, Placeholder } from 'react-bootstrap';
// import { motion } from 'framer-motion';
// import { FaCalendarAlt, FaPercentage, FaUtensils, FaSwimmingPool, FaSpa, FaWifi } from 'react-icons/fa';

// // Simulated data for offers
// const offerData = [
//   {
//     id: 1,
//     title: "Summer Escape Package",
//     discount: "25%",
//     image: "/api/placeholder/600/300",
//     description: "Enjoy a relaxing summer getaway with our all-inclusive package featuring premium accommodation, daily breakfast, and exclusive access to our spa facilities.",
//     validUntil: "September 30, 2025",
//     price: "$199",
//     originalPrice: "$265",
//     features: ["Free Breakfast", "Spa Access", "Pool Access", "Free Wifi"]
//   },
//   {
//     id: 2,
//     title: "Weekend Wellness Retreat",
//     discount: "20%",
//     image: "/api/placeholder/600/300",
//     description: "Recharge and rejuvenate with our wellness package including yoga sessions, healthy meals, and therapeutic spa treatments for a balanced weekend escape.",
//     validUntil: "December 15, 2025",
//     price: "$299",
//     originalPrice: "$375",
//     features: ["Yoga Sessions", "Healthy Meals", "Spa Treatment", "Free Wifi"]
//   },
//   {
//     id: 3,
//     title: "Romantic Getaway",
//     discount: "30%",
//     image: "/api/placeholder/600/300",
//     description: "Create unforgettable memories with our romantic package featuring champagne on arrival, couple's massage, and a candlelit dinner with breathtaking views.",
//     validUntil: "August 31, 2025",
//     price: "$349",
//     originalPrice: "$499",
//     features: ["Champagne", "Couple's Massage", "Private Dinner", "Free Wifi"]
//   },
//   {
//     id: 4,
//     title: "Family Fun Package",
//     discount: "15%",
//     image: "/api/placeholder/600/300",
//     description: "Perfect for family adventures with spacious accommodation, kids' activities, family dining options, and access to our recreational facilities.",
//     validUntil: "October 31, 2025",
//     price: "$399",
//     originalPrice: "$470",
//     features: ["Kids Activities", "Family Dining", "Pool Access", "Game Room"]
//   },
//   {
//     id: 5,
//     title: "Extended Stay Special",
//     discount: "35%",
//     image: "/api/placeholder/600/300",
//     description: "Stay longer and save more with our extended stay package offering premium amenities, daily housekeeping, and complimentary breakfast for stays of 5+ nights.",
//     validUntil: "December 31, 2025",
//     price: "$179",
//     originalPrice: "$275",
//     features: ["Daily Housekeeping", "Free Breakfast", "Laundry Service", "Free Wifi"]
//   },
//   {
//     id: 6,
//     title: "Business Traveler Package",
//     discount: "20%",
//     image: "/api/placeholder/600/300",
//     description: "Designed for business travelers with high-speed internet, ergonomic workspace, express check-in/out, and complimentary business center access.",
//     validUntil: "November 30, 2025",
//     price: "$219",
//     originalPrice: "$275",
//     features: ["Business Center", "Express Check-in", "High-Speed Internet", "Breakfast"]
//   }
// ];

// // Icon mapping
// const featureIcons = {
//   "Free Breakfast": <FaUtensils />,
//   "Spa Access": <FaSpa />,
//   "Pool Access": <FaSwimmingPool />,
//   "Free Wifi": <FaWifi />,
//   "Yoga Sessions": <FaSpa />,
//   "Healthy Meals": <FaUtensils />,
//   "Spa Treatment": <FaSpa />,
//   "Champagne": <FaUtensils />,
//   "Couple's Massage": <FaSpa />,
//   "Private Dinner": <FaUtensils />,
//   "Kids Activities": <FaSwimmingPool />,
//   "Family Dining": <FaUtensils />,
//   "Game Room": <FaSwimmingPool />,
//   "Daily Housekeeping": <FaSwimmingPool />,
//   "Laundry Service": <FaSpa />,
//   "Business Center": <FaWifi />,
//   "Express Check-in": <FaWifi />,
//   "High-Speed Internet": <FaWifi />,
//   "Breakfast": <FaUtensils />
// };

// // Skeleton loader for offers
// const OfferSkeleton = () => {
//   return (
//     <Col lg={4} md={6} className="mb-4">
//       <Card className="h-100 shadow">
//         <Placeholder as={Card.Img} animation="glow">
//           <Placeholder xs={12} style={{ height: '200px' }} />
//         </Placeholder>
//         <Card.Body>
//           <Placeholder as={Card.Title} animation="glow">
//             <Placeholder xs={8} />
//           </Placeholder>
//           <Placeholder as={Card.Text} animation="glow">
//             <Placeholder xs={12} />
//             <Placeholder xs={10} />
//             <Placeholder xs={8} />
//           </Placeholder>
//           <div className="d-flex justify-content-between align-items-center mt-3">
//             <Placeholder animation="glow">
//               <Placeholder xs={4} />
//             </Placeholder>
//             <Placeholder animation="glow">
//               <Placeholder.Button xs={4} variant="primary" />
//             </Placeholder>
//           </div>
//         </Card.Body>
//       </Card>
//     </Col>
//   );
// };

// // Individual offer card component
// const OfferCard = ({ offer }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       whileHover={{ scale: 1.02 }}
//       className="h-100"
//     >
//       <Card className="h-100 shadow offer-card">
//         <div className="position-relative">
//           <Card.Img variant="top" src={offer.image} alt={offer.title} className="offer-image" loading="lazy" />
//           <Badge 
//             bg="danger" 
//             className="position-absolute top-0 end-0 m-2 py-2 px-3 rounded-pill"
//           >
//             <FaPercentage className="me-1" /> {offer.discount} OFF
//           </Badge>
//         </div>
//         <Card.Body>
//           <Card.Title className="fw-bold">{offer.title}</Card.Title>
//           <Card.Text className="text-muted">{offer.description}</Card.Text>
          
//           <div className="d-flex flex-wrap my-3">
//             {offer.features.map((feature, index) => (
//               <Badge 
//                 key={index} 
//                 bg="light" 
//                 text="dark" 
//                 className="me-2 mb-2 py-2 px-3 d-flex align-items-center"
//               >
//                 <span className="me-1">{featureIcons[feature] || <FaUtensils />}</span> {feature}
//               </Badge>
//             ))}
//           </div>
          
//           <div className="d-flex align-items-center">
//             <FaCalendarAlt className="text-muted me-2" />
//             <small className="text-muted">Valid until: {offer.validUntil}</small>
//           </div>
//         </Card.Body>
//         <Card.Footer className="bg-white border-top-0">
//           <div className="d-flex justify-content-between align-items-center">
//             <div>
//               <h4 className="fw-bold text-primary mb-0">{offer.price}</h4>
//               <small className="text-decoration-line-through text-muted">{offer.originalPrice}</small>
//               <small className="text-muted"> per night</small>
//             </div>
//             <Button variant="primary" className="rounded-pill px-4">Book Now</Button>
//           </div>
//         </Card.Footer>
//       </Card>
//     </motion.div>
//   );
// };

// function OfferPage() {
//   const [loading, setLoading] = useState(true);
//   const [visibleOffers, setVisibleOffers] = useState([]);
//   const [allOffersLoaded, setAllOffersLoaded] = useState(false);

//   // Simulate initial loading
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setVisibleOffers(offerData.slice(0, 3));
//       setLoading(false);
//     }, 2000);
    
//     return () => clearTimeout(timer);
//   }, []);

//   // Load more offers function
//   const loadMoreOffers = () => {
//     setTimeout(() => {
//       setVisibleOffers(offerData);
//       setAllOffersLoaded(true);
//     }, 1000);
//   };

//   return (
//     <div className="offer-page py-5">
//       <Container>
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//         >
//           <Row className="text-center mb-5">
//             <Col lg={8} className="mx-auto">
//               <h1 className="display-4 fw-bold">Special Offers & Packages</h1>
//               <p className="lead text-muted">
//                 Discover our exclusive deals and packages designed to make your stay memorable.
//                 Book directly with us for the best rates guaranteed.
//               </p>
//             </Col>
//           </Row>
//         </motion.div>

//         <Row>
//           {loading ? (
//             // Skeleton loaders while content is loading
//             Array(3).fill().map((_, index) => <OfferSkeleton key={index} />)
//           ) : (
//             // Actual offers
//             visibleOffers.map((offer) => (
//               <Col lg={4} md={6} className="mb-4" key={offer.id}>
//                 <OfferCard offer={offer} />
//               </Col>
//             ))
//           )}
//         </Row>

//         {!loading && !allOffersLoaded && (
//           <Row className="mt-4">
//             <Col className="text-center">
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Button 
//                   variant="outline-primary" 
//                   size="lg" 
//                   className="rounded-pill px-5"
//                   onClick={loadMoreOffers}
//                 >
//                   Load More Offers
//                 </Button>
//               </motion.div>
//             </Col>
//           </Row>
//         )}

//         <Row className="mt-5 py-4 bg-light rounded-3">
//           <Col md={8} className="mx-auto text-center">
//             <h3>Need Help Planning Your Stay?</h3>
//             <p className="lead">
//               Our dedicated team is here to assist you in finding the perfect package for your needs.
//             </p>
//             <Button variant="primary" size="lg" className="rounded-pill px-5 mt-2">
//               Contact Us
//             </Button>
//           </Col>
//         </Row>
//       </Container>

//       {/* Custom CSS for the offer page */}
//       <style jsx>{`
//         .offer-card {
//           transition: all 0.3s ease;
//           overflow: hidden;
//         }
        
//         .offer-image {
//           height: 200px;
//           object-fit: cover;
//           transition: transform 0.5s ease;
//         }
        
//         .offer-card:hover .offer-image {
//           transform: scale(1.05);
//         }
        
//         @media (max-width: 768px) {
//           .offer-card {
//             margin-bottom: 20px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// export default OfferPage;
 


import React from 'react'
 
import OfferOne from './OfferOne'
import TopBar from '../header/TopBar'
import HeaderOne from '../header/HeaderOne'
import BreadcrumbOne from '../breadcrumb/BreadcrumbOne'
import FooterOne from '../footer/FooterOne'
 

const GuestExperiencePage = () => {
  return (
    <div>
        <TopBar />
        <HeaderOne />
        {/* <BreadcrumbOne
            title="Special Offer" 
            description="Welcome to Bokinn, where luxury meets comfort in the heart of Canada." 
        /> */}
         <BreadcrumbOne
 
        title="Special Offer"
        description="At The Urban Escape we pride ourselves on delivering an exceptional experience."
        bannerType="offer"
        useApiHeading={true}
        useApiDescription={true}
      />
        <OfferOne />
         <FooterOne />
    </div>
  )
}

export default GuestExperiencePage

