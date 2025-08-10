import React from 'react'
import SectionTitleTwo from '../utils/SectionTitleTwo'
import FeatureImage from "../../assets/img/testimonial/testimonialThumb3_1.jpg";
import { SwiperSlide } from 'swiper/react';
import testimonial from '../../data/testimonial';

const Testimonial = () => {
  return (
        <section className="testimonial-section bg-color1 fix">
        <div className="container">
            <div className="testimonial-wrapper style3">
                <div className="row g-5">
                    <div className="col-xl-5 col-lg-6">
                        <div className="testimonial-thumb">
                            <div className="thumb">
                                <img src="assets/img/testimonial/testimonialThumb3_1.jpg" alt="thumb" className="wow img-custom-anim-left" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-6">
                        <div className="slider-area testimonialSliderThree section-padding fix">
                            <div className="section-title text-left mxw-412">
                                <span className="subtitle wow fadeInUp"><img
                                        src="assets/img/icon/subTitleIcon.svg" alt="icon" />Testimonial</span>
                                <h2 className="wow fadeInUp" data-wow-delay=".3s">What They’re Talking About Agency?</h2>
                            </div>

                            <div className="swiper gt-slider" id="testimonialSliderThree"
                                data-slider-options='{"loop": true,"autoplay": false,"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":1},"768":{"slidesPerView":1},"992":{"slidesPerView":1},"1200":{"slidesPerView":2}}}'>
                                <div className="swiper-wrapper">
                                    {testimonial.map((singleTestimonial, index) => (
                                        <div className="swiper-slide" key={index}>
                                            <div className="testimonial-card style3">
                                                <div className="testimonial-header">
                                                <div className="profile">
                                                    <div className="thumb">
                                                    <img
                                                        src={singleTestimonial.thumb}
                                                        alt={singleTestimonial.name}
                                                    />
                                                    </div>
                                                    <div className="content">
                                                    <div className="name">{singleTestimonial.name}</div>
                                                    <div className="designation">
                                                        {singleTestimonial.designation}
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                                <div className="testimonial-content">
                                                <p className="text">{singleTestimonial.text}</p>
                                                <div className="icon-wrapper">
                                                    <div className="star">
                                                    {[...Array(singleTestimonial.rating)].map((_, starIndex) => (
                                                        <i
                                                        key={starIndex}
                                                        className="fa-sharp fa-solid fa-star"
                                                        ></i>
                                                    ))}
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="arrow-btn text-end wow fadeInUp" data-wow-delay=".4s">
                                    <button data-slider-prev="#testimonialSliderThree"
                                        className="slider-arrow slider-prev"><i
                                            className="fa-sharp fa-regular fa-arrow-left-long"></i></button>
                                    <button data-slider-next="#testimonialSliderThree"
                                        className="slider-arrow slider-next"><i
                                            className="fa-regular fa-arrow-right-long"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonial