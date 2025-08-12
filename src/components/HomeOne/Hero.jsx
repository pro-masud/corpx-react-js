import heroBg1 from "../../assets/img/bg/heroBg3_1.jpg";
import bottomThumbnail from "../../assets/img/intro/introBottomThumb3_1.jpg";
import Shape from "../../assets/img/icon/hero3ArrowIcon.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import HeroSide from "../../data/hero";
import { useEffect, useRef } from "react";

const Hero = () => {

  const runAnimations = () => {
    const currentSlide = swiperRef.current?.el?.querySelector(".swiper-slide-active");
    if (!currentSlide) return;

    const animatedElements = currentSlide.querySelectorAll("[data-animation]");
    animatedElements.forEach((el) => {
      const anim = el.getAttribute("data-animation");
      const delay = el.getAttribute("data-delay") || "0s";
      const duration = el.getAttribute("data-duration") || "0.7s";

      el.style.animationDelay = delay;
      el.style.animationDuration = duration;
      el.classList.add("animated", anim);

      const handleAnimationEnd = () => {
        el.classList.remove("animated", anim);
        el.removeEventListener("animationend", handleAnimationEnd);
      };

      el.addEventListener("animationend", handleAnimationEnd);
    });
  };

   const swiperRef = useRef(null);

    useEffect(() => {
        if(swiperRef.current) {
            swiperRef.current.swiper.params.navigation.prevEl = ".array-prevs";
            swiperRef.current.swiper.params.navigation.nextEl = ".array-nexts";
            swiperRef.current.swiper.navigation.init();
            swiperRef.current.swiper.navigation.update();
        }
    }, []);

  return (
    <section className="intro-section fix">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={{
            prevEl: '.array-prevs',
            nextEl: '.array-nexts'
        }}
        onSlideChangeTransitionEnd={runAnimations}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {HeroSide.map((singleService, index) => (
          <SwiperSlide key={index}>
             <div className="intro-container-wrapper style3">
                <div className="slider-image bg-cover" style={{ backgroundImage: `url(${heroBg1})` }}></div>
                <div className="container-fluid">
                    <div className="intro-wrapper style3">
                        <div className="intro-content">
                            <h1 data-animation="fadeInUp" data-delay="1.3s">Innovative The Future With Cutting Edge <span>technology.</span></h1>
                            <img src={Shape} alt="icon" data-animation="fadeInUp" data-delay="1.4s" />
                            <span className="big-text" data-animation="fadeInUp" data-delay="1.4s">SOLUTIONS</span>
                            <div className="intro-bottom">
                                <div className="row">
                                    <div className="col-xl-6"></div>
                                    <div className="col-xl-6">
                                        <div className="intro-bottom-content-box">
                                            <div className="intro-bottom-content">
                                                <div className="box-wrapper">
                                                    <div className="bottom-box">
                                                        <p className="text">
                                                            Your business now with our best experts
                                                        </p>
                                                    </div>
                                                    <div className="bottom-box">
                                                        <p className="text2">
                                                            Curabitur facibus tellus nisi, vel vulputsus lorem aliquam et.
                                                        </p>
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
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="array-button">
        <button className="array-prevs">Previous</button>
        <button className="array-nexts">Next</button>
      </div>
    </section>
  );
};

export default Hero;
