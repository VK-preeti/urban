import React from 'react'
import { Link } from 'react-router-dom'

function FacilitiesSix() {
    return (
        <>
            {/* facility */}
            <div className="rts__section facility is__home__six">
                <div className="container">
                    <div className="row">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="facility__content py-60">
                                        <div className="section__topbar">
                                            <span className="h6 subtitle__icon__five d-block wow fadeInUp">
                                                About US
                                            </span>
                                            <h2 className="content__title h2 lh-1 wow fadeInUp">
                                                Apartment Facilities
                                            </h2>
                                        </div>
                                        <div className="row gy-5 mt-0">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="card rts__card no-border is__home__six">
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
                                                <div className="card rts__card no-border is__home__six">
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
                                                <div className="card rts__card no-border is__home__six">
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
                                                <div className="card rts__card no-border is__home__six">
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
                                <div className="col-lg-6">
                                    <div className="facility__image__container">
                                        <div className="facility__image wow fadeInRight">
                                            <img
                                                height={745}
                                                width={850}
                                                className=""
                                                src="/assets/images/index-6/facility.webp"
                                                alt=""
                                            />
                                        </div>
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

export default FacilitiesSix