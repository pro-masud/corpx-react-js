import React from 'react'
import SectionTitle from '../utils/SectionTitle'
import serviceItem from '../../data/service'

const Service = () => {
  return (
    <>
        <section class="service-section section-padding fix">
        <div class="service-container-wrapper style3">
            <div class="container">
                <div class="service-wrapper style3">
                    <div class="row g-4">
                        <div class="col-xl-5 col-lg-6">
                            <div class="service-content">
                                <SectionTitle title="We're Passionate About Helping Businesses" subTitle="Our Services" buttonText='Discover More' buttonURL='service-details' />
                            </div>
                        </div>
                        <div class="col-xl-7 col-lg-6">
                            <div class="service-cards-wrapper">
                                <div class="row gy-5 gx-60">
                                    {serviceItem.map((singleServiceItem, index) => 
                                        <div key={index} class="col-xl-6">
                                            <div class="service-card style3 wow fadeInUp" data-wow-delay=".3s">
                                                <div class="icon">
                                                    <img src={singleServiceItem.serviceIcon} alt="icon" />
                                                </div>
                                                <div class="content">
                                                    <h3 class="title"> <a href={singleServiceItem.buttonURL}>{singleServiceItem.title}</a> </h3> 
                                                    <p class="text">{singleServiceItem.descpriction}</p>
                                                    <div class="link">
                                                        <a href={singleServiceItem.buttonURL}>
                                                            {singleServiceItem.buttonText}
                                                            <i class="fa-solid fa-arrow-up-right"></i> 
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
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

export default Service