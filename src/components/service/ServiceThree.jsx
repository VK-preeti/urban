import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Core Swiper styles
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';

function ServiceThree() {
    return (
        <>
            {/* our services */}
            <div className="rts__section service is__home__five has__background custom__padding">
                <div className="container">
                    <div className="row justify-content-center text-center mb-40">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="section__topbar">
                                <span className="h6 subtitle__icon__three mx-auto">
                                    Our Service
                                </span>
                                <h2 className="section__title">Our Services</h2>
                            </div>
                        </div>
                    </div>
                    <Swiper
                        className="row overflow-hidden service__slider__five"
                        modules={[Navigation]}
                        direction="horizontal"
                        slidesPerView={3.05}
                        spaceBetween={30}
                        loop={true}
                        centeredSlides={true}
                        autoplay={true}
                        navigation={{
                            nextEl: ".slider-button-next",
                            prevEl: ".slider-button-prev",
                        }}
                        speed={1000}
                        effect="slide"
                        breakpoints= {{
                            0: {
                                slidesPerView: 1,
                                centeredSlides: false,
                              },
                              767: {
                                slidesPerView: 2.01,
                                centeredSlides: false,
                              },
                              991: {
                                slidesPerView: 2.5,
                                centeredSlides: false,
                              },
                              1200: {
                                slidesPerView: 3,
                              },
                              1400: {
                                slidesPerView: 3,
                              }
                        }}
                    >
                        <div className="swiper-wrapper">
                            {/* single slide */}
                            <SwiperSlide>
                                <div className="service__item__slide">
                                    <div className="service__thumb">
                                        <img
                                            height={440}
                                            width={385}
                                            src="/assets/images/index-4/service/1.webp"
                                            alt=""
                                        />
                                    </div>
                                    <div className="service__meta">
                                        <h5>
                                            <Link to="/service">Family Fun Package</Link>
                                        </h5>
                                        <span className="d-block h4 price">250$</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* single slide end */}
                            {/* single slide */}
                            <SwiperSlide>
                                <div className="service__item__slide">
                                    <div className="service__thumb">
                                        <img
                                            height={440}
                                            width={385}
                                            src="/assets/images/index-4/service/2.webp"
                                            alt=""
                                        />
                                    </div>
                                    <div className="service__meta">
                                        <h5>
                                            <Link to="/service">Spa Retreat</Link>
                                        </h5>
                                        <span className="d-block h4 price">120$</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* single slide end */}
                            {/* single slide */}
                            <SwiperSlide>
                                <div className="service__item__slide">
                                    <div className="service__thumb">
                                        <img
                                            height={440}
                                            width={385}
                                            src="/assets/images/index-4/service/3.webp"
                                            alt=""
                                        />
                                    </div>
                                    <div className="service__meta">
                                        <h5>
                                            <Link to="/service">Romantic Getaway</Link>
                                        </h5>
                                        <span className="d-block h4 price">100$</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* single slide end */}
                            {/* single slide */}
                            <SwiperSlide>
                                <div className="service__item__slide">
                                    <div className="service__thumb">
                                        <img
                                            height={440}
                                            width={385}
                                            src="/assets/images/index-4/service/4.webp"
                                            alt=""
                                        />
                                    </div>
                                    <div className="service__meta">
                                        <h5>
                                            <Link to="/service">Business Traveler Special</Link>
                                        </h5>
                                        <span className="d-block h4 price">450$</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* single slide end */}
                        </div>
                    </Swiper>
                        
                </div>
            </div>
            {/* our services end */}
        </>

    )
}

export default ServiceThree