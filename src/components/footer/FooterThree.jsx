import React from 'react'
import { Link } from 'react-router-dom'

function FooterThree() {
    return (
        <>
            {/* footer style three */}
            <footer className="rts__section rts__footer is__home__three footer__background has__shape">
                <div className="section__shape">
                    <div className="shape__1 wow fadeInLeft">
                        <img src="/assets/images/footer/shape-1.svg" alt="" />
                    </div>
                    <div className="shape__2">
                        <img src="/assets/images/footer/shape-2.svg" alt="" />
                    </div>
                </div>
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
                                            <i className="flaticon-marker" /> M5T 2L9 Toronto, Canada
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="rts__widget if__is__newsletter">
                                <span className="widget__title">Get In Touch</span>
                                <form action="#" className="footer__form">
                                    {/* single input */}
                                    <div className="query__input">
                                        <div className="query__input__position">
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                placeholder="Your Name"
                                                required=""
                                            />
                                            <div className="query__input__icon">
                                                <i className="flaticon-user" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* single input end */}
                                    {/* single input */}
                                    <div className="query__input">
                                        <div className="query__input__position">
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="Your Email"
                                                required=""
                                            />
                                            <div className="query__input__icon">
                                                <i className="flaticon-envelope" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* single input end */}
                                    {/* single input */}
                                    <div className="query__input">
                                        <div className="query__input__position">
                                            <textarea
                                                id="msg"
                                                name="msg"
                                                placeholder="Your Message"
                                                required=""
                                                defaultValue={""}
                                            />
                                            <div className="query__input__icon if__is__textarea">
                                                <img src="/assets/images/icon/message.svg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* single input end */}
                                    <button
                                        type="submit"
                                        className="theme-btn btn-style fill no-border submit__btn"
                                    >
                                        <span>Submit Now</span>
                                    </button>
                                </form>
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

export default FooterThree