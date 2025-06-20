 import React, { useEffect, useState, useRef } from 'react';
import { jarallax } from 'jarallax';
import { getAboutus } from '../../api/AboutusAPI';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useNavigate } from 'react-router-dom';
import WOW from 'wowjs';

function AboutTwo() {
    const [aboutus, setAboutus] = useState({});
    const [loading, setLoading] = useState(true);
    const [showFullDescription, setShowFullDescription] = useState(false);
    const jarallaxInitialized = useRef(false);
    const wowInitialized = useRef(false);
    const navigate = useNavigate();

    // Fetch about us data
    useEffect(() => {
        getAboutus()
            .then((data) => {
                setAboutus(data.aboutus);
                console.log("about us company============>", data.aboutus);
            })
            .catch((err) => {
                console.error("Error fetching about us data:", err);
            })
            .finally(() => setLoading(false));
    }, []);

    // Initialize jarallax properly
    useEffect(() => {
        // Only initialize if not already done and data is loaded
        if (!loading && !jarallaxInitialized.current) {
            if (!/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                setTimeout(() => {
                    const elements = document.querySelectorAll('.jarallax');
                    if (elements.length > 0) {
                        elements.forEach(element => {
                            // Destroy first to prevent multiple initializations
                            jarallax(element, 'destroy');
                            jarallax(element, {
                                speed: 0.2,
                                imgPosition: '50% 50%',
                                imgSize: 'cover'
                            });
                        });
                        jarallaxInitialized.current = true;
                    }
                }, 100); // Small delay to ensure DOM is ready
            } else {
                console.log('Jarallax skipped on mobile devices');
            }
        }
    }, [loading]);

    // Initialize WOW.js properly
    useEffect(() => {
        if (!loading && !wowInitialized.current) {
            // Small delay to ensure DOM is ready
            setTimeout(() => {
                const wow = new WOW.WOW({
                    boxClass: 'wow',
                    animateClass: 'animated',
                    offset: 0,
                    mobile: false,
                    live: true
                });
                wow.init();
                wowInitialized.current = true;
            }, 300);
        }
    }, [loading]);

    // Clean up on unmount
    useEffect(() => {
        return () => {
            if (jarallaxInitialized.current) {
                document.querySelectorAll('.jarallax').forEach(element => {
                    jarallax(element, 'destroy');
                });
            }
        };
    }, []);

    const getTrimmedDescription = (htmlString) => {
        const plainText = new DOMParser().parseFromString(htmlString || '', 'text/html').body.textContent || '';
        const words = plainText.split(/\s+/);
        const preview = words.slice(0, 70).join(' ');
        return preview + (words.length > 70 ? '...' : '');
    };

    return (
        <div className="rts__section about__area is__home__one section__padding">
            <div className="section__shape">
                <img src="/assets/images/about/section__shape.svg" alt="" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="about__wrapper">
                        <div className="content">
                            <span className="h4 subtitle__icon__two d-block wow fadeInUp" data-wow-duration="1s" style={{ color: '#ab8a62' }}>About Us</span>

                            <h2 className="content__title wow fadeInUp" data-wow-duration="1.2s">
                                {loading ? <Skeleton width={300} /> : aboutus.title}
                            </h2>

                            <div className="wow fadeInUp" data-wow-duration="1.5s">
                                {loading ? (
                                    <Skeleton count={5} />
                                ) : (
                                    <>
                                        {!showFullDescription ? (
                                            <p className="content__subtitle" style={{ textAlign: 'justify' }}>
                                                {getTrimmedDescription(aboutus.description)}
                                            </p>
                                        ) : (
                                            <span
                                                className="content__subtitle"
                                                style={{ textAlign: 'justify', fontSize: '24px' }}
                                                dangerouslySetInnerHTML={{ __html: aboutus.description }}
                                            />
                                        )}
                                        {aboutus.description && (
                                            <button
                                                className="theme-btn btn-style fill no-border mt-3 content__subtitle wow fadeInUp"
                                                data-wow-duration="1.8s"
                                                onClick={() => navigate('/about')}
                                            >
                                                See More
                                            </button>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="image">
                            {!loading && aboutus.images && (
                                <div className="position-relative wow fadeInUp" data-wow-duration="1.5s">
                                    <div className="jara-mask-1 jarallax image-height">
                                        {(() => {
                                            try {
                                                const imageList = JSON.parse(aboutus.images);
                                                if (Array.isArray(imageList) && imageList.length > 0) {
                                                    return (
                                                        <img
                                                            src={imageList[0]}
                                                            className="jarallax-img"
                                                            alt="about image"
                                                            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                                        />
                                                    );
                                                } else {
                                                    return null;
                                                }
                                            } catch (e) {
                                                console.error("Invalid image JSON format:", e);
                                                return null;
                                            }
                                        })()}
                                    </div>
                                </div>
                            )}

                            <div className="image__card radius-10 wow fadeInUp" data-wow-duration="1.8s" data-wow-delay=".2s">
                                <div className="icon radius-10 center-item">
                                    <i className="flaticon-people" />
                                </div>
                                <div className="content">
                                    <span className="h5">100+</span>
                                    <p>Experience Staff</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutTwo;




// import React, { useEffect } from 'react';
// import { jarallax } from 'jarallax';
// import { Link } from 'react-router-dom';

// function AboutTwo() {
//     useEffect(() => {
//         function isMobileDevice() {
//             return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
//         }

//         if (!isMobileDevice()) {
//             document.querySelectorAll('.jarallax').forEach(element => {
//                 jarallax(element, {});
//             });
//         } else {
//             console.log('Jarallax skipped on mobile devices');
//         }
//     }, []);

//     return (
//         <>
//             {/* about us */}
//             <div className="rts__section about__area is__home__one section__padding">
//                 <div className="section__shape">
//                     <img src="/assets/images/about/section__shape.svg" alt="" />
//                 </div>
//                 <div className="container">
//                     <div className="row">
//                         <div className="about__wrapper">
//                             <div className="content">
//                                 <span className="h6 subtitle__icon__two d-block wow fadeInUp">
//                                     About Us
//                                 </span>
//                                 <h2 className="content__title wow fadeInUp">
//                                     Welcome To Our Moonlit Hotel &amp; Resort
//                                 </h2>
//                                 <p className="content__subtitle wow fadeInUp" data-wow-delay=".3s">
//                                     Welcome to Bokinn, where luxury meets comfort in the heart of
//                                     canada. Since 1999, we have been dedicated to providing an
//                                     exceptional stay for our guests, blending modern amenities with
//                                     timeless elegance.Our beautifully designed rooms and suites offer
//                                     stunning views and plush accommodations, ensuring a restful
//                                     retreat whether you're here for business or leisure.
//                                 </p>
//                                 <Link
//                                     to="#"
//                                     className="theme-btn btn-style fill no-border wow fadeInUp"
//                                     data-wow-delay=".5s"
//                                 >
//                                     <span>Learn More</span>
//                                 </Link>
//                             </div>
//                             <div className="image ">
//                                 <div
//                                     className="position-relative  wow fadeInUp"
//                                     data-wow-delay=".3s"
//                                 >
//                                     <div className="jara-mask-1 jarallax image-height">
//                                         <img
//                                             src="/assets/images/about/about-1.webp"
//                                             className="jarallax-img"
//                                             alt=""
//                                         />
//                                     </div>
//                                 </div>
//                                 <div
//                                     className="image__card radius-10 wow fadeInUp"
//                                     data-wow-delay=".5s"
//                                 >
//                                     <div className="icon radius-10 center-item">
//                                         <i className="flaticon-people" />
//                                     </div>
//                                     <div className="content">
//                                         <span className="h5">50+</span>
//                                         <p>Experience Staff</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* about us end */}
//         </>

//     )
// }

// export default AboutTwo
