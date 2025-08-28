import subTitleIcon from "../../assets/img/icon/subTitleIcon.svg";
import serviceCardThumb2_1 from "../../assets/img/service/serviceCardThumb2_1.jpg";
import serviceCardThumb2_2 from "../../assets/img/service/serviceCardThumb2_2.jpg";

const ServiceThree = () => {
  return (
    <>
        <div class="service-section section-padding pb-0 fix">
            <div class="container">
                <div class="service-wrapper style2">
                    <div class="row g-4">
                        <div class="col-xl-6">
                            <div class="service-card style2 wow fadeInUp" data-wow-delay=".3s">
                                <div class="content">
                                    <span class="card-subtitle"><img src={subTitleIcon} alt="icon" />Popular Services</span>
                                    <h4><a href="/service-details">The Best Solution For Your Business</a></h4>

                                    <div class="btn-wrapper wow fadeInUp" data-wow-delay="0.3s">
                                        <a class="theme-btn" href="/service-details">
                                            Discover More 
                                            <i class="fa-sharp fa-regular fa-arrow-up-right"></i>
                                        </a>
                                    </div>
                                </div>
                                <div class="thumb">
                                    <img src={serviceCardThumb2_1} alt="thumb" />
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <div class="service-card style2 wow fadeInUp" data-wow-delay=".5s">
                                <div class="content">
                                    <div class="card-subtitle"><img src={subTitleIcon} alt="icon" />Popular Services</div>
                                    <h4><a href="/service-details">Special Offer Worth Investing</a></h4>

                                    <div class="btn-wrapper wow fadeInUp" data-wow-delay="0.3s">
                                        <a class="theme-btn" href="/service-details">
                                            Discover more 
                                            <i class="fa-sharp fa-regular fa-arrow-up-right"></i>
                                        </a>
                                    </div>
                                </div>
                                <div class="thumb">
                                    <img src={serviceCardThumb2_2} alt="thumb" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ServiceThree