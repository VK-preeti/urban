 import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getWeddingPlanning } from './../../api/getWeddingPlanning';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function WeddingPlanning() {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    intro: false,
    packages: false,
    venues: false,
    gallery: false,
    testimonials: false,
    timeline: true,
    form: false,
    services: false,
    cta: false
  });

  const [timelineData, setTimelineData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getWeddingPlanning()
      .then((data) => {
        if (data?.status && data?.wedTimeline) {
          setTimelineData(data.wedTimeline);
          console.log("wedding plan data===========>", data.wedTimeline);
        }
      })
      .catch((err) => {
        console.error("Error fetching wedding planning data:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  // Render 3 skeleton timeline items for loading state
  const renderSkeletons = () => {
    return Array.from({ length: 3 }).map((_, index) => (
      <div className="timeline-item row mb-5" key={index}>
        <div className="col-md-3">
          <Skeleton height={70} style={{ borderRadius: 12 }} />
        </div>
        <div className="col-md-9">
          <div className="timeline-content p-4 shadow-sm bg-white rounded">
            <Skeleton count={4} />
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <section id="section-timeline" className="py-5">
        <Container>
          <h2 className={`text-center display-5 mb-5 ${isVisible.timeline ? 'animate__animated animate__fadeInDown' : ''}`}>
            Wedding Planning Timeline
          </h2>

          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="timeline position-relative">
                {loading ? (
                  renderSkeletons()
                ) : timelineData.length === 0 ? (
                  <p className="text-center">No timeline data available.</p>
                ) : (
                  timelineData.map((period, index) => (
                    <div
                      key={period.id}
                      className={`timeline-item row mb-5 position-relative ${isVisible.timeline ? `animate__animated animate__fadeInLeft animate__delay-${index % 5}s` : ''}`}
                    >
                      <div className="col-md-3">
                        <div
                          className="timeline-date text-white p-3 rounded text-center position-relative"
                          style={{ backgroundColor: 'var(--btn-1)' }}
                        >
                          {period.title}
                        </div>
                      </div>
                      <div className="col-md-9">
                        <div className="timeline-content p-4 shadow-sm bg-white rounded">
                          <div dangerouslySetInnerHTML={{ __html: period.description }} />
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default WeddingPlanning;
