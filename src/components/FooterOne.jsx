import React from 'react'
import logoOne from '../assets/img/logo/header-logo.svg'
import postOneImg from '../assets/img//footer/pp1.jpg'
import postTwoImg from '../assets/img//footer/pp2.jpg'

const FooterOne = () => {
  return (
    <>
      <footer className="footer-section">
        <div className="footer-widgets-wrapper footer-bg">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="single-footer-widget">
                            <div className="widget-head">
                                <a href="index.html">
                                    <img src={logoOne} alt="logo-img" />
                                </a>
                            </div>
                            <div className="footer-content">
                                <p>
                                    Phasellus ultricies aliquam volutpat 
                                    ullamcorper laoreet neque, a lacinia
                                    curabitur lacinia mollis
                                </p>
                                <div className="social-icon d-flex align-items-center">
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                    <a href="#"><i className="fa-brands fa-youtube"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".5s">
                        <div className="single-footer-widget">
                            <div className="widget-head">
                                <h3>Quick Links</h3>
                            </div>
                            <ul className="list-area">
                                <li>
                                    <a href="about.html">
                                        <i className="fa-solid fa-chevron-right"></i>
                                         About
                                    </a>
                                </li>
                                <li>
                                    <a href="service.html">
                                        <i className="fa-solid fa-chevron-right"></i>
                                        Our Services
                                    </a>
                                </li>
                                <li>
                                    <a href="blog.html">
                                        <i className="fa-solid fa-chevron-right"></i>
                                        Our Blogs
                                    </a>
                                </li>
                                <li>
                                    <a href="faq.html">
                                        <i className="fa-solid fa-chevron-right"></i>
                                        FAQ’S
                                    </a>
                                </li>
                                <li>
                                    <a href="contact.html">
                                        <i className="fa-solid fa-chevron-right"></i>
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                        <div className="single-footer-widget style-margin">
                            <div className="widget-head">
                                <h3>Recent Posts</h3>
                            </div>
                            <div className="recent-post-area">
                                <div className="recent-post-items">
                                    <div className="thumb">
                                        <img src={postOneImg} alt="post-img" />
                                    </div>
                                    <div className="content">
                                        <ul className="post-date">
                                            <li>
                                                <i className="fa-solid fa-calendar-days me-2"></i>
                                                20 Feb, 2025
                                            </li>
                                        </ul>
                                        <h6>
                                            <a href="blog-details.html">
                                                2025 Batterman Award<br /> honorsBrad Burkhart
                                            </a>
                                        </h6>
                                    </div>
                                </div>
                                <div className="recent-post-items mb-0">
                                    <div className="thumb">
                                        <img src={postTwoImg} alt="post-img" />
                                    </div>
                                    <div className="content">
                                        <ul className="post-date">
                                            <li>
                                                <i className="fa-solid fa-calendar-days me-2"></i>
                                                15 Dec, 2025
                                            </li>
                                        </ul>
                                        <h6>
                                            <a href="blog-details.html">
                                                2025 Batterman Award <br /> honorsBrad Burkhart
                                            </a>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp" data-wow-delay=".9s">
                        <div className="single-footer-widget">
                            <div className="widget-head">
                                <h3>Contact Us</h3>
                            </div>
                            <div className="footer-content">
                                <ul className="contact-info">
                                    <li>
                                        <i className="fas fa-map-marker-alt"></i>
                                        6391 Elgin St. Celina, USA
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-phone-volume"></i>
                                        <a href="tel:2086660112">+208-666-0112</a>
                                    </li>
                                    <li>
                                        <i className="fa-regular fa-envelope"></i>
                                        <a href="mailto:corpx.info@webmail.com">corpx.info@webmail.com</a>
                                    </li>
                                </ul>
                                <a href="contact.html" className="theme-btn hover-white mt-4">
                                    get A Quote
                                    <i className="fa-solid fa-arrow-right-long"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="container">
                <div className="footer-wrapper d-flex align-items-center justify-content-between">
                    <p className="wow fadeInLeft color-2" data-wow-delay=".3s">
                        © All Copyright 2025 by <a href="index.html">CorpX</a>
                    </p>
                    <ul className="footer-menu wow fadeInRight" data-wow-delay=".5s">
                        <li>
                            <a href="contact.html">
                                Terms & Condition
                            </a>
                        </li>
                        <li>
                            <a href="contact.html">
                                Privacy Policy
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </footer>
    </>
  )
}

export default FooterOne