import React from 'react'

function NewsletterTwo() {
    return (
        <>
            {/* newsletter */}
            <div className="rts__section newsletter is__home__four has__background mt-120">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-10">
                            <div className="footer__newsletter mb-0 wow fadeInUp">
                                <span className="h2 mb-0 text-white">Join Our Newsletter</span>
                                <div className="rts__form">
                                    <form action="#" method="post">
                                        <input
                                            type="email"
                                            name="email"
                                            id="subscription"
                                            placeholder="Enter your mail"
                                            required=""
                                        />
                                        <button type="submit">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* newsletter end */}
        </>

    )
}

export default NewsletterTwo