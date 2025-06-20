// import React from 'react'
// import { Link } from 'react-router-dom'
// import { 
//   FaPhoneAlt, FaEnvelope, FaMapMarkerAlt,
//   FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, 
//   FaYoutube, FaPinterestP, FaWhatsapp, FaTelegramPlane 
// } from 'react-icons/fa';
// import Newslatter from './Newslatter';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
// import { getContact } from '../../api/getContact';


// function FooterOne() {

//       useEffect(() => {
//         getContact()
//           .then((data) => {
             
//           })
//           .catch((err) => {
//             console.error("Error fetching top header data:", err);
//           })
//           .finally(() => setLoading(false));
//       }, []);

//     return (
//         <>
//             {/* footer style one */}
//             <footer className="rts__section rts__footer is__common__footer footer__background has__shape">
//                 <div className="section__shape">
//                     <div className="shape__1">
//                         <img src="/assets/images/footer/shape-1.svg" alt="" />
//                     </div>
//                     <div className="shape__2">
//                         <img src="/assets/images/footer/shape-2.svg" alt="" />
//                     </div>
//                     <div className="shape__3">
//                         <img src="/assets/images/footer/shape-3.svg" alt="" />
//                     </div>
//                 </div>
//                 <div className="container">
                     
//                     <Newslatter />
//                     <div className="row">
//                         <div className="footer__widget__wrapper">
//                             <div className="rts__widget">
//                                 <Link to="/">
//                                     <img
//                                         className="footer__logo"
//                                         src="/assets/images/logo/logo.svg"
//                                         alt="footer logo"
//                                     />
//                                 </Link>
//                                 <p className="font-sm max-290 mt-20">
//                                     Each room features plush bedding, high-quality linens, and a
//                                     selection of ensure a restful night's sleep.
//                                 </p>
//                             </div>


                               
//                             <div className="rts__widget">
//                                 <span className="widget__title">Quick Links</span>
//                                 <ul>
//                                     <li>
//                                         <Link to="/activities" aria-label="footer__link">
//                                            Activities
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link to="/resturant" aria-label="footer__link">
//                                             Restaurant
//                                         </Link>
//                                     </li>
//                                     {/* <li>
//                                         <Link to="#" aria-label="footer__link">
//                                             Spa &amp; Wellness
//                                         </Link>
//                                     </li> */}
//                                     {/* <li>
//                                         <Link to="/offer" aria-label="footer__link">
//                                             Special Offers
//                                         </Link>
//                                     </li> */}
//                                      <li>
//                                         <Link to="/blog" aria-label="footer__link">
//                                              Blog
//                                         </Link>
//                                     </li>

//                                      <li>
//                                         <Link to="/contact" aria-label="footer__link">
//                                              Contact Us
//                                         </Link>
//                                     </li>

//                                      <li>
//                                         <Link to="/contact" aria-label="footer__link">
//                                              Terms & Conditions
//                                         </Link>
//                                     </li>

//                                      <li>
//                                         <Link to="/contact" aria-label="footer__link">
//                                              Privacy Policy
//                                         </Link>
//                                     </li>

//                                      <li>
//                                         <Link to="/contact" aria-label="footer__link">
//                                              Refund Cancellation Policy
//                                         </Link>
//                                     </li>

//                                      {/* <li>
//                                         <Link to="/contact" aria-label="footer__link">
//                                              Terms & Conditions
//                                         </Link>
//                                     </li> */}

                                     
//                                 </ul>
//                             </div>
//                             <div className="rts__widget">
//                                 <span className="widget__title">Guest Service</span>
//                                 <ul>
//                                     <li>24/7 Front Desk</li>
//                                     <li>Parking</li>
//                                     <li>Room Service</li>
//                                     <li>Free Wi-Fi</li>
//                                     <li>Concierge Service</li>
//                                      <li>
//                                         <Link to="/service" aria-label="footer__link">
//                                             Our Service
//                                         </Link>
//                                     </li>
//                                 </ul>
//                             </div>
//                             <div className="rts__widget">
//                                 <span className="widget__title">Contact Us</span>
//                                 <ul>
//                                     <li>
//                                         <Link aria-label="footer__contact" to="tel:+12505550199">
//                                             <i className="flaticon-phone-flip" /> +12505550199
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link aria-label="footer__contact" to="mailto:UjJw6@example.com">
//                                             <i className="flaticon-envelope" />
//                                             Moonlit@gmail.com
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link aria-label="footer__contact" to="#">
//                                             <i className="flaticon-marker" />
//                                             M5T 2L9 Toronto, Canada
//                                         </Link>
//                                     </li>
//                                 </ul>

//                                {/* Social Media Icons */}
//                             <div className="d-flex flex-wrap gap-3 mt-4"  >
//                                 <Link aria-label="facebook" to="https://facebook.com" target="_blank" rel="noopener noreferrer">
//                                 <FaFacebookF style={{color: 'grey'}} size={20} />
//                                 </Link>
//                                 <Link aria-label="instagram" to="https://instagram.com" target="_blank" rel="noopener noreferrer">
//                                 <FaInstagram style={{color: 'grey'}} size={20} />
//                                 </Link>
//                                 <Link aria-label="twitter" to="https://twitter.com" target="_blank" rel="noopener noreferrer">
//                                 <FaTwitter style={{color: 'grey'}} size={20} />
//                                 </Link>
//                                 <Link aria-label="linkedin" to="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//                                 <FaLinkedinIn style={{color: 'grey'}} size={20} />
//                                 </Link>
//                                 <Link aria-label="youtube" to="https://youtube.com" target="_blank" rel="noopener noreferrer">
//                                 <FaYoutube style={{color: 'grey'}} size={20} />
//                                 </Link>
                                
                                
//                             </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="copyright__text">
//                     <div className="container">
//                         <div className="row">
//                             <div className="copyright__wrapper d-flex flex-column justify-content-center align-items-center text-center py-3">
//                                 <p className="mb-0">
//                                     Copyright © {new Date().getFullYear()} Moonlit. All rights reserved.
//                                 </p>
                                 
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </footer>
//             {/* footer style one end */}
//         </>

//     )
// }

// export default FooterOne

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt,
  FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, 
  FaYoutube
} from 'react-icons/fa';
import Newslatter from './Newslatter';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { getContact } from '../../api/getContact';
import Gallery from './../../pages/Gallery';
import { FaXTwitter } from 'react-icons/fa6';
import TermsCondition from './TermsCondition';

function FooterOne() {
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);

  const [hoveredIcon, setHoveredIcon] = useState(null);

  const iconStyle = (index) => ({
    color: hoveredIcon === index ? 'black' : 'white', // Hover color
    transition: 'color 0.3s ease',
    cursor: 'pointer',
  });

  const icons = [
    { key: 'facebook', Icon: FaFacebookF, url: contact?.facebook },
    { key: 'instagram', Icon: FaInstagram, url: contact?.instagram },
    { key: 'twitter', Icon: FaXTwitter, url: contact?.twitter },
    { key: 'linkedin', Icon: FaLinkedinIn, url: contact?.linkedin },
    { key: 'youtube', Icon: FaYoutube, url: contact?.youtube },
  ];

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

  return (
    <>
      <footer className="rts__section rts__footer is__common__footer footer__background has__shape">
        <div className="section__shape" style={{background: '#3A3A3A'}}>
          <div className="shape__1">
            <img src="/assets/images/footer/shape-1.svg" alt="" />
          </div>
          <div className="shape__2">
            <img src="/assets/images/footer/shape-2.svg" alt="" />
          </div>
          <div className="shape__3">
            <img src="/assets/images/footer/shape-3.svg" alt="" />
          </div>
        </div>

        <div className="container">
          <Newslatter />
          <div className="row">
            <div className="footer__widget__wrapper">
              {/* Logo and about */}
              <div className="rts__widget">
                <Link to="/">
                  <img className="footer__logo" style={{ height: '100px', padding: '10px', objectFit: 'contain',  }} src="/assets/images/logo/urbanLogo.png" alt="footer logo" />
                </Link>
                <p className="font-sm max-290 mt-20"  style={{ color: 'white',  }}>
                  {/* Each room features plush bedding, high-quality linens, and a
                  selection to ensure a restful night's sleep. */}
                  {contact?.footer_content || "Welcome to The Urban Escape — experience comfort and luxury with every stay."}
                </p>
              </div>

              {/* Quick Links */}
              <div className="rts__widget">
                <span className="widget__title" style={{ color: 'white', fontWeight: 'bold' }}>Quick Links</span>
                <ul>

                   
                   <li><Link to="/about" style={{ color: 'white',   }}>About Us</Link></li>
                  <li><Link to="/activities" style={{ color: 'white',   }}>Activities</Link></li>
                   
                  <li><Link to="/blog" style={{ color: 'white',   }}>Blog</Link></li>
                  <li><Link to="/contact" style={{ color: 'white',   }}>Contact Us</Link></li>
                   <li><Link to="/gallery" style={{ color: 'white',   }}>Gallery</Link></li>
                  {/* <li><Link to="/termscondition">Terms & Conditions</Link></li> */}
                  {/* <li><Link to="/privacy">Privacy Policy</Link></li> */}
                  {/* <li><Link to="/refund">Refund Cancellation Policy</Link></li> */}
                  {/* <li><Link to="/service" style={{ color: 'white',  }}>Our Service</Link></li> */}
                  <li><Link to="/resturant" style={{ color: 'white',   }}>Restaurant</Link></li>
                </ul>
              </div>

              {/* Guest Services */}
              <div className="rts__widget">
                <span className="widget__title" style={{ color: 'white', fontWeight: 'bold' }}>Guest Service</span>
                <ul>
                  <li style={{ color: 'white',  }}>24/7 Front Desk</li>
                  <li style={{ color: 'white',  }}>Parking</li>
                  <li style={{ color: 'white',   }}>Room Service</li>
                  <li style={{ color: 'white',   }}>Free Wi-Fi</li>
                  <li style={{ color: 'white',   }}>Concierge Service</li>
                  {/* <li><Link to="/service">Our Service</Link></li> */}
                </ul>
              </div>

              {/* Contact + Socials */}
              <div className="rts__widget">
                <span className="widget__title" style={{ color: 'white', fontWeight: 'bold' }}>Contact Us</span>
                <ul>
                  <li>
                    <Link to={loading ? "#" : `tel:${contact?.mobile}`} style={{ color: 'white',   }}>
                      <FaPhoneAlt /> {loading ? <Skeleton width={180} /> : contact?.mobile}
                    </Link>
                  </li>
                  <li>
                    <Link to={loading ? "#" : `mailto:${contact?.mail}`} style={{ color: 'white',   }}>
                      <FaEnvelope /> {loading ? <Skeleton width={180} /> : contact?.mail}
                    </Link>
                  </li>

                         

                  
                 
                 <li style={{ color: 'white',   }}>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=29.369909,79.426384(Dynasty+Resort)"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'white',   }}
                >
                  <FaMapMarkerAlt />
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
              </li>



                </ul>

                {/* Social Icons */}
                <div className="d-flex flex-wrap gap-3 mt-4" style={{ color: 'white',  }}>
                  {/* {contact?.facebook && (
                    <Link to={contact.facebook} target="_blank" rel="noopener noreferrer">
                      <FaFacebookF style={{ color: 'grey' }} size={20} />
                    </Link>
                  )}
                  {contact?.instagram && (
                    <Link to={contact.instagram} target="_blank" rel="noopener noreferrer">
                      <FaInstagram style={{ color: 'grey' }} size={20} />
                    </Link>
                  )}
                  {contact?.twitter && (
                    <Link to={contact.twitter} target="_blank" rel="noopener noreferrer">
                      <FaTwitter style={{ color: 'grey' }} size={20} />
                    </Link>
                  )}
                  {contact?.linkedin && (
                    <Link to={contact.linkedin} target="_blank" rel="noopener noreferrer">
                      <FaLinkedinIn style={{ color: 'grey' }} size={20} />
                    </Link>
                  )}
                  {contact?.youtube && (
                    <Link to={contact.youtube} target="_blank" rel="noopener noreferrer">
                      <FaYoutube style={{ color: 'grey' }} size={20} />
                    </Link>
                  )} */}

                  {icons.map(({ key, Icon, url }, index) => (
                url && (
                  <Link
                    to={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={key}
                    onMouseEnter={() => setHoveredIcon(index)}
                    onMouseLeave={() => setHoveredIcon(null)}
                     
                  >
                    <Icon style={iconStyle(index)} size={20} />
                  </Link>
                )
              ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright__text">
          <div className="container">
            <div className="row">
              {/* <div className="copyright__wrapper d-flex flex-column justify-content-center align-items-center text-center py-3">
                <p className="mb-0">
                  Copyright © {new Date().getFullYear()} The Urban Escape. All rights reserved.
                </p>

                <li><Link to="/privacy">Privacy Policy</Link></li>
                  <li><Link to="/refund">Refund Cancellation Policy</Link></li>
                  <li><Link to="/service">Our Service</Link></li>
              </div> */}
              <div className="copyright__wrapper d-flex justify-content-between align-items-center py-3 flex-wrap">
              <p className="mb-0" style={{ color: 'white', fontWeight: 'bold' }}>
                Copyright © {new Date().getFullYear()} The Urban Escape. All rights reserved.
              </p>

              <ul className="list-unstyled d-flex gap-3 mb-0" style={{ color: 'white', fontWeight: 'bold' }}>
                  <li   ><Link to="/termscondition"  style={{ color: 'white', fontWeight: 'bold' }}>Terms & Conditions</Link></li> |
                <li  ><Link to="/privacy"  style={{ color: 'white', fontWeight: 'bold' }}>Privacy Policy</Link></li> |
                <li   ><Link to="/refund"  style={{ color: 'white', fontWeight: 'bold' }}>Refund Cancellation Policy</Link></li>
               
                {/* <li   ><Link to="/service" style={{color: 'grey'}}>Our Service</Link></li> */}
              </ul>
            </div>

            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FooterOne;
