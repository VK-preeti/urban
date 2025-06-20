import React, { useEffect } from 'react'
import WOW from 'wowjs';

function BreadcrumbTwoCommon ({ title, description, bgImage }) {
    useEffect(() => {
        const wow = new WOW.WOW(); // Properly initialize WOW.js
        wow.init();
    }, []);
    return (
        <>
            {/* page header */}
            <div
                className="rts__section page__hero__height page__hero__bg"
                style={{ backgroundImage: `url(${bgImage || '/assets/images/banner/roombanner.jpg'})` }}
            >
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-12">
                            <div className="page__hero__content">
                                <h1 className="wow fadeInUp">{title}</h1>
                                <p className="wow fadeInUp font-sm">{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* page header end */}
        </>
    )
}

export default BreadcrumbTwoCommon