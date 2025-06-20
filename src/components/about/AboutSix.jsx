import React from 'react'

function AboutSix() {
    return (
        <>
            {/* about us */}
            <div className="rts__section about is__home__six has__background">
                <div className="container">
                    <div className="row about__content">
                        <div className="col-lg-5">
                            <div className="about__image">
                                <img
                                    height={730}
                                    width={850}
                                    src="/assets/images/index-6/about.webp"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="about__content__full">
                                <div className="section__topbar">
                                    <span className="h6 subtitle__icon__five d-block wow fadeInUp">
                                        About US
                                    </span>
                                    <h2 className="content__title h2 lh-1 wow fadeInUp">
                                        Welcome To Our Moonlit Hotel &amp; Resort
                                    </h2>
                                </div>
                                <p className="font-sm mt-30 mb-40">
                                    Welcome to Bokinn, where luxury meets comfort in the heart of
                                    canada. Since 1999, we have been dedicated to providing an
                                    exceptional stay for our guests, blending modern amenities with
                                    timeless elegance.Our beautifully designed rooms and suites offer
                                    stunning views and plush accommodations, ensuring a restful
                                    retreat whether you're here for business or leisure.
                                </p>
                                <img
                                    height={75}
                                    width={110}
                                    src="/assets/images/index-5/sign.webp"
                                    alt=""
                                    className="signature"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about us end */}
        </>

    )
}

export default AboutSix