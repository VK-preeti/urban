import React from 'react'
import { Link } from "react-router-dom";

function EventOne() {
    return (
        <>
            {/* blog style */}
            <div className="rts__section blog is__home__three section__padding">
                <div className="container">
                    <div className="row justify-content-center text-center mb-20">
                        <div className="col-lg-8 wow fadeInUp" data-wow-delay=".3s">
                            <div className="section__topbar">
                                <span className="h6 subtitle__icon__four mx-auto">Event</span>
                                <h2 className="section__title mb-20">
                                    Our Recent Beachside Events
                                </h2>
                                <span className="font-sm" />
                            </div>
                        </div>
                    </div>
                    {/* row end */}
                    <div className="row align-items-center g-30">
                        <div className="col-lg-6">
                            <div className="blog__item is__full is__event">
                                <div className="blog__item__thumb">
                                    <Link to="/event">
                                        <img src="/assets/images/index-6/event/1.webp" alt="" />
                                    </Link>
                                </div>
                                <div className="blog__item__meta">
                                    <div className="blog__item__meta__list mb-20">
                                        <span className="blog__item__meta__list__item">
                                            <img src="/assets/images/icon/calendar.svg" alt="" />
                                            March 26, 2024
                                        </span>
                                    </div>
                                    <Link to="/event" className="blog__item__meta__title">
                                        <h5>Your Perfect Event, Our Oceanfront Paradise</h5>
                                    </Link>
                                    <div className="blog__item__meta__list">
                                        <span className="blog__item__meta__list__item">
                                            <img src="/assets/images/icon/locatin.svg" alt="" />
                                            The Ritz-Carlton (California, USA)
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="blog__small__list">
                                {/* single blog */}
                                <div className="blog__item if__is__small is__event">
                                    <div className="blog__item__thumb">
                                        <Link to="/event">
                                            <img
                                                width={195}
                                                height={168}
                                                src="/assets/images/index-6/event/2.webp"
                                                alt=""
                                            />
                                        </Link>
                                    </div>
                                    <div className="blog__item__meta">
                                        <div className="blog__item__meta__list mb-20">
                                            <span className="blog__item__meta__list__item">
                                                <img src="/assets/images/icon/calendar.svg" alt="" />
                                                March 26, 2024
                                            </span>
                                        </div>
                                        <Link to="/event" className="blog__item__meta__title">
                                            <h5>Coastal Elegance for Unforgettable Moments</h5>
                                        </Link>
                                        <div className="blog__item__meta__list">
                                            <span className="blog__item__meta__list__item">
                                                <img src="/assets/images/icon/locatin.svg" alt="" />
                                                The Ritz-Carlton (USA)
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                {/* single blog end */}
                                {/* single blog */}
                                <div className="blog__item if__is__small is__event">
                                    <div className="blog__item__thumb">
                                        <Link to="/event">
                                            <img
                                                width={195}
                                                height={168}
                                                src="/assets/images/index-3/blog/3.webp"
                                                alt=""
                                            />
                                        </Link>
                                    </div>
                                    <div className="blog__item__meta">
                                        <div className="blog__item__meta__list mb-20">
                                            <span className="blog__item__meta__list__item">
                                                <img src="/assets/images/icon/calendar.svg" alt="" />
                                                March 26, 2024
                                            </span>
                                        </div>
                                        <Link to="/event" className="blog__item__meta__title">
                                            <h5>Comfortable Room with En-Suite Bathroom</h5>
                                        </Link>
                                        <div className="blog__item__meta__list">
                                            <span className="blog__item__meta__list__item">
                                                <img src="/assets/images/icon/locatin.svg" alt="" />
                                                The Ritz-Carlton (USA)
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                {/* single blog end */}
                                {/* single blog */}
                                <div className="blog__item if__is__small is__event">
                                    <div className="blog__item__thumb">
                                        <Link to="/event">
                                            <img
                                                width={195}
                                                height={168}
                                                src="/assets/images/index-3/blog/4.webp"
                                                alt=""
                                            />
                                        </Link>
                                    </div>
                                    <div className="blog__item__meta">
                                        <div className="blog__item__meta__list mb-20">
                                            <span className="blog__item__meta__list__item">
                                                <img src="/assets/images/icon/calendar.svg" alt="" />
                                                March 26, 2024
                                            </span>
                                        </div>
                                        <Link to="/event" className="blog__item__meta__title">
                                            <h5>Elegant Apartment with Private Terrace</h5>
                                        </Link>
                                        <div className="blog__item__meta__list">
                                            <span className="blog__item__meta__list__item">
                                                <img src="/assets/images/icon/locatin.svg" alt="" />
                                                The Ritz-Carlton (California, USA)
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                {/* single blog end */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* blog style end */}
        </>
    )
}

export default EventOne