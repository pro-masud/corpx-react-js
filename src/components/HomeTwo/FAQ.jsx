import React from 'react'
import SectionTitleTwo from '../utils/SectionTitleTwo'
import faqThumb2_1 from "../../assets/img/faq/faqThumb2_1.jpg";
import faqThumb2_2 from "../../assets/img/faq/faqThumb2_2.png";

const FAQ = () => {
  return (
    <>
        <section className="faq-section">
            <div className="faq-container-wrapper style2 section-padding pb-0">
                <div className="container">
                    <div className="faq-wrapper style2">
                        <div className="row g-4">
                            <div className="col-xl-5 col-lg-6">
                                <div className="faq-thumb-wrapper">
                                    <div className="thumb1"> <img src={faqThumb2_1} alt="thumb" className="wow img-custom-anim-left" /> </div>
                                    <div className="thumb2"> <img src={faqThumb2_2} alt="thumb" className="wow img-custom-anim-top" data-wow-duration="1.5s" data-wow-delay="0.3s" /> </div>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-6">
                                <div className="faq-content">
                                    <SectionTitleTwo title="Get Every Single Answer From Here" subTitle="Faqs" mainClass='text-left' />
                                    <div className="accordion wow fadeInUp" data-wow-delay=".3s" id="accordionExample">
                                        <div className="er-accordion-item">
                                            <h2 className="er-accordion-header">
                                                <button className="er-accordion-button" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseOne" aria-expanded="true"
                                                    aria-controls="collapseOne">
                                                    What my product from the competition?
                                                    <span><i className="fas fa-angle-down"></i></span>
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="er-accordion-collapse collapse show"
                                                data-bs-parent="#accordionExample">
                                                <div className="er-accordion-body">
                                                    <p>
                                                        There are many variations of passages of Lom Ipsum available, but the majority have suffered alteration in form, by injected humor, or randomized
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="er-accordion-item">
                                            <h2 className="er-accordion-header">
                                                <button className="er-accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                    aria-expanded="false" aria-controls="collapseTwo">
                                                    How much powering do my suppliers have?
                                                    <span><i className="fas fa-angle-down"></i></span>
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="er-accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <div className="er-accordion-body">
                                                    <p>
                                                        There are many variations of passages of Lom Ipsum available, but the majority have suffered alteration in form, by injected humor, or randomized
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="er-accordion-item">
                                            <h2 className="er-accordion-header">
                                                <button className="er-accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                    aria-expanded="false" aria-controls="collapseThree">
                                                    Does my business have a moat around it?
                                                    <span><i className="fas fa-angle-down"></i></span>
                                                </button>
                                            </h2>
                                            <div id="collapseThree" className="er-accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <div className="er-accordion-body">
                                                    <p>
                                                        There are many variations of passages of Lom Ipsum available, but the majority have suffered alteration in form, by injected humor, or randomized
                                                    </p>
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
        </section>
    </>
  )
}

export default FAQ