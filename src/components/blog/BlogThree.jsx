// import React, { useState } from 'react'
// import PostFour from './PostFour'
// import { Link } from 'react-router-dom';
// import posts from '../data/data-post.json'

// function BlogThree() {
//     const [visiblePosts, setVisiblePosts] = useState(4); // Initially show 6 posts
//     const postsPerLoad = 1; // Number of posts to load each time

//     const handleLoadMore = () => {
//         setVisiblePosts((prev) => prev + postsPerLoad);
//     };
//     return (
//         <>
//             {/* blog */}
//             <div className="rts__section section__padding">
//                 <div className="container">
//                     <div className="row g-30 sticky-wrap">
//                         <div className="col-lg-7 col-xl-8">
//                             <div className="blog__list__item ">
//                                 {posts.slice(0, visiblePosts).map((data, index) => (
//                                     <div key={index}>
//                                         <PostFour
//                                             blogCategory={data.category}
//                                             blogID={data.id}
//                                             blogImage={`${data.image}`}
//                                             authorImg={`${data.authorImg}`}
//                                             blogTitle={data.title}
//                                             blogAuthor={data.author}
//                                             blogPublishedDate={data.publishedDate}
//                                         />
//                                     </div>
//                                 ))}
//                                 {visiblePosts < posts.length && ( // Show "Load More" button only if there are more posts
//                                     <div className="load__more__link">
//                                         <Link to="#" onClick={handleLoadMore}>Load More</Link>
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                         <div className="col-xl-4 col-lg-5 sticky-item">
//                             <div className="blog__sidebar__section sticky-item">
//                                 <h6 className="mb-3">Search</h6>
//                                 <form action="#" className="search__form">
//                                     <input type="text" name="search" placeholder="Search" />
//                                     <i className="flaticon-search-1" />
//                                 </form>
//                                 <h6 className="mb-4">category</h6>
//                                 <div className="search__item__list">
//                                     <div className="d-flex align-items-center justify-content-between list">
//                                         <div className="d-flex gap-2 align-items-center checkbox is__small">
//                                             <input type="checkbox" name="web" id="web" />
//                                             <label htmlFor="web">Adventure Stays</label>
//                                         </div>
//                                         <span>(130)</span>
//                                     </div>
//                                     <div className="d-flex align-items-center justify-content-between list">
//                                         <div className="d-flex gap-2 align-items-center checkbox  is__small">
//                                             <input type="checkbox" name="design" id="design" />
//                                             <label htmlFor="design">Wellness &amp; Relaxation</label>
//                                         </div>
//                                         <span>(80)</span>
//                                     </div>
//                                     <div className="d-flex align-items-center justify-content-between list">
//                                         <div className="d-flex gap-2 align-items-center checkbox is__small">
//                                             <input type="checkbox" name="ux" id="ux" />
//                                             <label htmlFor="ux">Cultural Stays</label>
//                                         </div>
//                                         <span>(45)</span>
//                                     </div>
//                                     <div className="d-flex align-items-center justify-content-between list">
//                                         <div className="d-flex gap-2 align-items-center checkbox is__small">
//                                             <input type="checkbox" name="dev" id="dev" />
//                                             <label htmlFor="dev">Historic Hotels</label>
//                                         </div>
//                                         <span>(100)</span>
//                                     </div>
//                                     <div className="d-flex align-items-center justify-content-between list">
//                                         <div className="d-flex gap-2 align-items-center checkbox is__small">
//                                             <input type="checkbox" name="business" id="business" />
//                                             <label htmlFor="business">Pet-Friendly Hotels</label>
//                                         </div>
//                                         <span>(80)</span>
//                                     </div>
//                                 </div>
//                                 <h6 className="mb-4">Latest Post</h6>
//                                 <div className="latest__post mb-30">
//                                     <div className="single__post">
//                                         <div className="single__post__thumb">
//                                             <Link to="/blog/1">
//                                                 <img
//                                                     src="assets/images/pages/blog/r-1.webp"
//                                                     height={106}
//                                                     width={110}
//                                                     alt=""
//                                                 />
//                                             </Link>
//                                         </div>
//                                         <div className="single__post__meta">
//                                             <Link to="#" className="font-sm">
//                                                 Top 10 Reasons Guests Love Staying at Bokinn
//                                             </Link>
//                                             <span>
//                                                 <img src="assets/images/icon/clock.svg" alt="" /> 10 Min
//                                                 Read
//                                             </span>
//                                         </div>
//                                     </div>
//                                     <div className="single__post">
//                                         <div className="single__post__thumb">
//                                             <Link to="/blog/1">
//                                                 <img
//                                                     src="assets/images/pages/blog/r-2.webp"
//                                                     height={106}
//                                                     width={110}
//                                                     alt=""
//                                                 />
//                                             </Link>
//                                         </div>
//                                         <div className="single__post__meta">
//                                             <Link to="#" className="font-sm">
//                                                 Top 10 Reasons Guests Love Staying at Bokinn
//                                             </Link>
//                                             <span>
//                                                 <img src="assets/images/icon/clock.svg" alt="" /> 10 Min
//                                                 Read
//                                             </span>
//                                         </div>
//                                     </div>
//                                     <div className="single__post">
//                                         <div className="single__post__thumb">
//                                             <Link to="/blog/1">
//                                                 <img
//                                                     src="assets/images/pages/blog/r-3.webp"
//                                                     height={106}
//                                                     width={110}
//                                                     alt=""
//                                                 />
//                                             </Link>
//                                         </div>
//                                         <div className="single__post__meta">
//                                             <Link to="#" className="font-sm">
//                                                 Top 10 Reasons Guests Love Staying at Bokinn
//                                             </Link>
//                                             <span>
//                                                 <img src="assets/images/icon/clock.svg" alt="" /> 10 Min
//                                                 Read
//                                             </span>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <h6 className="mb-4">Tags</h6>
//                                 <div className="tag__list">
//                                     <div className="tags__list">
//                                         <Link to="#">Hotel Stay</Link>
//                                         <Link to="#">Travel Blog</Link>
//                                         <Link to="#">Guest Experience</Link>
//                                         <Link to="#"> Hotel Guide</Link>
//                                         <Link to="#">Hotel Review</Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* blog end */}
//         </>

//     )
// }

// export default BlogThree
 
 
import React, { useEffect, useState } from 'react';
import PostFour from './PostFour';
import { Link, useNavigate } from 'react-router-dom';
import { getBlog } from '../../api/getBlog';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function BlogThree() {
  const [posts, setPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(4);
  const [loading, setLoading] = useState(true);
 const [categories, setCategories] = useState([]); // Will hold { name, count }

  const postsPerLoad = 1;
  const navigate = useNavigate();

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

        // Count blogs per category
        const categoryMap = {};
        parsed.forEach(blog => {
          const cat = blog.blog_category?.trim();
          if (cat) {
            categoryMap[cat] = (categoryMap[cat] || 0) + 1;
          }
        });

        const categoryArray = Object.entries(categoryMap).map(([name, count]) => ({
          name,
          count
        }));

        setCategories(categoryArray);
      } else {
        console.warn("Unexpected blog API response:", data);
      }
    })
    .catch((err) => {
      console.error("Error fetching blog data:", err);
    })
    .finally(() => setLoading(false));
}, []);


  const handleLoadMore = () => {
    setVisiblePosts((prev) => prev + postsPerLoad);
  };

  const handlePostClick = (blogID) => {
    navigate(`/blog/${blogID}`);
  };

  return (
    <div className="rts__section section__padding">
      <div className="container">
        <div className="row g-30 sticky-wrap">
          <div className="col-lg-7 col-xl-8">
            <div className="blog__list__item">
              {loading ? (
                <Skeleton count={4} height={200} />
              ) : (
                posts.slice(0, visiblePosts).map((data, index) => (
                  <div key={index} onClick={() => handlePostClick(data.slug)} style={{ cursor: 'pointer' }}>
                    <PostFour
                      blogID={data.slug}
                      blogImage={data.blog_images?.[0]} // first image
                      blogTitle={data.title}
                      blogCategory={data.blog_category}
                      blogAuthor={data.created_by}
                      authorImg="user-1.webp"
                      blogPublishedDate={data.blog_date}
                    />
                  </div>
                ))
              )}
              {!loading && visiblePosts < posts.length && (
                <div className="load__more__link">
                  <Link to="#" onClick={handleLoadMore}>Load More</Link>
                </div>
              )}
            </div>
          </div>

          <div className="col-xl-4 col-lg-5 sticky-item">
            <div className="blog__sidebar__section sticky-item">
              {/* <h6 className="mb-3">Search</h6>
              <form action="#" className="search__form">
                <input type="text" placeholder="Search" />
                <i className="flaticon-search-1" />
              </form> */}
              <h6 className="mb-4">Category</h6>
            <div className="search__item__list">
              {categories.map((cat, i) => (
                <div key={i} className="d-flex align-items-center justify-content-between list">
                  <div className="d-flex gap-2 align-items-center">
                    <label>{cat.name}</label>
                  </div>
                  <span>({cat.count})</span>
                </div>
              ))}
            </div>


              <h6 className="mb-4">Latest Post</h6>
              <div className="latest__post mb-30">
                {posts.slice(0, 3).map((post, index) => (
                  <div key={index} className="single__post" onClick={() => handlePostClick(post.slug)} style={{ cursor: 'pointer' }}>
                    <div className="single__post__thumb">
                      <img 
                        src={post.blog_images?.[0] || `assets/images/pages/blog/r-${index + 1}.webp`} 
                        height={106} 
                        width={110} 
                        alt={post.title} 
                      />
                    </div>
                    <div className="single__post__meta">
                      <span className="font-sm">
                        {post.title || "Top 10 Reasons Guests Love Staying at Bokinn"}
                      </span>
                      <span>
                        <img src="assets/images/icon/clock.svg" alt="" /> 10 Min Read
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* <h6 className="mb-4">Tags</h6>
              <div className="tag__list">
                <div className="tags__list">
                  {["Hotel Stay", "Travel Blog", "Guest Experience", "Hotel Guide", "Hotel Review"].map((tag, i) => (
                    <Link key={i} to="#">{tag}</Link>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogThree;