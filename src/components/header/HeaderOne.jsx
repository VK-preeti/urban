import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import OffcanvasMenu from './OffcanvasMenu';
import LoginForm from '../form/LoginForm';
import SignUpForm from '../form/SignUpForm';
import BookingModal from './BookingModal';
import GuestExperience from './../GuestExperience/GuestExperience';
import Gallery from './../../pages/Gallery';
 

function HeaderOne() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isSignupOpen, setIsSignupOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

   const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [isOpen, setIsOpen] = useState(false);

  // Toggle the visibility of the submenu
  const toggleDropdown = () => setIsOpen(prevState => !prevState);
    return (
        <>
            {/* header menu */}
            <header className={`main__header header__function ${isSticky ? 'is__sticky' : ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="main__header__wrapper">
                            <div className="main__nav">
                                <div className="navigation d-none d-lg-block">
                                    <nav className="navigation__menu" id="main__menu">
                                        <ul className="list-unstyled">

                                             <li className="navigation__menu--item">
                                                <Link
                                                    to="/"
                                                    className="navigation__menu--item__link theme-btn btn-style sm-btn fill"
                                                >
                                                   <span>Home</span>  
                                                </Link>
                                            </li>
                                            {/* <li className="navigation__menu--item has-child has-arrow">
                                                <Link to="/home-2" className="navigation__menu--item__link">
                                                    Home
                                                </Link> 

                                                 
                                                {/* <div className="has__mega__menu">
                                                     <div className="row g-30 row-cols-1 row-cols-md-3 row-cols-lg-5">
                                                        <div className="menu__item">
                                                            <Link to="/">
                                                                <img
                                                                    src="/assets/images/menu/main.webp"
                                                                    height={250}
                                                                    alt=""
                                                                />
                                                                <span>Luxury Hotel</span>
                                                            </Link>
                                                        </div>
                                                        <div className="menu__item">
                                                            <Link to="/home-2">
                                                                <img
                                                                    src="/assets/images/menu/01.webp"
                                                                    height={250}
                                                                    alt=""
                                                                />
                                                                <span>LuxeVista Hotel</span>
                                                            </Link>
                                                        </div>
                                                        <div className="menu__item">
                                                            <Link to="/home-3">
                                                                <img
                                                                    src="/assets/images/menu/03.webp"
                                                                    height={250}
                                                                    alt=""
                                                                />
                                                                <span>OceanBreeze Resort</span>
                                                            </Link>
                                                        </div>
                                                        <div className="menu__item">
                                                            <Link to="/home-4">
                                                                <img
                                                                    src="/assets/images/menu/04.webp"
                                                                    height={250}
                                                                    alt=""
                                                                />
                                                                <span>Apartment Hotel</span>
                                                            </Link>
                                                        </div>
                                                        <div className="menu__item">
                                                            <Link to="/home-5">
                                                                <img
                                                                    src="/assets/images/menu/4.webp"
                                                                    height={250}
                                                                    alt=""
                                                                />
                                                                <span>Mountain Hotel</span>
                                                            </Link>
                                                        </div>
                                                        <div className="menu__item">
                                                            <Link to="/home-6">
                                                                <img
                                                                    src="/assets/images/menu/5.webp"
                                                                    height={250}
                                                                    alt=""
                                                                />
                                                                <span>City Hotel</span>
                                                            </Link>
                                                        </div>
                                                        <div className="menu__item">
                                                            <Link to="/home-7">
                                                                <img
                                                                    src="/assets/images/menu/6.webp"
                                                                    height={250}
                                                                    alt=""
                                                                />
                                                                <span>Beach Hotel</span>
                                                            </Link>
                                                        </div>
                                                        <div className="menu__item">
                                                            <Link to="/home-dark">
                                                                <img
                                                                    src="/assets/images/menu/hotel-dark.webp"
                                                                    height={250}
                                                                    alt=""
                                                                />
                                                                <span>Beach Hotel</span>
                                                            </Link>
                                                        </div>
                                                        <div className="menu__item">
                                                            <Link to="/home-video">
                                                                <img
                                                                    src="/assets/images/menu/08.webp"
                                                                    height={250}
                                                                    alt=""
                                                                />
                                                                <span>Hotel Seaside</span>
                                                            </Link>
                                                        </div>
                                                    </div> 
                                                </div> 
                                            </li> */}

                                             {/* <li className="navigation__menu--item">
                                                <Link
                                                    to="/about"
                                                    className="navigation__menu--item__link"
                                                >
                                                    About
                                                </Link>
                                            </li> */}
                                            <li className="navigation__menu--item has-child ">
                                                <Link to="/room" className="navigation__menu--item__link theme-btn btn-style sm-btn fill">
                                                    <span>Rooms</span> 
                                                </Link>
                                                {/* <ul className="submenu sub__style" role="menu">
                                                    <li role="menuitem" className="has-child has-arrow">
                                                        <Link to="/">Room Style</Link>
                                                        <ul className="sub__style" role="menu">
                                                            <li role="menuitem">
                                                                <Link to="/room-one">Room One</Link>
                                                            </li>
                                                            <li role="menuitem">
                                                                <Link to="room">Room Two</Link>
                                                            </li>
                                                            <li role="menuitem">
                                                                <Link to="/room-three">Room Three</Link>
                                                            </li>
                                                            <li role="menuitem">
                                                                <Link to="/room-four">Room Four</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li role="menuitem" className="has-child has-arrow">
                                                        <Link to="/">Room Details</Link>
                                                        <ul className="sub__style" role="menu">
                                                            <li role="menuitem">
                                                                <Link to="/room/1">Room Details 1</Link>
                                                            </li>
                                                            <li role="menuitem">
                                                                <Link to="/room/2">Room Details 2</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul> */}
                                            </li>
                                            {/* <li className="navigation__menu--item has-child has-arrow">
                                                <Link to="/" className="navigation__menu--item__link">
                                                    Pages
                                                </Link>
                                                <ul className="submenu sub__style" role="menu">
                                                    <li role="menuitem">
                                                        <Link to="/about">About</Link>
                                                    </li>
                                                    <li role="menuitem">
                                                        <Link to="/resturant">Restaurant</Link>
                                                    </li>
                                                    <li role="menuitem">
                                                        <Link to="/gallery">Gallery</Link>
                                                    </li>
                                                    <li role="menuitem">
                                                        <Link to="/service">Service</Link>
                                                    </li>
                                                    <li role="menuitem">
                                                        <Link to="/event">Event</Link>
                                                    </li>
                                                    <li role="menuitem">
                                                        <Link to="/activities">Activities</Link>
                                                    </li>
                                                </ul>
                                            </li> */}
                                            {/* <li className="navigation__menu--item has-child has-arrow">
                                                <Link to="/" className="navigation__menu--item__link">
                                                    Blog
                                                </Link>
                                                <ul className="submenu sub__style" role="menu">
                                                    <li role="menuitem">
                                                        <Link to="/blog">Blog</Link>
                                                    </li>
                                                    <li role="menuitem">
                                                        <Link to="/blog/1">Blog Details</Link>
                                                    </li>
                                                </ul>
                                            </li> */}

                                            {/* <li className="navigation__menu--item">
                                                <Link
                                                    to="/resturant"
                                                    className="navigation__menu--item__link"
                                                >
                                                   Restaurant
                                                </Link>
                                            </li> */}

                                               {/* <li className="navigation__menu--item has-child  ">
                                        
                                        <button
                                            className="navigation__menu--item__link theme-btn btn-style sm-btn fill has-arrow"
                                            onClick={toggleDropdown}
                                        >
                                            <span>MICE</span>

                                            
                                            <span className="dropdown-icon">
                                            
                                            <i className={`arrow-icon ${isOpen ? 'open' : ''}`}></i>
                                            </span>
                                        </button>

                                         
                                        {isOpen && (
                                            <ul className="submenu sub__style" role="menu">
                                            <li role="menuitem">
                                                <Link to="/mice-business">Business Conference</Link>
                                            </li>
                                            <li role="menuitem">
                                                <Link to="/mice-wedding">Wedding</Link>
                                            </li>
                                            <li role="menuitem">
                                                <Link to="/mice-sastang">Satsang</Link>
                                            </li>
                                            </ul>
                                        )}
                                        </li> */}
                                            {/* <li className="navigation__menu--item">
                                                <Link
                                                    to="/event"
                                                    className="navigation__menu--item__link"
                                                >
                                                    Mice
                                                </Link>
                                            </li> */}

                                             {/* <li className="navigation__menu--item">
                                                <Link
                                                    to="/gallery"
                                                    className="navigation__menu--item__link theme-btn btn-style sm-btn fill"
                                                >
                                                    <span>About Us</span>  
                                                </Link>
                                            </li> */}

                                              <li className="navigation__menu--item">
                                                <Link
                                                    to="/package"
                                                    className="navigation__menu--item__link theme-btn btn-style sm-btn fill"
                                                >
                                                    <span>Packages</span> 
                                                </Link>
                                            </li>

                                             <li className="navigation__menu--item">
                                                <Link
                                                    to="/guestexperience"
                                                    className="navigation__menu--item__link theme-btn btn-style sm-btn fill"
                                                >
                                                    <span>Experience</span> 
                                                </Link>
                                            </li>

                                             {/* <li className="navigation__menu--item">
                                                <Link
                                                    to="/activities"
                                                    className="navigation__menu--item__link"
                                                >
                                                    Activities
                                                </Link>
                                            </li> */}
                                             {/* <li className="navigation__menu--item">
                                                <Link
                                                    to="/gallery"
                                                    className="navigation__menu--item__link"
                                                >
                                                    Gallery
                                                </Link>
                                            </li> */}
                                            {/* <li className="navigation__menu--item">
                                                <Link
                                                    to="/contact"
                                                    className="navigation__menu--item__link"
                                                >
                                                    Contact
                                                </Link>
                                            </li> */}

                                             {/* <li className="navigation__menu--item">
                                                <Link
                                                    to="/wedding"
                                                    className="navigation__menu--item__link theme-btn btn-style sm-btn fill"
                                                >
                                                    <span>Wedding</span> 
                                                </Link>
                                            </li> */}

                                             {/* <li className="navigation__menu--item">
                                                <Link
                                                    to="/offer"
                                                    className="navigation__menu--item__link theme-btn btn-style sm-btn fill"
                                                >
                                                    <span>Offers</span>  
                                                </Link>
                                            </li> */}

                                             <li className="navigation__menu--item">
                                                <Link
                                                    to="/gallery"
                                                    className="navigation__menu--item__link theme-btn btn-style sm-btn fill"
                                                >
                                                    <span>Gallery</span>  
                                                </Link>
                                            </li>

                                             <li className="navigation__menu--item">
                                                <Link
                                                    to="/contact"
                                                    className="navigation__menu--item__link theme-btn btn-style sm-btn fill"
                                                >
                                                    <span>Contact</span>  
                                                </Link>
                                            </li>

                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="main__logo">
                                <Link to="/">
                                    {/* <img
                                        className="logo__class"
                                        src="/assets/images/logo/dynastylogo.png"
                                        alt="moonlit"
                                    /> */}

                                     <img
                                    className="logo__class"
                                    src="/assets/images/logo/urbanLogo.png"
                                    alt="moonlit"
                                    style={{ height: '100px', padding: '10px', objectFit: 'contain' }}
                                    />


                                </Link>
                            </div>
                            <div className="main__right">
                                {/* Sign In Button */}
                                {/* <button
                                    className="theme-btn btn-style sm-btn border d-none d-lg-block"
                                    onClick={() => setIsLoginOpen(true)}
                                >
                                    <span>Sign In</span>
                                </button>

                               
                                <button
                                    className="theme-btn btn-style sm-btn border d-none d-lg-block"
                                    onClick={() => setIsSignupOpen(true)}
                                >
                                    <span>Sign Up</span>
                                </button> */}

                                {/* Book Now Button */}
                                <Link to="https://www.asiatech.in/booking_engine/index3.php?token=MTY=" className="theme-btn btn-style sm-btn fill">
                                    <span>Book Now</span>
                                </Link>

                               {/* Book Now Button */}
                            <Link
                                to="#"
                                className="theme-btn btn-style sm-btn fill"
                                onClick={(e) => {
                                e.preventDefault();
                                handleShow();
                                }}
                            >
                                <span>Enquiry Now</span>
                            </Link>

                            {/* Booking Modal */}
                            <BookingModal show={showModal} handleClose={handleClose} />
                            
                            {/* Option 1: Externally controlled modal */}
                            {/* <BookingModal 
                                show={showModal} 
                                handleClose={handleClose} 
                                externalTrigger={true} 
                            />
                            
                            
                            <BookingModal /> */}

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
            {/* header menu end */}
        </>

    )
}

export default HeaderOne