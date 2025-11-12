import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import testimonialThumb1_1 from "../../assets/img/testimonial/testimonialThumb1_1.jpg";
import testimonialThumb1_2 from "../../assets/img/testimonial/testimonialThumb1_2.jpg";
import testimonialThumb1_3 from "../../assets/img/testimonial/testimonialThumb1_3.jpg";
import testimonialThumb1_4 from "../../assets/img/testimonial/testimonialThumb1_4.jpg";
import testimonialthree from "../../data/testimonialthree";
import SectionTitleTwo from "../utils/SectionTitleTwo";

const TestimonialThree = () => {
  return (
    <>
      <section className="testimonial-section-1 fix">
        <div className="container">
          <div className="testimonial-wrapper style1 margin-minus-bottom">
            <div className="row g-4">
              <div className="col-xl-5 col-md-6">
                <div className="testimonial-content">
                  <SectionTitleTwo
                    title="What They’re Talking About Agency?"
                    subTitle="Testimonial"
                    mainClass="mb-0"
                  />
                  <div className="profile-rating">
                    <div className="logo">
                      <i className="fa-sharp fa-solid fa-star"></i> Trustipilot
                    </div>
                    <div className="rating-area">
                      <div className="profile-thumbs">
                        <img src={testimonialThumb1_1} alt="thumb" />
                        <img src={testimonialThumb1_2} alt="thumb" />
                        <img src={testimonialThumb1_3} alt="thumb" />
                        <img src={testimonialThumb1_4} alt="thumb" />
                      </div>
                      <div className="rating">
                        <div className="star">
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star"></i>
                        </div>
                        <p className="text">450+ reviews</p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="arrow-btn text-end wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <button
                      data-slider-prev="#testimonialSliderOne"
                      className="slider-arrow slider-prev"
                    >
                      <i className="fa-sharp fa-regular fa-arrow-left-long"></i>
                    </button>
                    <button
                      data-slider-next="#testimonialSliderOne"
                      className="slider-arrow slider-next"
                    >
                      <i className="fa-regular fa-arrow-right-long"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-xl-7 col-md-6">
                <div class="slider-area testimonialSliderOne">
                  <Swiper
                    modules={[Navigation]}
                    navigation={{
                      nextEl: ".slider-next",
                      prevEl: ".slider-prev",
                    }}
                    loop={true}
                    spaceBetween={35}
                    breakpoints={{
                      0: { slidesPerView: 1 },
                      1200: { slidesPerView: 2 },
                    }}
                  >
                    {" "}
                    {testimonialthree.map((singleTestimonial, index) => (
                      <SwiperSlide>
                        <div className="swiper-slide" key={index}>
                          <div className="testimonial-card style1">
                            <div className="testimonial-content">
                              <div className="icon-wrapper">
                                <div className="star">
                                  {[...Array(singleTestimonial.rating)].map(
                                    (_, starIndex) => (
                                      <i
                                        key={starIndex}
                                        className="fa-sharp fa-solid fa-star"
                                      ></i>
                                    )
                                  )}
                                </div>
                                <div className="quote-icon">
                                  <img
                                    src={singleTestimonial.icon}
                                    alt={singleTestimonial.name}
                                  />
                                </div>
                              </div>
                              <p className="text">{singleTestimonial.text}</p>
                              <div className="shape">
                                <img
                                  src={singleTestimonial.shape}
                                  alt={singleTestimonial.name}
                                />
                              </div>
                            </div>
                            <div
                              className="profile-meta wow fadeInUp"
                              data-wow-delay="0.5s"
                            >
                              <div className="thumb">
                                <img
                                  src={singleTestimonial.thumb}
                                  alt={singleTestimonial.name}
                                />
                              </div>
                              <div className="content">
                                <div className="name">
                                  {singleTestimonial.name}
                                </div>
                                <div className="designation">
                                  {singleTestimonial.designation}
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
      </section>
    </>
  );
};

export default TestimonialThree;
