//  import React, { useState, useEffect } from 'react';
// import {
//   Container, Row, Col, Card, Button, Badge, Nav, Modal
// } from 'react-bootstrap';
// import {
//   FaSwimmingPool, FaUtensils, FaWifi, FaParking,
//   FaSpa, FaGlassCheers, FaConciergeBell, FaWineGlassAlt,
//   FaMountain, FaUmbrellaBeach, FaShuttleVan
// } from 'react-icons/fa';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
// import './PackagePage.css'; // Define your animations and CSS variables here
// import { getPackages } from '../../api/getPackages';

// const PackagePage = () => {
//   const [isVisible, setIsVisible] = useState({});
//   const [activeCategory, setActiveCategory] = useState('all');
//   const [selectedPackage, setSelectedPackage] = useState(null);
//   const [showModal, setShowModal] = useState(false);


//    const [aboutus, setAboutus] = useState({});
//     const [loading, setLoading] = useState(true);
  
//     // useEffect(() => {
//     //   getPackages()
//     //     .then((data) => {
//     //       setAboutus(data.aboutus);
//     //     })
//     //     .catch((err) => {
//     //       console.error("Error fetching about us data:", err);
//     //     })
//     //     .finally(() => setLoading(false));
//     // }, []);

//   const handleViewDetails = (pkg) => {
//     setSelectedPackage(pkg);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setSelectedPackage(null);
//     setShowModal(false);
//   };

//   const packageCategories = [
//     { id: 'all', name: 'All Packages' },
//     { id: 'family', name: 'Family Getaways' },
//     { id: 'romantic', name: 'Romantic Escapes' },
//     { id: 'adventure', name: 'Adventure Packages' },
//     { id: 'luxury', name: 'Luxury Retreats' }
//   ];

//   const packageData = [
//     {
//       id: 1,
//       name: "Family Fun Package",
//       category: "family",
//       price: "$499",
//       priceDetails: "per night, for family of four",
//       description: "Create unforgettable memories with the whole family...",
//       image: "/api/placeholder/600/400",
//       discount: "15% OFF",
//       features: [
//         { icon: <FaSwimmingPool />, text: "Access to children's pool" },
//         { icon: <FaUtensils />, text: "Kids eat free" },
//         { icon: <FaWifi />, text: "Free high-speed WiFi" },
//         { icon: <FaParking />, text: "Complimentary parking" }
//       ],
//       popular: true,
//       duration: "Minimum 2 nights"
//     },
//     {
//       id: 2,
//       name: "Romantic Getaway",
//       category: "romantic",
//       price: "$599",
//       priceDetails: "per night, for two people",
//       description: "Rekindle the romance with our special couples package...",
//       image: "/api/placeholder/600/400",
//       discount: "",
//       features: [
//         { icon: <FaSpa />, text: "Couples spa treatment" },
//         { icon: <FaGlassCheers />, text: "Welcome champagne" },
//         { icon: <FaUtensils />, text: "Candlelit dinner" },
//         { icon: <FaConciergeBell />, text: "24hr room service" }
//       ],
//       popular: false,
//       duration: "2-3 nights recommended"
//     },
//     {
//       id: 3,
//       name: "Luxury Escape",
//       category: "luxury",
//       price: "$1,299",
//       priceDetails: "per night, all-inclusive",
//       description: "Indulge in the ultimate luxury experience...",
//       image: "/api/placeholder/600/400",
//       discount: "10% OFF",
//       features: [
//         { icon: <FaConciergeBell />, text: "Personal butler" },
//         { icon: <FaWineGlassAlt />, text: "Premium drink package" },
//         { icon: <FaSpa />, text: "Daily spa treatment" },
//         { icon: <FaUtensils />, text: "All gourmet meals included" }
//       ],
//       popular: true,
//       duration: "3-7 nights recommended"
//     },
//     {
//       id: 4,
//       name: "Adventure Package",
//       category: "adventure",
//       price: "$749",
//       priceDetails: "per night, for two people",
//       description: "Experience the thrill of adventure...",
//       image: "/api/placeholder/600/400",
//       discount: "",
//       features: [
//         { icon: <FaMountain />, text: "Guided hiking tours" },
//         { icon: <FaUmbrellaBeach />, text: "Water sports included" },
//         { icon: <FaShuttleVan />, text: "Transportation to activities" },
//         { icon: <FaUtensils />, text: "Packed lunches for excursions" }
//       ],
//       popular: false,
//       duration: "Minimum 3 nights"
//     },
//     {
//       id: 5,
//       name: "Honeymoon Bliss",
//       category: "romantic",
//       price: "$899",
//       priceDetails: "per night, all-inclusive",
//       description: "Start your married life in paradise...",
//       image: "/api/placeholder/600/400",
//       discount: "20% OFF",
//       features: [
//         { icon: <FaSpa />, text: "Couples massage" },
//         { icon: <FaGlassCheers />, text: "Private beach dinner" },
//         { icon: <FaUmbrellaBeach />, text: "Sunset cruise" },
//         { icon: <FaWineGlassAlt />, text: "Daily champagne" }
//       ],
//       popular: true,
//       duration: "5-7 nights recommended"
//     },
//     {
//       id: 6,
//       name: "Business Traveler",
//       category: "luxury",
//       price: "$399",
//       priceDetails: "per night, single occupancy",
//       description: "Designed for the modern business traveler...",
//       image: "/api/placeholder/600/400",
//       discount: "",
//       features: [
//         { icon: <FaWifi />, text: "Premium high-speed WiFi" },
//         { icon: <FaConciergeBell />, text: "Express check-in/out" },
//         { icon: <FaParking />, text: "Valet parking" },
//         { icon: <FaUtensils />, text: "Breakfast included" }
//       ],
//       popular: false,
//       duration: "Flexible stay options"
//     }
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             setIsVisible(prev => ({
//               ...prev,
//               [entry.target.id]: true
//             }));
//           }
//         });
//       },
//       { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
//     );

//     document.querySelectorAll('.package-card').forEach(card => {
//       observer.observe(card);
//     });

//     return () => {
//       document.querySelectorAll('.package-card').forEach(card => {
//         observer.unobserve(card);
//       });
//     };
//   }, [activeCategory]);

//   const filteredPackages = activeCategory === 'all'
//     ? packageData
//     : packageData.filter(pkg => pkg.category === activeCategory);

//   return (
//     <section className="packages-section py-5">
//       <Container>
//         <Row className="mb-5 text-center">
//           <Col>
//             <h2 className="content__title h2 lh-1 text-center">Resort Packages & Special Offers</h2>
//             <p className="lead text-muted">Discover our curated selection of resort experiences tailored to your perfect getaway</p>
//           </Col>
//         </Row>

//         <Row className="mb-5">
//   <Col>
//     <div className="package-filter-scroll-wrapper">
//       <Nav
//         className="package-filter mb-4"
//         activeKey={activeCategory}
//         onSelect={(key) => setActiveCategory(key)}
//       >
//         {packageCategories.map((category) => (
//           <Nav.Item key={category.id}>
//             <Nav.Link
//               eventKey={category.id}
//               className={`mx-2 px-4 py-2 rounded-pill ${
//                 activeCategory === category.id ? 'active' : ''
//               }`}
//             >
//               {category.name}
//             </Nav.Link>
//           </Nav.Item>
//         ))}
//       </Nav>
//     </div>
//   </Col>
// </Row>


//         <Row className="g-4">
//           {filteredPackages.map((pkg, index) => (
//             <Col lg={4} md={6} key={pkg.id}>
//               <Card
//                 id={`package-${pkg.id}`}
//                 className={`package-card h-100 shadow-sm border-0 position-relative ${isVisible[`package-${pkg.id}`] ? 'animate-in' : ''}`}
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 {pkg.discount && (
//                   <Badge bg="danger" className="position-absolute discount-badge">
//                     {pkg.discount}
//                   </Badge>
//                 )}
//                 {pkg.popular && (
//                   <Badge bg="warning" text="dark" className="position-absolute popular-badge">
//                     Popular Choice
//                   </Badge>
//                 )}
//                 <div className="package-image-container">
//                   <Card.Img variant="top" src={pkg.image} alt={pkg.name} />
//                   <div className="package-overlay d-flex align-items-center justify-content-center">
//                     <Button variant="light" className="view-details-btn" onClick={() => handleViewDetails(pkg)}>
//                       View Details
//                     </Button>
//                   </div>
//                 </div>
//                 <Card.Body>
//                   <Card.Title className="mb-1 fs-4 fw-bold">{pkg.name}</Card.Title>
//                   <div className="mb-3 d-flex align-items-center">
//                     <span className="price fs-3 fw-bold text-primary me-2">{pkg.price}</span>
//                     <span className="text-muted">{pkg.priceDetails}</span>
//                   </div>
//                   <Card.Text>{pkg.description}</Card.Text>
//                   <p className="text-muted small mb-3">{pkg.duration}</p>
//                   <hr />
//                   <div className="features">
//                     {pkg.features.map((feature, i) => (
//                       <div key={i} className="feature-item d-flex align-items-center mb-2">
//                         <span className="feature-icon me-2" style={{ color: 'var(--btn-1)' }}>
//                           {feature.icon}
//                         </span>
//                         <span className="feature-text">{feature.text}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </Card.Body>
//                 <Card.Footer className="bg-white border-0 pt-0">
//                   <div className="d-grid gap-2">
//                     <Button style={{ backgroundColor: 'var(--btn-1)', borderColor: 'var(--btn-1)' }}>
//                       Book Now
//                     </Button>
//                     <Button variant="outline-secondary">
//                       Learn More
//                     </Button>
//                   </div>
//                 </Card.Footer>
//               </Card>
//             </Col>
//           ))}
//         </Row>

//         <Row className="mt-5 pt-4">
//           <Col md={10} lg={8} className="mx-auto text-center">
//             <div className="cta-box bg-light p-5 rounded shadow-sm">
//               <h3 className="mb-3">Need Help Finding the Perfect Package?</h3>
//               <p className="mb-4">Our resort specialists can help customize a package to meet your specific needs and preferences.</p>
//               <Button size="lg" style={{ backgroundColor: 'var(--btn-1)', borderColor: 'var(--btn-1)' }}>Contact Our Team</Button>
//             </div>
//           </Col>
//         </Row>

//         {/* Modal */}
//         <Modal show={showModal} onHide={handleCloseModal} centered>
//           <Modal.Header closeButton>
//             <Modal.Title>{selectedPackage?.name}</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <p className="text-muted mb-3">{selectedPackage?.description}</p>
//             <ul className="list-unstyled">
//               {selectedPackage?.features.map((feature, i) => (
//                 <li key={i} className="d-flex align-items-center mb-2">
//                   <span className="me-2" style={{ color: 'var(--btn-1)', fontSize: '1.25rem' }}>
//                     {feature.icon}
//                   </span>
//                   <span>{feature.text}</span>
//                 </li>
//               ))}
//             </ul>
//             <hr />
//             <p><strong>Duration:</strong> {selectedPackage?.duration}</p>
//             <p><strong>Price:</strong> {selectedPackage?.price} <small>({selectedPackage?.priceDetails})</small></p>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleCloseModal}>
//               Cancel
//             </Button>
//             <Button style={{ backgroundColor: 'var(--btn-1)', borderColor: 'var(--btn-1)' }}>
//               Book Now
//             </Button>
//           </Modal.Footer>
//         </Modal>

//       </Container>
//     </section>
//   );
// };

// export default PackagePage;


 import React, { useState, useEffect } from 'react';
import {
  Container, Row, Col, Card, Button, Badge, Nav, Modal
} from 'react-bootstrap';
import {
  FaSwimmingPool, FaUtensils, FaWifi, FaParking,
  FaSpa, FaGlassCheers, FaConciergeBell, FaWineGlassAlt,
  FaMountain, FaUmbrellaBeach, FaShuttleVan
} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './PackagePage.css'; // Define your animations and CSS variables here
import { getPackages } from '../../api/getPackages';
import { useNavigate } from 'react-router-dom';
import { FaBed, FaUserFriends, FaDoorOpen } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';

const PackagePage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

   const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  // Function to get icon component based on feature text
  const getFeatureIcon = (featureText) => {
    if (featureText.toLowerCase().includes('wifi')) return <FaWifi />;
    if (featureText.toLowerCase().includes('pool')) return <FaSwimmingPool />;
    if (featureText.toLowerCase().includes('food') || featureText.toLowerCase().includes('eat')) return <FaUtensils />;
    if (featureText.toLowerCase().includes('parking')) return <FaParking />;
    if (featureText.toLowerCase().includes('spa')) return <FaSpa />;
    if (featureText.toLowerCase().includes('drink') || featureText.toLowerCase().includes('champagne')) return <FaGlassCheers />;
    if (featureText.toLowerCase().includes('service')) return <FaConciergeBell />;
    if (featureText.toLowerCase().includes('wine')) return <FaWineGlassAlt />;
    if (featureText.toLowerCase().includes('mountain') || featureText.toLowerCase().includes('hiking')) return <FaMountain />;
    if (featureText.toLowerCase().includes('beach')) return <FaUmbrellaBeach />;
    if (featureText.toLowerCase().includes('transport')) return <FaShuttleVan />;
    
    // Default icon if no match
    return <FaConciergeBell />;
  };

  // Parse HTML content to extract features
  const parseFeatures = (featuresHtml) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = featuresHtml;
    
    const features = [];
    const paragraphs = tempDiv.querySelectorAll('p');
    
    paragraphs.forEach(p => {
      const featureText = p.textContent.trim();
      if (featureText) {
        features.push({
          icon: getFeatureIcon(featureText),
          text: featureText
        });
      }
    });
    
    return features;
  };

  // Transform API data to match our component format
  const transformPackageData = (apiData) => {
    return apiData.map(pkg => ({
      id: pkg.id,
      name: pkg.title,
      category: pkg.category.toLowerCase().replace(' ', ''),
      price: `Rs ${pkg.price}`,
      priceDetails: pkg.allowance_details,
      description: pkg.description ? stripHtmlTags(pkg.description) : "No description available",
      image: pkg.image || "/api/placeholder/600/400",
      discount: pkg.offer_price ? `Rs ${pkg.offer_price} ` : "",
      features: parseFeatures(pkg.features || ""),
      popular: Math.random() > 0.5, // Random for demo purposes
      duration: "Flexible stay options"
    }));
  };

  // Strip HTML tags from content
  const stripHtmlTags = (html) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
  };

  useEffect(() => {
    setLoading(true);
    getPackages()
      .then((data) => {
        const transformedData = transformPackageData(data);
        setPackages(transformedData);
      })
      .catch((err) => {
        console.error("Error fetching packages:", err);
        // Fallback to demo data in case of error
        setPackages(transformPackageData);
        console.log("package data=================>", transformPackageData );
      })
      .finally(() => setLoading(false));
  }, []);

  const handleViewDetails = (pkg) => {
    setSelectedPackage(pkg);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedPackage(null);
    setShowModal(false);
  };

  // Get unique categories from API data
  const getUniqueCategories = () => {
    const categories = packages.map(pkg => ({
      id: pkg.category,
      name: pkg.category.charAt(0).toUpperCase() + pkg.category.slice(1)
    }));
    
    // Remove duplicates
    const uniqueCategories = Array.from(new Map(categories.map(cat => 
      [cat.id, cat])).values());
    
    // Add 'All Packages' option
    return [{ id: 'all', name: 'All Packages' }, ...uniqueCategories];
  };

  const packageCategories = getUniqueCategories();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const cards = document.querySelectorAll('.package-card');
    cards.forEach(card => {
      observer.observe(card);
    });

    return () => {
      cards.forEach(card => {
        observer.unobserve(card);
      });
    };
  }, [activeCategory, loading]);

  const filteredPackages = activeCategory === 'all'
    ? packages
    : packages.filter(pkg => pkg.category === activeCategory);

  // Skeleton loading component
  const PackageSkeleton = ({ count = 3 }) => {
    return Array(count).fill(0).map((_, index) => (
      <Col lg={4} md={6} key={`skeleton-${index}`}>
        <Card className="package-card h-100 shadow-sm border-0">
          <Skeleton height={200} width={"100%"} />
          <Card.Body>
            <Skeleton width={"70%"} height={30} className="mb-2" />
            <Skeleton width={"40%"} height={25} className="mb-3" />
            <Skeleton count={2} className="mb-3" />
            <Skeleton width={"30%"} height={20} className="mb-3" />
            <hr />
            <Skeleton count={4} className="mb-2" height={20} />
          </Card.Body>
          <Card.Footer className="bg-white border-0 pt-0">
            <Skeleton height={38} className="mb-2" />
            <Skeleton height={38} />
          </Card.Footer>
        </Card>
      </Col>
    ));
  };

  return (
    <section className="packages-section py-5">
      <Container>
        <Row className="mb-5 text-center">
          <Col>
            <h2 className="content__title h2 lh-1 text-center">Resort Packages & Special Offers</h2>
            <p className="lead text-muted">Discover our curated selection of resort experiences tailored to your perfect getaway</p>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col>
            <div className="package-filter-scroll-wrapper">
              <Nav
                className="package-filter mb-4"
                activeKey={activeCategory}
                onSelect={(key) => setActiveCategory(key)}
              >
                {packageCategories.map((category) => (
                  <Nav.Item key={category.id}>
                    <Nav.Link
                      eventKey={category.id}
                      className={`mx-2 px-4 py-2 rounded-pill ${
                        activeCategory === category.id ? 'active' : ''
                      }`}
                    >
                      {category.name}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </div>
          </Col>
        </Row>

        <Row className="g-4">
          {loading ? (
            <PackageSkeleton count={6} />
          ) : (
            filteredPackages.map((pkg, index) => (
              <Col lg={4} md={6} key={pkg.id}>
                <Card
                  id={`package-${pkg.id}`}
                  className={`package-card h-100 shadow-sm border-0 position-relative ${isVisible[`package-${pkg.id}`] ? 'animate-in' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {pkg.discount && (
                    <Badge bg="danger" className="position-absolute discount-badge">
                      {pkg.discount}
                    </Badge>
                  )}
                  {pkg.popular && (
                    <Badge bg="warning" text="dark" className="position-absolute popular-badge">
                      Popular Choice
                    </Badge>
                  )}
                  <div className="package-image-container">
                    <Card.Img variant="top" src={pkg.image} alt={pkg.name} />
                    <div className="package-overlay d-flex align-items-center justify-content-center">
                      <Button variant="light" className="view-details-btn" onClick={() => handleViewDetails(pkg)}>
                        View Details
                      </Button>
                    </div>
                  </div>
                  <Card.Body>
                    <Card.Title className="mb-1 fs-4 fw-bold">{pkg.name}</Card.Title>
                    <div className="mb-3 d-flex align-items-center">
                      {/* <span className="price fs-3 fw-bold text-primary me-2">{pkg.price}</span> */}
                       <span className="offer__price mb-2">
                        <del style={{ marginRight: '10px' }}>{pkg.price}</del>
                        {pkg.discount}
                      </span>
                      {/* <span className="text-muted">{pkg.priceDetails}</span> */}
                    </div>
                     <FaHome style={{ color: 'brown', fontSize: '24px' }} className="ml-4 " />
                    <span style={{paddingLeft: '5px'}}>{pkg.priceDetails} Room</span>
                    <Card.Text>{pkg.description.substring(0, 100)}...</Card.Text>
                    <p className="text-muted small mb-3">{pkg.duration}</p>
                    <hr />
                    <div className="features">
                      {pkg.features.slice(0, 4).map((feature, i) => (
                        <div key={i} className="feature-item d-flex align-items-center mb-2">
                          {/* <span className="feature-icon me-2" style={{ color: 'var(--btn-1)' }}> 
                            {feature.icon}
                          </span> */}
                         <span className="feature-text">
                          {feature.text.split(' ').slice(0, 10).join(' ')}
                          {feature.text.split(' ').length > 10 && '...'}
                        </span>

                        </div>
                      ))}
                    </div>
                  </Card.Body>
                  <Card.Footer className="bg-white border-0 pt-0">
                    <div className="d-grid gap-2">
                      {/* <Button style={{ backgroundColor: 'var(--btn-1)', borderColor: 'var(--btn-1)' }}>
                        Book Now
                      </Button> */}
                       <Link to='/contact'
                        className="theme-btn btn-style fill no-border search__btn wow fadeInUp text-center"
                        data-wow-delay=".6s"
                    >
                        <span>Book Your Packages</span>
                    </Link>
                      {/* <Button variant="outline-secondary">
                        Learn More
                      </Button> */}
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
            ))
          )}
        </Row>

        <Row className="mt-5 pt-4">
          <Col md={10} lg={8} className="mx-auto text-center">
            <div className="cta-box bg-light p-5 rounded shadow-sm">
              <h3 className="mb-3">Need Help Finding the Perfect Package?</h3>
              <p className="mb-4">Our resort specialists can help customize a package to meet your specific needs and preferences.</p>
              <Button 
      size="lg" 
      onClick={handleContactClick}
      style={{ backgroundColor: 'var(--btn-1)', borderColor: 'var(--btn-1)' }}
    >
      Contact Our Team
    </Button>
            </div>
          </Col>
        </Row>

        {/* Enhanced Modal with scrolling */}
        <Modal 
          show={showModal} 
          onHide={handleCloseModal} 
          centered
          size="lg"
          dialogClassName="modal-90w"
        >
          <Modal.Header closeButton>
            <Modal.Title>{selectedPackage?.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-body-scrollable">
            {selectedPackage && (
              <div className="package-modal-content">
                <div className="package-modal-image mb-4">
                  <img 
                    src={selectedPackage.image} 
                    alt={selectedPackage.name} 
                    className="img-fluid rounded w-100"
                    style={{ maxHeight: '300px', objectFit: 'cover' }}
                  />
                </div>
                
                <div className="package-modal-details">
                  <div className="row mb-4">
                    <div className="col-md-6">
                      <div className="price-box p-3 bg-light rounded">
                        {/* <h4 className="mb-2 text-primary">{selectedPackage.price}</h4> */}
                        <span className="offer__price mb-2">
                        <del style={{ marginRight: '10px' }}>{selectedPackage.price}</del>
                        {selectedPackage.discount}
                      </span>
                        <p className="mb-1">{selectedPackage.priceDetails}</p>
                        <p className="mb-0"><strong>Duration:</strong> {selectedPackage.duration}</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      {/* {selectedPackage.discount && (
                        <div className="discount-box p-3 bg-danger text-white rounded mb-3">
                          <h5 className="mb-0">Special Offer!</h5>
                          <p className="mb-0">{selectedPackage.discount}</p>
                        </div>
                      )} */}
                      {selectedPackage.popular && (
                        <div className="popular-box p-3 bg-warning rounded">
                          <h5 className="mb-0">Popular Choice</h5>
                          <p className="mb-0">Our guests love this package!</p>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <h5 className="mb-3">Package Description</h5>
                  <p className="text-muted mb-4">{selectedPackage.description}</p>
                  
                  <h5 className="mb-3">Package Features</h5>
                  {/* <div className="features-grid row">
                    {selectedPackage.features.map((feature, i) => (
                      <div key={i} className="col-md-6 mb-3">
                        <div className="d-flex align-items-center">
                          <span className="me-2" style={{ color: 'var(--btn-1)', fontSize: '1.25rem' }}>
                            {feature.icon}
                          </span>
                          <span>{feature.text}</span>
                            
                        </div>
                      </div>
                    ))}
                  </div> */}
                  <div className="features-grid row">
                     {selectedPackage.features.map((feature, i) => (
                    <div className="col-12">
                      <p className="text-muted">{feature.text}</p>
                    </div>
                      ))}
                  </div>

                  
                  <div className="additional-info mt-4 pt-3 border-top">
                    <h5 className="mb-3">Additional Information</h5>
                    <p>Terms and conditions apply. Rates are subject to availability and may change without prior notice. Please contact our reservations team for more details.</p>
                  </div>
                </div>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            {/* <Button style={{ backgroundColor: 'var(--btn-1)', borderColor: 'var(--btn-1)' }}>
              Book Now
            </Button> */}
             <Link to='/contact'
                className="theme-btn btn-style fill no-border search__btn wow fadeInUp text-center"
                data-wow-delay=".6s"
            >
                <span>Book Your Packages</span>
            </Link>
          </Modal.Footer>
        </Modal>
      </Container>
    </section>
  );
};

export default PackagePage;