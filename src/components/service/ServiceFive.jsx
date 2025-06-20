//  import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { getServiceFacilities } from '../../api/getServiceFacilities';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';

// function ServiceFive() {
//     const [facilities, setFacilities] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         getServiceFacilities()
//             .then((data) => {
//                 if (data?.allFacility) {
//                     setFacilities(data.allFacility);
//                 }
//             })
//             .catch((err) => {
//                 console.error("Error fetching facilities:", err);
//             })
//             .finally(() => setLoading(false));
//     }, []);

//     return (
//         <div className="rts__section section__padding">
//             <div className="container">
//                 <div className="row">
//                     <div className="service__list">
//                         {loading ? (
//                             Array(6).fill(0).map((_, i) => (
//                                 <div className="service__item" key={i}>
//                                     <Skeleton height={40} width={40} />
//                                     <Skeleton height={20} width={120} style={{ margin: '10px 0' }} />
//                                     <Skeleton count={3} />
//                                 </div>
//                             ))
//                         ) : (
//                             facilities.map((facility) => (
//                                 <div className="service__item" key={facility.id}>
//                                     <div className="service__item__icon">
//                                         {facility.icon?.endsWith('.svg') || facility.icon?.endsWith('.webp') ? (
//                                             <img
//                                                 src={facility.icon}
//                                                 alt={facility.title}
//                                                 width={40}
//                                                 height={40}
//                                             />
//                                         ) : (
//                                             <i className="flaticon-placeholder" />
//                                         )}
//                                     </div>
//                                     <Link to="#" className="h6">{facility.title}</Link>
//                                     <p dangerouslySetInnerHTML={{ __html: facility.description }} />
//                                 </div>
//                             ))
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ServiceFive;


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getServiceFacilities } from '../../api/getServiceFacilities';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ServiceFive.css';

function ServiceFive() {
  const [facilities, setFacilities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getServiceFacilities()
      .then((data) => {
        if (data?.allFacility) {
          setFacilities(data.allFacility);
        }
        console.log("wedding facilities================>", data.allFacility );
      })
       
      .catch((err) => {
        console.error("Error fetching facilities:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="py-5">
      <div className="container">
         {/* Section Heading */}
    <div className="row mb-4">
      <div className="col text-center">
        <h2 class='h6'>Our Facilities</h2>
        <p className="text-muted">Explore the features and amenities we offer</p>
      </div>
    </div>
        <div className="row">
          {loading ? (
            // Skeleton loader cards
            Array(6).fill(0).map((_, i) => (
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={i}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body text-center">
                    <div className="bg-light rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                      <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                    <div className="placeholder-glow">
                      <span className="placeholder col-6 mb-3"></span>
                      <span className="placeholder col-8"></span>
                      <span className="placeholder col-7"></span>
                      <span className="placeholder col-9"></span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            // Actual facility cards
            facilities.map((facility) => (
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={facility.id}>
                <div className="card h-100 shadow-sm hover-animate">

                  <div className="card-body text-center">
                    <div className="bg-light rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                      {facility.icon && (facility.icon.endsWith('.svg') || facility.icon.endsWith('.webp') || facility.icon.endsWith('.png') || facility.icon.endsWith('.jpg')) ? (
              <img
                src={facility.icon}
                alt={facility.title}
                className="img-fluid p-2"
                style={{ maxWidth: '50px', maxHeight: '50px' }}
                onError={(e) => { e.target.onerror = null; e.target.src = '/default-icon.png'; }}
              />
            ) : (
              <i className="flaticon-placeholder fs-1 text-primary"></i>
            )}

                    </div>
                    <h5 className="card-title mb-3">
                      <Link to="#" class='h6' style={{color: 'black'}}>{facility.title}</Link>
                    </h5>
                    <div className="card-text" dangerouslySetInnerHTML={{ __html: facility.description }} />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default ServiceFive;