import React from 'react'
import { Link } from 'react-router-dom'

function OfferThree() {
    return (
        <>
            {/* special section start */}
            <div className="rts__section offer__area is__home__one has__shape p-0">
                <div className="section__shape">
                    <img src="/assets/images/offer/section__bg.svg" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div
                            className="section__wrapper mb-40 wow fadeInUp"
                            data-wow-delay=".3s"
                        >
                            <div className="section__content__left">
                                <span className="h6 subtitle__icon__two d-block wow fadeInUp">
                                    Special Offer
                                </span>
                                <h2 className="content__title h2 lh-1">Special Offer</h2>
                            </div>
                            <div className="section__content__right">
                                <p>
                                    Experience the ultimate in luxury and relaxation with our
                                    exclusive special offer! Book your stay now and enjoy 20% off our
                                    best available rates.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* row end */}
                    <div className="row row-60">
                        {/* single offer item */}
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="single__offer">
                                <div className="single__offer__image">
                                    <img
                                        src="/assets/images/offer/1.webp"
                                        width={310}
                                        height={310}
                                        alt=""
                                    />
                                </div>
                                <div className="single__offer__content">
                                    <Link to="#">
                                        <h6>Family Fun Package</h6>
                                    </Link>
                                    <ul className="offer__included">
                                        <li>
                                            <i className="flaticon-check-circle" /> 15% off on family
                                            suites
                                        </li>
                                        <li>
                                            <i className="flaticon-check-circle" /> Free meals for kids
                                            under 12
                                        </li>
                                        <li>
                                            <i className="flaticon-check-circle" /> Complimentary tickets
                                        </li>
                                        <li>
                                            <i className="flaticon-check-circle" /> The local amusement
                                            park
                                        </li>
                                        <li>
                                            <i className="flaticon-check-circle" /> Daily family-friendly
                                            activities
                                        </li>
                                    </ul>
                                    <Link to="#" className="underline__style">
                                        Book Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* single offer item end */}
                        {/* single offer item */}
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                            <div className="single__offer">
                                <div className="single__offer__image">
                                    <img
                                        src="/assets/images/offer/2.webp"
                                        width={310}
                                        height={310}
                                        alt=""
                                    />
                                </div>
                                <div className="single__offer__content">
                                    <Link to="#">
                                        <h6>Spa Retreat</h6>
                                    </Link>
                                    <ul className="offer__included">
                                        <li>
                                            <i className="flaticon-check-circle" /> A two-night stay in a
                                            premium room
                                        </li>
                                        <li>
                                            <i className="flaticon-check-circle" /> Daily spa treatments
                                        </li>
                                        <li>
                                            <i className="flaticon-check-circle" /> Healthy breakfast and
                                            lunch options
                                        </li>
                                        <li>
                                            <i className="flaticon-check-circle" /> Access to all spa
                                            facilities
                                        </li>
                                        <li>
                                            <i className="flaticon-check-circle" /> 25% off for stays of 7
                                            nights or more
                                        </li>
                                    </ul>
                                    <Link to="#" className="underline__style">
                                        Book Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* single offer item end */}
                        {/* single offer item */}
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                            <div className="single__offer">
                                <div className="single__offer__image">
                                    <img
                                        src="/assets/images/offer/3.webp"
                                        width={310}
                                        height={310}
                                        alt=""
                                    />
                                </div>
                                <div className="single__offer__content">
                                    <Link to="#">
                                        <h6>Business Traveler Special</h6>
                                    </Link>
                                    <ul className="offer__included">
                                        <li>
                                            <i className="flaticon-check-circle" /> 10% off on executive
                                            rooms
                                        </li>
                                        <li>
                                            <i className="flaticon-check-circle" /> Complimentary
                                            high-speed Wi-Fi
                                        </li>
                                        <li>
                                            <i className="flaticon-check-circle" /> Access to the business
                                            lounge
                                        </li>
                                        <li>
                                            <i className="flaticon-check-circle" /> Free airport shuttle
                                            service
                                        </li>
                                        <li>
                                            <i className="flaticon-check-circle" /> Daily family-friendly
                                            activities
                                        </li>
                                    </ul>
                                    <Link to="#" className="underline__style">
                                        Book Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* single offer item end */}
                        {/* single offer item */}
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".6s">
                            <div className="single__offer">
                                <div className="single__offer__image">
                                    <img
                                        src="/assets/images/offer/4.webp"
                                        width={310}
                                        height={310}
                                        alt=""
                                    />
                                </div>
                                <div className="single__offer__content">
                                    <Link to="#">
                                        <h6>Romantic Getaway</h6>
                                    </Link>
                                    <ul className="offer__included">
                                        <li>
                                            <i className="flaticon-check-circle" /> A two-night stay in a
                                            deluxe suite
                                        </li>
                                        <li>
                                            <i className="flaticon-check-circle" /> A bottle of champagne
                                            and chocolates
                                        </li>
                                        <li>
                                            <i className="flaticon-check-circle" /> Romantic dinner for
                                            two
                                        </li>
                                        <li>
                                            <i className="flaticon-check-circle" /> Couples massage at our
                                            spa
                                        </li>
                                        <li>
                                            <i className="flaticon-check-circle" /> Couples massage at our
                                            spa
                                        </li>
                                    </ul>
                                    <Link to="#" className="underline__style">
                                        Book Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* single offer item end */}
                    </div>
                </div>
            </div>
            {/* special section end */}
        </>

    )
}

export default OfferThree