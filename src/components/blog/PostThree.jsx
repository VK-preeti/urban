// import React from 'react'
// import { Link } from 'react-router-dom';

// function PostThree(props) {
//     const { blogID, blogImage, blogTitle, blogCategory, blogAuthor, authorImg, blogPublishedDate } = props;
//     return (
//         <>
//             <div className="blog__item is__has__radius">
//                 <div className="blog__item__thumb">
//                     <Link to={`/blog/${blogID}`}>
//                         <img
//                             height={250}
//                             width={360}
//                             src={`/assets/images/index-4/blog/${blogImage}`}
//                             alt=""
//                         />
//                     </Link>
//                 </div>
//                 <div className="blog__item__meta">
//                     <Link to="#" className="blog__item__meta__cat">
//                         {blogCategory ? blogCategory : "Urban Oasis Living"}
//                     </Link>
//                     <Link to={`/blog/${blogID}`} className="blog__item__meta__title">
//                         <h6>{blogTitle ? blogTitle : 'Live Elegantly in Our Contemporary Suite for Apartment'}</h6>
//                     </Link>
//                     <div className="blog__item__meta__list">
//                         <span className="blog__item__meta__list__item">
//                             <img src="/assets/images/icon/calendar.svg" alt="" />
//                             {blogPublishedDate ? blogPublishedDate : 'March 26, 2024'}
//                         </span>
//                         <span className="blog__item__meta__list__item">
//                             <Link to="#">
//                                 <img src={`/assets/images/icon/${authorImg}`} alt="" />
//                                 {blogAuthor ? blogAuthor : 'Amin'}
//                             </Link>
//                         </span>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default PostThree

import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

// Utility function to format date
const formatDate = (dateString) => {
    if (!dateString) return 'March 26, 2024';
    
    try {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    } catch (error) {
        return dateString; // Return original if parsing fails
    }
};

function PostThree(props) {
    const { 
        blogID, 
        blogImage, 
        blogTitle, 
        blogCategory, 
        blogAuthor, 
        authorImg, 
        blogPublishedDate,
        bannerImage 
    } = props;

    // Handle image source - API images come as full URLs, not relative paths
    const getImageSource = () => {
        if (blogImage) {
            // If it's a full URL (starts with http), use as is
            if (blogImage.startsWith('http')) {
                return blogImage;
            }
            // If it's a relative path, check if it needs the assets prefix
            if (blogImage.startsWith('/assets/') || blogImage.startsWith('assets/')) {
                return blogImage;
            }
            // Otherwise, assume it's an API image that needs full URL
            return blogImage;
        }
        
        if (bannerImage) {
            return bannerImage.startsWith('http') ? bannerImage : bannerImage;
        }
        
        // Default fallback image
        return '/assets/images/index-4/blog/blog-1.webp';
    };

    const displayImage = getImageSource();
    const formattedDate = formatDate(blogPublishedDate);

    return (
        <>
            <div className="blog__item is__has__radius">
                <div className="blog__item__thumb">
                    <Link to={`/blog/${blogID}`}>
                        <LazyLoadImage
                            height={250}
                            width={360}
                            src={displayImage}
                            alt={blogTitle || 'Blog image'}
                            effect="blur"
                            placeholder={<Skeleton height={250} width={360} />}
                            onError={(e) => {
                                // Fallback if image fails to load
                                e.target.src = '/assets/images/index-4/blog/blog-1.webp';
                            }}
                        />
                    </Link>
                </div>
                <div className="blog__item__meta">
                    {/* <Link to="#" className="blog__item__meta__cat">
                        {blogCategory || "Urban Oasis Living"}
                    </Link> */}
                    <Link to={`/blog/${blogID}`} className="blog__item__meta__title">
                        <h6>{blogTitle || 'Live Elegantly in Our Contemporary Suite for Apartment'}</h6>
                    </Link>
                    <div className="blog__item__meta__list">
                        <span className="blog__item__meta__list__item">
                            <img src="/assets/images/icon/calendar.svg" alt="Date" />
                            {formattedDate}
                        </span>
                        <span className="blog__item__meta__list__item">
                            {/* <Link to="#">
                                <img 
                                    src={authorImg && authorImg.startsWith('http') 
                                        ? authorImg 
                                        : `/assets/images/icon/${authorImg || 'user-1.webp'}`
                                    } 
                                    alt={blogAuthor || 'Author'} 
                                    onError={(e) => {
                                        // Fallback for author image
                                        e.target.src = '/assets/images/icon/user-1.webp';
                                    }}
                                />
                                {blogAuthor || 'Admin'}
                            </Link> */}
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostThree;