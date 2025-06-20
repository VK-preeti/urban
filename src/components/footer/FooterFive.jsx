import React from 'react'
import { Link } from 'react-router-dom'

function FooterFive() {
    return (
        <>
            {/* footer */}
            <footer className="rts__section rts__footer is__home__five footer__background has__shape">
                <div className="container">
                    <div className="row">
                        <div className="footer__widget__wrapper">
                            <div className="rts__widget">
                                <Link to="/">
                                    <img src="/assets/images/logo/logo.svg" alt="footer logo" />
                                </Link>
                                <p className="font-sm max-290 mt-20">
                                    Each room features plush bedding, high-quality linens, and a
                                    selection of ensure a restful night's sleep.
                                </p>
                            </div>
                            <div className="rts__widget">
                                <span className="widget__title">Guest Services</span>
                                <ul>
                                    <li>
                                        <Link to="#">24/7 Front Desk</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Parking</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Room Service</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Free Wi-Fi</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Concierge Service</Link>
                                    </li>
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
                                            <i className="flaticon-marker" />
                                            M5T 2L9 Toronto, Canada
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="rts__widget">
                                <span className="widget__title">Join Our Newsletter</span>
                                <div className="rts__form footer__newsletter">
                                    <form action="#" method="post">
                                        <input
                                            type="email"
                                            name="email"
                                            id="subscription"
                                            placeholder="Enter your mail"
                                            required=""
                                        />
                                        <button type="submit"  >Subscribe</button>
                                    </form>
                                </div>
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
            {/* footer end */}
        </>

    )
}

export default FooterFive