import React, { useEffect } from 'react';
import { jarallax } from 'jarallax';
import { Link } from 'react-router-dom';

function AboutThree() {
    useEffect(() => {
        function isMobileDevice() {
            return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        }

        if (!isMobileDevice()) {
            document.querySelectorAll('.jarallax').forEach(element => {
                jarallax(element, {});
            });
        } else {
            console.log('Jarallax skipped on mobile devices');
        }
    }, []);

    return (
        <>
            {/* about us */}
            <div className="rts__section about__area is__home__two section__padding">
                <div className="section__shape">
                    <img src="/assets/images/about/section__shape.svg" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="about__wrapper">
                            <div className="content">
                                <span className="h6 subtitle__icon__two d-block wow fadeInUp">
                                    About Us
                                </span>
                                <h2 className="content__title wow fadeInUp">
                                    Welcome To Our Moonlit Hotel &amp; Resort
                                </h2>
                                <p className="content__subtitle wow fadeInUp" data-wow-delay=".3s">
                                    Welcome to Bokinn, where luxury meets comfort in the heart of
                                    canada. Since 1999, we have been dedicated to providing an
                                    exceptional stay for our guests, blending modern amenities with
                                    timeless elegance.Our beautifully designed rooms and suites offer
                                    stunning views and plush accommodations, ensuring a restful
                                    retreat whether you're here for business or leisure.
                                </p>
                                <Link
                                    to="#"
                                    className="theme-btn btn-style fill no-border wow fadeInUp"
                                    data-wow-delay=".5s"
                                >
                                    <span>Learn More</span>
                                </Link>
                            </div>
                            <div className="image ">
                                <div className="position-relative ">
                                    <div className="jara-mask-1 jarallax image-height">
                                        <img
                                            src="/assets/images/about/about-2.webp"
                                            className="jarallax-img"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about us end */}
        </>

    )
}

export default AboutThree