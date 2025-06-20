//  import React, { useEffect, useState } from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';

// const awardsData = [
//   {
//     id: 1,
//     title: 'Best Resort 2020',
//     description: 'Awarded for excellence.',
//     image: '../../assets/images/awards/awards1.png'
//   },
//   {
//     id: 2,
//     title: 'Traveler’s Choice 2021',
//     description: 'Top reviews and ratings.',
//     image: '../../assets/images/awards/awards2.png'
//   },
//   {
//     id: 3,
//     title: 'Luxury Experience 2022',
//     description: 'Best in luxury travel.',
//     image: '../../assets/images/awards/awards3.png'
//   },
//   {
//     id: 4,
//     title: 'Eco-Friendly Resort',
//     description: 'For sustainability practices.',
//     image: '../../assets/images/awards/awards4.png'
//   },
//   {
//     id: 5,
//     title: 'Customer Satisfaction',
//     description: 'Outstanding service.',
//     image: '../../assets/images/awards/awards5.png'
//   },
//   {
//     id: 6,
//     title: 'Innovation in Hospitality',
//     description: 'Modern tech usage.',
//    image: '../../assets/images/awards/osa.gif'
//   },
//   {
//     id: 7,
//     title: 'Top 10 Beach Resort',
//     description: 'Beautiful beachfront.',
//    image: '../../assets/images/awards/tripadvisor.jpg'
//   },
  
// ];

// const AwardsSection = () => {
//   const [startIndex, setStartIndex] = useState(0);
//   const visibleCount = 5;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setStartIndex((prevIndex) => (prevIndex + 1) % awardsData.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);



//   const getVisibleAwards = () => {
//     let endIndex = startIndex + visibleCount;
//     if (endIndex <= awardsData.length) {
//       return awardsData.slice(startIndex, endIndex);
//     } else {
//       return [
//         ...awardsData.slice(startIndex),
//         ...awardsData.slice(0, endIndex - awardsData.length),
//       ];
//     }
//   };

//   return (
//     <Container className="my-5">
//       <h2 className="text-center mb-4">Our Awards</h2>
//       <Row className="g-3 justify-content-center">
//         {getVisibleAwards().map((award) => (
//           <Col key={award.id} xs={12} sm={6} md={4} lg={2}>
//             <Card className="h-100 text-center p-3 shadow-sm">
//               <Card.Img
//                 variant="top"
//                 src={award.image}
//                 alt={award.title}
//                 style={{
//                   width: '120px',
//                   height: '150px',
//                   objectFit: 'contain',
//                   margin: '0 auto'
//                 }}
//               />
//               {/* <Card.Body>
//                 <Card.Title style={{ fontSize: '1rem' }}>{award.title}</Card.Title>
//                 <Card.Text style={{ fontSize: '0.9rem' }}>{award.description}</Card.Text>
//               </Card.Body> */}
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default AwardsSection;


//   import React, { useEffect, useState } from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import { getAwards } from '../../api/getAwards';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';

// const AwardsSection = () => {
//   const [awards, setAwards] = useState([]);
//   const [startIndex, setStartIndex] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const visibleCount = 5;

//   // Fetch awards from API
//  useEffect(() => {
//   getAwards()
//     .then((data) => {
//       if (data?.awards) {
//         // Sort awards by the `sorting` key before setting them
//         const sortedAwards = [...data.awards].sort((a, b) => a.sorting - b.sorting);
//         setAwards(sortedAwards);
//       }
//     })
//     .catch((err) => {
//       console.error('Error fetching awards:', err);
//     })
//     .finally(() => setLoading(false));
// }, []);


//   // Auto-scroll behavior
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setStartIndex((prevIndex) =>
//         awards.length > 0 ? (prevIndex + 1) % awards.length : 0
//       );
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [awards]);

//   // Get currently visible awards
//   const getVisibleAwards = () => {
//     const endIndex = startIndex + visibleCount;
//     if (endIndex <= awards.length) {
//       return awards.slice(startIndex, endIndex);
//     } else {
//       return [...awards.slice(startIndex), ...awards.slice(0, endIndex - awards.length)];
//     }
//   };

//   return (
//     <Container className="my-5">
//       <h2 className="text-center mb-4">Awards & Recognition</h2>
//       <div className="g-3 justify-content-center"  style={{ display: 'flex', columnGap: '10px' }}>
//         {loading
//           ? Array.from({ length: visibleCount }).map((_, idx) => (
//               <Col key={idx} xs={12} sm={6} md={4} lg={2}>
//                 <Skeleton height={180} />
//               </Col>
//             ))
//           : getVisibleAwards().map((award) => (
//               <Col key={award.id} xs={12} sm={6} md={4} lg={2}>
//                 <Card className="h-100 text-center p-3 shadow-sm">
//                   <Card.Img
//                     variant="top"
//                     src={award.image}
//                     alt={`Award ${award.id}`}
//                     loading="lazy"
//                     style={{
//                       width: '120px',
//                       height: '150px',
//                       objectFit: 'contain',
//                       margin: '0 auto',
//                     }}
//                   />
//                 </Card>
//               </Col>
//             ))}
//       </div>
//     </Container>
//   );
// };

// export default AwardsSection;
 
//   import React, { useEffect, useState } from 'react';
// import { getAwards } from '../../api/getAwards';

// const AwardsSection = () => {
//   const [awards, setAwards] = useState([]);
//   const [startIndex, setStartIndex] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [isMobile, setIsMobile] = useState(false);
  
//   // Desktop shows 5 cards, mobile shows 1
//   const visibleCount = isMobile ? 1 : 5;

//   // Check if device is mobile
//   useEffect(() => {
//     const checkIfMobile = () => {
//       setIsMobile(window.innerWidth < 576); // sm breakpoint
//     };
    
//     // Initial check
//     checkIfMobile();
    
//     // Add event listener for window resize
//     window.addEventListener('resize', checkIfMobile);
    
//     // Clean up event listener
//     return () => window.removeEventListener('resize', checkIfMobile);
//   }, []);

//   // We'll use the actual getAwards function imported from the API

//   // Fetch awards from API
//   useEffect(() => {
//     getAwards()
//       .then((data) => {
//         if (data?.awards) {
//           // Sort awards by the `sorting` key before setting them
//           const sortedAwards = [...data.awards].sort((a, b) => a.sorting - b.sorting);
//           setAwards(sortedAwards);
//           console.log("data awards=============>", sortedAwards );
//         }
//       })
//       .catch((err) => {
//         console.error('Error fetching awards:', err);
//       })
//       .finally(() => setLoading(false));
//   }, []);

//   // Auto-scroll behavior
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setStartIndex((prevIndex) =>
//         awards.length > 0 ? (prevIndex + 1) % awards.length : 0
//       );
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [awards]);

//   // Get currently visible awards
//   const getVisibleAwards = () => {
//     const endIndex = startIndex + visibleCount;
//     if (endIndex <= awards.length) {
//       return awards.slice(startIndex, endIndex);
//     } else {
//       return [...awards.slice(startIndex), ...awards.slice(0, endIndex - awards.length)];
//     }
//   };

//   // Loading skeleton
//   const LoadingSkeleton = () => {
//     return Array.from({ length: isMobile ? 1 : visibleCount }).map((_, idx) => (
//       <div key={idx} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-2">
//         <div className="h-48 bg-gray-200 rounded animate-pulse"></div>
//       </div>
//     ));
//   };

//   // Award card component
//   const AwardCard = ({ award }) => (
//     <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-2 mb-4">
//       <div className="h-full bg-white rounded shadow-sm p-3 text-center">
//         <div className="flex justify-center">
//           <img
//             src={award.image}
//             alt={`Award ${award.id}`}
//             loading="lazy"
//             className="w-32 h-40 object-contain mx-auto"
//           />
//         </div>
//       </div>
//     </div>
//   );

//   // Indicators for mobile carousel
//   const renderIndicators = () => {
//     if (!isMobile || loading || awards.length === 0) return null;
    
//     return (
//       <div className="flex justify-center mt-3">
//         {awards.map((_, idx) => (
//           <button
//             key={idx}
//             className={`mx-1 rounded-full w-2 h-2 ${
//               idx === startIndex ? "bg-blue-600" : "bg-gray-400"
//             }`}
//             onClick={() => setStartIndex(idx)}
//             aria-label={`Go to slide ${idx + 1}`}
//           />
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className="container mx-auto my-8 px-4">
//       <h2 className="text-2xl text-center mb-4 font-bold">Awards & Recognition</h2>
//       <div className="flex flex-wrap -mx-2 justify-center">
//         {loading ? (
//           <LoadingSkeleton />
//         ) : (
//           getVisibleAwards().map((award) => <AwardCard key={award.id} award={award} />)
//         )}
//       </div>
//       {renderIndicators()}
//     </div>
//   );
// };

// export default AwardsSection;


import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { getAwards } from '../../api/getAwards';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const AwardsSection = () => {
  const [awards, setAwards] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(5); // initially assume desktop

  // Dynamically adjust visible count on resize
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 576) {
        setVisibleCount(1); // Mobile
      } else if (width < 768) {
        setVisibleCount(2); // Small devices
      } else if (width < 992) {
        setVisibleCount(3); // Medium devices
      } else {
        setVisibleCount(5); // Large devices
      }
    };

    handleResize(); // Set initially
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    getAwards()
      .then((data) => {
        if (data?.awards) {
          const sortedAwards = [...data.awards].sort((a, b) => a.sorting - b.sorting);
          setAwards(sortedAwards);
        }
      })
      .catch((err) => {
        console.error('Error fetching awards:', err);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) =>
        awards.length > 0 ? (prevIndex + 1) % awards.length : 0
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [awards]);

  const getVisibleAwards = () => {
    const endIndex = startIndex + visibleCount;
    if (endIndex <= awards.length) {
      return awards.slice(startIndex, endIndex);
    } else {
      return [...awards.slice(startIndex), ...awards.slice(0, endIndex - awards.length)];
    }
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Awards & Recognition</h2>
      <Row className="g-3 justify-content-center">
        {loading
          ? Array.from({ length: visibleCount }).map((_, idx) => (
              <Col key={idx} xs={12} sm={6} md={4} lg={2}>
                <Skeleton height={180} />
              </Col>
            ))
          : getVisibleAwards().map((award) => (
              <Col key={award.id} xs={12} sm={6} md={4} lg={2}>
                <Card className="h-100 text-center p-3 shadow-sm">
                  <Card.Img
                    variant="top"
                    src={award.image}
                    alt={`Award ${award.id}`}
                    loading="lazy"
                    style={{
                      width: '120px',
                      height: '150px',
                      objectFit: 'contain',
                      margin: '0 auto',
                    }}
                  />
                </Card>
              </Col>
            ))}
      </Row>
    </Container>
  );
};

export default AwardsSection;
