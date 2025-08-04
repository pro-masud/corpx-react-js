import heroBg1 from "../../assets/img/bg/heroBg3_1.jpg";
import heroBg2 from "../../assets/img/bg/heroBg3_2.jpg";
import heroBg3 from "../../assets/img/bg/heroBg3_3.jpg";
import bottomThumbnail from "../../assets/img/intro/introBottomThumb3_1.jpg";
import Shape from "../../assets/img/icon/hero3ArrowIcon.svg";

const Hero = () => {
  return (
    <>
        <section className="intro-section fix">
            <div className="swiper hero-slider-3">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="intro-container-wrapper style3">
                            <div className="slider-image bg-cover"  style={{ backgroundImage: `url(${heroBg1})` }}></div>
                            <div className="container-fluid">
                                <div className="intro-wrapper style3">
                                    <div className="intro-content">
                                        <h1 data-animation="fadeInUp" data-delay="1.3s">Innovative The Future With Cutting Edge <span>technology.</span> </h1>
                                        <img src={Shape} alt="icon" data-animation="fadeInUp" data-delay="1.4s" />
                                        <span className="big-text" data-animation="fadeInUp" data-delay="1.4s">SOLUTIONS</span>
                
                                        <div className="intro-bottom">
                                            <div className="row">
                                                <div className="col-xl-6">
                
                                                </div>
                                                <div className="col-xl-6">
                                                    <div className="intro-bottom-content-box">
                                                        <div className="intro-bottom-content">
                                                            <div className="box-wrapper">
                                                                <div className="bottom-box">
                                                                    <p className="text"> Your business now with our best experts </p> 
                                                                </div>
                                                                <div className="bottom-box">
                                                                    <p className="text2">  Curabitur facibus tellus nisi, vel vulputsus lorem aliquam et. Nunc nec </p> 
                                                                </div>
                                                            </div>
                                                            <div className="bottom-thumb">
                                                                <img src={bottomThumbnail} alt="thumb" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="intro-container-wrapper style3">
                            <div className="slider-image bg-cover"  style={{ backgroundImage: `url(${heroBg2})` }}></div>
                            <div className="container-fluid">
                                <div className="intro-wrapper style3">
                                    <div className="intro-content">
                                        <h1 data-animation="fadeInUp" data-delay="1.3s">Innovative The Future With Cutting Edge <span>technology.</span> </h1>
                                        <img src={Shape} alt="icon" data-animation="fadeInUp" data-delay="1.4s" />
                                        <span className="big-text" data-animation="fadeInUp" data-delay="1.4s">SOLUTIONS</span>
                
                                        <div className="intro-bottom">
                                            <div className="row">
                                                <div className="col-xl-6">
                
                                                </div>
                                                <div className="col-xl-6">
                                                    <div className="intro-bottom-content-box">
                                                        <div className="intro-bottom-content">
                                                            <div className="box-wrapper">
                                                                <div className="bottom-box">
                                                                    <p className="text"> Your business now with our best experts </p> 
                                                                </div>
                                                                <div className="bottom-box">
                                                                    <p className="text2">  Curabitur facibus tellus nisi, vel vulputsus lorem aliquam et. Nunc nec </p> 
                                                                </div>
                                                            </div>
                                                            <div className="bottom-thumb">
                                                                <img src={bottomThumbnail} alt="thumb" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="intro-container-wrapper style3">
                            <div className="slider-image bg-cover"  style={{ backgroundImage: `url(${heroBg3})` }}></div>
                            <div className="container-fluid">
                                <div className="intro-wrapper style3">
                                    <div className="intro-content">
                                        <h1 data-animation="fadeInUp" data-delay="1.3s">Innovative The Future With Cutting Edge <span>technology.</span> </h1>
                                        <img src={Shape} alt="icon" data-animation="fadeInUp" data-delay="1.4s" />
                                        <span className="big-text" data-animation="fadeInUp" data-delay="1.4s">SOLUTIONS</span>
                
                                        <div className="intro-bottom">
                                            <div className="row">
                                                <div className="col-xl-6">
                
                                                </div>
                                                <div className="col-xl-6">
                                                    <div className="intro-bottom-content-box">
                                                        <div className="intro-bottom-content">
                                                            <div className="box-wrapper">
                                                                <div className="bottom-box">
                                                                    <p className="text"> Your business now with our best experts </p> 
                                                                </div>
                                                                <div className="bottom-box">
                                                                    <p className="text2">  Curabitur facibus tellus nisi, vel vulputsus lorem aliquam et. Nunc nec </p> 
                                                                </div>
                                                            </div>
                                                            <div className="bottom-thumb">
                                                                <img src={bottomThumbnail} alt="thumb" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="array-button">
                <button className="array-prevs">Previews</button>
                <button className="array-nexts">Next</button>
            </div>
        </section>
    </>
  )
}

export default Hero