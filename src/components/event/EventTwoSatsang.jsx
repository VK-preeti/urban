import React, { useState, useEffect } from 'react';
import WOW from 'wowjs';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'animate.css/animate.min.css';
  
import { getSatsang } from '../../api/getSatsang';
  

  
  
   function EventTwoSatsang() {
       const [loading, setLoading] = useState(true);
       const [satsang, setConference] = useState(null);
       const [images, setImages] = useState([]);
   
       useEffect(() => {
           getSatsang()
               .then((response) => {
                   if (response.status && response.success && response.satsang) {
                       setConference(response.satsang);
                       
                       // Parse images if they exist
                       if (response.satsang.images) {
                           try {
                               const parsedImages = JSON.parse(response.satsang.images);
                               setImages(parsedImages);
                           } catch (error) {
                               console.error("Error parsing images:", error);
                           }
                       }
                   }
                   console.log("satsang data===========>:", response);
               })
               .catch((err) => {
                   console.error("Error fetching conference data:", err);
               })
               .finally(() => setLoading(false));
       }, []);
   
    //    useEffect(() => {
    //        new WOW.WOW().init();
    //    }, []);
     useEffect(() => {
        if (!loading) {
            new WOW.WOW({ live: false }).init();
        }
    }, [loading]);
   
       // Function to render HTML content safely
       const createMarkup = (htmlContent) => {
           return { __html: htmlContent };
       };
   
       return (
           <>
               {/* event area */}
               <div className="rts__section section__padding">
                   <div className="container">
                       <div className="row">
                           {/* First event section */}
                           <div className="single__event if__is__default">
                               <div className="single__event__thumb" style={{ width: '100%' }}>
                                                          {loading ? (
                                                              <Skeleton height={535} width={605} />
                                                          ) : (
                                                              <Swiper
                                                              modules={[Autoplay]}
                                                              autoplay={{ delay: 3000, disableOnInteraction: false }}
                                                              loop={true}
                                                              spaceBetween={0}
                                                              slidesPerView={1}
                                                              style={{ width: '100%' }}
                                                              >
                                                              {(images.length > 0 ? images : ["/assets/images/pages/event/1.webp"]).map((img, index) => (
                                                                  <SwiperSlide key={index}>
                                                                  <div
                                                                      style={{
                                                                      width: '100%',
                                                                      aspectRatio: '12 / 9',
                                                                      overflow: 'hidden',
                                                                      borderRadius: '8px'
                                                                      }}
                                                                  >
                                                                      <img
                                                                      src={img}
                                                                      alt={`Event image ${index + 1}`}
                                                                      className="img-fluid"
                                                                      style={{
                                                                          width: '100%',
                                                                          height: '100%',
                                                                          objectFit: 'cover'
                                                                      }}
                                                                      />
                                                                  </div>
                                                                  </SwiperSlide>
                                                              ))}
                                                              </Swiper>
                                                          )}
                                                          </div>
                               <div className="single__event__meta">
                                   {loading ? (
                                       <>
                                           <Skeleton height={40} width="70%" className="mb-20" />
                                           <Skeleton count={3} className="font-sm mb-20" />
                                       </>
                                   ) : (
                                       <>
                                           <h2 className="wow fadeInUp mb-20">
                                               {satsang?.title || "A Night of Hope: Our Charity Gala Room."}
                                           </h2>
                                           <div 
                                               className="font-sm wow fadeInUp"
                                               dangerouslySetInnerHTML={createMarkup(satsang?.short_desc || "")}
                                           />
                                       </>
                                   )}
                                   
                                   <div className="event__info mt-20 wow fadeInUp">
                                       {loading ? (
                                           <>
                                               <div className="event__info__single">
                                                   <Skeleton height={30} width={80} />
                                                   <Skeleton height={20} width={100} />
                                               </div>
                                               <div className="event__info__single">
                                                   <Skeleton height={30} width={80} />
                                                   <Skeleton height={20} width={100} />
                                               </div>
                                               <div className="event__info__single">
                                                   <Skeleton height={30} width={80} />
                                                   <Skeleton height={20} width={100} />
                                               </div>
                                           </>
                                       ) : (
                                           <>
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
                                           </>
                                       )}
                                   </div>
                               </div>
                           </div>
                           
                           {/* Second event section */}
                           <div className="single__event if__is__reverse flex-column">
                               {/* <div className="single__event__thumb">
                                   {loading ? (
                                       <Skeleton height={535} width={605} />
                                   ) : (
                                       <img
                                           src={images[1] || "/assets/images/pages/event/2.webp"}
                                           width={605}
                                           height={535}
                                           alt={satsang?.title || "Event image"}
                                       />
                                   )}
                               </div> */}
                               <div className="single__event__meta">
                                   {loading ? (
                                       <>
                                           <Skeleton height={40} width="70%" className="mb-20" />
                                           <Skeleton count={3} className="font-sm mb-20" />
                                       </>
                                   ) : (
                                       <>
                                           {/* <h2 className="wow fadeInUp mb-20">
                                               {`${satsang?.title || ""} Festival Event`}
                                           </h2> */}
                                           <div 
                                               className="font-sm wow fadeInUp"
                                               dangerouslySetInnerHTML={createMarkup(satsang?.description || "")}
                                           />
                                       </>
                                   )}
                                   
                                   <div className="event__info mt-20 wow fadeInUp">
                                       {loading ? (
                                           <>
                                               <div className="event__info__single">
                                                   <Skeleton height={30} width={80} />
                                                   <Skeleton height={20} width={100} />
                                               </div>
                                               <div className="event__info__single">
                                                   <Skeleton height={30} width={80} />
                                                   <Skeleton height={20} width={100} />
                                               </div>
                                               <div className="event__info__single">
                                                   <Skeleton height={30} width={80} />
                                                   <Skeleton height={20} width={100} />
                                               </div>
                                           </>
                                       ) : (
                                           <>
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
                                           </>
                                       )}
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
               {/* event area end */}
           </>
       );
   }
   
   export default EventTwoSatsang;