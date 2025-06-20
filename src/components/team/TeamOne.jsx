import React, { useEffect, useState } from 'react';
import { getTeam } from '../../api/getTeam';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function TeamOne() {
  const [teamData, setTeamData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTeam().then(data => {
      if (data && data.teams) {
        setTeamData(data.teams);
      }
      setLoading(false);
    }).catch(err => {
      console.error("Failed to fetch team data:", err);
      setLoading(false);
    });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1, arrows: false } }
    ]
  };

  return (
    <div className="rts__section pt-120">
      <div className="container">
        <div className="row justify-content-center text-center mb-40">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
            <div className="section__topbar">
              <span className="h6 subtitle__icon__three mx-auto">Our Team</span>
              <h2 className="section__title">Meet The Team</h2>
            </div>
          </div>
        </div>

        <Slider {...settings}>
          {loading
            ? Array.from({ length: 4 }).map((_, idx) => (
              <div key={idx} className="team__member px-2">
                <div className="team__member__thumb" style={{ width: '100%', height: '300px' }}>
                  <Skeleton height="100%" />
                </div>
                <div className="team__member__meta">
                  <Skeleton width={100} height={20} />
                  <Skeleton width={80} height={15} />
                  <div className="team__member__social mt-2">
                    <Skeleton circle width={30} height={30} inline style={{ marginRight: '10px' }} />
                    <Skeleton circle width={30} height={30} inline style={{ marginRight: '10px' }} />
                    <Skeleton circle width={30} height={30} inline />
                  </div>
                </div>
              </div>
            ))
            : teamData.map((member, index) => (
              <div key={index} className="team__member px-2">
                <Link to="#">
                  <div className="team__member__thumb" style={{ width: '100%', height: '300px', overflow: 'hidden' }}>
                    <img 
                      src={member.image}
                      alt={member.name}
                      // style={{
                      //   width: '100%',
                      //   height: '100%',
                      //   objectFit: 'cover',
                      //   objectPosition: 'top'
                        
                      // }}

                       style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'top',
                        
                        transition: 'all 0.4s ease',
                    
                        overflow: 'hidden',
                        cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.03)';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                    />
                  </div>
                </Link>
                <div className="team__member__meta">
                  <Link to="#" className="h6">{member.name}</Link>
                  <span className="designation">{member.role}</span>
                  <div className="team__member__social">
                    <Link to="#"><i className="flaticon-facebook" /></Link>
                    <Link to="#"><i className="flaticon-linkedin" /></Link>
                    <Link to="#"><i className="flaticon-whatsapp" /></Link>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
}

export default TeamOne;
