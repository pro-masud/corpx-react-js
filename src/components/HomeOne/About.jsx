import AboutFeatureImage from "../../assets/img/about/01.jpg";
import AboutThumbnailImage from "../../assets/img/about/02.jpg";
import IconOne from "../../assets/img/icon/04.svg";
import IconTwo from "../../assets/img/icon/05.svg";
import ClientThumbnail from "../../assets/img/about/aboutProfileThumb1_1.jpg";
import SectionTitle from "../utils/SectionTitle";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
        <section className="about-section-3 fix section-padding section-bg">
            <div className="container">
                <div className="about-wrapper-3">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="about-image">
                                <img src={AboutFeatureImage} alt="img" className="wow img-custom-anim-left" />
                                <div className="about-image-2">
                                    <img src={AboutThumbnailImage} alt="img" className="wow img-custom-anim-right" data-wow-duration="1.5s" data-wow-delay="0.4s" />
                                </div>
                                <div className="counter-box">
                                    <h2> <span className="counter-number">25</span>k+</h2>
                                    <p>Years experience</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <div className="section-title">
                                    <SectionTitle title="Creating A Business With Integrity" subTitle="About Us" desc="There are many variations of passages of Lom Ipsum available, but the majority have suffered alteration in form, by injected humor, or randomized words which" />
                                </div>
                                <div className="icon-items-area wow fadeInUp" data-wow-delay=".3s">
                                    <div className="icon-items">
                                        <div className="icon">
                                            <img src={IconOne} alt="img" />
                                        </div>
                                        <h5>Marketing <br /> Automation </h5>
                                    </div>
                                    <div className="icon-items">
                                        <div className="icon">
                                            <img src={IconTwo} alt="img" />
                                        </div>
                                        <h5>Research and <br /> Strategy </h5>
                                    </div>
                                </div>
                                <p className="wow fadeInUp" data-wow-delay=".3s">
                                    There are many variations of passages of Lom Ipsum available, but the majority have suffered alteration in form,
                                </p>
                                <div className="contact-meta">
                                    <div className="btn-wrapper wow fadeInUp" data-wow-delay="0.3s">
                                        <Link className="theme-btn" to="/about"> Read More <i className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                                    </div>
                                    <div className="profile-meta wow fadeInUp" data-wow-delay="0.5s">
                                        <div className="thumb"><img src={ClientThumbnail} alt="thumb" /></div>
                                        <div className="content">
                                            <div className="name">Marvin donald</div>
                                            <div className="designation">CEO &amp; founder</div>
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

export default About