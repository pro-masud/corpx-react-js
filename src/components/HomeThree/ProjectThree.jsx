import React from 'react'
import SectionTitleTwo from '../utils/SectionTitleTwo'
import projectThree from '../../data/projectThree'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import "swiper/css/effect-fade";
import { Link } from 'react-router-dom';

const ProjectThree = () => {
  return (
    <>
        <section className="project-section section-padding fix">
            <div className="container">
                <div className="project-wrapper style1">
                    <SectionTitleTwo title="The Best Solution For Your Business." subTitle="Case Studies" mainClass='maxw-470 text-center mx-auto' />
                    <div className="slider-area projectSliderOne">
                        <div className="swiper gt-slider">
                            <Swiper
                                loop={true}
                                 autoplay={{
                                    delay: 3500,
                                    disableOnInteraction: false,
                                }}
                                spaceBetween={25}
                                slidesPerView={4}
                                effect="fade"
                                modules={[Autoplay, Navigation]}
                                breakpoints={{
                                    0: { slidesPerView: 1 },
                                    575: { slidesPerView: 2 },
                                    768: { slidesPerView: 2 },
                                    992: { slidesPerView: 2 },
                                    1200: { slidesPerView: 3 },
                                }}
                                >
                                {projectThree.map((singleProject, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="swiper-slide">
                                            <div className={`project-card ${singleProject.classes}`}>
                                                <div className="thumb">
                                                    <img src={singleProject.image} alt="thumb" />
                                                </div>
                                                <div className="project-content">
                                                    <div className="content">
                                                        <div className="tag">{singleProject.tag}</div>
                                                        <h4><Link to={singleProject.link}>{singleProject.title}</Link></h4>
                                                    </div>
                                                    <div className="link-meta">
                                                        <Link to={singleProject.link}>
                                                            <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                                                        </Link>
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
        </section>
    </>
  )
}

export default ProjectThree