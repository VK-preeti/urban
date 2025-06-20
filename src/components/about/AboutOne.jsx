// import React, { useEffect } from 'react';
// import { jarallax } from 'jarallax';
// import { Link } from 'react-router-dom';

// function AboutOne() {
//     useEffect(() => {
//         // Check if the device is mobile
//         const isMobileDevice = () => {
//             return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
//         };

//         if (!isMobileDevice()) {
//             document.querySelectorAll('.jarallax').forEach(element => {
//                 jarallax(element, {
//                     speed: 0.2, // Adjust speed if necessary
//                 });
//             });
//         } else {
//             console.log('Jarallax skipped on mobile devices');
//         }
//     }, []);

//     return (
//         <div className="rts__section about__area is__home__main section__padding">
//             <div className="section__shape d-none d-xl-block">
//                 <img src="/assets/images/about/section__shape.svg" alt="" />
//             </div>
//             <div className="container">
//                 <div className="row">
//                     <div className="about__wrapper">
//                         <div className="image">
//                             <div className="position-relative wow fadeInUp" data-wow-delay=".3s">
//                                 <div className="jara-mask-1 jarallax image-height">
//                                     {/* Ensure jarallax-img is present */}
//                                     <img
//                                         src="/assets/images/about/about-1.webp"
//                                         className="jarallax-img"
//                                         alt="Background"
//                                     />
//                                 </div>
//                             </div>
//                             <div className="image__card radius-10 wow fadeInUp" data-wow-delay=".5s">
//                                 <div className="icon radius-10 center-item">
//                                     <i className="flaticon-people" />
//                                 </div>
//                                 <div className="content">
//                                     <span className="h5">50+</span>
//                                     <p>Experience Staff</p>
//                                 </div>
//                             </div>
//                             <div className="image__card__image wow fadeInUp">
//                                 <img
//                                     src="/assets/images/about/about-main.webp"
//                                     width={312}
//                                     height={230}
//                                     alt="About"
//                                 />
//                             </div>
//                         </div>
//                         <div className="content">
//                             <span className="h6 subtitle__icon__two d-block wow fadeInUp">About Us</span>
//                             <h2 className="content__title wow fadeInUp">
//                                 Welcome To Our Moonlit Hotel &amp; Resort
//                             </h2>
//                             <p className="content__subtitle wow fadeInUp" data-wow-delay=".3s">
//                                 Welcome to Bokinn, where luxury meets comfort in the heart of
//                                 Canada. Since 1999, we have been dedicated to providing an
//                                 exceptional stay for our guests, blending modern amenities with
//                                 timeless elegance. Our beautifully designed rooms and suites offer
//                                 stunning views and plush accommodations, ensuring a restful
//                                 retreat whether you're here for business or leisure.
//                             </p>
//                             <Link to="#" className="theme-btn btn-style fill no-border wow fadeInUp" data-wow-delay=".5s">
//                                 <span>Learn More</span>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default AboutOne;


import React, { useEffect, useState, useRef } from 'react';
import { jarallax } from 'jarallax';
import { Link } from 'react-router-dom';
import { getAboutus } from '../../api/AboutusAPI';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import WOW from 'wowjs';

function AboutOne() {
    const [aboutus, setAboutus] = useState({});
    const [loading, setLoading] = useState(true);
    const jarallaxInitialized = useRef(false);
    const wowInitialized = useRef(false);

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
        const preview = words.slice(0, 50).join(' '); // Reduced to 50 words for AboutOne
        return preview + (words.length > 50 ? '...' : '');
    };

    return (
        <div className="rts__section about__area is__home__main section__padding">
            <div className="section__shape d-none d-xl-block">
                <img src="/assets/images/about/section__shape.svg" alt="" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="about__wrapper">
                        <div className="image">
                            <div className="position-relative wow fadeInUp" data-wow-delay=".3s">
                                <div className="jara-mask-1 jarallax image-height">
                                    {!loading && aboutus.images ? (
                                        (() => {
                                            try {
                                                const imageList = JSON.parse(aboutus.images);
                                                if (Array.isArray(imageList) && imageList.length > 0) {
                                                    return (
                                                        <img
                                                            src={imageList[0]}
                                                            className="jarallax-img"
                                                            alt="About Background"
                                                            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                                        />
                                                    );
                                                }
                                            } catch (e) {
                                                console.error("Invalid image JSON format:", e);
                                            }
                                            // Fallback to default image
                                            return (
                                                <img
                                                    src="/assets/images/about/about-1.webp"
                                                    className="jarallax-img"
                                                    alt="About Background"
                                                />
                                            );
                                        })()
                                    ) : (
                                        <img
                                            src="/assets/images/about/about-1.webp"
                                            className="jarallax-img"
                                            alt="About Background"
                                        />
                                    )}
                                </div>
                            </div>
                            <div className="image__card radius-10 wow fadeInUp" data-wow-delay=".5s">
                                <div className="icon radius-10 center-item">
                                    <i className="flaticon-people" />
                                </div>
                                <div className="content">
                                    <span className="h5">50+</span>
                                    <p>Experience Staff</p>
                                </div>
                            </div>
                            <div className="image__card__image wow fadeInUp">
                                {!loading && aboutus.images ? (
                                    (() => {
                                        try {
                                            const imageList = JSON.parse(aboutus.images);
                                            if (Array.isArray(imageList) && imageList.length > 1) {
                                                return (
                                                    <img
                                                        src={imageList[1]}
                                                        width={312}
                                                        height={230}
                                                        alt="About"
                                                    />
                                                );
                                            }
                                        } catch (e) {
                                            console.error("Invalid image JSON format:", e);
                                        }
                                        // Fallback to default image
                                        return (
                                            <img
                                                src="/assets/images/about/about-main.webp"
                                                width={312}
                                                height={230}
                                                alt="About"
                                            />
                                        );
                                    })()
                                ) : (
                                    <img
                                        src="/assets/images/about/about-main.webp"
                                        width={312}
                                        height={230}
                                        alt="About"
                                    />
                                )}
                            </div>
                        </div>
                        <div className="content">
                            <span className="h6 subtitle__icon__two d-block wow fadeInUp" style={{ color: '#ab8a62' }}>About Us</span>
                            
                            <h2 className="content__title wow fadeInUp">
                                {loading ? <Skeleton width={400} /> : aboutus.title || "Welcome To Our Moonlit Hotel & Resort"}
                            </h2>
                            
                            <div className="wow fadeInUp" data-wow-delay=".3s">
                                {loading ? (
                                    <Skeleton count={4} />
                                ) : (
                                    <p className="content__subtitle" style={{ textAlign: 'justify' }}>
                                        {aboutus.description 
                                            ? getTrimmedDescription(aboutus.description)
                                            : "Welcome to Bokinn, where luxury meets comfort in the heart of Canada. Since 1999, we have been dedicated to providing an exceptional stay for our guests, blending modern amenities with timeless elegance. Our beautifully designed rooms and suites offer stunning views and plush accommodations, ensuring a restful retreat whether you're here for business or leisure."
                                        }
                                    </p>
                                )}
                            </div>
                            
                            <Link 
                                to="/about" 
                                className="theme-btn btn-style fill no-border wow fadeInUp" 
                                data-wow-delay=".5s"
                            >
                                <span>Learn More</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutOne;