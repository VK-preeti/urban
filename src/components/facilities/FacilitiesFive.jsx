import React, { useEffect } from 'react';
import { jarallax } from 'jarallax';
import { Link } from 'react-router-dom'

function FacilitiesFive() {
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
            {/* facility */}
            <div className="rts__section section__padding facility is__home__five">
                <div className="container">
                    <div className="row">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="facility__content">
                                        <div className="row gy-5">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="card rts__card no-border is__home__five">
                                                    <div className="card-body">
                                                        <div className="icon">
                                                            <img src="/assets/images/icon/bed.svg" alt="" />
                                                        </div>
                                                        <Link to="#">
                                                            <h6 className="card-title h6 mb-15">
                                                                Rooms and Suites
                                                            </h6>
                                                        </Link>
                                                        <p className="card-text">
                                                            Varied types of rooms, from standard to luxury suites,
                                                            equipped with essentials like beds.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="card rts__card no-border is__home__five">
                                                    <div className="card-body">
                                                        <div className="icon">
                                                            <img src="/assets/images/icon/security.svg" alt="" />
                                                        </div>
                                                        <Link to="#">
                                                            <h6 className="card-title h6 mb-15">
                                                                24-Hour Security
                                                            </h6>
                                                        </Link>
                                                        <p className="card-text">
                                                            On-site security personnel and best surveillance. from
                                                            standard to luxury suites,Secure storage for
                                                            valuables.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="card rts__card no-border is__home__five">
                                                    <div className="card-body">
                                                        <div className="icon">
                                                            <img src="/assets/images/icon/gym.svg" alt="" />
                                                        </div>
                                                        <Link to="#">
                                                            <h6 className="card-title h6 mb-15">
                                                                Fitness Center
                                                            </h6>
                                                        </Link>
                                                        <p className="card-text">
                                                            Equipped with exercise machines and weights.Offering
                                                            massages, facials, and other treatments.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="card rts__card no-border is__home__five">
                                                    <div className="card-body">
                                                        <div className="icon">
                                                            <img
                                                                src="/assets/images/icon/swimming-pool.svg"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <Link to="#">
                                                            <h6 className="card-title h6 mb-15">Swimming Pool</h6>
                                                        </Link>
                                                        <p className="card-text">
                                                            Indoor or outdoor pools for leisure or
                                                            exercise.Offering massages, facials, and other
                                                            treatments
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mt-5 mt-lg-0">
                                    <span className="h6 subtitle__icon__two d-block wow fadeInUp">
                                        Facility
                                    </span>
                                    <h2 className="content__title h2 lh-1 wow fadeInUp">
                                        Apartment Facilities
                                    </h2>
                                    <div className="facility__image mt-50 wow fadeInUp">
                                        <img
                                            height={325}
                                            width={645}
                                            className=""
                                            src="/assets/images/index-5/facility.webp"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* facility end */}
        </>

    )
}

export default FacilitiesFive