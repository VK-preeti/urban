 import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { getOffer } from '../../api/getOffer';
import BookingModal from '../header/BookingModal';

function OfferTwo() {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
const [showModal, setShowModal] = useState(false);
   const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

  useEffect(() => {
    getOffer()
      .then((data) => {
        if (data && data.rooms) {
          setOffers(data.rooms);
          console.log("Offer data:", data.rooms);
        }
      })
      .catch((err) => {
        console.error("Error fetching offer data:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <div className="rts__section offer__area is__home__one has__shape">
        <div className="section__shape">
          <img src="/assets/images/offer/section__bg.svg" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="section__wrapper mb-40 wow fadeInUp" data-wow-delay=".3s">
              <div className="section__content__left">
                <span className="h5 subtitle__icon__two d-block wow fadeInUp" style={{color: '#ab8a62'}}>
                  Special Offer
                </span>
                <h2 className="content__title h2 lh-1">Special Offer</h2>
              </div>
              <div className="section__content__right">
                <p>
                  Experience the ultimate in luxury and relaxation with our
                  exclusive special offer! Book your stay now and enjoy 20% off our
                  best available rates.
                </p>
              </div>
            </div>
          </div>

          <div className="row row-60">
            {loading ? (
              // Loading Skeletons
              Array.from({ length: 4 }).map((_, index) => (
                <div className="col-xl-6 col-lg-10" key={index}>
                  <Skeleton height={300} />
                </div>
              ))
            ) : (
             offers.slice(0, 4).map((item, index) => {
                const features = JSON.parse(item.features || '[]'); // Parse features array

                return (
                  <div className="col-xl-6 col-lg-10 wow fadeInUp" data-wow-delay={`.${index + 3}s`} key={item.id}>
                    <div className="single__offer">
                      <div className="single__offer__image">
                        <img
                          src={item.image}
                          alt={item.title}
                          width={310}
                          height={310}
                          onError={(e) => {
                            e.target.src = "/assets/images/default-image.webp"; // fallback
                          }}
                        />
                      </div>
                      <div className="single__offer__content">
                        <Link to="#">
                          <h6 style={{color: 'black', fontSize: '1.5rem', fontWeight: 'bold'}}>{item.title}</h6>
                        </Link>
                        <ul className="offer__included">
                          {features.map((feature, i) => (
                            <li key={i}>
                              <i className="flaticon-check-circle" /> {feature}
                            </li>
                          ))}
                        </ul>
                        <p>
                          <strong>Price:</strong> ₹{item.price} <br />
                          <strong>Offer Price:</strong> ₹{item.offer_price}
                        </p>
                        {/* <Link to="#" className="underline__style">
                          Book Now
                        </Link> */}
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
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default OfferTwo;
