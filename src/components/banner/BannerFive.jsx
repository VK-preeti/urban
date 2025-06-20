import React, { useEffect } from 'react';
import { jarallax } from 'jarallax';
import WOW from 'wowjs';

function BannerFive() {
    useEffect(() => {
        new WOW.WOW().init();

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
            {/* banner area */}
            <div className="rts__section banner__area is__home__four banner__height banner__center">
                <div className="banner__content jara-mask-3 jarallax">
                    <div className="banner__slider__image">
                        <img
                            className="jarallax-img"
                            src="/assets/images/index-4/banner/banner.webp"
                            alt=""
                        />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-9 col-lg-11">
                                <div className="banner__slide__content if__not__slider">
                                    <h1 className="wow fadeInUp">
                                        Elevate Your Stay Luxury and Adventure in the Mountains
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* banner area end */}
        </>

    )
}

export default BannerFive