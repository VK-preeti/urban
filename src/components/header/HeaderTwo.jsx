import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import OffcanvasMenu from './OffcanvasMenu';
import LoginForm from '../form/LoginForm';
import SignUpForm from '../form/SignUpForm';

function HeaderTwo() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isSignupOpen, setIsSignupOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 150);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            {/* header area */}
            <div className="header__absolute">
                <div className="header__top is__home__two">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-lg-6 col-md-6">
                                <div className="social__links">
                                    <Link className="link__item gap-10" to="callto:#">
                                        <i className="flaticon-phone-flip" /> +12505550199
                                    </Link>
                                    <Link className="link__item gap-10" to="mailto:#">
                                        <i className="flaticon-envelope" /> moonlit@gmail.com
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="location">
                                    <Link className="link__item gap-10" to="#">
                                        <i className="flaticon-marker" />
                                        280 Augusta Avenue, M5T 2L9 Toronto, Canada
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <header className={`main__header header__function is__home__two ${isSticky ? "is__sticky" : ""}`}>
                    <div className="container">
                        <div className="row">
                            <div className="main__header__wrapper">
                                <div className="main__nav">
                                    <button
                                        className="main__nav__toogler"
                                        onClick={() => setIsOffcanvasOpen(true)}
                                    >
                                        <i className="flaticon-hamburger" />
                                        <span>Menu</span>
                                    </button>
                                </div>
                                <div className="main__logo">
                                    <Link to="/">
                                        <img
                                            className="logo__class"
                                            src="/assets/images/logo/logo__two.svg"
                                            alt="moonlit"
                                        />
                                    </Link>
                                </div>
                                <div className="main__right">
                                    <button
                                        className="theme-btn btn-style sm-btn border d-none d-lg-block"
                                        onClick={() => setIsLoginOpen(true)}
                                    >
                                        <span>Sign In</span>
                                    </button>

                                    {/* Sign Up Button */}
                                    <button
                                        className="theme-btn btn-style sm-btn border d-none d-lg-block"
                                        onClick={() => setIsSignupOpen(true)}
                                    >
                                        <span>Sign Up</span>
                                    </button>

                                    {/* Book Now Button */}
                                    <Link to="/room/1" className="theme-btn btn-style sm-btn fill">
                                        <span>Book Now</span>
                                    </Link>

                                    {/* Mobile Menu Button */}
                                    <button
                                        className="theme-btn btn-style sm-btn fill menu__btn d-lg-none"
                                        onClick={() => setIsOffcanvasOpen(true)}
                                    >
                                        <span>
                                            <img src="/assets/images/icon/menu-icon.svg" alt="menu" />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>

            <OffcanvasMenu isOpen={isOffcanvasOpen} onClose={() => setIsOffcanvasOpen(false)} />
            {/* Login Form Modal */}
            <LoginForm
                isOpen={isLoginOpen}
                onClose={() => setIsLoginOpen(false)}
                onSignupOpen={() => {
                    setIsLoginOpen(false);
                    setIsSignupOpen(true);
                }}
            />
            {/* Sign Up Form Modal */}
            <SignUpForm
                isOpen={isSignupOpen}
                onClose={() => setIsSignupOpen(false)}
                onLoginOpen={() => {
                    setIsSignupOpen(false);
                    setIsLoginOpen(true);
                }}
            />
        </>
    );
}

export default HeaderTwo;
