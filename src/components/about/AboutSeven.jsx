// import React from 'react'
// import { Link } from 'react-router-dom'


// function AboutSeven() {
//     return (
//         <>
//             {/* about us */}
//             <div className="rts__section about is__resturant section__padding">
//                 <div className="container">
//                     <div className="row g-4 align-items-center  ">
//                         <div className="col-lg-5">
//                             <div className="about__images">
//                                 <div className="image__left wow fadeInUp">
//                                     <img
//                                         height={648}
//                                         width={428}
//                                         src="/assets/images/pages/resturant/1.webp"
//                                         alt=""
//                                     />
//                                 </div>
//                                 <div className="image__right wow fadeInUp">
//                                     <img
//                                         width={428}
//                                         height={648}
//                                         src="/assets/images/pages/resturant/2.webp"
//                                         alt=""
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-7">
//                             <div className="about__content">
//                                 <span className="h6 subtitle__icon__two d-block wow fadeInUp">
//                                     Hotel Experience
//                                 </span>
//                                 <h2 className="font-xl wow fadeInUp">
//                                     From Farm to Fork: Enjoy Fresh, Seasonal Dishes at Bokinn
//                                 </h2>
//                                 <p className="font-sm mt-30 wow fadeInUp" data-wow-delay=".3s">
//                                     Welcome to Bokinn, where luxury meets comfort in the heart of
//                                     canada. Since 1999, we have been dedicated to providing an
//                                     exceptional stay for our guests, blending modern amenities with
//                                     timeless elegance.Our beautifully designed rooms and suites offer
//                                     stunning views and plush accommodations, ensuring a restful
//                                     retreat whether you're here for business or leisure.
//                                 </p>
//                                 <div className="reservation__meta wow fadeInUp">
//                                     <div className="reservation__item">
//                                         <p className="font-sm">Reservation By Phone</p>
//                                         <Link to="tel:+12505550199">
//                                             <img src="/assets/images/icon/phone.svg" alt="" /> +12505550199
//                                         </Link>
//                                     </div>
//                                     <div className="reservation__item">
//                                         <p className="font-sm">Opening Hours</p>
//                                         <span>
//                                             <img src="/assets/images/icon/clock.svg" alt="" />
//                                             10 Am - 12Pm
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* about us end */}
//         </>

//     )
// }

// export default AboutSeven


 import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { getRestaurant } from '../../api/getRestaurant';

function AboutSeven() {
    const [restaurant, setRestaurant] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getRestaurant()
            .then((data) => {
                if (data?.restaurant) {
                    setRestaurant(data.restaurant);
                    console.log("restaurant data =============>", data.restaurant )
                }
            })
            .catch((err) => {
                console.error("Error fetching about us data:", err);
            })
            .finally(() => setLoading(false));
    }, []);

    const images = restaurant?.images ? JSON.parse(restaurant.images) : [];

    return (
        <>
            {/* about us */}
            <div className="rts__section about is__resturant section__padding">
                <div className="container">
                    <div className="row g-4 align-items-center">
                       <div className="col-lg-5">
                            <div className="d-flex flex-column flex-md-row gap-3">
                                <div className="wow fadeInUp w-100 w-md-50">
                                    {loading ? (
                                        <Skeleton height={300} className="w-100" />
                                    ) : (
                                        <img
                                            src={images[0] || '/assets/images/pages/resturant/1.webp'}
                                            alt="restaurant-1"
                                            className="img-fluid rounded"
                                            style={{ height: '450px', objectFit: 'cover' }}
                                        />
                                    )}
                                </div>
                                <div className="wow fadeInUp w-100 w-md-50">
                                    {loading ? (
                                        <Skeleton height={400} className="w-100" />
                                    ) : (
                                        <img
                                            src={images[1] || '/assets/images/pages/resturant/2.webp'}
                                            alt="restaurant-2"
                                            className="img-fluid rounded"
                                            style={{ height: '450px', objectFit: 'cover' }}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="about__content">
                                <span className="h6 subtitle__icon__two d-block wow fadeInUp">
                                    Hotel Experience
                                </span>
                                <h2 className="font-xl wow fadeInUp">
                                    {/* From Farm to Fork: Enjoy Fresh, Seasonal Dishes at Bokinn */}
                                    {restaurant?.title}
                                </h2>
                                <div className="font-sm mt-30 wow fadeInUp" data-wow-delay=".3s">
                                    {loading ? (
                                        <Skeleton count={5} />
                                    ) : (
                                        <div
                                            dangerouslySetInnerHTML={{ __html: restaurant?.description }}
                                        />
                                    )}
                                </div>
                               <div className="reservation__meta wow fadeInUp  ">
                                <div className="reservation__item ">
                                    <p className="font-sm mb-1 text-secondary">Reservation By Phone</p>
                                    <a href="tel:+9873601704" className="d-flex align-items-center text-decoration-none text-dark">
                                        <img src="/assets/images/icon/phone.svg" alt="Phone" className="me-2" width="20" />
                                        <strong>+91 9873601704</strong>
                                        {/* <a class="link__item gap-10" href="tel:+91 987 360 1704 | +91 931 200 1704"><i class="flaticon-phone-flip"></i> +91 987 360 1704 | +91 931 200 1704</a> */}
                                    </a>
                                </div>
                                <div className="reservation__item">
                                    <p className="font-sm mb-1 text-secondary">Opening Hours</p>
                                    <span className="d-flex align-items-center text-dark">
                                        <img src="/assets/images/icon/clock.svg" alt="Clock" className="me-2" width="20" />
                                        <strong>10 AM - 12 PM</strong>
                                    </span>
                                </div>
                            </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about us end */}
        </>
    );
}

export default AboutSeven;
