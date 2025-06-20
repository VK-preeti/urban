import React from 'react'
import { Link } from 'react-router-dom'

function ServiceFour() {
    return (
        <>
            {/* our service  */}
            <div className="rts__section service is__home__six section__padding">
                <div className="container">
                    <div className="row">
                        <div className="section__wrapper mb-40 wow fadeInUp">
                            <div className="section__content__left">
                                <div className="section__topbar">
                                    <span className="h6 subtitle__icon__five d-block wow fadeInUp">
                                        Our Service
                                    </span>
                                    <h2 className="content__title h2 lh-1 wow fadeInUp">
                                        Our Services
                                    </h2>
                                </div>
                            </div>
                            <div className="section__content__right">
                                <p>
                                    Our rooms offer a harmonious blend of comfort and elegance,
                                    designed to provide an exceptional stay for every guest. Each room
                                    features plush bedding, high-quality linens, and a selection of
                                    pillows to ensure a restful night's sleep.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* row end */}
                    {/* row start */}
                    <div className="row g-4">
                        <div className="col-lg-6 col-md-6">
                            <div className="service__item__slide if__is__home__six">
                                <div className="service__thumb">
                                    <Link to="#">
                                        <img
                                            height={275}
                                            width={305}
                                            src="/assets/images/index-6/service/1.webp"
                                            alt=""
                                        />
                                    </Link>
                                </div>
                                <div className="service__meta">
                                    <h5>
                                        <Link to="#">Family Fun Package</Link>
                                    </h5>
                                    <span className="d-block h4 price">250$</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="service__item__slide if__is__home__six">
                                <div className="service__thumb">
                                    <Link to="#">
                                        <img
                                            height={275}
                                            width={305}
                                            src="/assets/images/index-6/service/2.webp"
                                            alt=""
                                        />
                                    </Link>
                                </div>
                                <div className="service__meta">
                                    <h5>
                                        <Link to="#">Spa Retreat</Link>
                                    </h5>
                                    <span className="d-block h4 price">120$</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="service__item__slide if__is__home__six">
                                <div className="service__thumb">
                                    <Link to="#">
                                        <img
                                            height={275}
                                            width={305}
                                            src="/assets/images/index-6/service/3.webp"
                                            alt=""
                                        />
                                    </Link>
                                </div>
                                <div className="service__meta">
                                    <h5>
                                        <Link to="#">Romantic Getaway</Link>
                                    </h5>
                                    <span className="d-block h4 price">100$</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="service__item__slide if__is__home__six">
                                <div className="service__thumb">
                                    <Link to="#">
                                        <img
                                            height={275}
                                            width={305}
                                            src="/assets/images/index-6/service/4.webp"
                                            alt=""
                                        />
                                    </Link>
                                </div>
                                <div className="service__meta">
                                    <h5>
                                        <Link to="#">Velvet Red Reserve</Link>
                                    </h5>
                                    <span className="d-block h4 price">450$</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* our service  end */}
        </>

    )
}

export default ServiceFour