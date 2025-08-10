import React from 'react'
import brands from '../../data/brands'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const Brands = () => {
  return (
    <div className="brand-section section-padding pt-0 fix">
        <div className="brand-wrapper style1">
            <div className="container">
                <div className="brand-title">
                    <h6>1k + brands trust us</h6>
                </div>
                <div className="slider-area brandSliderOne">
                    <div className="swiper gt-slider" id="BrandSliderTwo" data-slider-options='{"loop": true,"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":2},"768":{"slidesPerView":2},"992":{"slidesPerView":3},"1200":{"slidesPerView":4}}}'>
                        <Swiper
                            slidesPerView={4}
                            loop={true}
                            >
                            {brands.map((logo, index) => (
                                <SwiperSlide key={index}>
                                    <div className="brand-logo-box">
                                        <a href="#">
                                            <img className="original" src={logo.original} alt={`Brand Logo ${index + 1}`} />
                                            <img className="gray" src={logo.gray} alt={`Brand Logo ${index + 1}`} />
                                        </a>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper >
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Brands