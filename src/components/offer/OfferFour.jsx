import React from 'react'
import { Link } from 'react-router-dom'

function OfferFour() {
    return (
        <>
            {/* best offer */}
            <div className="rts__section offer is__home__five has__shape section__padding">
                <div className="section__shape">
                    <img src="/assets/images/about/section__shape.svg" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="section__wrapper mb-40 wow fadeInUp">
                            <div className="section__content__left">
                                <span className="h6 subtitle__icon__two d-block wow fadeInUp">
                                    Best Offers
                                </span>
                                <h2 className="content__title h2 lh-1">Best Offers</h2>
                            </div>
                            <div className="section__content__right">
                                <p>
                                    Our rooms offer a harmonious blend of comfort and elegance,
                                    designed to provide an exceptional stay for every guest. Each room
                                    features plush bedding, high-quality linens, and a selection of
                                    pillows to ensure a restful night's sleep.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* row end */}
                    {/* row start */}
                    <div className="row g-0">
                        {/* single card */}
                        <div className="single__offer if__is__big__card">
                            <div className="single__offer__thumb">
                                <Link to="/service">
                                    <img src="/assets/images/index-5/offer/mask_group-1.webp" alt="" />
                                </Link>
                            </div>
                            <div className="single__offer__meta">
                                <h4>
                                    <Link to="/service" title="Room Service Delight">
                                        Room Service Delight
                                    </Link>
                                </h4>
                                <p className="font-sm">
                                    Indulge in a vibrant and nutritious medley of the season's
                                    freshest vegetables. Our Garden Fresh Vegetable Salad features
                                    crisp lettuce, juicy cherry tomatoes, crunchy cucumbers.
                                </p>
                                <div className="price__tag">
                                    <span className="current__price h4">222$</span>
                                    <span className="less__count font-20 h6">32$</span>
                                </div>
                                <Link to="/service" className="underline__style">
                                    Book Now
                                </Link>
                            </div>
                        </div>
                        {/* single card end */}
                        {/* single card */}
                        <div className="single__offer if__is__big__card">
                            <div className="single__offer__thumb">
                                <Link to="/service">
                                    <img src="/assets/images/index-5/offer/mask_group.webp" alt="" />
                                </Link>
                            </div>
                            <div className="single__offer__meta">
                                <h4>
                                    <Link to="/service" title="Velvet Red Reserve">
                                        Velvet Red Reserve
                                    </Link>
                                </h4>
                                <p className="font-sm">
                                    Indulge in a vibrant and nutritious medley of the season's
                                    freshest vegetables. Our Garden Fresh Vegetable Salad features
                                    crisp lettuce, juicy cherry tomatoes, crunchy cucumbers.
                                </p>
                                <div className="price__tag">
                                    <span className="current__price h4">120$</span>
                                    <span className="less__count font-20 h6">20$</span>
                                </div>
                                <Link to="/service" className="underline__style">
                                    Book Now
                                </Link>
                            </div>
                        </div>
                        {/* single card end */}
                    </div>
                </div>
            </div>
            {/* best offer end */}
        </>

    )
}

export default OfferFour