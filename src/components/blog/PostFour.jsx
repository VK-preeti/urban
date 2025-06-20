  import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

// Utility to strip HTML tags and get plain text
const stripHtml = (html) => {
  const tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
};

function PostFour({ 
  blogID, 
  blogImage, 
  blogTitle, 
  blogCategory, 
  blogAuthor, 
  authorImg,
  content, 
  blogPublishedDate,
  bannerImage 
}) {
  const displayImage = blogImage || bannerImage || 'assets/images/pages/blog/r-1.webp';
  const shortText = content ? stripHtml(content).slice(0, 250) + '...' : '';

  return (
    <div className="single__blog">
      <div className="single__blog__thumb">
        <Link to={`/blog/${blogID}`}>
          <LazyLoadImage
            src={displayImage}
            alt={blogTitle || 'Blog image'}
            height={490}
            width={760}
            effect="blur"
            placeholder={<Skeleton height={490} width={760} />}
          />
        </Link>
      </div>
      <div className="single__blog__meta">
        <Link to="#" className="category">
          {blogCategory || "Hotel Blog"}
        </Link>
        <Link to={`/blog/${blogID}`} className="h5">
          {blogTitle || "Untitled Blog"}
        </Link>
        <p>{shortText}</p>
        <div className="single__blog__meta__main">
          <div className="author__meta">
            {/* <Link to="#">
              <img
                src={`assets/images/author/${authorImg || 'default-user.jpg'}`}
                height={40}
                width={40}
                alt={blogAuthor || 'Author'}
              />
              {blogAuthor || 'Amin'}
            </Link> */}
            <span>
              <img src="assets/images/icon/clock.svg" alt="Read time" />
              &nbsp;{blogPublishedDate || '10 Min Read'}
            </span>
          </div>
          <div className="readmore">
            <Link to={`/blog/${blogID}`}>Read More</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostFour;


// import React from 'react';
// import { Link } from 'react-router-dom';

// function PostFour({ 
//   blogID, 
//   blogImage, 
//   blogTitle, 
//   blogCategory, 
//   blogAuthor, 
//   authorImg, 
//   blogPublishedDate 
// }) {
//   return (
//     <div className="blog__card__wide">
//       <div className="blog__card__wide__thumb">
//         <Link to={`/blog/${blogID}`}>
//           <img 
//             src={blogImage || `assets/images/pages/blog/r-1.webp`} 
//             height={240} 
//             width={240} 
//             alt={blogTitle} 
//           />
//         </Link>
//       </div>
//       <div className="blog__card__wide__content">
//         <div className="texonomy__category">
//           <Link to="#">{blogCategory || "Hotel Blog"}</Link>
//         </div>
//         <h6>
//           <Link to={`/blog/${blogID}`}>{blogTitle}</Link>
//         </h6>
//         <div className="author__meta">
//           <Link to="#">
//             <img 
//               src={`assets/images/author/${authorImg}`} 
//               height={40} 
//               width={40} 
//               alt={blogAuthor} 
//             /> 
//             {blogAuthor}
//           </Link>
//           <span>
//             <img src="assets/images/icon/clock.svg" alt="" /> 
//             {new Date(blogPublishedDate).toLocaleDateString('en-US', {
//               year: 'numeric',
//               month: 'long',
//               day: 'numeric'
//             })}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PostFour;