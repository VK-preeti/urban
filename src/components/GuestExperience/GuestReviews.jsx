 import { useState, useEffect } from 'react';
import { Play } from 'lucide-react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { getVedioReview } from '../../api/getVedioReview';

export default function GuestVideoReviews() {
  const [guestReviews, setGuestReviews] = useState([]);
  const [animatedItems, setAnimatedItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getVedioReview()
      .then((data) => {
        if (data?.success && Array.isArray(data.rooms)) {
          const formattedReviews = data.rooms.map((room) => {
            const videoId = extractYouTubeVideoID(room.video_link);
            return {
              id: room.id,
              title: room.title,
              videoUrl: `https://www.youtube.com/embed/${videoId}`,
              videoId: videoId,
              name: "Guest", // Placeholder name
              date: new Date(room.created_at).toLocaleDateString(),
              rating: 5, // Default static rating, update if you have rating data
            };
          });
          setGuestReviews(formattedReviews);
          console.log("youtube review data==============>", formattedReviews);
        }
      })
      .catch((err) => {
        console.error("Error fetching video reviews:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedItems(guestReviews.map((review) => review.id));
    }, 100);
    return () => clearTimeout(timer);
  }, [guestReviews]);

  const extractYouTubeVideoID = (url) => {
    const match = url.match(
      /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    return match ? match[1] : null;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* <h2 className="text-3xl font-bold text-center mb-8 animate__animated animate__fadeInDown">

        Guest Video Reviews
      </h2> */}
       
        <h2 class="content__title h2 lh-1 text-center">  Guest Video Reviews</h2>

      {loading ? (
        <Skeleton count={6} height={300} />
      ) : (
        <div className="row g-4">
          {guestReviews.map((review, index) => (
            <div
              key={review.id}
              className={`col-12 col-sm-6 col-lg-4 animate__animated ${
                animatedItems.includes(review.id) ? 'animate__fadeInUp' : ''
              }`}
              // style={{ animationDelay: `${index * 0.2}s` }}
                style={{
                         
                        objectFit: 'cover',
                        objectPosition: 'top',
                        
                        transition: 'all 0.4s ease',
                    
                        overflow: 'hidden',
                        cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.03)';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
            >
              <VideoReviewCard review={review} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const VideoReviewCard = ({ review }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  const getYouTubeThumbnail = (videoId) => {
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  };

  return (
    <div
      className={`card h-100 shadow transition-all duration-300 ${isHovered ? 'transform translate-y-1 shadow-lg scale-105' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="position-relative">
        {isPlaying ? (
          <div className="ratio ratio-16x9">
            <iframe
              src={`${review.videoUrl}?autoplay=1`}
              title={`${review.name}'s review`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="card-img-top"
            ></iframe>
          </div>
        ) : (
          <div className="position-relative overflow-hidden" onClick={togglePlayback}>
            <img
              src={getYouTubeThumbnail(review.videoId)}
              alt={`${review.name}'s review`}
              className={`card-img-top transition-all duration-500 ${isHovered ? 'transform scale-110' : ''}`}
            />
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
              <div className={`bg-red-600 rounded-lg p-2 transition-all transform ${isHovered ? 'scale-125' : ''}`}>
                <Play size={30} className="text-white animate__animated animate__pulse animate__infinite" />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="card-body">
        <h5 className="card-title">{review.title}</h5>
        <p className="card-text small text-muted">{review.date}</p>
        {isPlaying && (
          <button
            className="btn btn-sm btn-outline-secondary mt-2 animate__animated animate__fadeIn"
            onClick={togglePlayback}
          >
            Close Video
          </button>
        )}
      </div>
    </div>
  );
};


 
 