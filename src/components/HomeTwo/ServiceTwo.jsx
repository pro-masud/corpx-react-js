import { Link } from "react-router-dom";
import serviceRight from "../../assets/img/shape/service-light.png";
import SectionTitle from "../utils/SectionTitle";
import serviceItem from "../../data/service";

const ServiceTwo = () => {
  return (
    <>
        <section class="service-section section-padding fix">
            <div class="light-shape">
                <img src={serviceRight} alt="img" />
            </div>
            <div class="container">
                <div class="service-wrapper style2">
                    <div class="row g-4">
                        <div class="col-xl-5 col-lg-6">
                            <div class="service-content">
                                <SectionTitle title="Innovative Business Solution" subTitle="Popular Services" desc="There are many variations of passages of Lom
                                        Ipsum available, but the majority have suffered alteration in form, by injected
                                        humor, or randomized words which" />

                                <div class="btn-wrapper wow fadeInUp" data-wow-delay="0.3s">
                                    <Link class="theme-btn" to="/service-details"> View All Services <i
                                    class="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-7 col-lg-6">
                            <div class="service-links">
                                {serviceItem.map((singleServiceItem, index) => 
                                    <div key={index} class="link-box">
                                        <a href={singleServiceItem.buttonURL}>
                                            <div class="text">{singleServiceItem.title}</div>
                                            <div class="icon"><i class="fa-regular fa-arrow-up-right"></i></div>
                                        </a>
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