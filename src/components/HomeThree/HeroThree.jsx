import sideLogo from "../../assets/img/logo/logo.svg";
import arrowImage from "../../assets/img/hero/arrow.png";
import featureImage from "../../assets/img/hero/01.jpg";
import { SingleCounter } from "../utils/Counter";

const HeroThree = () => {
  return (
    <>
        <section className="hero-section hero-1 fix">
            <div className="hero-social">
                <a href="index.html" className="hero-logo">
                    <img src={sideLogo} alt="img" />
                </a>
                <ul className="social-list">
                    <li>
                        <a href="#">Facebook</a>
                        <a href="#">LinkedIn</a>
                        <a href="#">Instagram</a>
                    </li>
                </ul>
            </div>
            <div className="container-fluid">
                <div className="row g-4">
                    <div className="col-lg-6">
                        <div className="hero-content">
                            <h1 className="wow fadeInUp" data-wow-delay=".3s">Bringing your vision to life with <span>innovative design</span></h1>
                            <div className="arrow-icon">
                                <img src={arrowImage} alt="img" />
                            </div>
                            <div className="hero-counter-items">
                                <div className="counter-box">
                                    <h2><SingleCounter value="4.98" /></h2>
                                    <div className="content">
                                        <div className="star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-regular fa-star"></i>
                                        </div>
                                        <p>Best rated agency</p>
                                    </div>
                                </div>
                                <div className="counter-box">
                                    <h2><SingleCounter value="98" />+</h2>
                                    <div className="content">
                                        <p>
                                            Genuine repeated
                                        </p>
                                        <p> happy customers.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="hero-image">
                            <img src={featureImage} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default HeroThree