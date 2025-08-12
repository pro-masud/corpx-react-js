import React from 'react';
import { SingleItemCounter } from '../utils/Counter';
import aboutThumbOne from "../../assets/img/about/aboutThumb3_1.jpg";
import aboutThumbTwo from "../../assets/img/about/aboutThumb3_2.jpg";
import ThumbOne from "../../assets/img/about/aboutProfileThumb3_1.jpg";
import ThumbTwo from "../../assets/img/about/aboutProfileThumb3_2.jpg";
import ThumbThree from "../../assets/img/about/aboutProfileThumb3_3.jpg";
import ThumbFour from "../../assets/img/about/aboutProfileThumb3_4.jpg";
import SectionTitle from '../utils/SectionTitle';
import { Link } from 'react-router-dom';

const WhyChooseUs = () => {
  return (
    <section className="about-section section-padding fix">
      <div className="container">
        <div className="about-wrapper style3">
          <div className="row gy-5 gx-65 d-flex align-items-center">
            <div className="col-lg-6">
              <div className="about-thumb">
                <div className="thumb1">
                  <img src={aboutThumbOne} alt="thumb" className="wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.2s" />
                </div>
                <div className="thumb2">
                  <img src={aboutThumbTwo} alt="thumb" className="wow img-custom-anim-top" data-wow-duration="1.5s" data-wow-delay="0.4s" />
                </div>
                <div className="counter-box-card style3">
                  <div className="counter">
                    <SingleItemCounter value="25" tags='span' symble='+' />
                  </div>
                  <p className="text">Years Experience</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <SectionTitle title="corpx Ultimate Human Resource Solution" subTitle="Why Choose Us" desc='There are many variations of passages of Lopsum available,
                    but the majority have suffered alteration in form, by
                    busins injected humor, or randomized words which' />
                <div className="checklist-wrapper">
                  <ul className="checklist wow fadeInUp" data-wow-delay="0.3s">
                    <li>
                      <i className="fa-solid fa-check"></i> Innovative solutions
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i> Secure transactions
                    </li>
                  </ul>
                  <ul className="checklist wow fadeInUp" data-wow-delay="0.5s">
                    <li>
                      <i className="fa-solid fa-check"></i> User-friendly interface
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i> Real-time analytics
                    </li>
                  </ul>
                </div>
                <div className="contact-meta">
                  <div className="btn-wrapper wow fadeInUp" data-wow-delay="0.3s">
                    <Link className="theme-btn" href="/about">
                      Read More
                      <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                    </Link>
                  </div>
                  <div className="profile-meta-2 wow fadeInUp" data-wow-delay="0.5s" >
                    <div className="thumb">
                      <img src={ThumbOne} alt="thumb" />
                      <img src={ThumbTwo} alt="thumb" />
                      <img src={ThumbThree} alt="thumb" />
                      <img src={ThumbFour} alt="thumb" />
                    </div>
                    <h6>15k+ Active Customer</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
