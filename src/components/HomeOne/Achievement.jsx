import achievementImage from "../../assets/img/achievement/achievementThumb3_1.jpg";
import achievementCircle from "../../assets/img/achievement/achievement-circle.png";
import Counter from "../utils/Counter";

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
                                    <Counter number="20.50" suffix="K" text="Projects Done"  delay=".4s" />
                                    <Counter number="100.50" suffix="K" text="Happy Clients"  delay=".6s" />
                                    <Counter number="150.50" suffix="K" text="Team Members"  delay=".8s" />
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