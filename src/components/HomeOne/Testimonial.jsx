import React from 'react'
import SectionTitleTwo from '../utils/SectionTitleTwo'
import FeatureImage from "../../assets/img/testimonial/testimonialThumb3_1.jpg";
import testimonial from '../../data/testimonial';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Testimonial = () => {
  return (
    <section className="testimonial-section bg-color1 fix">
      <div className="container">
        <div className="testimonial-wrapper style3">
          <div className="row g-5">
            <div className="col-xl-5 col-lg-6">
              <div className="testimonial-thumb">
                <div className="thumb">
                  <img src={FeatureImage} alt="thumb" className="wow img-custom-anim-left" />
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="slider-area testimonialSliderThree section-padding fix">
                {/* <div className="section-title text-left mxw-412">
                  <span className="subtitle wow fadeInUp">
                    <img src="assets/img/icon/subTitleIcon.svg" alt="icon" />Testimonial
                  </span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    What They’re Talking About Agency?
                  </h2>
                </div> */}
                <SectionTitleTwo title=" What They’re Talking About Agency?" subTitle="Testimonial" mainClass='text-left mxw-412' />
                <Swiper
                  modules={[Navigation]}
                  navigation={{
                    nextEl: '.slider-next',
                    prevEl: '.slider-prev',
                  }}
                  loop={true}
                  breakpoints={{
                    0: { slidesPerView: 1 },
                    1200: { slidesPerView: 2 },
                  }}
                >
                  {testimonial.map((singleTestimonial, index) => (
                    <SwiperSlide key={index}>
                      <div className="testimonial-card style3">
                        <div className="testimonial-header">
                          <div className="profile">
                            <div className="thumb">
                              <img src={singleTestimonial.thumb} alt={singleTestimonial.name} />
                            </div>
                            <div className="content">
                              <div className="name">{singleTestimonial.name}</div>
                              <div className="designation">{singleTestimonial.designation}</div>
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-content">
                          <p className="text">{singleTestimonial.text}</p>
                          <div className="icon-wrapper">
                            <div className="star">
                              {[...Array(singleTestimonial.rating)].map((_, starIndex) => (
                                <i key={starIndex} className="fa-sharp fa-solid fa-star"></i>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="arrow-btn text-end wow fadeInUp" data-wow-delay=".4s">
                  <button className="slider-arrow slider-prev">
                    <i className="fa-sharp fa-regular fa-arrow-left-long"></i>
                  </button>
                  <button className="slider-arrow slider-next">
                    <i className="fa-regular fa-arrow-right-long"></i>
                  </button>
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
