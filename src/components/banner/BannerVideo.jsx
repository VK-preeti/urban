import React from 'react'

function BannerVideo() {
    return (
        <>
            {/* banner area */}
            <div className="rts__section banner__area is__home__video banner__height banner__center">
                <div className="banner__video__section">
                    <div className="video__area">
                        <video
                            src="/assets/images/video/Moonlit.mp4"
                            autoPlay
                            loop
                            muted
                        />
                        <div className="video__area__overlay" />
                    </div>
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-10">
                                <div className="video__section__text">
                                    <div className="video__text__slider overflow-hidden">
                                        <div className="swiper-wrapper">
                                            {/* single slider */}
                                            <div className="swiper-slide">
                                                <div className="video__text__slider__item">
                                                    <h1 className="video__text__slider__title">
                                                        Luxury Stay Hotel Experience Comfort &amp; Elegance
                                                    </h1>
                                                </div>
                                            </div>
                                            {/* single slider end */}
                                            {/* single slider */}
                                            <div className="swiper-slide">
                                                <div className="video__text__slider__item">
                                                    <h1 className="video__text__slider__title">
                                                        A Luxurious Retreat Comfort &amp; Elegance Await
                                                    </h1>
                                                </div>
                                            </div>
                                            {/* single slider end */}
                                            {/* single slider */}
                                            <div className="swiper-slide">
                                                <div className="video__text__slider__item">
                                                    <h1 className="video__text__slider__title">
                                                        Elevate Your Experience Luxury, Comfort, and Elegance
                                                    </h1>
                                                </div>
                                            </div>
                                            {/* single slider end */}
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

export default BannerVideo