// import React, { useState } from "react";
// import ModalVideo from "react-modal-video";
// import "react-modal-video/css/modal-video.css";

// function VideoTwo() {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <>
//             {/* Video Modal */}
//             <ModalVideo 
//                 channel="youtube" 
//                 isOpen={isOpen} 
//                 videoId="qOwxqRGHy5Q" 
//                 onClose={() => setIsOpen(false)} 
//             />
//             {/* video section start */}
//             <div className="rts__section section__padding video has__shape">
//                 <div className="section__shape">
//                     <div className="shape__1">
//                         <img src="/assets/images/shape/video-1.svg" alt="" />
//                     </div>
//                 </div>
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-12">
//                             <div className="video__area position-relative wow fadeInUp">
//                                 <div className="video__area__image jara-mask-2 jarallax">
//                                     <img
//                                         className="radius-10 jarallax-img"
//                                         src="/assets/images/video/video-bg.webp"
//                                         alt=""
//                                     />
//                                 </div>
//                                 <div className="video--spinner__wrapper ">
//                                     <div className="rts__circle">
//                                         <svg className="spinner" viewBox="0 0 100 100">
//                                             <defs>
//                                                 <path
//                                                     id="circle-2"
//                                                     d="M50,50 m-37,0a37,37 0 1,1 74,0a37,37 0 1,1 -74,0"
//                                                 />
//                                             </defs>
//                                             <text>
//                                                 <textPath xlinkHref="#circle-2">
//                                                     Watch Now * Watch Now * Watch Full Video *
//                                                 </textPath>
//                                             </text>
//                                         </svg>
//                                         <div className="rts__circle--icon">
//                                             <button
//                                                 className="video-play"
//                                                 onClick={() => setIsOpen(true)}
//                                             >
//                                                 <i className="flaticon-play" />
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* video section end */}
//         </>

//     )
// }

// export default VideoTwo

 import React, { useState, useEffect } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { getHomeVedio } from "../../api/getHomeVedio";

// Extract video ID from YouTube URL
function extractYouTubeVideoId(url) {
  try {
    const parsedUrl = new URL(url);
    if (parsedUrl.hostname === 'youtu.be') {
      return parsedUrl.pathname.slice(1);
    }
    return parsedUrl.searchParams.get("v") || parsedUrl.pathname.split("/").pop();
  } catch (err) {
    console.error("Invalid video URL:", url);
    return null;
  }
}

function VideoTwo() {
  const [isOpen, setIsOpen] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const [bannerImage, setBannerImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getHomeVedio()
      .then((data) => {
        if (data.status && data.videoLink) {
          const id = extractYouTubeVideoId(data.videoLink);
          setVideoId(id);
          setBannerImage(data.bannerImage);
          console.log("Fetched video link=========>:", data.videoLink);
        }
      })
      .catch((err) => {
        console.error("Error fetching video data:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {/* Video Modal */}
      {videoId && (
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId={videoId}
          onClose={() => setIsOpen(false)}
        />
      )}

      {/* Video section start */}
      {/* <div className="rts__section section__padding video has__shape">
        <div className="section__shape">
          <div className="shape__1">
            <img src="/assets/images/shape/video-1.svg" alt="" />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="video__area position-relative wow fadeInUp">
                <div className="video__area__image jara-mask-2 jarallax">
                  {loading ? (
                    <Skeleton height={400} />
                  ) : (
                    <img
                      className="radius-10 jarallax-img"
                      src={bannerImage}
                      alt="Video Thumbnail"
                    />
                  )}
                </div>
                {!loading && videoId && (
                  <div className="video--spinner__wrapper">
                    <div className="rts__circle">
                      <svg className="spinner" viewBox="0 0 100 100">
                        <defs>
                          <path
                            id="circle-2"
                            d="M50,50 m-37,0a37,37 0 1,1 74,0a37,37 0 1,1 -74,0"
                          />
                        </defs>
                        <text>
                          <textPath xlinkHref="#circle-2">
                            Watch Now * Watch Now * Watch Full Video *
                          </textPath>
                        </text>
                      </svg>
                      <div className="rts__circle--icon">
                        <button
                          className="video-play"
                          onClick={() => setIsOpen(true)}
                        >
                          <i className="flaticon-play" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="rts__section section__padding video has__shape">
                <div className="section__shape">
                    <div className="shape__1">
                        <img src="/assets/images/shape/video-1.svg" alt="" />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="video__area position-relative wow fadeInUp">
                                <div className="video__area__image jara-mask-2 jarallax">
                                    <img
                                        className="radius-10 jarallax-img"
                                         src={bannerImage}
                                        alt=""
                                    />
                                </div>
                                <div className="video--spinner__wrapper ">
                                    <div className="rts__circle">
                                        <svg className="spinner" viewBox="0 0 100 100">
                                            <defs>
                                                <path
                                                    id="circle-2"
                                                    d="M50,50 m-37,0a37,37 0 1,1 74,0a37,37 0 1,1 -74,0"
                                                />
                                            </defs>
                                            <text>
                                                <textPath xlinkHref="#circle-2">
                                                    Watch Now * Watch Now * Watch Full Video *
                                                </textPath>
                                            </text>
                                        </svg>
                                        <div className="rts__circle--icon">
                                            <button
                                                className="video-play"
                                                onClick={() => setIsOpen(true)}
                                            >
                                                <i className="flaticon-play" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      {/* Video section end */}
    </>
  );
}

export default VideoTwo;
