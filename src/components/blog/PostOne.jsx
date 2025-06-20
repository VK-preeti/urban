import React from 'react'
import { Link } from 'react-router-dom';

function PostOne(props) {
    const { blogID, blogImage, blogTitle, blogCategory, blogAuthor, authorImg, blogPublishedDate } = props;
    return (
        <div className="blog__item is__full">
            <div className="blog__item__thumb">
                <Link to={`/blog/${blogID}`}>
                    <img src={`/assets/images/index-3/blog/${blogImage}`} alt="" />
                </Link>
            </div>
            <div className="blog__item__meta">
                <Link to="#" className="blog__item__meta__cat">
                    {blogCategory ? blogCategory : "Urban Oasis Living"}
                </Link>
                <Link to={`/blog/${blogID}`} className="blog__item__meta__title">
                    <h5>{blogTitle ? blogTitle : 'Live Elegantly in Our Contemporary Suite for Apartment'}</h5>
                </Link>
                <div className="blog__item__meta__list">
                    <span className="blog__item__meta__list__item">
                        <img src="/assets/images/icon/calendar.svg" alt="" />
                        {blogPublishedDate ? blogPublishedDate : 'March 26, 2024'}
                    </span>
                    <span className="blog__item__meta__list__item">
                        <Link to="#">
                            <img src={`/assets/images/icon/${authorImg}`} alt="" />
                            {blogAuthor ? blogAuthor : 'Amin'}
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default PostOne