//  import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Calendar, Clock, MapPin, Users, ChevronRight, Star, Heart, ArrowLeft, ArrowRight, Share2, Bookmark, Phone, FiMail } from 'lucide-react';
 


// const HotelEventDetailsPage = () => {
//   const [loading, setLoading] = useState(true);
//   const [activeTab, setActiveTab] = useState('overview');
//   const [mainImage, setMainImage] = useState(0);
//   const [selectedDate, setSelectedDate] = useState('');
  
//   // Simulating data loading
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 2000);
    
//     return () => clearTimeout(timer);
//   }, []);

//   // Event images
//   const eventImages = [
//     { id: 1, title: 'Grand Ballroom', description: 'Full view of our luxurious grand ballroom setup' },
//     { id: 2, title: 'Sunset Terrace', description: 'Outdoor terrace with ocean views at sunset' },
//     { id: 3, title: 'Beachfront Ceremony', description: 'Wedding ceremony setup on our private beach' },
//     { id: 4, title: 'Banquet Hall', description: 'Elegant dinner setting in our premium banquet hall' },
//     { id: 5, title: 'Garden Reception', description: 'Garden pavilion with natural lighting and floral decor' },
//     { id: 6, title: 'Conference Room', description: 'Fully equipped business meeting setup' }
//   ];

//   // Event packages
//   const eventPackages = [
//     {
//       id: 1,
//       title: 'Wedding Ultimate Package',
//       price: '$12,500',
//       features: [
//         'Exclusive access to the Grand Ballroom (up to 200 guests)',
//         'Beachfront ceremony setup with flower arrangements',
//         'Five-course gourmet meal with premium open bar',
//         'Professional wedding coordinator',
//         'Luxury suite for the couple (2 nights)',
//         'Spa package for the wedding couple',
//         'Professional photography (8 hours coverage)'
//       ]
//     },
//     {
//       id: 2,
//       title: 'Corporate Retreat Package',
//       price: '$7,500',
//       features: [
//         'Full-day use of conference facilities (up to 100 attendees)',
//         'State-of-the-art AV equipment and tech support',
//         'Breakfast, lunch, and refreshment breaks',
//         'Team building activities with professional facilitator',
//         'Access to business center and high-speed WiFi',
//         'Complimentary airport shuttle service for attendees',
//         'Dedicated event coordinator'
//       ]
//     },
//     {
//       id: 3,
//       title: 'Social Celebration Package',
//       price: '$5,900',
//       features: [
//         'Private function room for up to 80 guests',
//         'Customized buffet or plated meal options',
//         'Decorations based on your event theme',
//         'Sound system with Bluetooth connectivity',
//         'Dedicated bartender and wait staff',
//         'Celebration cake from our award-winning pastry chef',
//         '4-hour event duration with optional extension'
//       ]
//     }
//   ];

//   // Available dates (example data)
//   const availableDates = [
//     { date: '2025-05-15', slots: ['Morning', 'Evening'] },
//     { date: '2025-05-16', slots: ['Morning', 'Afternoon', 'Evening'] },
//     { date: '2025-05-17', slots: ['Afternoon'] },
//     { date: '2025-05-20', slots: ['Morning', 'Afternoon', 'Evening'] },
//     { date: '2025-05-21', slots: ['Morning', 'Evening'] },
//     { date: '2025-05-22', slots: ['Afternoon', 'Evening'] }
//   ];

//   // Testimonials data
//   const testimonials = [
//     { 
//       id: 1, 
//       name: 'Jessica & Robert Anderson', 
//       event: 'Wedding', 
//       date: 'March 2025', 
//       rating: 5,
//       text: 'Our wedding was absolutely magical. The staff exceeded our expectations in every way, and our guests are still talking about the beautiful beachfront ceremony and amazing food. We couldn\'t have asked for a more perfect day.'
//     },
//     { 
//       id: 2, 
//       name: 'Global Tech Solutions', 
//       event: 'Annual Conference', 
//       date: 'January 2025', 
//       rating: 5,
//       text: 'Professional venue with excellent facilities for our corporate event. The technical support was outstanding and the catering was impeccable. Our team particularly enjoyed the breakout areas with ocean views.'
//     },
//     { 
//       id: 3, 
//       name: 'Martin Family', 
//       event: 'Anniversary Celebration', 
//       date: 'February 2025', 
//       rating: 4,
//       text: 'We celebrated our 50th wedding anniversary at the resort and it was a wonderful experience. The attention to detail and personalized service made our special day even more memorable.'
//     }
//   ];

//   // Helper function for stars display
//   const renderStars = (rating) => {
//     return Array.from({ length: 5 }).map((_, index) => (
//       <Star 
//         key={index} 
//         size={16} 
//         className={index < rating ? 'text-warning' : 'text-muted'} 
//         fill={index < rating ? 'currentColor' : 'none'} 
//       />
//     ));
//   };

//   // Skeleton loading component
//   const Skeleton = ({ height, width = '100%', className = '' }) => (
//     <div 
//       className={`bg-light animate-pulse rounded ${className}`} 
//       style={{ height, width }}
//     ></div>
//   );

//   // Image gallery skeleton
//   const GallerySkeleton = () => (
//     <div className="position-relative">
//       <Skeleton height="400px" className="mb-3" />
//       <div className="row g-2 mb-3">
//         {[1, 2, 3, 4].map((i) => (
//           <div className="col-3" key={i}>
//             <Skeleton height="80px" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   // Event details skeleton
//   const DetailsSkeleton = () => (
//     <div>
//       <Skeleton height="40px" className="mb-3" width="80%" />
//       <Skeleton height="24px" className="mb-3" width="40%" />
//       <Skeleton height="24px" className="mb-4" width="60%" />
//       <Skeleton height="20px" className="mb-2" />
//       <Skeleton height="20px" className="mb-2" />
//       <Skeleton height="20px" className="mb-4" />
//       <Skeleton height="50px" className="mb-3" width="60%" />
//       <div className="row g-2 mb-4">
//         <div className="col-md-6">
//           <Skeleton height="48px" />
//         </div>
//         <div className="col-md-6">
//           <Skeleton height="48px" />
//         </div>
//       </div>
//     </div>
//   );

//   // Function to handle image navigation
//   const navigateImages = (direction) => {
//     if (direction === 'next') {
//       setMainImage((prev) => (prev === eventImages.length - 1 ? 0 : prev + 1));
//     } else {
//       setMainImage((prev) => (prev === 0 ? eventImages.length - 1 : prev - 1));
//     }
//   };

//   // Format date nicely
//   const formatDate = (dateString) => {
//     const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//     return new Date(dateString).toLocaleDateString('en-US', options);
//   };

//   return (
//     <div className="container-fluid px-0">
      
//       <div className="container py-5">
        
         
        
//         <div className="row mb-5">
//           {/* Left column - Event images */}
//           <div className="col-lg-7 mb-4">
//             {loading ? (
//               <GallerySkeleton />
//             ) : (
//               <>
//                 <div className="position-relative mb-3">
//                   <div 
//                     className="ratio ratio-16x9 bg-light rounded position-relative overflow-hidden"
//                     style={{ height: '400px' }}
//                   >
//                     <img 
//                       src={`/api/placeholder/1200/800`} 
//                       alt={eventImages[mainImage].title} 
//                       className="img-fluid object-fit-cover w-100 h-100"
//                       style={{ transition: 'opacity 0.3s ease-in-out' }}
//                     />
                    
//                     <button 
//                       className="btn btn-light rounded-circle position-absolute start-0 top-50 translate-middle-y ms-2"
//                       onClick={() => navigateImages('prev')}
//                     >
//                       <ArrowLeft size={20} />
//                     </button>
                    
//                     <button 
//                       className="btn btn-light rounded-circle position-absolute end-0 top-50 translate-middle-y me-2"
//                       onClick={() => navigateImages('next')}
//                     >
//                       <ArrowRight size={20} />
//                     </button>
                    
//                     <div className="position-absolute bottom-0 start-0 end-0 p-3 bg-dark bg-opacity-50 text-white">
//                       <h5 className="mb-1">{eventImages[mainImage].title}</h5>
//                       <p className="mb-0 small">{eventImages[mainImage].description}</p>
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Thumbnail images */}
//                 <div className="row g-2">
//                   {eventImages.map((image, idx) => (
//                     <div className="col-md-2 col-4" key={image.id}>
//                       <div 
//                         className={`thumbnail-wrapper border rounded overflow-hidden ${mainImage === idx ? 'border-primary' : ''}`}
//                         style={{ height: '80px', cursor: 'pointer' }}
//                         onClick={() => setMainImage(idx)}
//                       >
//                         <img 
//                           src={`/api/placeholder/300/200`} 
//                           alt={image.title} 
//                           className="img-fluid object-fit-cover w-100 h-100"
//                           style={{ transition: 'transform 0.3s' }}
//                           onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
//                           onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </>
//             )}
//           </div>
          
//           {/* Right column - Event details */}
//           <div className="col-lg-5">
//             {loading ? (
//               <DetailsSkeleton />
//             ) : (
//               <>
//                 <h2 className="fw-bold mb-2">Luxury Event Venues</h2>
                
//                 <div className="d-flex align-items-center mb-3">
//                   <div className="me-3">
//                     {renderStars(4.9)}
//                   </div>
//                   <span className="text-muted">(56 reviews)</span>
//                 </div>
                
//                 <div className="mb-4">
//                   <span className="badge bg-primary me-1">Weddings</span>
//                   <span className="badge bg-info me-1">Corporate Events</span>
//                   <span className="badge bg-success me-1">Social Gatherings</span>
//                   <span className="badge bg-secondary">Conferences</span>
//                 </div>
                
//                 <p className="lead mb-4">
//                   Host your dream event at our luxurious beachfront resort. Our versatile venues can accommodate intimate gatherings and grand celebrations with breathtaking views of the ocean.
//                 </p>
                
//                 <div className="row g-3 mb-4">
//                   <div className="col-sm-6">
//                     <div className="d-flex align-items-center">
//                       <Users className="text-primary me-2" size={20} />
//                       <div>
//                         <div className="fw-bold">Capacity</div>
//                         <div>10 - 350 guests</div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-sm-6">
//                     <div className="d-flex align-items-center">
//                       <MapPin className="text-primary me-2" size={20} />
//                       <div>
//                         <div className="fw-bold">Location</div>
//                         <div>Beachfront & Indoor</div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-sm-6">
//                     <div className="d-flex align-items-center">
//                       <Clock className="text-primary me-2" size={20} />
//                       <div>
//                         <div className="fw-bold">Duration</div>
//                         <div>4 - 8 hours</div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-sm-6">
//                     <div className="d-flex align-items-center">
//                       <Calendar className="text-primary me-2" size={20} />
//                       <div>
//                         <div className="fw-bold">Availability</div>
//                         <div>Year-round</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="d-grid gap-2 d-md-flex mb-4">
//                   <button className="btn btn-primary px-4 py-2 flex-grow-1">Request Pricing</button>
//                   <button className="btn btn-outline-primary px-4 py-2">Schedule a Tour</button>
//                 </div>
                
//                 <div className="d-flex justify-content-center mb-4">
//                   <button className="btn btn-link text-decoration-none me-3">
//                     <Heart size={18} className="me-1" /> Save
//                   </button>
//                   <button className="btn btn-link text-decoration-none me-3">
//                     <Share2 size={18} className="me-1" /> Share
//                   </button>
//                   <button className="btn btn-link text-decoration-none">
//                     <Phone size={18} className="me-1" /> Contact
//                   </button>
//                 </div>
                
//                 <div className="alert alert-info d-flex align-items-center p-2 text-center">
//                   <div className="w-100">Special offer: 20% off for events booked 6+ months in advance</div>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
        
//         {/* Tabs section */}
//         <div className="row mb-5">
//           <div className="col-12">
//             {loading ? (
//               <Skeleton height="300px" className="mb-4" />
//             ) : (
//               <>
//                 <ul className="nav nav-tabs mb-4">
//                   <li className="nav-item">
//                     <button 
//                       className={`nav-link ${activeTab === 'overview' ? 'active' : ''}`} 
//                       onClick={() => setActiveTab('overview')}
//                     >
//                       Overview
//                     </button>
//                   </li>
//                   <li className="nav-item">
//                     <button 
//                       className={`nav-link ${activeTab === 'packages' ? 'active' : ''}`} 
//                       onClick={() => setActiveTab('packages')}
//                     >
//                       Packages & Pricing
//                     </button>
//                   </li>
//                   <li className="nav-item">
//                     <button 
//                       className={`nav-link ${activeTab === 'availability' ? 'active' : ''}`} 
//                       onClick={() => setActiveTab('availability')}
//                     >
//                       Availability
//                     </button>
//                   </li>
//                   <li className="nav-item">
//                     <button 
//                       className={`nav-link ${activeTab === 'testimonials' ? 'active' : ''}`} 
//                       onClick={() => setActiveTab('testimonials')}
//                     >
//                       Testimonials
//                     </button>
//                   </li>
//                 </ul>
                
//                 <div className="tab-content p-4 border border-top-0 rounded-bottom">
//                   {/* Overview Tab */}
//                   <div className={`tab-pane fade ${activeTab === 'overview' ? 'show active' : ''}`}>
//                     <div className="row">
//                       <div className="col-md-6">
//                         <h4 className="mb-3">Exceptional Venues</h4>
//                         <p>Palm Paradise Resort offers multiple venue options for your special events. From our grand ballroom that accommodates up to 350 guests to intimate garden settings perfect for smaller gatherings, each space is designed to create unforgettable experiences.</p>
                        
//                         <h4 className="mb-3 mt-4">World-Class Service</h4>
//                         <p>Our dedicated event planning team will guide you through every detail, ensuring your vision comes to life exactly as you imagined. From custom menu creation with our executive chef to decor and entertainment coordination, we handle the details so you can focus on making memories.</p>
//                       </div>
//                       <div className="col-md-6">
//                         <h4 className="mb-3">Venue Options</h4>
//                         <ul className="list-group list-group-flush mb-4">
//                           <li className="list-group-item d-flex">
//                             <ChevronRight className="text-primary me-2 flex-shrink-0" size={20} />
//                             <div>
//                               <strong>Grand Ballroom</strong> - Our largest indoor venue featuring crystal chandeliers, sophisticated decor, and state-of-the-art sound and lighting (up to 350 guests)
//                             </div>
//                           </li>
//                           <li className="list-group-item d-flex">
//                             <ChevronRight className="text-primary me-2 flex-shrink-0" size={20} />
//                             <div>
//                               <strong>Sunset Terrace</strong> - Open-air terrace overlooking the ocean, perfect for cocktail receptions and intimate ceremonies (up to 150 guests)
//                             </div>
//                           </li>
//                           <li className="list-group-item d-flex">
//                             <ChevronRight className="text-primary me-2 flex-shrink-0" size={20} />
//                             <div>
//                               <strong>Beachfront</strong> - Private beach area with customizable setup for ceremonies and casual gatherings (up to 200 guests)
//                             </div>
//                           </li>
//                           <li className="list-group-item d-flex">
//                             <ChevronRight className="text-primary me-2 flex-shrink-0" size={20} />
//                             <div>
//                               <strong>Garden Pavilion</strong> - Lush tropical setting surrounded by exotic flowers and greenery (up to 120 guests)
//                             </div>
//                           </li>
//                           <li className="list-group-item d-flex">
//                             <ChevronRight className="text-primary me-2 flex-shrink-0" size={20} />
//                             <div>
//                               <strong>Executive Conference Center</strong> - Fully equipped business facilities with breakout rooms (up to 100 attendees)
//                             </div>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
                    
//                     <div className="row mt-4">
//                       <div className="col-12">
//                         <h4 className="mb-3">Specialty Services</h4>
//                         <div className="row g-4">
//                           <div className="col-md-4">
//                             <div className="card h-100 border-0 shadow-sm">
//                               <div className="card-body">
//                                 <h5 className="card-title">Catering Excellence</h5>
//                                 <p className="card-text">Our award-winning culinary team creates custom menus featuring locally-sourced ingredients and international cuisine options to delight your guests.</p>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="col-md-4">
//                             <div className="card h-100 border-0 shadow-sm">
//                               <div className="card-body">
//                                 <h5 className="card-title">Technology & Equipment</h5>
//                                 <p className="card-text">State-of-the-art audiovisual systems, high-speed WiFi, and technical support ensure your presentations and entertainment run flawlessly.</p>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="col-md-4">
//                             <div className="card h-100 border-0 shadow-sm">
//                               <div className="card-body">
//                                 <h5 className="card-title">Decor & Design</h5>
//                                 <p className="card-text">From elegant floral arrangements to custom lighting designs, our partnerships with premier vendors create stunning event aesthetics.</p>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
                  
//                   {/* Packages Tab */}
//                   <div className={`tab-pane fade ${activeTab === 'packages' ? 'show active' : ''}`}>
//                     <h4 className="mb-4">Event Packages</h4>
//                     <div className="row g-4">
//                       {eventPackages.map((pkg) => (
//                         <div className="col-lg-4" key={pkg.id}>
//                           <div className="card h-100 position-relative border-0 shadow">
//                             {pkg.id === 1 && (
//                               <div className="position-absolute top-0 end-0 translate-middle-y">
//                                 <span className="badge bg-danger p-2">Most Popular</span>
//                               </div>
//                             )}
//                             <div className="card-body">
//                               <h5 className="card-title fw-bold mb-3">{pkg.title}</h5>
//                               <h4 className="text-primary mb-3">{pkg.price}</h4>
//                               <ul className="list-group list-group-flush mb-4">
//                                 {pkg.features.map((feature, idx) => (
//                                   <li key={idx} className="list-group-item border-0 px-0 py-2 d-flex">
//                                     <ChevronRight className="text-primary me-2 flex-shrink-0" size={18} />
//                                     <span>{feature}</span>
//                                   </li>
//                                 ))}
//                               </ul>
//                             </div>
//                             <div className="card-footer bg-transparent border-0 pb-4">
//                               <div className="d-grid">
//                                 <button className="btn btn-primary">Select Package</button>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
                    
//                     <div className="mt-5">
//                       <h4 className="mb-3">Custom Packages</h4>
//                       <p>Don't see exactly what you're looking for? Our event specialists can create customized packages tailored to your specific needs and budget. Contact us for a personalized consultation.</p>
//                       <button className="btn btn-outline-primary mt-2">Request Custom Quote</button>
//                     </div>
                    
//                     <div className="mt-5">
//                       <h4 className="mb-3">Additional Services</h4>
//                       <div className="table-responsive">
//                         <table className="table table-striped">
//                           <thead>
//                             <tr>
//                               <th>Service</th>
//                               <th>Description</th>
//                               <th>Starting Price</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             <tr>
//                               <td>Photography</td>
//                               <td>Professional event photography with digital delivery</td>
//                               <td>$1,200</td>
//                             </tr>
//                             <tr>
//                               <td>DJ Services</td>
//                               <td>Professional DJ with premium sound system and lighting</td>
//                               <td>$900</td>
//                             </tr>
//                             <tr>
//                               <td>Live Band</td>
//                               <td>4-piece live band (customizable genres)</td>
//                               <td>$1,800</td>
//                             </tr>
//                             <tr>
//                               <td>Floral Design</td>
//                               <td>Custom floral arrangements and decor</td>
//                               <td>$750</td>
//                             </tr>
//                             <tr>
//                               <td>Transportation</td>
//                               <td>Luxury shuttle service for guests</td>
//                               <td>$600</td>
//                             </tr>
//                           </tbody>
//                         </table>
//                       </div>
//                     </div>
//                   </div>
                  
//                   {/* Availability Tab */}
//                   <div className={`tab-pane fade ${activeTab === 'availability' ? 'show active' : ''}`}>
//                     <div className="row">
//                       <div className="col-md-7">
//                         <h4 className="mb-4">Check Venue Availability</h4>
//                         <p className="mb-4">Select a date to see available time slots for our event venues. Popular dates book quickly, especially during peak season (May-September).</p>
                        
//                         <div className="mb-4">
//                           <label className="form-label fw-bold">Select Venue</label>
//                           <select className="form-select mb-3">
//                             <option value="">All Venues</option>
//                             <option>Grand Ballroom</option>
//                             <option>Sunset Terrace</option>
//                             <option>Beachfront</option>
//                             <option>Garden Pavilion</option>
//                             <option>Executive Conference Center</option>
//                           </select>
//                         </div>
                        
//                         <div className="mb-4">
//                           <label className="form-label fw-bold">Select Date</label>
//                           <input 
//                             type="date" 
//                             className="form-control mb-3"
//                             value={selectedDate}
//                             onChange={(e) => setSelectedDate(e.target.value)}
//                           />
//                         </div>
                        
//                         <div className="card border-0 shadow-sm">
//                           <div className="card-header bg-white py-3">
//                             <h5 className="mb-0">Available Time Slots</h5>
//                           </div>
//                           <div className="card-body">
//                             {selectedDate ? (
//                               <>
//                                 <h6>{formatDate(selectedDate)}</h6>
//                                 <div className="mt-3">
//                                   {availableDates.find(d => d.date === selectedDate) ? (
//                                     <div className="d-flex flex-wrap gap-2">
//                                       {availableDates.find(d => d.date === selectedDate).slots.map((slot, idx) => (
//                                         <button key={idx} className="btn btn-outline-primary">
//                                           {slot}
//                                         </button>
//                                       ))}
//                                     </div>
//                                   ) : (
//                                     <div className="alert alert-warning mb-0">
//                                       No available slots for this date. Please select another date.
//                                     </div>
//                                   )}
//                                 </div>
//                               </>
//                             ) : (
//                               <div className="text-center text-muted py-4">
//                                 Please select a date to view available time slots
//                               </div>
//                             )}
//                           </div>
//                         </div>
//                       </div>
                      
//                       <div className="col-md-5">
//                         <div className="card bg-light border-0 p-4 h-100">
//                           <h5 className="mb-3">Upcoming Availability</h5>
//                           <p className="mb-3">Here are some dates with available slots in the next month:</p>
                          
//                           <ul className="list-group list-group-flush mb-4">
//                             {availableDates.map((date, idx) => (
//                               <li key={idx} className="list-group-item bg-transparent px-0 d-flex justify-content-between align-items-center border-bottom">
//                                 <div>
//                                   <strong>{formatDate(date.date)}</strong>
//                                   <div className="small text-muted">
//                                     Available: {date.slots.join(', ')}
//                                   </div>
//                                 </div>
//                                 <button 
//                                   className="btn btn-sm btn-outline-primary"
//                                   onClick={() => setSelectedDate(date.date)}
//                                 >
//                                   Select
//                                 </button>
//                               </li>
//                             ))}

//                                                       </ul>
                          
//                           <div className="alert alert-info mt-auto">
//                             <strong>Need a specific date?</strong> Contact our event coordinators to check availability for your preferred date.
//                             <button className="btn btn-sm btn-info mt-2 w-100">Contact Event Team</button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
                  
//                   {/* Testimonials Tab */}
//                   <div className={`tab-pane fade ${activeTab === 'testimonials' ? 'show active' : ''}`}>
//                     <h4 className="mb-4">What Our Clients Say</h4>
//                     <div className="row g-4">
//                       {testimonials.map((testimonial) => (
//                         <div className="col-md-6 col-lg-4" key={testimonial.id}>
//                           <div className="card h-100 border-0 shadow-sm">
//                             <div className="card-body">
//                               <div className="d-flex justify-content-between mb-3">
//                                 <div>
//                                   <h5 className="mb-1">{testimonial.name}</h5>
//                                   <small className="text-muted">{testimonial.event} • {testimonial.date}</small>
//                                 </div>
//                                 <div>
//                                   {renderStars(testimonial.rating)}
//                                 </div>
//                               </div>
//                               <p className="card-text">"{testimonial.text}"</p>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
                    
//                     <div className="text-center mt-5">
//                       <button className="btn btn-outline-primary px-4">
//                         Read More Reviews
//                       </button>
//                     </div>
                    
//                     <div className="row mt-5">
//                       <div className="col-md-6">
//                         <div className="card border-0 bg-light p-4 h-100">
//                           <h5 className="mb-3">Leave Your Review</h5>
//                           <p>Share your experience hosting an event at our resort.</p>
//                           <form>
//                             <div className="mb-3">
//                               <label className="form-label">Your Rating</label>
//                               <div className="d-flex">
//                                 {[1, 2, 3, 4, 5].map((star) => (
//                                   <Star 
//                                     key={star}
//                                     size={24}
//                                     className="me-1 cursor-pointer"
//                                     fill="none"
//                                     style={{ color: '#ffc107' }}
//                                   />
//                                 ))}
//                               </div>
//                             </div>
//                             <div className="mb-3">
//                               <label className="form-label">Your Name</label>
//                               <input type="text" className="form-control" />
//                             </div>
//                             <div className="mb-3">
//                               <label className="form-label">Event Type</label>
//                               <select className="form-select">
//                                 <option>Wedding</option>
//                                 <option>Corporate Event</option>
//                                 <option>Social Gathering</option>
//                                 <option>Conference</option>
//                                 <option>Other</option>
//                               </select>
//                             </div>
//                             <div className="mb-3">
//                               <label className="form-label">Your Review</label>
//                               <textarea className="form-control" rows="4"></textarea>
//                             </div>
//                             <button type="submit" className="btn btn-primary">
//                               Submit Review
//                             </button>
//                           </form>
//                         </div>
//                       </div>
//                       <div className="col-md-6">
//                         <div className="card border-0 bg-light p-4 h-100">
//                           <h5 className="mb-3">Frequently Asked Questions</h5>
//                           <div className="accordion" id="faqAccordion">
//                             <div className="accordion-item border-0 mb-2">
//                               <h2 className="accordion-header">
//                                 <button className="accordion-button bg-white shadow-sm rounded" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
//                                   What is the cancellation policy?
//                                 </button>
//                               </h2>
//                               <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
//                                 <div className="accordion-body">
//                                   Cancellations made more than 90 days prior to the event date will receive a full refund. Between 90-30 days, 50% of the deposit is refundable. Within 30 days, deposits are non-refundable but may be applied to a future event within one year.
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="accordion-item border-0 mb-2">
//                               <h2 className="accordion-header">
//                                 <button className="accordion-button collapsed bg-white shadow-sm rounded" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
//                                   Can we bring our own vendors?
//                                 </button>
//                               </h2>
//                               <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
//                                 <div className="accordion-body">
//                                   We have preferred vendors for catering, floral, and photography, but you may bring your own vendors with prior approval. Outside vendors must provide proof of insurance and may be subject to a vendor fee.
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="accordion-item border-0 mb-2">
//                               <h2 className="accordion-header">
//                                 <button className="accordion-button collapsed bg-white shadow-sm rounded" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
//                                   Is parking available for guests?
//                                 </button>
//                               </h2>
//                               <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
//                                 <div className="accordion-body">
//                                   Yes, we offer complimentary valet parking for all event guests. For larger events, we can arrange for additional parking at nearby facilities with shuttle service to the resort.
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="accordion-item border-0">
//                               <h2 className="accordion-header">
//                                 <button className="accordion-button collapsed bg-white shadow-sm rounded" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
//                                   Do you offer accommodations for out-of-town guests?
//                                 </button>
//                               </h2>
//                               <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
//                                 <div className="accordion-body">
//                                   Absolutely. We can reserve room blocks at discounted rates for your guests. Our event coordinator can help arrange this and provide customized welcome bags for your guests upon check-in.
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
        
//         {/* Call to Action */}
//         <div className="row mb-5">
//           <div className="col-12">
//             <div className="card bg-primary text-white border-0 overflow-hidden">
//               <div className="row g-0">
//                 <div className="col-md-8 p-5">
//                   <h2 className="display-5 fw-bold mb-3">Ready to Plan Your Event?</h2>
//                   <p className="lead mb-4">Our dedicated event specialists are available to help you create a memorable experience tailored to your vision.</p>
//                   <div className="d-flex gap-3">
//                     <button className="btn btn-light btn-lg px-4">Contact Our Team</button>
//                     <button className="btn btn-outline-light btn-lg px-4">Download Brochure</button>
//                   </div>
//                 </div>
//                 <div className="col-md-4 d-none d-md-block">
//                   <img 
//                     src="/api/placeholder/600/400" 
//                     alt="Event Planning" 
//                     className="img-fluid h-100 object-fit-cover"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Similar Venues */}
//         <div className="row mb-5">
//           <div className="col-12">
//             <h3 className="fw-bold mb-4">Other Venues You Might Like</h3>
//             <div className="row g-4">
//               {[1, 2, 3].map((item) => (
//                 <div className="col-md-4" key={item}>
//                   <div className="card border-0 shadow-sm h-100">
//                     <div className="ratio ratio-16x9">
//                       <img 
//                         src={`/api/placeholder/600/400?${item}`} 
//                         className="card-img-top object-fit-cover" 
//                         alt="Venue"
//                       />
//                     </div>
//                     <div className="card-body">
//                       <div className="d-flex justify-content-between mb-2">
//                         <span className="badge bg-secondary">Weddings</span>
//                         <div className="d-flex align-items-center">
//                           <Star size={16} className="text-warning me-1" fill="currentColor" />
//                           <small>4.8</small>
//                         </div>
//                       </div>
//                       <h5 className="card-title">Oceanview Garden Pavilion</h5>
//                       <p className="card-text text-muted small">Intimate outdoor venue surrounded by tropical gardens with ocean views.</p>
//                       <div className="d-flex justify-content-between align-items-center mt-3">
//                         <div className="d-flex align-items-center">
//                           <Users size={16} className="me-1" />
//                           <small>Up to 120 guests</small>
//                         </div>
//                         <button className="btn btn-sm btn-outline-primary">View Details</button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
    
      
//     </div>
//   );
// };

// export default HotelEventDetailsPage;


