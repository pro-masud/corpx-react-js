import aboutBackground from "../../assets/img/about/bg.jpg";
import aboutThumbnal from "../../assets/img/about/aboutThumb2_1.jpg";
import aboutShape2_1 from "../../assets/img/shape/aboutShape2_1.png";
import iconOne from "../../assets/img/icon/aboutIcon1_1.svg";
import SectionTitle from "../utils/SectionTitle";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import latestProject from "../../data/latestProject";
import 'swiper/css';
import "swiper/css/effect-fade";
import { Autoplay, Pagination } from "swiper/modules";

const AboutTwo = () => {
  return (
    <>
      <section className="about-section fix bg-cover" style={{ backgroundImage: `url(${aboutBackground})` }}>
        <div className="container">
            <div className="about-wrapper style2">
                <div className="row g-4">
                    <div className="col-xxl-5 col-xl-6">
                        <div className="about-thumb">
                            <img src={aboutThumbnal} alt="thumb" className="wow img-custom-anim-left" />
                        </div>
                    </div>
                    <div className="col-xxl-7 col-xl-6">
                        <div className="about-content">
                            <div className="shape"><img src={aboutShape2_1} alt="shape"/></div>
                            <SectionTitle title="We're Passionate About Helping Businesses" subTitle="About Our Company" desc="There are many variations of passages of Lom Ipsum available, but the majority have suffered alteration in form, by injected humor, or randomized words which " />
                            <div className="about-fancy-box style1 wow fadeInUp" data-wow-delay=".3s">
                                <div className="icon"><img src={iconOne} alt="icon"/></div>
                                <div className="content">
                                    <div className="title">Expert Consultant</div>
                                    <div className="desc">There are many variations of passages of Lom Ipsum available, but
                                        the majority have suffered</div>
                                </div>
                            </div>

                            <div className="about-fancy-box style1 mb-0 pb-0 border-0 wow fadeInUp" data-wow-delay=".6s">
                                <div className="icon"><img src={iconOne}  alt="icon"/></div>
                                <div className="content">
                                    <div className="title">Expert Consultant</div>
                                    <div className="desc">There are many variations of passages of Lom Ipsum available, but
                                        the majority have suffered</div>
                                </div>
                            </div>
                            <div className="btn-wrapper wow fadeInUp" data-wow-delay="0.3s">
                                <Link className="theme-btn" to="/service"> 
                                    View All Services 
                                    <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="project-section project-bg-white section-padding fix">
            <div className="project-container-wrapper style2">
                <div className="container">
                    <div className="project-wrapper style2">
                        {/* <div className="section-title text-center">
                            <div className="subtitle text-white wow fadeInUp"><img
                                    src="assets/img/icon/subTitleIconWhite.svg" alt="icon"/>Our Latest Work </div>
                            <h2 className="wow text-white wow fadeInUp" data-wow-delay=".3s">Explore Our Projects</h2>
                        </div> */}
                        <SectionTitle title="Explore Our Projects" subTitle="Our Latest Work" mainClass="text-center" colorClass="text-white" />
                        <div className="row">
                            <div className="slider-area projectSliderTwo">
                                <div className="swiper gt-slider">
                                    <Swiper
                                      slidesPerView={2}
                                      loop={true}
                                      autoplay={{
                                        delay: 2000,
                                        disableOnInteraction: false,
                                      }}
                                      effect="fade" // fade effect
                                      fadeEffect={{ crossFade: true }}
                                      speed={1500}
                                      breakpoints={{
                                        0: { slidesPerView: 1 },
                                        576: { slidesPerView: 1 },
                                        768: { slidesPerView: 1 },
                                        992: { slidesPerView: 2 },
                                        1200: { slidesPerView: 2 }
                                      }}
                                      spaceBetween={30}
                                      modules={[Autoplay, Pagination]}
                                    >
                                      {latestProject.map((project, index) => (
                                        <SwiperSlide>
                                          <div key={index} className="project-card style2">
                                            <div className="project-thumb">
                                              <img src={project.image} alt={project.title} />
                                            </div>
                                            <div className="project-content">
                                              <div className="tag">{project.tag}</div>
                                              <h4 className="project-title">
                                                <a href={`/${project.link}`}>{project.title}</a>
                                              </h4>
                                            </div>
                                            <div className="icon">
                                              <a href={`/${project.link}`}>
                                                <i className="fa-regular fa-arrow-up-right"></i>
                                              </a>
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
        </div>
      </section>
    </>
  )
}

export default AboutTwo