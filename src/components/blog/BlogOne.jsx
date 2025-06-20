import React from 'react'
import PostTwo from './PostTwo'
import posts from '../data/data-post.json'
import PostOne from './PostOne'

function BlogOne() {
    return (
        <>
            {/* blog style */}
            <div className="rts__section blog is__home__three section__padding">
                <div className="container">
                    <div className="row justify-content-center text-center mb-40">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="section__topbar">
                                <span className="h6 subtitle__icon__four mx-auto">Blog</span>
                                <h2 className="section__title mb-20">See Our Latest Blog</h2>
                                <span className="font-sm" />
                            </div>
                        </div>
                    </div>
                    {/* row end */}
                    <div className="row g-30">
                        <div className="col-lg-6">
                            {posts.map((data, index) => {
                                return (
                                    <div key={index}>
                                        {
                                            <PostOne
                                                blogCategory={data.category}
                                                blogID={data.id}
                                                blogImage={`${data.image}`}
                                                authorImg={`${data.authorImg}`}
                                                blogTitle={data.title}
                                                blogAuthor={data.author}
                                                blogPublishedDate={data.publishedDate}
                                            />
                                        }

                                    </div>
                                )
                            }).slice(0, 1)}
                        </div>
                        <div className="col-lg-6">
                            <div className="blog__small__list">
                                {posts.map((data, index) => {
                                    return (
                                        <div key={index}>
                                            {
                                                <PostTwo
                                                    blogCategory={data.category}
                                                    blogID={data.id}
                                                    blogImage={`${data.image}`}
                                                    authorImg={`${data.authorImg}`}
                                                    blogTitle={data.title}
                                                    blogAuthor={data.author}
                                                    blogPublishedDate={data.publishedDate}
                                                />
                                            }

                                        </div>
                                    )
                                }).slice(1, 4)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* blog style end */}
        </>

    )
}

export default BlogOne