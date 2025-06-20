import React, {useEffect} from 'react'
import WOW from 'wowjs';

function EventTwo() {
    useEffect(() => {
            new WOW.WOW().init();
        }, []);
    return (
        <>
            {/* event area */}
            <div className="rts__section section__padding">
                <div className="container">
                    <div className="row">
                        <div className="single__event if__is__default">
                            <div className="single__event__thumb">
                                <img
                                    src="/assets/images/pages/event/1.webp"
                                    width={605}
                                    height={535}
                                    alt=""
                                />
                            </div>
                            <div className="single__event__meta">
                                <h2 className="wow fadeInUp mb-20">
                                    A Night of Hope: Our Charity Gala Room.
                                </h2>
                                <p className="font-sm wow fadeInUp">
                                    At our Fitness &amp; Yoga Services, we are dedicated to helping
                                    you achieve your health and wellness goals. Our comprehensive
                                    program offers a variety of classes designed to suit all levels,
                                    from beginners to advanced practitioners.
                                </p>
                                <div className="event__info mt-20 wow fadeInUp">
                                    <div className="event__info__single">
                                        <span className="h5 d-block">1000+</span>
                                        <p>Guest Dinner</p>
                                    </div>
                                    <div className="event__info__single">
                                        <span className="h5 d-block">100+</span>
                                        <p>Service Man</p>
                                    </div>
                                    <div className="event__info__single">
                                        <span className="h5 d-block">10+</span>
                                        <p>Special Room</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single__event if__is__reverse">
                            <div className="single__event__thumb">
                                <img
                                    src="/assets/images/pages/event/2.webp"
                                    width={605}
                                    height={535}
                                    alt=""
                                />
                            </div>
                            <div className="single__event__meta">
                                <h2 className="wow fadeInUp mb-20">
                                    Taste of Luxury: Food &amp; Wine Festival Event
                                </h2>
                                <p className="font-sm wow fadeInUp">
                                    At our Fitness &amp; Yoga Services, we are dedicated to helping
                                    you achieve your health and wellness goals. Our comprehensive
                                    program offers a variety of classes designed to suit all levels,
                                    from beginners to advanced practitioners.
                                </p>
                                <div className="event__info mt-20 wow fadeInUp">
                                    <div className="event__info__single">
                                        <span className="h5 d-block">800+</span>
                                        <p>Guest Dinner</p>
                                    </div>
                                    <div className="event__info__single">
                                        <span className="h5 d-block">70+</span>
                                        <p>Service Man</p>
                                    </div>
                                    <div className="event__info__single">
                                        <span className="h5 d-block">16+</span>
                                        <p>Special Room</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* event area end */}
        </>

    )
}

export default EventTwo