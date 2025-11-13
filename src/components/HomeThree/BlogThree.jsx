import dateIcon1_1 from "../../assets/img//icon/dateIcon1_1.svg";
import tagIcon1_1 from "../../assets/img//icon/tagIcon1_1.svg";
import userIcon1_1 from "../../assets/img//icon/userIcon1_1.svg";
import { blogThreeData } from "../../data/blog";
import SectionTitleTwo from "../utils/SectionTitleTwo";

const BlogThree = () => {
  return (
    <>
      <div className="blog-section">
        <div className="blog-container-wrapper style1 section-padding pt-0 fix">
          <div className="container">
            <div className="blog-wrapper style1">
              <SectionTitleTwo
                title="The Best Solution For Your Business."
                subTitle="Popular Services"
                mainClass="maxw-470 text-center mx-auto"
              />
              <div className="row g-4">
                {blogThreeData.map((singleBlog, index) => (
                  <div key={index} className="col-xl-3 col-md-6">
                    <div
                      className="blog-card style1 wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <div className="thumb img-shine">
                        <a href="blog-details.html">
                          <img src={singleBlog.thumb} alt={singleBlog.title} />
                        </a>
                      </div>
                      <div className="blog-content">
                        <div className="date">
                          <img src={dateIcon1_1} alt="icon" />
                          <span> {singleBlog.date} </span>
                        </div>
                        <div className="content">
                          <div className="meta">
                            <div className="posted-by">
                              <img src={userIcon1_1} alt="icon" />
                              By admin
                            </div>
                            <div className="tag">
                              <img src={tagIcon1_1} alt="icon" />
                              {singleBlog.category}
                            </div>
                          </div>
                          <h4>
                            <a href="blog-details.html">{singleBlog.title}</a>
                          </h4>
                          <div className="link-meta">
                            <a href="blog-details.html">
                              Read more
                              <i className="fa-regular fa-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogThree;
