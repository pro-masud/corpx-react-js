import React from 'react'
import SectionTitle from '../utils/SectionTitle'

const TestimonialTwo = () => {
  return (
    <>
        <section class="testimonial-section section-padding fix" data-bg-src="assets/img/bg/testimonialBg2_1.jpg">
            <div class="container">
                <div class="testimonial-wrapper style2">
                    <div class="row g-4 align-items-center">
                        <div class="col-xl-5 col-lg-6">
                            <div class="testimonial-content">
                                <SectionTitle title="What They’re Talking About Agency?" subTitle="Testimonial" mainClass='text-left' desc="There are many variations of passages of Lom Ipsum available, but the
                                    majority have suffered alteration in form, by injected humor, or randomized words which" />

                                <div class="arrow-btn text-end wow fadeInUp" data-wow-delay=".3s">
                                    <button data-slider-prev="#testimonialSliderTwo" class="slider-arrow slider-prev"><i
                                            class="fa-sharp fa-regular fa-arrow-left-long"></i></button>
                                    <button data-slider-next="#testimonialSliderTwo" class="slider-arrow slider-next"><i
                                            class="fa-regular fa-arrow-right-long"></i></button>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6">
                            <div class="slider-area testimonialSliderTwo">
                                <div class="swiper gt-slider" id="testimonialSliderTwo"
                                    data-slider-options='{"loop": true,"autoplay": false,"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":1},"768":{"slidesPerView":2},"992":{"slidesPerView":1},"1200":{"slidesPerView":2}}}'>
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <div class="testimonial-card style2">
                                                <div class="testimonial-header">
                                                    <div class="profile">
                                                        <div class="name">Esther Howard</div>
                                                        <div class="designation">Nursing Assistant</div>
                                                    </div>
                                                    <div class="quote-icon"><img src="assets/img/icon/QuoteIcon1_1.svg"
                                                            alt="icon"/></div>
                                                </div>
                                                <div class="testimonial-content">
                                                    <p class="text">Consectetur adipiscing elit. Integer nunc viverra
                                                        laoreet est the is porta pretium metus aliquam eget maecenas porta
                                                        is nunc viverra Aenean</p>


                                                    <div class="icon-wrapper">
                                                        <div class="star">
                                                            <i class="fa-sharp fa-solid fa-star"></i>
                                                            <i class="fa-sharp fa-solid fa-star"></i>
                                                            <i class="fa-sharp fa-solid fa-star"></i>
                                                            <i class="fa-sharp fa-solid fa-star"></i>
                                                            <i class="fa-sharp fa-solid fa-star"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="testimonial-card style2">
                                                <div class="testimonial-header">
                                                    <div class="profile">
                                                        <div class="name">Masirul Islam</div>
                                                        <div class="designation">Manager Assistant</div>
                                                    </div>
                                                    <div class="quote-icon"><img src="assets/img/icon/QuoteIcon1_1.svg"
                                                            alt="icon"/></div>
                                                </div>
                                                <div class="testimonial-content">
                                                    <p class="text">Consectetur adipiscing elit. Integer nunc viverra
                                                        laoreet est the is porta pretium metus aliquam eget maecenas porta
                                                        is nunc viverra Aenean</p>


                                                    <div class="icon-wrapper">
                                                        <div class="star">
                                                            <i class="fa-sharp fa-solid fa-star"></i>
                                                            <i class="fa-sharp fa-solid fa-star"></i>
                                                            <i class="fa-sharp fa-solid fa-star"></i>
                                                            <i class="fa-sharp fa-solid fa-star"></i>
                                                            <i class="fa-sharp fa-solid fa-star"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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