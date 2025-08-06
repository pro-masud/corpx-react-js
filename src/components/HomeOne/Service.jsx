import React from 'react'
import SectionTitle from '../utils/SectionTitle'
import serviceItem from '../../data/service'

const Service = () => {
  return (
    <>
        <section className="service-section section-padding fix">
        <div className="service-container-wrapper style3">
            <div className="container">
                <div className="service-wrapper style3">
                    <div className="row g-4">
                        <div className="col-xl-5 col-lg-6">
                            <div className="service-content">
                                <SectionTitle title="We're Passionate About Helping Businesses" subTitle="Our Services" buttonText='Discover More' buttonURL='service-details' />
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6">
                            <div className="service-cards-wrapper">
                                <div className="row gy-5 gx-60">
                                    {serviceItem.map((singleServiceItem, index) => 
                                        <div key={index} className="col-xl-6">
                                            <div className="service-card style3 wow fadeInUp" data-wow-delay=".3s">
                                                <div className="icon">
                                                    <img src={singleServiceItem.serviceIcon} alt="icon" />
                                                </div>
                                                <div className="content">
                                                    <h3 className="title"> <a href={singleServiceItem.buttonURL}>{singleServiceItem.title}</a> </h3> 
                                                    <p className="text">{singleServiceItem.descpriction}</p>
                                                    <div className="link">
                                                        <a href={singleServiceItem.buttonURL}>
                                                            {singleServiceItem.buttonText}
                                                            <i className="fa-solid fa-arrow-up-right"></i> 
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