import React from 'react'
import SectionTitleTwo from '../utils/SectionTitleTwo'
import popularPost from '../../data/popularpost'
import { Link } from 'react-router-dom'
import serviceShape1_1 from "../../assets/img/shape/serviceShape1_1.png";

const PopularPost = () => {
  return (
    <>
        <section className="service-section section-padding section-bg fix">
            <div className="service-container-wrapper style1">
                <div className="shape"><img src={serviceShape1_1} alt="shape" /></div>
                <div className="container">
                    <SectionTitleTwo title="The Best Solution For Your Business." subTitle="Popular Services" mainClass='maxw-470 text-center mx-auto' />
                    <div className="service-wrapper style1">
                        <div className="row g-4">
                            {popularPost.map((singlePost, index) => (
                                <div key={index} className="col-xl-4 col-md-6">
                                    <div className="service-card style1 wow fadeInUp" data-tilt data-tilt-max="15"
                                        data-wow-delay="0.2s">
                                        <div className="thumb"><img src={singlePost.image} alt="thumb" />
                                        </div>
                                        <div className="content">
                                            <h4><Link to={singlePost.links}>{singlePost.title}</Link></h4>
                                            <p className="text">{singlePost.description}</p>
                                            <div className="icon"> <i className={singlePost.icon}></i> </div>
                                        </div>
                                        <div className="link-meta">
                                            <Link to={singlePost.links}>Read more</Link>
                                            <Link to={singlePost.links}><i className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default PopularPost