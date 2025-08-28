import React from 'react'
import brands from '../../data/brands'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

const Brands = ({mainClass= ''}) => {
  return (
    <div className={`brand-section section-padding ${mainClass}`}>
        <div className="brand-wrapper style1">
            <div className="container">
                <div className="brand-title">
                    <h6>1k + brands trust us</h6>
                </div>
                <div className="slider-area brandSliderOne">
                    <div className="swiper gt-slider">
                        <Swiper
                            slidesPerView={4}
                            loop={true}
                            >
                            {brands.map((logo, index) => (
                                <SwiperSlide key={index}>
                                    <div className="brand-logo-box">
                                        <Link to="#">
                                            <img className="original" src={logo.original} alt={`Brand Logo ${index + 1}`} />
                                            <img className="gray" src={logo.gray} alt={`Brand Logo ${index + 1}`} />
                                        </Link>
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