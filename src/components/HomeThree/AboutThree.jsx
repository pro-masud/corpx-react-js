import React from 'react'
import { SingleCounter } from '../utils/Counter'

const AboutThree = () => {
  return (
    <>
        <section className="about-section section-padding fix">
            <div className="container">
                <div className="about-wrapper style1">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="about-thumb">
                                <div className="thumb1 img-custom-anim-left wow" data-wow-duration="1.5s" data-wow-delay="0.3s"><img src="assets/img/about/aboutThumb1_1.jpg" alt="thumb" /></div>
                                <div className="thumb2 img-custom-anim-top wow" data-wow-duration="1.5s" data-wow-delay="0.5s"><img src="assets/img/about/aboutThumb1_2.jpg" alt="thumb" /></div>
                                <div className="shape"><img src="assets/img/shape/aboutShape1_1.png" alt="shape" /></div>
                                <div className="counter-box">
                                    <h2><SingleCounter value="25" />k+</h2>
                                    <p>Years Experience</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <div className="section-title">
                                    <span className="subtitle wow"><img
                                            src="assets/img/icon/subTitleIcon.svg" alt="icon" />About Our Company</span>
                                    <h2 className="splt-txt wow fadeInUp" data-wow-delay=".3s">Strong Organization For Corporate Operations.
                                    </h2>
                                    <p className="text wow fadeInUp" data-wow-delay=".5s">There are many variations of passages of
                                        Lorem Ipsum available, but the majority have suffered alteration in some form, by
                                        injected humor, or randomized words which don't look even slightly believable.</p>
                                </div>

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
                                        <a className="theme-btn" href="about.html"> Discover more <i
                                                className="fa-sharp fa-regular fa-arrow-up-right"></i></a>
                                    </div>
                                    <div className="profile-meta wow fadeInUp" data-wow-delay="0.5s">
                                        <div className="thumb"><img src="assets/img/about/aboutProfileThumb1_1.jpg" alt="thumb" />
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