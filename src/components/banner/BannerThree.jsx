import React, { useEffect } from 'react';
import WOW from 'wowjs'; 

function BannerThree() {
    useEffect(() => {
            new WOW.WOW().init();
        }, []);
    return (
        <>
            {/* banner area */}
            <div className="rts__section banner__area is__home__two banner__height banner__center">
                <div className="banner__content">
                    <div className="banner__slider__image">
                        <img src="/assets/images/banner/slides-2.webp" alt="" />
                    </div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="banner__slide__content">
                                    <h1 className="wow fadeInUp">
                                        Luxury Stay Hotel Experience Comfort &amp; Elegance
                                    </h1>
                                    <div className="banner__slide__content__info">
                                        <div className="item wow fadeInUp" data-wow-delay=".3s">
                                            <span className="h2 d-block">30+</span>
                                            <p>Hotel Room</p>
                                        </div>
                                        <div className="item wow fadeInUp" data-wow-delay=".5s">
                                            <span className="h2 d-block">20+</span>
                                            <p>Pool &amp; Spa Center</p>
                                        </div>
                                        <div className="item wow fadeInUp" data-wow-delay=".7s">
                                            <span className="h2 d-block">50+</span>
                                            <p>Experience Staff</p>
                                        </div>
                                    </div>
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

export default BannerThree