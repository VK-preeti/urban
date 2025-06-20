import React from 'react'
import { Link } from 'react-router-dom'

function FooterFour() {
    return (
        <>
            {/* footer style three */}
            <footer className="rts__section rts__footer is__home__four footer__background">
                <div className="container">
                    <div className="row">
                        <div className="footer__widget__wrapper">
                            <div className="rts__widget">
                                <Link to="/">
                                    <img src="/assets/images/logo/logo__two.svg" alt="footer logo" />
                                </Link>
                                <p className="font-sm max-290 mt-20 text-white">
                                    Each room features plush bedding, high-quality linens, and a
                                    selection of ensure a restful night's sleep.
                                </p>
                            </div>
                            <div className="rts__widget">
                                <span className="widget__title">Quick Links</span>
                                <ul>
                                    <li>
                                        <Link to="#">Rooms &amp; Suites</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Dining</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Spa &amp; Wellness</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Special Offers</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Blog</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="rts__widget">
                                <span className="widget__title">Guest Service</span>
                                <ul>
                                    <li>24/7 Front Desk</li>
                                    <li>Parking</li>
                                    <li>Room Service</li>
                                    <li>Free Wi-Fi</li>
                                    <li>Concierge Service</li>
                                </ul>
                            </div>
                            <div className="rts__widget">
                                <span className="widget__title">Contact Us</span>
                                <ul>
                                    <li>
                                        <Link to="tel:+12505550199">
                                            <i className="flaticon-phone-flip" /> +12505550199
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="mailto:UjJw6@example.com">
                                            <i className="flaticon-envelope" />
                                            Moonlit@gmail.com
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i className="flaticon-marker" /> 280 Augusta Avenue, M5T 2L9
                                            Toronto, Canada
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright__text">
                    <div className="container">
                        <div className="row">
                            <div className="copyright__wrapper">
                                <p className="mb-0">
                                    Copyright © {new Date().getFullYear()} Moonlit. All rights reserved.
                                </p>
                                <div className="footer__social__link">
                                    <Link to="#" className="link__item">
                                        Facebook
                                    </Link>
                                    <Link to="#" className="link__item">
                                        Linkedin
                                    </Link>
                                    <Link to="#" className="link__item">
                                        Twitter
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* footer style three end */}
        </>

    )
}

export default FooterFour