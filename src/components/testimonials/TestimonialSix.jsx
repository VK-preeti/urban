// import React, { useRef, useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Controller, EffectFade } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/effect-fade"; // Import fade effect styles

// const testimonials = [
//   {
//     text: "Choosing Bokinn was one of the best decisions we've ever made. They have proven to be a reliable and innovative partner, always ready to tackle new challenges with and expertise. Their commitment to and delivering tailored.",
//     name: "Al Amin Khan",
//     position: "COO of Apex Solutions",
//     rating: 4.5,
//     image: "assets/images/author/author-2x.webp",
//   },
//   {
//     text: "Choosing Bokinn was one of the best decisions we've ever made. They have proven to be a reliable and innovative partner, always ready to tackle new challenges with and expertise. Their commitment to and delivering tailored.",
//     name: "Sarah Martinez",
//     position: "Fortune It Solutions",
//     rating: 4.5,
//     image: "assets/images/author/author-4.webp",
//   },
// ];

// const TestimonialSection = ({className}) => {
//   const textSwiperRef = useRef(null);
//   const imageSwiperRef = useRef(null);
//   const [controlledSwiper, setControlledSwiper] = useState(null);

//   useEffect(() => {
//     if (textSwiperRef.current && imageSwiperRef.current) {
//       textSwiperRef.current.controller.control = imageSwiperRef.current;
//       imageSwiperRef.current.controller.control = textSwiperRef.current;
//     }
//   }, []);

//   return (
//     <div className={`rts__section testimonial is__home__five ${className}`}>
//       <div className="container">
//         <div className="row justify-content-center text-center mb-40">
//           <div className="col-lg-6">
//             <div className="section__topbar">
//               <span className="h6 subtitle__icon__three mx-auto">Testimonial</span>
//               <h2 className="section__title">What Our Client Say</h2>
//             </div>
//           </div>
//         </div>
//         <div className="row justify-content-between align-items-center position-relative">
//           <div className="col-lg-8">
//             <div className="testimonial__item__content">
//               <Swiper
//                 modules={[Navigation, Controller]}
//                 onSwiper={(swiper) => (textSwiperRef.current = swiper)}
//                 controller={{ control: controlledSwiper }}
//                 navigation={{
//                   nextEl: ".button-next",
//                   prevEl: ".button-prev",
//                 }}
//                 className="tm__slider__five"
//                 loop= "true"
//               >
//                 {testimonials.map((testimonial, index) => (
//                   <SwiperSlide key={index}>
//                     <div className="testimonial__content">
//                       <div className="single__slider__item">
//                         <div className="slider__rating mb-20">
//                           {Array.from({ length: 5 }, (_, i) => (
//                             <i
//                               key={i}
//                               className={
//                                 i + 1 <= testimonial.rating
//                                   ? "flaticon-star"
//                                   : "flaticon-star-sharp-half-stroke"
//                               }
//                             ></i>
//                           ))}
//                         </div>
//                         <span className="slider__text d-block">
//                           {testimonial.text}
//                         </span>
//                         <div className="slider__author__info">
//                           <div className="slider__author__info__content">
//                             <h6 className="mb-0">{testimonial.name}</h6>
//                             <span>{testimonial.position}</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//               <div className="slider__navigation">
//                 <div className="nav__btn button-next">
//                   <img src="/assets/images/icon/arrow-left-short.svg" alt="" />
//                 </div>
//                 <div className="nav__btn button-prev">
//                   <img src="/assets/images/icon/arrow-right-short.svg" alt="" />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4 d-none d-lg-flex justify-content-lg-end justify-content-md-start">
//             <div className="testimonial__slider__style__three">
//               <div className="testimonial__author is__thumb overflow-hidden">
//                 <Swiper
//                   modules={[Controller, EffectFade]}
//                   effect="fade" // Enable fade effect
//                   fadeEffect={{ crossFade: true }}
//                   onSwiper={(swiper) => {
//                     imageSwiperRef.current = swiper;
//                     setControlledSwiper(swiper);
//                   }}
//                   controller={{ control: textSwiperRef.current }}
//                   className="author-slider"
//                   loop="true"
//                 >
//                   {testimonials.map((testimonial, index) => (
//                     <SwiperSlide key={index}>
//                       <div className="testimonial__author__image">
//                         <img
//                           width="265"
//                           height="285"
//                           src={testimonial.image}
//                           alt={testimonial.name}
//                         />
//                       </div>
//                     </SwiperSlide>
//                   ))}
//                 </Swiper>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestimonialSection;

 import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Controller, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import htmlReactParser, { domToReact } from "html-react-parser";
import { getReview } from "../../api/getReview";
 

const TestimonialSection = ({ className }) => {
  const textSwiperRef = useRef(null);
  const imageSwiperRef = useRef(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  // Swiper controller sync
  useEffect(() => {
    if (textSwiperRef.current && imageSwiperRef.current) {
      textSwiperRef.current.controller.control = imageSwiperRef.current;
      imageSwiperRef.current.controller.control = textSwiperRef.current;
    }
  }, []);

  // API Fetch
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getReview();
        if (data?.Testimonials) {
          setTestimonials(data.Testimonials);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  // HTML cleaner
  const removeTags = (htmlString) => {
    if (typeof htmlString !== "string") return "";
    try {
      return htmlReactParser(htmlString, {
        replace: (domNode) => {
          if (domNode.type === "tag") {
            return <>{domToReact(domNode.children)}</>;
          }
        },
      });
    } catch {
      return htmlString.replace(/<[^>]*>?/gm, "").replace(/&nbsp;/g, " ").trim();
    }
  };

  return (
    <div className={`rts__section testimonial is__home__five ${className}`}>
      <div className="container">
        <div className="row justify-content-center text-center mb-40">
          <div className="col-lg-6">
            <div className="section__topbar">
              <span className="h6 subtitle__icon__three mx-auto">Testimonial</span>
              <h2 className="section__title">What Our Client Say</h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-between align-items-center position-relative">
          {/* Text Slider */}
          <div className="col-lg-8">
            <div className="testimonial__item__content">
              <Swiper
                modules={[Navigation, Controller]}
                onSwiper={(swiper) => (textSwiperRef.current = swiper)}
                controller={{ control: controlledSwiper }}
                navigation={{
                  nextEl: ".button-next",
                  prevEl: ".button-prev",
                }}
                className="tm__slider__five"
                loop={true}
              >
                {(loading ? Array(2).fill({}) : testimonials).map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="testimonial__content">
                      <div className="single__slider__item">
                        <div className="slider__rating mb-20">
                          {[...Array(5)].map((_, i) => (
                            <i
                              key={i}
                              className={
                                i + 1 <= (testimonial.review || 0)
                                  ? "flaticon-star"
                                  : "flaticon-star-sharp-half-stroke"
                              }
                            ></i>
                          ))}
                        </div>
                        <span className="slider__text d-block">
                          {loading ? (
                            <Skeleton count={3} />
                          ) : (
                            removeTags(testimonial.description)
                          )}
                        </span>
                        <div className="slider__author__info">
                          <div className="slider__author__info__content">
                            <h6 className="mb-0">
                              {loading ? <Skeleton width={100} /> : testimonial.name}
                            </h6>
                            <span>
                              {loading ? <Skeleton width={80} /> : testimonial.designation}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="slider__navigation">
                <div className="nav__btn button-next">
                  <img src="/assets/images/icon/arrow-left-short.svg" alt="Next" />
                </div>
                <div className="nav__btn button-prev">
                  <img src="/assets/images/icon/arrow-right-short.svg" alt="Previous" />
                </div>
              </div>
            </div>
          </div>

          {/* Image Slider */}
          <div className="col-lg-4 d-none d-lg-flex justify-content-lg-end justify-content-md-start">
            <div className="testimonial__slider__style__three">
              <div className="testimonial__author is__thumb overflow-hidden">
                <Swiper
                  modules={[Controller, EffectFade]}
                  effect="fade"
                  fadeEffect={{ crossFade: true }}
                  onSwiper={(swiper) => {
                    imageSwiperRef.current = swiper;
                    setControlledSwiper(swiper);
                  }}
                  controller={{ control: textSwiperRef.current }}
                  className="author-slider"
                  loop={true}
                >
                  {(loading ? Array(2).fill({}) : testimonials).map((testimonial, index) => (
                    <SwiperSlide key={index}>
                      <div className="testimonial__author__image">
                        {loading ? (
                          <Skeleton width={265} height={285} />
                        ) : (
                          <img
                            width="265"
                            height="285"
                            src={testimonial.image}
                            alt={testimonial.name}
                          />
                        )}
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
