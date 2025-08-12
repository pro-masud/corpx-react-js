import React from 'react'

import SectionTitleTwo from '../utils/SectionTitleTwo'
import blogs from '../../data/blog'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <>
        <div className="blog-section">
            <div className="blog-container-wrapper style3 section-padding fix">
                <div className="container">
                    <div className="blog-wrapper style3">
                        <SectionTitleTwo title="Our Interesting Articles" subTitle="News & Blog" mainClass='text-center mx-auto' />
                        <div className="row g-4">
                            {blogs.map((singleBlog, index) => (
                                <div key={index} className="col-xl-4 col-md-6">
                                    <div className="blog-card style4 wow fadeInUp" data-wow-delay=".3s">
                                        <div className="blog-thumb">
                                            <img src={singleBlog.thumb} alt="thumb" />
                                        </div>
                                        <div className="blog-content">
                                            <div className="blog-meta">
                                                <div className="date"><img src={singleBlog.dateIcon} alt="icon" />{singleBlog.date}</div>
                                                <div className="comment"><img src={singleBlog.commentIcon} alt="icon" />{singleBlog.comments}</div>
                                            </div>
                                            <h4><Link to={singleBlog.link}>{singleBlog.title} </Link></h4>
                                            <div className="link-meta">
                                                <Link to={singleBlog.link}>Read more <i className="fa-regular fa-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Blog