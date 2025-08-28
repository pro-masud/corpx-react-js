import React from 'react'
import { SingleCounter } from '../utils/Counter'
import aboutShape1_1 from "../../assets/img/shape/aboutShape1_1.png";
import aboutThumb1_1 from "../../assets/img/about/aboutThumb1_1.jpg";
import aboutThumb1_2 from "../../assets/img/about/aboutThumb1_2.jpg";
import aboutProfileThumb1_1 from "../../assets/img/about/aboutProfileThumb1_1.jpg";
import SectionTitleTwo from '../utils/SectionTitleTwo';
import { Link } from 'react-router-dom';

const AboutThree = () => {
  return (
    <>
        <section className="about-section section-padding fix">
            <div className="container">
                <div className="about-wrapper style1">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="about-thumb">
                                <div className="thumb1 img-custom-anim-left wow" data-wow-duration="1.5s" data-wow-delay="0.3s"><img src={aboutThumb1_1} alt="thumb" /></div>
                                <div className="thumb2 img-custom-anim-top wow" data-wow-duration="1.5s" data-wow-delay="0.5s"><img src={aboutThumb1_2} alt="thumb" /></div>
                                <div className="shape"><img src={aboutShape1_1} alt="shape" /></div>
                                <div className="counter-box">
                                    <h2><SingleCounter value="25" />k+</h2>
                                    <p>Years Experience</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                 <SectionTitleTwo title="Strong Organization For Corporate Operations." subTitle="About Our Company" mainClass='mb-0' desc="There are many variations of passages of
                                        Lorem Ipsum available, but the majority have suffered alteration in some form, by
                                        injected humor, or randomized words which don't look even slightly believable." />
                                <div className="checklist-wrapper">
                                    <ul className="checklist wow fadeInUp" data-wow-delay="0.3s">
                                        <li><i className="fa-solid fa-check"></i> Innovative solutions</li>
                                        <li><i className="fa-solid fa-check"></i> Secure transactions</li>
                                    </ul>
                                    <ul className="checklist wow fadeInUp" data-wow-delay="0.5s">
                                        <li><i className="fa-solid fa-check"></i> User-friendly interface</li>
                                        <li><i className="fa-solid fa-check"></i> Real-time analytics</li>
                                    </ul>
                                </div>

                                <div className="contact-meta">
                                    <div className="btn-wrapper wow fadeInUp" data-wow-delay="0.3s">
                                        <Link className="theme-btn" to="/about"> Discover more <i
                                                className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                                    </div>
                                    <div className="profile-meta wow fadeInUp" data-wow-delay="0.5s">
                                        <div className="thumb"><img src={aboutProfileThumb1_1} alt="thumb" />
                                        </div>
                                        <div className="content">
                                            <div className="name">Marvin donald</div>
                                            <div className="designation">CEO & founder</div>
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

export default AboutThree