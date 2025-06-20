 import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
// import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Navigation, Autoplay } from 'swiper/modules';
import { getReview } from '../../api/getReview';
 

function TestimonialFive() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Use a try-catch to handle potential errors
    const fetchReviews = async () => {
      try {
        const data = await getReview();
        if (data && data.Testimonials) {
          setTestimonials(data.Testimonials);
          console.log("review data ===============>", data.Testimonials);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        setLoading(false);
      }
    };
    
    fetchReviews();
  }, []);

  return (
    <div className="rts__section testimonial has__shape is__home__four " style={{paddingTop: '30px', paddingBottom: '30px'}}>
      <div className="section__shape">
        <img src="/assets/images/about/section__shape.svg" alt="" />
      </div>
      <div className="container">
        <div className="row g-30">
          <div className="col-lg-5">
            <div className="testimonial__left">
              <div className="section__topbar">
                <span className="h6 subtitle__icon__five d-block wow fadeInUp">Testimonial</span>
                <h2 className="content__title h2 lh-1 wow fadeInUp">What Our Client Say About Us</h2>
              </div>
              <div className="applicant__list mt-40">
                <div className="single__list">
                  <img src="/assets/images/author/3.webp" alt="" />
                </div>
                <div className="single__list">
                  <img src="/assets/images/author/4.webp" alt="" />
                </div>
                <div className="single__list">
                  <img src="/assets/images/author/5.webp" alt="" />
                </div>
                <div className="single__list">
                  <img src="/assets/images/author/6.webp" alt="" />
                  <div className="icon-plus">+</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <Swiper
              className="testimonial__slider position-relative overflow-hidden"
              modules={[Navigation, Autoplay]} // include Autoplay module
              direction="horizontal"
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              centeredSlides={true}
              autoplay={{
                delay: 4000,       // 4 seconds between slides
                disableOnInteraction: false, // keeps autoplay running after user interaction
              }}
              navigation={{
                nextEl: ".button-next",
                prevEl: ".button-prev",
              }}
              speed={1000}
              effect="slide"
            >

             {loading
      ? Array.from({ length: 3 }).map((_, idx) => (
      <SwiperSlide key={idx}>
        <div className="testimonial__item__content">
          <div className="testimonial__content">
            <div className="single__slider__item">
              <div className="slider__rating mb-20">
                <Skeleton width={100} height={20} />
              </div>
              <div className="slider__text mb-20">
                <Skeleton count={3} />
              </div>
              <div className="slider__author__info d-flex align-items-center">
                <div className="slider__author__info__content">
                  <h6 className="mb-0"><Skeleton width={100} /></h6>
                  <span><Skeleton width={80} /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))
  : testimonials.map((item, idx) => (
      <SwiperSlide key={idx}>
        <div className="testimonial__item__content">
          <div className="testimonial__content">
            <div className="single__slider__item">
              <div className="slider__rating mb-20">
                {[...Array(5)].map((_, i) => (
                  <i
                    key={i}
                    className={
                      i < item.review
                        ? 'flaticon-star'
                        : 'flaticon-star-sharp-half-stroke'
                    }
                  />
                ))}
              </div>
              <span
                className="slider__text d-block"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
              <div className="slider__author__info d-flex align-items-center">
                <div className="slider__author__info__content">
                  <h6 className="mb-0">{item.name}</h6>
                  <span>{item.designation}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}


              <div className="slider__navigation is__home__four">
                <div className="nav__btn button-next">
                  <img src="/assets/images/icon/arrow-left-short.svg" alt="" />
                </div>
                <div className="nav__btn button-prev">
                  <img src="/assets/images/icon/arrow-right-short.svg" alt="" />
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialFive;