



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

