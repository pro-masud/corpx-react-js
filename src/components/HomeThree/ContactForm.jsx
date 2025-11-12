import SectionTitle from "../utils/SectionTitle";

const ContactForm = () => {
  return (
    <>
      <div className="contact-form-section section-padding fix">
        <div className="contact-form-container-wrapper style1">
          <div className="container-fluid">
            <div className="contact-title-wrapper pb-425 section-bg2 section-padding border-radius">
              <div className="container">
                <div className="row">
                  <div className="col-xl-7">
                    <SectionTitle
                      title="Feel Free To Contact Us"
                      colorClass="text-white"
                      subTitle="Contact Us"
                      mainClass="mb-60 text-left"
                    />
                  </div>
                  <div className="col-xl-5">
                    <div
                      className="title-content wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <p className="text-white">
                        The a long established fact that a reader will be
                        distracted the readable content of page when looking at
                        layout the point of using lorem Ipsum Pellentesque ut
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="contact-form-wrapper style1 mt-n368">
              <div className="row gx-60 gy-5">
                <div className="col-xl-7">
                  <div
                    className="contact-form style1 wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <h2>Get in Touch</h2>
                    <form className="row" action="#">
                      <div className="col-md-6">
                        <input type="text" placeholder="Full Name" />
                      </div>
                      <div className="col-md-6">
                        <input type="email" placeholder="Email Address" />
                      </div>
                      <div className="col-md-6">
                        <input type="number" placeholder="Phone Number" />
                      </div>
                      <div className="col-md-6">
                        <select
                          name="orderby"
                          className="single-select"
                          aria-label="Shop order"
                          defaultValue="subject"
                        >
                          <option value="subject">Subject</option>
                          <option value="complain">Complain</option>
                          <option value="greetings">Greetings</option>
                          <option value="date">Expire Date</option>
                          <option value="price">About Price</option>
                          <option value="order">About order</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <textarea
                          id="message"
                          className="form-control"
                          placeholder="Write your message here..."
                          rows="5"
                        ></textarea>
                      </div>
                      <div className="col-12 form-group">
                        <input
                          id="reviewcheck"
                          name="reviewcheck"
                          type="checkbox"
                        />
                        <label htmlFor="reviewcheck">
                          Collaboratively formulate principle capital.
                          Progressively evolve user
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <div className="col-12 form-group mb-0">
                        <button className="theme-btn w-100">
                          Submit Now
                          <i className="fa-sharp fa-regular fa-arrow-right-long bg-transparent text-white"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-xl-5">
                  <div
                    className="contact-map style2 wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57559.095682562875!2d88.60522403504653!3d25.623402815510502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fb529bc7fc909b%3A0xd8f861ed9baf24de!2sDinajpur!5e0!3m2!1sen!2sbd!4v1726510328428!5m2!1sen!2sbd"
                      style={{ width: "100%", height: "587px" }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>

                    <div className="contact-info-wrapper style2">
                      <h2>Contact Info</h2>
                      <div className="shape-left">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="29"
                          height="39"
                          viewBox="0 0 29 39"
                          fill="none"
                        >
                          <path d="M0 0L29 39V0H0Z" fill="#1E292E" />
                        </svg>
                      </div>
                      <div className="shape-right">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="29"
                          height="39"
                          viewBox="0 0 29 39"
                          fill="none"
                        >
                          <path d="M29 0L0 39V0H29Z" fill="#1E292E" />
                        </svg>
                      </div>
                      <div className="contact-info style2">
                        <div className="icon">
                          <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <div className="content">
                          <h3>
                            Gregory Cartwright, 4059 <br /> Carling Avenue,
                            Ugglebarnby
                          </h3>
                        </div>
                      </div>
                      <div className="contact-info style2">
                        <div className="icon">
                          <i className="fa-regular fa-phone"></i>
                        </div>
                        <div className="content">
                          <h3>
                            <a href="tel:61086660112">+6108-666-0112</a>
                          </h3>
                        </div>
                      </div>
                      <div className="contact-info style2 border-none">
                        <div className="icon">
                          <i className="fa-regular fa-envelope"></i>
                        </div>
                        <div className="content">
                          <h3>
                            <a href="mailto:corpx.info@webmail.com">
                              corpx.info@webmail.com
                            </a>
                          </h3>
                        </div>
                      </div>
                    </div>
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

export default ContactForm;
