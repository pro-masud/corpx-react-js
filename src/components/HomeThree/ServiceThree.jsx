import subTitleIcon from "../../assets/img/icon/subTitleIcon.svg";
import serviceCardThumb2_1 from "../../assets/img/service/serviceCardThumb2_1.jpg";
import serviceCardThumb2_2 from "../../assets/img/service/serviceCardThumb2_2.jpg";

const ServiceThree = () => {
  return (
    <>
      <div className="service-section section-padding pb-0 fix">
        <div className="container">
          <div className="service-wrapper style2">
            <div className="row g-4">
              <div className="col-xl-6">
                <div
                  className="service-card style2 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="content">
                    <span className="card-subtitle">
                      <img src={subTitleIcon} alt="icon" />
                      Popular Services
                    </span>
                    <h4>
                      <a href="/service-details">
                        The Best Solution For Your Business
                      </a>
                    </h4>

                    <div
                      className="btn-wrapper wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <a className="theme-btn" href="/service-details">
                        Discover More
                        <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                  <div className="thumb">
                    <img src={serviceCardThumb2_1} alt="thumb" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div
                  className="service-card style2 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="content">
                    <div className="card-subtitle">
                      <img src={subTitleIcon} alt="icon" />
                      Popular Services
                    </div>
                    <h4>
                      <a href="/service-details">
                        Special Offer Worth Investing
                      </a>
                    </h4>

                    <div
                      className="btn-wrapper wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <a className="theme-btn" href="/service-details">
                        Discover more
                        <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                  <div className="thumb">
                    <img src={serviceCardThumb2_2} alt="thumb" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceThree;
