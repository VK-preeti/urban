import React from 'react'
import { Link } from 'react-router-dom'

function FacilitiesOne() {
    return (
        <>
            {/* facilities */}
            <div className="rts__section facilities__area has__background has__shape py-90">
                <div className="section__shape">
                    <img src="/assets/images/shape/facility-1.svg" alt="" />
                </div>
                <div className="container">
                    <div className="row justify-content-center text-center mb-40">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="section__topbar">
                                <span className="h6 subtitle__icon__three mx-auto">Facilities</span>
                                <h2 className="section__title">Hotel Facilities</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4 wow fadeInUp" data-wow-delay=".5s">
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="card rts__card no-border is__home radius-6">
                                <div className="card-body">
                                    <div className="icon">
                                        <img src="/assets/images/icon/bed.svg" alt="" />
                                    </div>
                                    <Link to="/">
                                        <h6 className="card-title h6 mb-15">Rooms and Suites</h6>
                                    </Link>
                                    <p className="card-text">
                                        Varied types of rooms, from standard to luxury suites, equipped
                                        with essentials like beds.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="card rts__card no-border is__home radius-6">
                                <div className="card-body">
                                    <div className="icon">
                                        <img src="/assets/images/icon/security.svg" alt="" />
                                    </div>
                                    <Link to="/">
                                        <h6 className="card-title h6 mb-15">24-Hour Security</h6>
                                    </Link>
                                    <p className="card-text">
                                        On-site security personnel and best surveillance. from standard
                                        to luxury suites,Secure storage for valuables.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="card rts__card no-border is__home radius-6">
                                <div className="card-body">
                                    <div className="icon">
                                        <img src="/assets/images/icon/gym.svg" alt="" />
                                    </div>
                                    <Link to="/">
                                        <h6 className="card-title h6 mb-15">Fitness Center</h6>
                                    </Link>
                                    <p className="card-text">
                                        Equipped with exercise machines and weights.Offering massages,
                                        facials, and other treatments.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="card rts__card no-border is__home radius-6">
                                <div className="card-body">
                                    <div className="icon">
                                        <img src="/assets/images/icon/swimming-pool.svg" alt="" />
                                    </div>
                                    <Link to="/">
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
            {/* facilities end */}
        </>

    )
}

export default FacilitiesOne