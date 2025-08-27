import React from 'react'

const HeroThree = () => {
  return (
    <>
        <section class="hero-section hero-1 fix">
            <div class="hero-social">
                <a href="index.html" class="hero-logo">
                    <img src="assets/img/logo/logo.svg" alt="img" />
                </a>
                <ul class="social-list">
                    <li>
                        <a href="#">Facebook</a>
                        <a href="#">LinkedIn</a>
                        <a href="#">Instagram</a>
                    </li>
                </ul>
            </div>
            <div class="container-fluid">
                <div class="row g-4">
                    <div class="col-lg-6">
                        <div class="hero-content">
                            <h1 class="wow fadeInUp" data-wow-delay=".3s">Bringing your vision to life with <span>innovative design</span></h1>
                            <div class="arrow-icon">
                                <img src="assets/img/hero/arrow.png" alt="img" />
                            </div>
                            <div class="hero-counter-items">
                                <div class="counter-box">
                                    <h2><span class="counter-number">4.98</span></h2>
                                    <div class="content">
                                        <div class="star">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-regular fa-star"></i>
                                        </div>
                                        <p>Best rated agency</p>
                                    </div>
                                </div>
                                <div class="counter-box">
                                    <h2><span class="counter-number">98</span>+</h2>
                                    <div class="content">
                                        <p>
                                            Genuine repeated
                                        </p>
                                        <p> happy customers.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="hero-image">
                            <img src="assets/img/hero/01.jpg" alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default HeroThree