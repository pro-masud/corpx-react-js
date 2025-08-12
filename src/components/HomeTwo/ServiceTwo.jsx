import { Link } from "react-router-dom";
import serviceRight from "../../assets/img/shape/service-light.png";
import SectionTitle from "../utils/SectionTitle";
import serviceItem from "../../data/service";

const ServiceTwo = () => {
  return (
    <>
        <section className="service-section section-padding fix">
            <div className="light-shape">
                <img src={serviceRight} alt="img" />
            </div>
            <div className="container">
                <div className="service-wrapper style2">
                    <div className="row g-4">
                        <div className="col-xl-5 col-lg-6">
                            <div className="service-content">
                                <SectionTitle title="Innovative Business Solution" subTitle="Popular Services" desc="There are many variations of passages of Lom
                                        Ipsum available, but the majority have suffered alteration in form, by injected
                                        humor, or randomized words which" />

                                <div className="btn-wrapper wow fadeInUp" data-wow-delay="0.3s">
                                    <Link className="theme-btn" to="/service-details"> View All Services <i
                                    className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6">
                            <div className="service-links">
                                {serviceItem.map((singleServiceItem, index) => 
                                    <div key={index} className="link-box">
                                        <Link to={singleServiceItem.buttonURL}>
                                            <div className="text">{singleServiceItem.title}</div>
                                            <div className="icon"><i className="fa-regular fa-arrow-up-right"></i></div>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ServiceTwo