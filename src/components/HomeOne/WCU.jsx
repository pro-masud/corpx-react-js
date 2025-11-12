import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import UCUFeatureImage from "../../assets/img/wcu/wcuThumb3_1.png";
import ChangingProgressProvider from "../../inc/CustomAnimation/ChangingProgressProvider";
import { SingleCounter, SingleItemCounter } from "../utils/Counter";
import SectionTitle from "../utils/SectionTitle";

const WCU = () => {
  return (
    <>
      <div className="wcu-section section-padding fix">
        <div className="container">
          <div className="wcu-wrapper style3">
            <div className="row gy-5 gx-64 d-flex align-items-center">
              <div className="col-xl-6 col-lg-6">
                <div className="wcu-thumb">
                  <div className="thumb1 bg-cover">
                    <img
                      src={UCUFeatureImage}
                      alt="thumb"
                      className="wow img-custom-anim-left"
                    />
                  </div>
                  <div className="counter-box-card style3 float-bob-y">
                    <div className="counter">
                      <SingleCounter value={10} />
                      k+
                    </div>
                    <p className="text">Active User</p>
                  </div>

                  <div className="static-box float-bob-x">
                    <p className="text">Sales trend</p>
                    <SingleItemCounter value="66" tags="h6" />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="154"
                      height="48"
                      viewBox="0 0 154 48"
                      fill="none"
                    >
                      <path
                        d="M1.85352 46.482C21.0799 46.482 18.8081 10.8289 38.0345 10.8289C57.2609 10.8289 54.9856 20.3362 74.212 20.3362C93.4383 20.3362 90.4769 35.9558 109.703 35.9558C128.93 35.9558 132.186 43.9798 151.413 43.9798"
                        stroke="#FFAE00"
                        strokeWidth="2.0694"
                        strokeLinecap="round"
                      />
                      <path
                        d="M1.85352 46.4815C20.6391 46.4815 23.0388 21.6941 41.8243 21.6941C60.6098 21.6941 57.4955 2 76.2811 2C95.0666 2 94.7075 29.8435 113.493 29.8435C132.279 29.8435 133.299 43.877 152.084 43.877"
                        stroke="#0097FE"
                        strokeWidth="2.0694"
                        strokeLinecap="round"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="210"
                      height="66"
                      viewBox="0 0 210 66"
                      fill="none"
                    >
                      <g filter="url(#filter0_d_502_406)">
                        <rect
                          x="20"
                          y="16.1475"
                          width="169.835"
                          height="25.7798"
                          rx="12.8899"
                          fill="#F6F3FE"
                        />
                      </g>
                      <rect
                        x="34.9854"
                        y="26.6501"
                        width="139.864"
                        height="5.72883"
                        rx="2.86442"
                        fill="#1E292E"
                      />
                      <defs>
                        <filter
                          id="filter0_d_502_406"
                          x="0"
                          y="0.147461"
                          width="209.834"
                          height="65.7798"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="4" />
                          <feGaussianBlur stdDeviation="10" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.14902 0 0 0 0 0.14902 0 0 0 0 0.14902 0 0 0 0.04 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_502_406"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_502_406"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="wcu-content">
                  <SectionTitle
                    title="Our Business Is Taking Care Of Your Business"
                    subTitle="Why We Are The Best"
                    desc="There are many variations of passages of Lopsum available, but the majority have suffered alteration in form, by busins injected humor, or randomized words which"
                    descClass="text"
                  />
                  <div className="check-list-items">
                    <ul
                      className="checklist wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <li>
                        <i className="fa-solid fa-check"></i> Innovative
                        solutions
                      </li>
                      <li>
                        <i className="fa-solid fa-check"></i> User-Friendly
                        Interface
                      </li>
                      <li>
                        <i className="fa-solid fa-check"></i> Secure
                        transactions
                      </li>
                    </ul>
                    <div
                      style={{ width: 100, height: 100 }}
                      className="single-circle-bar wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <ChangingProgressProvider values={[0, 35]} interval={300}>
                        {(value) => (
                          <CircularProgressbar
                            value={value}
                            text={`${value}%`}
                            strokeWidth={5}
                            styles={buildStyles({
                              pathColor: "#006d5b",
                              textColor: "#041b16",
                              trailColor: "#AEC0C9",
                              pathTransitionDuration: 0.3,
                            })}
                          />
                        )}
                      </ChangingProgressProvider>
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

export default WCU;
