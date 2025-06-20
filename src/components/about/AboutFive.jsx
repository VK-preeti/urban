import React from 'react'

function AboutFive() {
    return (
        <>
            {/* about us */}
            <div className="rts__section section__padding about is__home__five has__background">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-7 wow fadeInUp" data-wow-delay=".3s">
                            <div className="section__topbar">
                                <span className="h6 subtitle__icon__three mx-auto">About US</span>
                                <h2 className="section__title">
                                    Welcome To Our Moonlit Hotel &amp; Resort 
                                </h2>
                            </div>
                            <p
                                className="font-sm d-block mt-30 wow fadeInUp"
                                data-wow-delay="0.4s"
                            >
                                Welcome to Bokinn, where luxury meets comfort in the heart of
                                canada. Since 1999, we have been dedicated to providing an
                                exceptional stay for our guests, blending modern amenities with
                                timeless elegance.Our beautifully designed rooms and suites offer
                                stunning views and plush accommodations, ensuring a restful retreat
                                whether you're here for business or leisure.
                            </p>
                            <img
                                src="/assets/images/index-5/sign.webp"
                                className="mt-20"
                                width={110}
                                height={75}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="about__positioned__images">
                        <div className="image__1 wow fadeInLeft " data-wow-delay=".5s">
                            <img
                                src="/assets/images/index-5/about/1.webp"
                                height={595}
                                width={825}
                                alt=""
                            />
                        </div>
                        <div className="image__2 wow fadeInUp jarallax" data-wow-delay=".6s">
                            <img
                                className="jarallax-img"
                                src="/assets/images/index-5/about/2.webp"
                                width={385}
                                height={530}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="section__padding mb-100 d-none d-lg-block" />
            <div className="pb-100 d-none d-lg-block" />
            {/* about us end */}
        </>

    )
}

export default AboutFive