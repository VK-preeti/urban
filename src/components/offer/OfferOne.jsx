//  import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom'
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
// import { getOffer } from '../../api/getOffer';

// function OfferOne() {

//      useEffect(() => {
//         getOffer()
//           .then((data) => {
//             setAboutus(data.rooms);
//           })
//           .catch((err) => {
//             console.error("Error fetching about us data:", err);
//           })
//           .finally(() => setLoading(false));
//       }, []);

//     return (
//         <>
//             {/* special section start */}
//             <div className="rts__section offer__area is__home__one has__shape">
//                 <div className="container">
//                     <div className="row position-relative justify-content-center text-center mb-30">
//                         <div className="col-lg-6 wow fadeInUp">
//                             <div className="section__topbar">
//                                 <span className="h6 subtitle__icon__three mx-auto">
//                                     Special Offer
//                                 </span>
//                                 <h2 className="section__title">Special Offer</h2>
//                             </div>
//                         </div>
//                     </div>
//                     {/* row end */}
//                     <div className="row justify-content-center g-30">
//                         <div className="col-lg-10 col-xl-6 col-xxl-5">
//                             <div className="single__offer__card">
//                                 <Link to="/#">
//                                     <img src="/assets/images/offer/5.webp" alt="" />
//                                 </Link>
//                                 <div className="single__offer__card__content">
//                                     <Link to="/#" className="h4">
//                                         Family Fun Package
//                                     </Link>
//                                     <ul className="offer__included list-unstyled">
//                                         <li>
//                                             <i className="flaticon-check-circle" /> 15% off on family
//                                             suites
//                                         </li>
//                                         <li>
//                                             <i className="flaticon-check-circle" /> Free meals for kids
//                                             under 12
//                                         </li>
//                                         <li>
//                                             <i className="flaticon-check-circle" /> Complimentary tickets
//                                         </li>
//                                         <li>
//                                             <i className="flaticon-check-circle" /> The local amusement
//                                             park
//                                         </li>
//                                     </ul>
//                                     <h3 className="offer__price mb-0">$39.00</h3>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-10 col-xl-6 col-xxl-7">
//                             <div className="d-flex flex-column gap-30">
//                                 <div className="single__offer__card is__flex">
//                                     <Link to="/#">
//                                         <img
//                                             src="/assets/images/offer/6.webp"
//                                             width={265}
//                                             height={310}
//                                             alt=""
//                                         />
//                                     </Link>
//                                     <div className="single__offer__card__content">
//                                         <Link to="/#" className="h5">
//                                             Spa Retreat
//                                         </Link>
//                                         <ul className="offer__included list-unstyled">
//                                             <li>
//                                                 <i className="flaticon-check-circle" /> A two-night stay in
//                                                 a room
//                                             </li>
//                                             <li>
//                                                 <i className="flaticon-check-circle" /> Daily spa treatments
//                                             </li>
//                                             <li>
//                                                 <i className="flaticon-check-circle" /> Healthy breakfast
//                                                 and lunch
//                                             </li>
//                                             <li>
//                                                 <i className="flaticon-check-circle" /> Access to all spa{" "}
//                                             </li>
//                                         </ul>
//                                         <h4 className="offer__price mb-0">$39.00</h4>
//                                     </div>
//                                 </div>
//                                 <div className="single__offer__card is__flex">
//                                     <Link to="/#">
//                                         <img
//                                             src="/assets/images/offer/7.webp"
//                                             width={265}
//                                             height={310}
//                                             alt=""
//                                         />
//                                     </Link>
//                                     <div className="single__offer__card__content">
//                                         <Link to="/#" className="h5">
//                                             Romantic Getaway
//                                         </Link>
//                                         <ul className="offer__included list-unstyled">
//                                             <li>
//                                                 <i className="flaticon-check-circle" /> A two-night stay in
//                                                 a room
//                                             </li>
//                                             <li>
//                                                 <i className="flaticon-check-circle" /> Daily spa treatments
//                                             </li>
//                                             <li>
//                                                 <i className="flaticon-check-circle" /> Healthy breakfast
//                                                 and lunch
//                                             </li>
//                                             <li>
//                                                 <i className="flaticon-check-circle" /> Access to all spa{" "}
//                                             </li>
//                                             <h4 className="offer__price mb-0">$39.00</h4>
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* special section end */}
//         </>

//     )
// }

// export default OfferOne

 

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { getOffer } from '../../api/getOffer';
// import ContactFormModal from './ContactFormModal';
import BookingModal from '../header/BookingModal';
import './OfferOne.css';
  // adjust path if needed

function OfferOne() {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    message: ''
  });
   
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

  useEffect(() => {
    getOffer()
      .then((data) => {
        if (data && data.rooms) {
          setOffers(data.rooms);
          console.log("offer other tab=============>", data.rooms);
        }
      })
      .catch((err) => {
        console.error("Error fetching offer data:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowModal(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      address: '',
      message: ''
    });
  };

  return (
    <>
      {/* special section start */}
      <div className="rts__section offer__area is__home__one has__shape">
        <div className="container">
          <div className="row position-relative justify-content-center text-center mb-30">
            <div className="col-lg-6 wow fadeInUp">
              <div className="section__topbar">
                <span className="h6 subtitle__icon__three mx-auto">Special Offers</span>
                <h2 className="section__title">Special Offers</h2>
              </div>
            </div>
          </div>

          <div className="row justify-content-center g-30">
            {loading ? (
              <Skeleton count={3} height={300} />
            ) : offers.length > 0 ? (
              offers.map((offer) => (
                <div key={offer.id} className="col-lg-10 col-xl-6 col-xxl-6 mb-4">
                  <div className="single__offer__card is__flex">
                    {/* <Link to="/#"> */}
                     <div className="offer-image-wrapper">
                        <img
                            src={offer.image}
                            alt={offer.title}
                            className="img-fluid offer-image"
                            style={{height: '100%'}}
                        />
                        </div>

                    {/* </Link> */}
                    <div className="single__offer__card__content"  >
                      <Link to="/#" className="h5">
                        {offer.title}
                      </Link>
                      <ul className="offer__included list-unstyled">
                        {JSON.parse(offer.features || '[]').map((feature, i) => (
                          <li key={i}>
                            <i className="flaticon-check-circle" /> {feature}
                          </li>
                        ))}
                      </ul>
                      <h4 className="offer__price mb-2">
                        <del style={{ marginRight: '10px' }}>{offer.price}</del>
                        {offer.offer_price}
                      </h4>
                      {/* <button
                        className="btn btn-primary mt-2"
                        onClick={() => setShowModal(true)}
                      >
                        Contact Us
                      </button> */}
                      <Link
                                to="#"
                                className="theme-btn btn-style sm-btn fill"
                                onClick={(e) => {
                                e.preventDefault();
                                handleShow();
                                }}
                            >
                                <span>Enquiry Now</span>
                            </Link>

                            {/* Booking Modal */}
                            <BookingModal show={showModal} handleClose={handleClose} />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">No offers available at the moment.</p>
            )}
          </div>
        </div>
      </div>

      {/* Reusable Contact Form Modal */}
      {/* <ContactFormModal
        show={showModal}
        onClose={() => setShowModal(false)}
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
      /> */}
    </>
  );
}

export default OfferOne;
