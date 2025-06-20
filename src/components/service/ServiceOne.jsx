 import React, { useEffect, useState } from 'react';
import { jarallax } from 'jarallax';
import { Link } from 'react-router-dom';
import { getOurService } from '../../api/getOurService';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function ServiceOne() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedIds, setExpandedIds] = useState([]);

  useEffect(() => {
    getOurService()
      .then((data) => {
        if (data.status && data.success) {
          setServices(data.services);
        }
      })
      .catch((err) => {
        console.error("Error fetching service data:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    function isMobileDevice() {
      return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    if (!isMobileDevice()) {
      document.querySelectorAll('.jarallax').forEach((element) => {
        jarallax(element, {});
      });
    }
  }, [services]);

  const stripHtml = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };

  const toggleExpanded = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const renderSkeletonCard = () => (
    <div className="single__service__item if__is__default mb-5">
      <div className="service__thumb">
        <Skeleton height={300} />
      </div>
      <div className="service__content mt-3">
        <Skeleton height={20} width={150} />
        <Skeleton height={25} width={300} className="mb-2" />
        <Skeleton count={3} />
        <Skeleton width={100} height={30} />
      </div>
    </div>
  );

  return (
    <div className="rts__section service is__home__three has__background has__shape">
      <div className="section__shape wow fadeInRight" data-wow-delay=".5s">
        <img src="/assets/images/index-3/service/sec-bg.svg" alt="" />
      </div>
      <div className="container">
        <div className="row mb-40">
          <div className="section__topbar">
            <span className="h6 subtitle__icon__five d-block wow fadeInUp">
              Our Service
            </span>
            <h2 className="content__title h2 lh-1 wow fadeInUp">Our Services</h2>
          </div>
        </div>
        <div className="row">
          {loading
            ? Array.from({ length: 2 }).map((_, i) => (
                <div className="col-12" key={i}>
                  {renderSkeletonCard()}
                </div>
              ))
            : services.length === 0
            ? (
              <p className="text-center">No services available at the moment.</p>
            )
            : services.map((service, index) => {
                const isExpanded = expandedIds.includes(service.id);
                const fullText = stripHtml(service.description);
                const displayText = isExpanded
                  ? fullText
                  : fullText.substring(0, 220) + (fullText.length > 220 ? '...' : '');

                return (
                  <div
                    className={`single__service__item ${
                      index % 2 === 1 ? 'if__is__reverse' : 'if__is__default'
                    }`}
                    key={service.id}
                  >
                    <div className="service__thumb jarallax">
                      <img
                        className="jarallax-img"
                        src={service.image}
                        width={605}
                        height={535}
                        alt={service.title}
                      />
                    </div>
                    <div className="service__content">
                      <div className="section__topbar">
                        <span className="h6 subtitle__icon__five d-block wow fadeInUp">
                          {service.category}
                        </span>
                        <h2 className="content__title h3 lh-1 wow fadeInUp">
                          {service.title}
                        </h2>
                      </div>
                      <p className="font-sm mt-30 wow fadeInUp">{displayText}</p>
                      {fullText.length > 220 && (
                        <button
                          onClick={() => toggleExpanded(service.id)}
                          className="underline__style wow fadeInUp"
                          data-wow-delay=".4s"
                          style={{
                            background: 'none',
                            border: 'none',
                            padding: 0,
                            color: '#007bff',
                            cursor: 'pointer',
                          }}
                        >
                          {isExpanded ? 'Read Less' : 'Read More'}
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
}

export default ServiceOne;
