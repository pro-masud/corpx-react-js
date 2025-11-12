import teamthree from "../../data/teamthree";
import SectionTitleTwo from "../utils/SectionTitleTwo";

const TeamThree = () => {
  return (
    <>
      <section className="team-section team-bg-area section-padding fix">
        <div className="container">
          <div className="team-wrapper style1">
            <SectionTitleTwo
              title="The Best Solution For Your Business."
              subTitle="Popular Services"
              mainClass="maxw-470 text-center mx-auto"
            />
            <div className="row g-4">
              {teamthree.map((singleTeam, index) => (
                <div key={index} className="col-xl-4 col-md-6">
                  <div
                    className="team-card style1 wow fadeInUp"
                    data-wow-delay={singleTeam.animation_delay}
                  >
                    <div className="thumb">
                      <a href={singleTeam.profile_link}>
                        <img src={singleTeam.image} alt={singleTeam.name} />
                      </a>

                      <ul className="social-media">
                        <li>
                          <a href="#">
                            <i className="fa-brands fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-brands fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-brands fa-linkedin-in"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-brands fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="content">
                      <div className="name-wrap">
                        <h3 className="name">
                          <a href={singleTeam.profile_link}>
                            {singleTeam.name}
                          </a>
                        </h3>
                        <div className="designation">
                          {singleTeam.designation}
                        </div>
                      </div>
                      <div className="link-meta">
                        <a href={singleTeam.profile_link}>
                          <i className="fa-regular fa-arrow-up-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamThree;
