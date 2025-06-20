import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Core Swiper styles
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';

function ServiceTwo() {
    return (
        <>
            {/* our services */}
            <div className="rts__section service is__home__four section__padding">
                <div className="container">
                    <div className="row">
                        <div className="section__wrapper mb-40 wow fadeInUp">
                            <div className="section__content__left">
                                <span className="h6 subtitle__icon__two d-block wow fadeInUp">
                                    Our Service
                                </span>
                                <h2 className="content__title h2 lh-1">Our Services</h2>
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
                </div>
                <Swiper
                    className="service__slider full__width"
                    modules={[Pagination]}
                    direction="horizontal"
                    slidesPerView={4}
                    spaceBetween={30}
                    loop={true}
                    centeredSlides={false}
                    autoplay="false"
                    pagination={{
                        el: ".rts-pagination",
                        clickable: true,
                    }}
                    speed={1000}
                    effect="slide"
                    breakpoints= {{
                        0: {
                            slidesPerView: 1,
                          },
                          767: {
                            slidesPerView: 2.01,
                          },
                          991: {
                            slidesPerView: 2.5,
                          },
                          1200: {
                            slidesPerView: 3,
                          },
                          1400: {
                            slidesPerView: 3,
                          },
                          1600: {
                            slidesPerView: 4,
                          }
                    }}
                >
                    <div className="swiper-wrapper">
                        {/* single slide */}
                        <SwiperSlide>
                            <div className="service__item__slide">
                                <div className="service__thumb">
                                    <img
                                        height={460}
                                        width={420}
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
                                        height={460}
                                        width={420}
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
                                        height={460}
                                        width={420}
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
                                        height={460}
                                        width={420}
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
                        {/* single slide */}
                        <SwiperSlide>
                            <div className="service__item__slide">
                                <div className="service__thumb">
                                    <img
                                        height={460}
                                        width={420}
                                        src="/assets/images/index-4/service/5.webp"
                                        alt=""
                                    />
                                </div>
                                <div className="service__meta">
                                    <h5>
                                        <Link to="/service">Spa Retreat Package</Link>
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
                                        height={460}
                                        width={420}
                                        src="/assets/images/index-4/service/2.webp"
                                        alt=""
                                    />
                                </div>
                                <div className="service__meta">
                                    <h5>
                                        <Link to="/service">Couple Package</Link>
                                    </h5>
                                    <span className="d-block h4 price">250$</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* single slide end */}
                    </div>
                    {/* pagination button */}
                    <div className="rts__pagination">
                        <div className="rts-pagination" />
                    </div>
                    {/* pagination button end */}
                </Swiper>
            </div>
            {/* our services end */}
        </>

    )
}

export default ServiceTwo