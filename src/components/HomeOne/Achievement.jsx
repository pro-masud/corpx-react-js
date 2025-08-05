import achievementImage from "../../assets/img/achievement/achievementThumb3_1.jpg";
import achievementCircle from "../../assets/img/achievement/achievement-circle.png";

const Achievement = () => {
  return (
    <>
        <div className="achievement-section bg-color3 fix">
            <div className="achievement-container-wrapper style3">
                <div className="achievement-thumb" style={{ backgroundImage: `url("${achievementImage}")` }}></div>
                <div className="container">
                    <div className="achievement-wrapper style3">
                        <div className="row g-4">
                            <div className="col-xl-7">
                                <div className="about-service-meta">
                                    <div className="meta-box wow fadeInUp" data-wow-delay=".3s">
                                        <div className="counter">
                                            <span className="counter-number"> 20.5 </span> K
                                        </div>
                                        <p className="text">Projects Done</p>
                                    </div>
                                    <div className="meta-box wow fadeInUp" data-wow-delay=".6s">
                                        <div className="counter">
                                            <span className="counter-number"> 100.5 </span> K
                                        </div>
                                        <p className="text">Happy Clients</p>
                                    </div>
                                    <div className="meta-box wow fadeInUp" data-wow-delay=".8s">
                                        <div className="counter">
                                            <span className="counter-number"> 150.5 </span> K
                                        </div>
                                        <p className="text">Team Members</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 d-flex justify-content-end">
                                <div className="achievement-contact-meta">
                                    <a href="/">
                                        <img src={achievementCircle} alt="circle" />
                                    </a> 
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

export default Achievement