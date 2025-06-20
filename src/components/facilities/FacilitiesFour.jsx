import React from 'react'
import { Link } from 'react-router-dom'

function FacilitiesFour() {
    return (
        <>
            {/* facility */}
            <div className="rts__section facility has__background py-80">
                <div className="container">
                    <div className="row position-relative justify-content-center text-center mb-60">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="section__topbar is__home__two">
                                <span className="h6 subtitle__icon__three mx-auto text-white">
                                    Facilities
                                </span>
                                <h2 className="section__title text-white">Hotel Facilities</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-30 align-items-center">
                        <div className="col-xl-6 col-lg-12">
                            <div className="facility__content">
                                <div className="row gy-4 wow fadeInUp" data-wow-delay=".5s">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="card rts__card is__home__four">
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
                                        <div className="card rts__card is__home__four">
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
                                        <div className="card rts__card is__home__four">
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
                                        <div className="card rts__card is__home__four">
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
                        <div className="col-lg-12 col-xl-6">
                            <div className="facility__thumb jarallax">
                                <figure className="m-0">
                                    <img
                                        className="jarallax-img"
                                        src="/assets/images/index-4/facility.webp"
                                        width={645}
                                        height={610}
                                        alt=""
                                    />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* facility end */}
        </>

    )
}

export default FacilitiesFour