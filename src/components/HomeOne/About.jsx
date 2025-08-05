import AboutFeatureImage from "../../assets/img/about/01.jpg";
import AboutThumbnailImage from "../../assets/img/about/02.jpg";
import IconOne from "../../assets/img/icon/04.svg";
import IconTwo from "../../assets/img/icon/05.svg";
import ClientThumbnail from "../../assets/img/about/aboutProfileThumb1_1.jpg";
import SectionTitle from "../utils/SectionTitle";

const About = () => {
  return (
    <>
        <section class="about-section-3 fix section-padding section-bg">
            <div class="container">
                <div class="about-wrapper-3">
                    <div class="row g-4">
                        <div class="col-lg-6">
                            <div class="about-image">
                                <img src={AboutFeatureImage} alt="img" class="wow img-custom-anim-left" />
                                <div class="about-image-2">
                                    <img src={AboutThumbnailImage} alt="img" class="wow img-custom-anim-right" data-wow-duration="1.5s" data-wow-delay="0.4s" />
                                </div>
                                <div class="counter-box">
                                    <h2> <span class="counter-number">25</span>k+</h2>
                                    <p>Years experience</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="about-content">
                                <div class="section-title">
                                    <SectionTitle title="Creating A Business With Integrity" subTitle="About Us" desc="There are many variations of passages of Lom Ipsum available, but the majority have suffered alteration in form, by injected humor, or randomized words which" />
                                </div>
                                <div class="icon-items-area wow fadeInUp" data-wow-delay=".3s">
                                    <div class="icon-items">
                                        <div class="icon">
                                            <img src={IconOne} alt="img" />
                                        </div>
                                        <h5>Marketing <br /> Automation </h5>
                                    </div>
                                    <div class="icon-items">
                                        <div class="icon">
                                            <img src={IconTwo} alt="img" />
                                        </div>
                                        <h5>Research and <br /> Strategy </h5>
                                    </div>
                                </div>
                                <p class="wow fadeInUp" data-wow-delay=".3s">
                                    There are many variations of passages of Lom Ipsum available, but the majority have suffered alteration in form,
                                </p>
                                <div class="contact-meta">
                                    <div class="btn-wrapper wow fadeInUp" data-wow-delay="0.3s">
                                        <a class="theme-btn" href="about"> Read More <i class="fa-sharp fa-regular fa-arrow-up-right"></i></a>
                                    </div>
                                    <div class="profile-meta wow fadeInUp" data-wow-delay="0.5s">
                                        <div class="thumb"><img src={ClientThumbnail} alt="thumb" /></div>
                                        <div class="content">
                                            <div class="name">Marvin donald</div>
                                            <div class="designation">CEO &amp; founder</div>
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