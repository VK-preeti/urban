// import React from 'react'
// import PostThree from './PostThree'
// import posts from '../data/data-post.json'

// function BlogTwo() {
//     return (
//         <>
//             {/* blog style */}
//             <div className="rts__section blog is__home__three">
//                 <div className="container">
//                     <div className="row justify-content-center text-center mb-40">
//                         <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
//                             <div className="section__topbar">
//                                 <span className="h6 subtitle__icon__three mx-auto">Blog</span>
//                                 <h2 className="section__title">See Our Latest Blog</h2>
//                             </div>
//                         </div>
//                     </div>
//                     {/* row end */}
//                     <div className="row g-30">
//                         {posts.map((data, index) => {
//                             return (
//                                 <div key={index} className="col-lg-6 col-xl-4 col-md-6">
//                                     {
//                                         <PostThree
//                                             blogCategory={data.category}
//                                             blogID={data.id}
//                                             blogImage={`${data.image}`}
//                                             authorImg={`${data.authorImg}`}
//                                             blogTitle={data.title}
//                                             blogAuthor={data.author}
//                                             blogPublishedDate={data.publishedDate}
//                                         />
//                                     }
//                                 </div>
//                             )
//                         }).slice(4, 7)}
//                     </div>
//                 </div>
//             </div>
//             {/* blog style end */}
//         </>

//     )
// }

// export default BlogTwo

import React, { useEffect, useState } from 'react';
import PostThree from './PostThree';
import { getBlog } from '../../api/getBlog';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function BlogTwo() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        getBlog()
            .then((data) => {
                if (data.status && data.blogs) {
                    const parsed = data.blogs.map(blog => ({
                        ...blog,
                        blog_images: JSON.parse(blog.blog_images || '[]'),
                    }));
                    setPosts(parsed);
                    console.log("data blog all part=========>", parsed);
                } else {
                    console.warn("Unexpected blog API response:", data);
                }
            })
            .catch((err) => {
                console.error("Error fetching blog data:", err);
            })
            .finally(() => setLoading(false));
    }, []);

    // Auto-slide functionality
    useEffect(() => {
        if (posts.length > 3) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => 
                    prevIndex === posts.length - 1 ? 0 : prevIndex + 1
                );
            }, 3000); // Slide every 3 seconds

            return () => clearInterval(interval);
        }
    }, [posts.length]);

    // Get visible posts (3 at a time)
    const getVisiblePosts = () => {
        if (posts.length <= 3) {
            return posts;
        }

        const visiblePosts = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % posts.length;
            visiblePosts.push(posts[index]);
        }
        return visiblePosts;
    };

    const visiblePosts = getVisiblePosts();

    return (
        <>
            {/* blog style */}
            <div className="rts__section blog is__home__three">
                <div className="container">
                    <div className="row justify-content-center text-center mb-40">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="section__topbar">
                                <span className="h6 subtitle__icon__three mx-auto">Blog</span>
                                <h2 className="section__title">See Our Latest Blog</h2>
                            </div>
                        </div>
                    </div>
                    {/* row end */}
                    <div className="row g-30">
                        {loading ? (
                            // Show skeleton loading for 3 cards
                            Array.from({ length: 3 }).map((_, index) => (
                                <div key={index} className="col-lg-6 col-xl-4 col-md-6">
                                    <div className="card border-0 shadow-sm">
                                        <Skeleton height={200} />
                                        <div className="card-body">
                                            <Skeleton height={20} width="60%" />
                                            <Skeleton height={40} className="mt-2" />
                                            <div className="d-flex justify-content-between mt-3">
                                                <Skeleton height={15} width="40%" />
                                                <Skeleton height={15} width="30%" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            visiblePosts.map((data, index) => (
                                <div 
                                    key={`${data.id || data.slug}-${currentIndex}-${index}`} 
                                    className="col-lg-6 col-xl-4 col-md-6"
                                    style={{
                                        opacity: 1,
                                        transform: 'translateX(0)',
                                        transition: 'all 0.5s ease-in-out'
                                    }}
                                >
                                    <PostThree
                                        blogCategory={data.blog_category || 'Blog'}
                                        blogID={data.slug || data.id}
                                        blogImage={data.blog_images?.[0] || '/assets/images/pages/blog/default-blog.webp'}
                                        authorImg={data.author_image || 'assets/images/user/user-1.webp'}
                                        blogTitle={data.title || 'Blog Title'}
                                        blogAuthor={data.created_by || data.author || 'Admin'}
                                        blogPublishedDate={data.blog_date || data.publishedDate || new Date().toISOString().split('T')[0]}
                                    />
                                </div>
                            ))
                        )}
                    </div>

                    {/* Carousel indicators */}
                    {!loading && posts.length > 3 && (
                        <div className="row justify-content-center mt-4">
                            <div className="col-auto">
                                <div className="carousel-indicators d-flex gap-2">
                                    {posts.map((_, index) => (
                                        <button
                                            key={index}
                                            type="button"
                                            className={`indicator ${index === currentIndex ? 'active' : ''}`}
                                            onClick={() => setCurrentIndex(index)}
                                            style={{
                                                width: '10px',
                                                height: '10px',
                                                borderRadius: '50%',
                                                border: 'none',
                                                backgroundColor: index === currentIndex ? '#ab8a62' : '#ccc',
                                                cursor: 'pointer',
                                                transition: 'background-color 0.3s ease'
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Navigation arrows */}
                    {!loading && posts.length > 3 && (
                        <>
                            <button
                                className="carousel-nav prev"
                                onClick={() => setCurrentIndex(currentIndex === 0 ? posts.length - 1 : currentIndex - 1)}
                                style={{
                                    position: 'absolute',
                                    left: '20px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    background: 'rgba(171, 138, 98, 0.8)',
                                    border: 'none',
                                    borderRadius: '50%',
                                    width: '40px',
                                    height: '40px',
                                    color: 'white',
                                    cursor: 'pointer',
                                    fontSize: '18px',
                                    transition: 'background-color 0.3s ease',
                                    zIndex: 10
                                }}
                                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(171, 138, 98, 1)'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(171, 138, 98, 0.8)'}
                            >
                                ‹
                            </button>
                            <button
                                className="carousel-nav next"
                                onClick={() => setCurrentIndex(currentIndex === posts.length - 1 ? 0 : currentIndex + 1)}
                                style={{
                                    position: 'absolute',
                                    right: '20px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    background: 'rgba(171, 138, 98, 0.8)',
                                    border: 'none',
                                    borderRadius: '50%',
                                    width: '40px',
                                    height: '40px',
                                    color: 'white',
                                    cursor: 'pointer',
                                    fontSize: '18px',
                                    transition: 'background-color 0.3s ease',
                                    zIndex: 10
                                }}
                                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(171, 138, 98, 1)'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(171, 138, 98, 0.8)'}
                            >
                                ›
                            </button>
                        </>
                    )}
                </div>
            </div>

            <style jsx>{`
                .rts__section.blog {
                    position: relative;
                    overflow: hidden;
                }
                
                .carousel-indicators .indicator:hover {
                    background-color: #ab8a62 !important;
                }
                
                @media (max-width: 768px) {
                    .carousel-nav {
                        display: none;
                    }
                }
            `}</style>
            {/* blog style end */}
        </>
    );
}

export default BlogTwo;