import React from 'react'

import SectionTitleTwo from '../utils/SectionTitleTwo'

const Blog = () => {
  return (
    <>
        <div className="blog-section">
            <div className="blog-container-wrapper style3 section-padding fix">
                <div className="container">
                    <div className="blog-wrapper style3">
                        {/* <div className="section-title text-center mx-auto">
                            <span className="subtitle wow fadeInUp"><img src="assets/img/icon/subTitleIcon.svg" alt="icon" />News & Blog</span>
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">Our Interesting Articles</h2>
                        </div> */}
                        <SectionTitleTwo title="Our Interesting Articles" subTitle="News & Blog" mainClass='text-center mx-auto' />
                        <div className="row g-4">
                            <div className="col-xl-4 col-md-6">
                                <div className="blog-card style4 wow fadeInUp" data-wow-delay=".3s">
                                    <div className="blog-thumb">
                                        <img src="assets/img/blog/blogThumb3_1.jpg" alt="thumb" />
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-meta">
                                            <div className="date"><img src="assets/img/icon/calendarIcon1_1.svg" alt="icon" />October 19, 2024</div>
                                            <div className="comment"><img src="assets/img/icon/commentIcon1_1.svg" alt="icon" />0 Comment</div>
                                        </div>
                                        <h4><a href="blog-details.html">Marketing in the Fast Lane Digital Prese...</a></h4>
                                        <div className="link-meta">
                                            <a href="blog-details.html">Read more <i className="fa-regular fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="blog-card style4 wow fadeInUp" data-wow-delay=".6s">
                                    <div className="blog-thumb">
                                        <img src="assets/img/blog/blogThumb3_2.jpg" alt="thumb" />
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-meta">
                                            <div className="date"><img src="assets/img/icon/calendarIcon1_1.svg" alt="icon" />October 19, 2024</div>
                                            <div className="comment"><img src="assets/img/icon/commentIcon1_1.svg" alt="icon" />0 Comment</div>
                                        </div>
                                        <h4><a href="blog-details.html">Redefining Strategies for Digital Engage...</a></h4>
                                        <div className="link-meta">
                                            <a href="blog-details.html">Read more <i className="fa-regular fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="blog-card style4 wow fadeInUp" data-wow-delay=".9s">
                                    <div className="blog-thumb">
                                        <img src="assets/img/blog/blogThumb3_3.jpg" alt="thumb" />
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-meta">
                                            <div className="date"><img src="assets/img/icon/calendarIcon1_1.svg" alt="icon" />October 19, 2024</div>
                                            <div className="comment"><img src="assets/img/icon/commentIcon1_1.svg" alt="icon" />0 Comment</div>
                                        </div>
                                        <h4><a href="blog-details.html">From Conversions to Maximizing Present</a></h4>
                                        <div className="link-meta">
                                            <a href="blog-details.html">Read more <i className="fa-regular fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Blog