import { Link } from "react-router-dom";
import wcu from "../../assets/img/wcu/bg.jpg";
import wcuThumb2_1 from "../../assets/img/wcu/wcuThumb2_1.jpg";
import Circle from "../../assets/img/wcu/circle.png";
import SectionTitle from "../utils/SectionTitle";
import { SingleItemCounter } from "../utils/Counter";

const WhyChooseUsTwo = () => {
  return (
    <>
        <section className="wcu-section">
            <div className="wcu-container-wrapper style2 fix bg-cover" style={{ backgroundImage: `url(${wcu})` }}>
                <div className="container">
                    <div className="wcu-wrapper style2">
                        <div className="row gy-5 gx-95">
                            <div className="col-xl-7 col-lg-6">
                                <div className="wcu-content">
                                    <SectionTitle title="Where Imagination Take Center Stage Design" subTitle="Choose Us" mainclassName=" " colorclassName="text-white" />
                                    <div className="service-links-wrapper">
                                        <div className="btn-wrapper wow fadeInUp" data-wow-delay="0.3s">
                                            <Link className="theme-btn" to="/service">Business <i
                                                    className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                                        </div>

                                        <div className="btn-wrapper wow fadeInUp" data-wow-delay="0.3s">
                                            <Link className="theme-btn" to="/service"> Consultancy <i
                                                    className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                                        </div>

                                        <div className="btn-wrapper wow fadeInUp" data-wow-delay="0.3s">
                                            <Link className="theme-btn" to="/service"> Marketing <i
                                                    className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                                        </div>
                                    </div>

                                    <div className="about-service-meta wow fadeInUp" data-wow-delay=".6s">
                                        <div className="meta-box">
                                            <div className="counter">
                                                <SingleItemCounter value={20.5} tags="span" symble="K" />
                                            </div>
                                            <p className="text">Projects Done</p>
                                        </div>
                                        <div className="meta-box">
                                            <div className="counter">
                                                <SingleItemCounter value={100.5} tags="span" symble="K" />
                                            </div>
                                            <p className="text">Happy Clients</p>
                                        </div>
                                        <div className="meta-box">
                                            <div className="counter">
                                                <SingleItemCounter value={150.5} tags="span" symble="K" />
                                            </div>
                                            <p className="text">Team Members</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6">
                                <div className="wcu-thumb">
                                    <img src={wcuThumb2_1} alt="thumb" className="wow img-custom-anim-right" />
                                    <div className="content-box">
                                        <div className="">
                                            <Link to="/about" className="video-btn video-popup">
                                                <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                                                <img src={Circle} alt="img" />
                                            </Link>
                                        </div>
                                        <p>
                                            We are dedicated to guiding you on your financial journey with expertise and the personal approach.
                                        </p>
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

export default WhyChooseUsTwo