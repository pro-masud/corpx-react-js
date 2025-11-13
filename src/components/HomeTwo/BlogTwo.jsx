import { Link } from "react-router-dom";
import { blogTwo, blogTwoToo } from "../../data/blogTwo";
import SectionTitleTwo from "../utils/SectionTitleTwo";

const BlogTwo = () => {
  return (
    <>
      <div className="blog-section pt-0">
        <div className="blog-container-wrapper style2 section-padding fix">
          <div className="container">
            <div className="blog-wrapper style2">
              <SectionTitleTwo
                title="Latest Our News And Blog"
                subTitle="News & Blog"
                mainClass="text-center mx-auto"
              />
              <div className="row g-4">
                <div className="col-xl-6 col-lg-6">
                  {blogTwo.map((singleBlog, index) => (
                    <div
                      key={index}
                      className="blog-card style2 wow img-custom-anim-left"
                      data-wow-duration="1.5s"
                      data-wow-delay="0.2s"
                    >
                      <div className="thumb img-shine">
                        <Link href="blog-details.html">
                          <img src={singleBlog.thumb} alt="thumb" />
                        </Link>
                      </div>
                      <div className="blog-content">
                        <div className="tag">
                          <Link to="blog.html">business</Link>
                        </div>
                        <h4>
                          <Link to="blog-details.html">
                            About personal finance you need to stop beliveing
                          </Link>
                        </h4>
                        <div className="blog-meta">
                          <div className="date">
                            <img src={singleBlog.dateIcon} alt="icon" />
                            October 19, 2024
                          </div>
                          <div className="comment">
                            <img src={singleBlog.commentIcon} alt="icon" />0
                            Comment
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="col-xl-6 col-lg-6">
                  {blogTwoToo.map((singleBlog, index) => (
                    <div
                      key={index}
                      className="blog-card style3 mb-30 wow img-custom-anim-right"
                      data-wow-duration="1.5s"
                      data-wow-delay="0.2s"
                    >
                      <div className="thumb img-shine">
                        <Link to="blog-details.html">
                          <img src={singleBlog.thumb} alt="thumb" />
                        </Link>
                      </div>
                      <div className="blog-content">
                        <div className="tag">
                          <Link to="blog.html">business</Link>
                        </div>
                        <h4>
                          <Link href="blog-details.html">
                            Budgeting hacks for a stress - free financial life
                          </Link>
                        </h4>
                        <div className="blog-meta">
                          <div className="date">
                            <img src={singleBlog.dateIcon} alt="icon" />
                            October 19, 2024
                          </div>
                          <div className="comment">
                            <img src={singleBlog.commentIcon} alt="icon" />0
                            Comment
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
      </div>
    </>
  );
};

export default BlogTwo;
