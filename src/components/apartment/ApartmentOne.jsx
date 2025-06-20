import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Core Swiper styles
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';

function ApartmentOne() {
    return (
        <>
            {/* our apartment */}
            <div className="rts__section section__padding">
                <div className="container">
                    <div className="row justify-content-center text-center mb-40">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="section__topbar">
                                <span className="h6 subtitle__icon__four mx-auto">Apartment</span>
                                <h2 className="section__title mb-20"> Our Apartment</h2>
                                <span className="font-sm">
                                    Our rooms offer a harmonious blend of comfort and elegance,
                                    designed to provide an exceptional stay for every guest Each room
                                    features plush bedding.
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* row end */}
                </div>
                <div className="full__width">
                    <Swiper
                        className="apartment__slider overflow-hidden wow fadeInUp" data-wow-delay=".5s"
                        modules={[Pagination]}
                        direction="horizontal"
                        slidesPerView={3}
                        spaceBetween={30}
                        loop={true}
                        centeredSlides={true}
                        autoplay="false"
                        pagination={{
                            el: ".rts-pagination",
                            clickable: true,
                        }}
                        speed={1000}
                        effect="slide"
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                centeredSlides: false
                            },
                            768: {
                                slidesPerView: 2.1,
                            },
                            1200: {
                                slidesPerView: 3,
                            }
                        }}
                    >
                        <div className="swiper-wrapper">
                            {/* single apartment slider */}
                            <SwiperSlide>
                                <div className="apartment__slide__box">
                                    <div className="apartment__slide__image">
                                        <img
                                            height={500}
                                            width={610}
                                            src="/assets/images/index-3/apartment/1.webp"
                                            alt="apartment"
                                        />
                                    </div>
                                    <div className="apartment__slide__content">
                                        <div className="slider__meta">
                                            <Link to="/room/2" className="apartment__title">
                                                <h5>Elegant Apartment</h5>
                                            </Link>
                                            <div className="apartment__content__meta">
                                                <span>
                                                    <i className="flaticon-construction" />
                                                    35 ft
                                                </span>
                                                <span>
                                                    <i className="flaticon-user" />5 Person
                                                </span>
                                            </div>
                                        </div>
                                        <span className="price h4">200$</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* single apartment slider end */}
                            {/* single apartment slider */}
                            <SwiperSlide>
                                <div className="apartment__slide__box">
                                    <div className="apartment__slide__image">
                                        <img
                                            height={500}
                                            width={610}
                                            src="/assets/images/index-3/apartment/2.webp"
                                            alt="apartment"
                                        />
                                    </div>
                                    <div className="apartment__slide__content">
                                        <div className="slider__meta">
                                            <Link to="/room/2" className="apartment__title">
                                                <h5>Elegant Apartment</h5>
                                            </Link>
                                            <div className="apartment__content__meta">
                                                <span>
                                                    <i className="flaticon-construction" />
                                                    35 ft
                                                </span>
                                                <span>
                                                    <i className="flaticon-user" />5 Person
                                                </span>
                                            </div>
                                        </div>
                                        <span className="price h4">200$</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* single apartment slider end */}
                            {/* single apartment slider */}
                            <SwiperSlide>
                                <div className="apartment__slide__box">
                                    <div className="apartment__slide__image">
                                        <img
                                            height={500}
                                            width={610}
                                            src="/assets/images/index-3/apartment/3.webp"
                                            alt="apartment"
                                        />
                                    </div>
                                    <div className="apartment__slide__content">
                                        <div className="slider__meta">
                                            <Link to="/room/2" className="apartment__title">
                                                <h5>Elegant Apartment</h5>
                                            </Link>
                                            <div className="apartment__content__meta">
                                                <span>
                                                    <i className="flaticon-construction" />
                                                    35 ft
                                                </span>
                                                <span>
                                                    <i className="flaticon-user" />5 Person
                                                </span>
                                            </div>
                                        </div>
                                        <span className="price h4">200$</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* single apartment slider end */}
                            {/* single apartment slider */}
                            <SwiperSlide>
                                <div className="apartment__slide__box">
                                    <div className="apartment__slide__image">
                                        <img
                                            height={500}
                                            width={610}
                                            src="/assets/images/index-3/apartment/4.webp"
                                            alt="apartment"
                                        />
                                    </div>
                                    <div className="apartment__slide__content">
                                        <div className="slider__meta">
                                            <Link to="/room/2" className="apartment__title">
                                                <h5>Elegant Apartment</h5>
                                            </Link>
                                            <div className="apartment__content__meta">
                                                <span>
                                                    <i className="flaticon-construction" />
                                                    35 ft
                                                </span>
                                                <span>
                                                    <i className="flaticon-user" />5 Person
                                                </span>
                                            </div>
                                        </div>
                                        <span className="price h4">200$</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* single apartment slider end */}
                        </div>
                        {/* pagination button */}
                        <div className="rts__pagination">
                            <div className="rts-pagination" />
                        </div>
                        {/* pagination button end */}
                    </Swiper>
                </div>
            </div>
            {/* our apartment end */}
        </>

    )
}

export default ApartmentOne