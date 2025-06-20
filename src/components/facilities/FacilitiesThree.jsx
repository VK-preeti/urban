import React, { useEffect } from 'react';
import { jarallax } from 'jarallax';
import { Link } from 'react-router-dom'

function FacilitiesThree() {
    useEffect(() => {
            function isMobileDevice() {
                return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            }
            
            if (!isMobileDevice()) {
                document.querySelectorAll('.jarallax').forEach(element => {
                    jarallax(element, {});
                });
            } else {
                console.log('Jarallax skipped on mobile devices');
            }
        }, []);
        
    return (
        <>
            {/* our facility */}
            <div className="rts__section  facility__area has__background has__shape">
                <div className="section__shape wow fadeInRight" data-wow-delay=".5s">
                    <img src="/assets/images/index-3/facility-shape.svg" alt="" />
                </div>
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="facility__image jara-mask-3 jarallax">
                                <img
                                    height={765}
                                    width={605}
                                    className="jarallax-img"
                                    src="/assets/images/index-3/facility.webp"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="facility__content">
                                <div className="section__topbar">
                                    <span className="h6 subtitle__icon__five d-block wow fadeInUp">
                                        Facility
                                    </span>
                                    <h2 className="content__title h2 lh-1 wow fadeInUp">
                                        Apartment Facilities
                                    </h2>
                                </div>
                                <div className="row mt-20 g-5 wow fadeInUp" data-wow-delay=".5s">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="card rts__card no-border is__home__three">
                                            <div className="card-body">
                                                <div className="icon">
                                                    <img src="/assets/images/icon/bed.svg" alt="" />
                                                </div>
                                                <Link to="#">
                                                    <h6 className="card-title h6 mb-15">Rooms and Suites</h6>
                                                </Link>
                                                <p className="card-text">
                                                    Varied types of rooms, from standard to luxury suites,
                                                    equipped with essentials like beds.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="card rts__card no-border is__home__three">
                                            <div className="card-body">
                                                <div className="icon">
                                                    <img src="/assets/images/icon/security.svg" alt="" />
                                                </div>
                                                <Link to="#">
                                                    <h6 className="card-title h6 mb-15">24-Hour Security</h6>
                                                </Link>
                                                <p className="card-text">
                                                    On-site security personnel and best surveillance. from
                                                    standard to luxury suites,Secure storage for valuables.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="card rts__card no-border is__home__three">
                                            <div className="card-body">
                                                <div className="icon">
                                                    <img src="/assets/images/icon/gym.svg" alt="" />
                                                </div>
                                                <Link to="#">
                                                    <h6 className="card-title h6 mb-15">Fitness Center</h6>
                                                </Link>
                                                <p className="card-text">
                                                    Equipped with exercise machines and weights.Offering
                                                    massages, facials, and other treatments.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="card rts__card no-border is__home__three">
                                            <div className="card-body">
                                                <div className="icon">
                                                    <img src="/assets/images/icon/swimming-pool.svg" alt="" />
                                                </div>
                                                <Link to="#">
                                                    <h6 className="card-title h6 mb-15">Swimming Pool</h6>
                                                </Link>
                                                <p className="card-text">
                                                    Indoor or outdoor pools for leisure or exercise.Offering
                                                    massages, facials, and other treatments
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* our facility end */}
        </>

    )
}

export default FacilitiesThree