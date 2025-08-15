import React from 'react'
import SectionTitle from '../utils/SectionTitle'
import testimonial from '../../data/testimonial'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import testimonialBg2_1 from "../../assets/img/bg/testimonialBg2_1.jpg";


const TestimonialTwo = () => {
  return (
    <>
        <section className="testimonial-section section-padding fix" style={{ backgroundImage: `url(${testimonialBg2_1})` }}>
            <div className="container">
                <div className="testimonial-wrapper style2">
                    <div className="row g-4 align-items-center">
                        <div className="col-xl-5 col-lg-6">
                            <div className="testimonial-content">
                                <SectionTitle title="What They’re Talking About Agency?" subTitle="Testimonial" mainClass='text-left' desc="There are many variations of passages of Lom Ipsum available, but the
                                    majority have suffered alteration in form, by injected humor, or randomized words which" />

                                <div className="arrow-btn text-end wow fadeInUp" data-wow-delay=".3s">
                                    <button data-slider-prev="#testimonialSliderTwo" className="slider-arrow slider-prev"><i
                                            className="fa-sharp fa-regular fa-arrow-left-long"></i></button>
                                    <button data-slider-next="#testimonialSliderTwo" className="slider-arrow slider-next"><i
                                            className="fa-regular fa-arrow-right-long"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="slider-area testimonialSliderTwo">
                                <div className="swiper gt-slider" id="testimonialSliderTwo" data-slider-options='{"loop": true,"autoplay": false,"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":1},"768":{"slidesPerView":2},"992":{"slidesPerView":1},"1200":{"slidesPerView":2}}}'>
                                     <Swiper
                                        modules={[Navigation]}
                                        navigation={{
                                            nextEl: '.slider-next',
                                            prevEl: '.slider-prev',
                                        }}
                                        loop={true}
                                        spaceBetween={25}
                                        breakpoints={{
                                            0: { slidesPerView: 1 },
                                            1200: { slidesPerView: 2 },
                                        }}
                                        >
                                        {testimonial.map((singleTestimonial, index) => (
                                            <SwiperSlide key={index}>
                                                <div className="swiper-slide">
                                                    <div className="testimonial-card style2">
                                                        <div className="testimonial-header">
                                                            <div className="profile">
                                                                <div className="name">{singleTestimonial.name}</div>
                                                                <div className="designation">{singleTestimonial.designation}</div>
                                                            </div>
                                                            <div className="quote-icon">
                                                                <img src={singleTestimonial.icon} alt="icon"/>
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
                                                </div>
                                            </SwiperSlide>
                                         ))}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default TestimonialTwo