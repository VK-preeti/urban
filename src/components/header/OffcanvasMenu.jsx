import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
import { getContact } from './../../api/getContact';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function OffcanvasMenu({ isOpen, onClose }) {
    const [activeMenu, setActiveMenu] = useState(null);

     const [contact, setContact] = useState(null);
     const [loading, setLoading] = useState(true);

  useEffect(() => {
    getContact()
      .then((data) => {
        // Strip HTML tags from string fields
        const clean = (str) => str?.replace(/<\/?[^>]+(>|$)/g, "").trim();
        setContact({
          ...data,
          mail: clean(data.mail),
          mobile: clean(data.mobile),
          address: clean(data.address),
          facebook: clean(data.facebook),
          instagram: clean(data.instagram),
          twitter: clean(data.twitter),
          youtube: clean(data.youtube),
          linkedin: clean(data.linkedin),
          footer_content: clean(data.footer_content),
        });
        console.log("footer data ================>", data);

      })
      .catch((err) => {
        console.error("Error fetching contact data:", err);
      })
      .finally(() => setLoading(false));
  }, []);

    // Toggle the active state of a dropdown menu
    const toggleMenu = (index) => {
        setActiveMenu(activeMenu === index ? null : index);
    };

    return (
        <div className={`offcanvas offcanvas-start ${isOpen ? "show" : ""}`} style={{ visibility: isOpen ? "visible" : "hidden" }}>
            <div className="rts__btstrp__offcanvase">
                <div className="offcanvase__wrapper">
                    {/* Left Side - Mobile Menu */}
                    <div className="left__side mobile__menu">
                        <button type="button" className="btn-close btn-close-white" onClick={onClose} aria-label="Close"></button>
                        <div className="offcanvase__top">
                            <div className="offcanvase__logo">
                                <Link to="/">
                                    <img src="/assets/images/logo/urbanLogo.png" alt="logo"  style={{ height: '100px', padding: '10px', objectFit: 'contain' }} />
                                </Link>
                            </div>
                            <p className="description">
                                {contact?.footer_content}
                            </p>
                        </div>
                        <div className="offcanvase__mobile__menu">
                            <div className="mobile__menu__active">
                                <nav className="mobile__menu__nav">
                                    <ul className="list-unstyled">
                                        {/* Home Menu */}
                                        {/* <li className={`slide has__children ${activeMenu === 1 ? "active" : ""}`}>
                                            <Link className="slide__menu__item" to="/home-2" onClick={() => toggleMenu(1)}>
                                                Home
                                                <span className="toggle" />
                                            </Link>
                                            <ul className="slide__menu" style={{ display: activeMenu === 1 ? "block" : "none" }}>
                                                <li><Link to="/">Luxury Hotel</Link></li>
                                                <li><Link to="/home-2">Luxe Vista Hotel</Link></li>
                                                <li><Link to="/home-3">Ocean Breeze Hotel</Link></li>
                                                <li><Link to="/home-4">Apartment Hotel</Link></li>
                                                <li><Link to="/home-5">Mountain Hotel</Link></li>
                                                <li><Link to="/home-6">City Hotel</Link></li>
                                                <li><Link to="/home-7">Beach Hotel</Link></li>
                                                <li><Link to="/home-dark">Hotel Dark</Link></li>
                                                <li><Link to="/home-video">Hotel Seaside</Link></li>
                                            </ul>
                                        </li> */}
                                        <li className="slide">
                                            <Link className="slide__menu__item" to="/">Home</Link>
                                        </li>

                                        {/* About Us */}
                                        {/* <li className="slide">
                                            <Link className="slide__menu__item" to="/about">About us</Link>
                                        </li> */}

                                         <li className="slide">
                                            <Link className="slide__menu__item" to="/room"> Rooms</Link>
                                        </li>

                                        {/* Rooms Menu */}
                                        {/* <li className={`slide has__children ${activeMenu === 2 ? "active" : ""}`}>
                                            <Link className="slide__menu__item" to="room" onClick={() => toggleMenu(2)}>
                                                Rooms
                                                <span className="toggle" />
                                            </Link>
                                            <ul className="slide__menu" style={{ display: activeMenu === 2 ? "block" : "none" }}>
                                                <li><Link to="/room-one">Room One</Link></li>
                                                <li><Link to="room">Room Two</Link></li>
                                                <li><Link to="/room-three">Room Three</Link></li>
                                                <li><Link to="/room-four">Room Four</Link></li>
                                                <li><Link to="/room-details-1">Room Details One</Link></li>
                                                <li><Link to="/room-details-2">Room Details Two</Link></li>
                                            </ul>
                                        </li> */}
                                          
                                           {/* <li className="slide">
                                            <Link className="slide__menu__item" to="/event">Mice</Link>
                                        </li> */}

                                         {/* <li className={`slide has__children ${activeMenu === 4 ? "active" : ""}`}>
                                            <Link className="slide__menu__item" to="#" onClick={() => toggleMenu(4)}>
                                                Mice
                                                <span className="toggle" />
                                            </Link>
                                            <ul className="slide__menu" style={{ display: activeMenu === 4 ? "block" : "none" }}>
                                                <li><Link to="/mice-business">Business Conference</Link></li>
                                                <li><Link to="/mice-wedding">Wedding</Link></li>
                                                <li><Link to="/mice-sastang">Satsang</Link></li>
                                                 
                                            </ul>
                                        </li> */}

                                          <li className="slide">
                                            <Link className="slide__menu__item" to="/package">Packages</Link>
                                        </li>

                                          {/* <li className="slide">
                                            <Link className="slide__menu__item" to="/guestexperience">Guest</Link>
                                        </li> */}

                                          <li className="slide">
                                            <Link className="slide__menu__item" to="/gallery">Gallery</Link>
                                        </li>

                                         {/* <li className="slide">
                                            <Link className="slide__menu__item" to="/wedding">Wedding</Link>
                                        </li> */}

                                         {/* <li className="slide">
                                            <Link className="slide__menu__item" to="/offer">Offers</Link>
                                        </li> */}
                                         

                                        {/* Blog Menu */}
                                        {/* <li className={`slide has__children ${activeMenu === 3 ? "active" : ""}`}>
                                            <Link className="slide__menu__item" to="#" onClick={() => toggleMenu(3)}>
                                                Blog
                                                <span className="toggle" />
                                            </Link>
                                            <ul className="slide__menu" style={{ display: activeMenu === 3 ? "block" : "none" }}>
                                                <li><Link to="/blog">Blog</Link></li>
                                                <li><Link to="/blog/1">Blog Details</Link></li>
                                            </ul>
                                        </li> */}

                                        {/* Pages Menu */}
                                        {/* <li className={`slide has__children ${activeMenu === 4 ? "active" : ""}`}>
                                            <Link className="slide__menu__item" to="#" onClick={() => toggleMenu(4)}>
                                                Pages
                                                <span className="toggle" />
                                            </Link>
                                            <ul className="slide__menu" style={{ display: activeMenu === 4 ? "block" : "none" }}>
                                                <li><Link to="/restaurant">Restaurant</Link></li>
                                                <li><Link to="/gallery">Gallery</Link></li>
                                                <li><Link to="/service">Service</Link></li>
                                                <li><Link to="/event">Event</Link></li>
                                                <li><Link to="/activities">Activities</Link></li>
                                            </ul>
                                        </li> */}

                                        {/* Contact Us */}
                                        <li className="slide">
                                            <Link className="slide__menu__item" to="/contact">Contact Us</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="offcanvase__bottom">
                            <div className="offcanvase__address">
                                <div className="item">
                                    <span className="h6">Phone</span>
                                    <Link to="tel:+1234567890">
                                        <i className="flaticon-phone-flip" /> {contact?.mobile}
                                    </Link>
                                </div>
                                <div className="item">
                                    <span className="h6">Email</span>
                                    <Link to="mailto:info@hostie.com">
                                        <i className="flaticon-envelope" />
                                        {contact?.mail}
                                    </Link>
                                </div>
                                <div className="item">
                                    <span className="h6">Address</span>
                                    {/* <Link to="#">
                                        <i className="flaticon-marker" /> {contact?.address}
                                        
                                    </Link> */}
                                   
                                                    <a
                                                      href="https://www.google.com/maps/search/?api=1&query=29.369909,79.426384(Dynasty+Resort)"
                                                      target="_blank"
                                                      rel="noopener noreferrer"
                                                    >
                                                      {/* <FaMapMarkerAlt /> */}
                                                      {loading ? (
                                                        <Skeleton width={250} />
                                                      ) : (
                                                        (() => {
                                                          const words = contact?.address?.replace(/<[^>]*>/g, '')?.split(' ') || [];
                                                          const firstLine = words.slice(0, 4).join(' ');
                                                          const secondLine = words.slice(4).join(' ');
                                                          return (
                                                            <>
                                                              {firstLine}
                                                              <br />
                                                              {secondLine}
                                                            </>
                                                          );
                                                        })()
                                                      )}
                                                    </a>
                                                 
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Side - Desktop Menu */}
                    <div className="right__side desktop__menu">
                        <button type="button" className="btn-close btn-close-white" onClick={onClose} aria-label="Close"></button>
                        <div className="rts__desktop__menu">
                            <nav className="desktop__menu offcanvas__menu">
                                <ul className="list-unstyled">
                                    {/* Home Menu */}
                                    <li className={`slide has__children ${activeMenu === 1 ? "active" : ""}`}>
                                        <Link className="slide__menu__item" to="#" onClick={() => toggleMenu(1)}>
                                            Home
                                            <span className="toggle" />
                                        </Link>
                                        <ul className="slide__menu" style={{ display: activeMenu === 1 ? "block" : "none" }}>
                                            <li><Link to="/">Luxury Hotel</Link></li>
                                            <li><Link to="/home-2">Luxe Vista Hotel</Link></li>
                                            <li><Link to="/home-3">Ocean Breeze Hotel</Link></li>
                                            <li><Link to="/home-4">Apartment Hotel</Link></li>
                                            <li><Link to="/home-5">Mountain Hotel</Link></li>
                                            <li><Link to="/home-6">City Hotel</Link></li>
                                            <li><Link to="/home-7">Beach Hotel</Link></li>
                                            <li><Link to="/home-dark">Hotel Dark</Link></li>
                                            <li><Link to="/home-video">Hotel Seaside</Link></li>
                                        </ul>
                                    </li>

                                    {/* Other Menu Items for Desktop */}
                                    <li className="slide">
                                        <Link className="slide__menu__item" to="/about">About us</Link>
                                    </li>
                                    <li className={`slide has__children ${activeMenu === 2 ? "active" : ""}`}>
                                        <Link className="slide__menu__item" to="#" onClick={() => toggleMenu(2)}>
                                            Rooms
                                            <span className="toggle" />
                                        </Link>
                                        <ul className="slide__menu" style={{ display: activeMenu === 2 ? "block" : "none" }}>
                                            <li><Link to="/room-one">Room One</Link></li>
                                            <li><Link to="room">Room Two</Link></li>
                                            <li><Link to="/room-three">Room Three</Link></li>
                                            <li><Link to="/room-four">Room Four</Link></li>
                                            <li><Link to="/room-details-1">Room Details One</Link></li>
                                            <li><Link to="/room-details-2">Room Details Two</Link></li>
                                        </ul>
                                    </li>
                                    <li className={`slide has__children ${activeMenu === 3 ? "active" : ""}`}>
                                        <Link className="slide__menu__item" to="#" onClick={() => toggleMenu(3)}>
                                            Blog
                                            <span className="toggle" />
                                        </Link>
                                        <ul className="slide__menu" style={{ display: activeMenu === 3 ? "block" : "none" }}>
                                            <li><Link to="/blog">Blog</Link></li>
                                            <li><Link to="/blog/1">Blog Details</Link></li>
                                        </ul>
                                    </li>
                                    <li className={`slide has__children ${activeMenu === 4 ? "active" : ""}`}>
                                        <Link className="slide__menu__item" to="#" onClick={() => toggleMenu(4)}>
                                            Pages
                                            <span className="toggle" />
                                        </Link>
                                        <ul className="slide__menu" style={{ display: activeMenu === 4 ? "block" : "none" }}>
                                            <li><Link to="/restaurant">Restaurant</Link></li>
                                            <li><Link to="/gallery">Gallery</Link></li>
                                            <li><Link to="/service">Service</Link></li>
                                            <li><Link to="/event">Event</Link></li>
                                            <li><Link to="/activities">Activities</Link></li>
                                        </ul>
                                    </li>
                                    <li className="slide">
                                        <Link className="slide__menu__item" to="/contact">Contact Us</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OffcanvasMenu;
