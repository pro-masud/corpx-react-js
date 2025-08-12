import { Link } from "react-router-dom";
import expertImage from "../../assets/img/hero/expert.png";
import clientImage from "../../assets/img/hero/client.png";
import textCircleImage from "../../assets/img/hero/text-circle.png";
import shapeImage from "../../assets/img/hero/shape.png";

const HeroTwo = () => {
  return (
    <>
        <section class="hero-section hero-2">
            <div class="container-fluid">
                <div class="expert-image wow img-custom-anim-left">
                    <img src={expertImage} alt="img" />
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="hero-content">
                            <h1 class="wow fadeInUp" data-wow-delay=".3s">
                                solutions for your business 
                            </h1>
                            <p class="wow fadeInUp" data-wow-delay=".6s">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomized words
                            </p>
                            <div class="client-img wow fadeInUp" data-wow-delay=".3s">
                                <img src={clientImage} alt="img" />
                                <span>15k+ Active Customer</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="social-list wow fadeInUp" data-wow-delay=".3s">
                    <div class="social-icon">
                        <Link href="#"><i class="fa-brands fa-facebook-f"></i></Link>
                        <Link href="#"><i class="fa-brands fa-twitter"></i></Link>
                        <Link href="#"><i class="fa-brands fa-linkedin-in"></i></Link>
                        <Link href="#"><i class="fa-brands fa-youtube"></i></Link>
                    </div>
                    <ul>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path opacity="0.952" fill-rule="evenodd" clip-rule="evenodd" d="M7.83712 0.00616999C7.98913 -0.013398 8.12949 0.0135787 8.25812 0.0871005C10.8189 2.18977 13.3827 4.28856 15.9495 6.3835C16.0033 9.53176 16.0141 12.6827 15.9819 15.8362C15.9668 15.8825 15.9398 15.9203 15.9009 15.9495C10.6572 16.0034 5.41085 16.0141 0.161924 15.9819C0.102553 15.9441 0.0539758 15.8955 0.0161925 15.8362C-0.00539749 12.7069 -0.00539749 9.57756 0.0161925 6.44824C0.106562 6.33523 0.209115 6.23271 0.323848 6.1407C2.8438 4.11249 5.34822 2.06766 7.83712 0.00616999ZM7.96666 0.750731C10.3622 2.67162 12.7479 4.60856 15.1237 6.56154C13.3156 7.82946 11.5074 9.09735 9.69924 10.3653C9.21888 9.9714 8.73849 9.57756 8.25812 9.18369C8.18101 9.12652 8.09464 9.08878 7.99904 9.07039C7.90344 9.08878 7.81707 9.12652 7.73996 9.18369C7.2596 9.57756 6.77921 9.9714 6.29884 10.3653C4.4907 9.09735 2.68254 7.82946 0.874389 6.56154C3.2446 4.62899 5.60869 2.69206 7.96666 0.750731ZM15.318 7.22517C15.3558 9.79873 15.3611 12.3777 15.3342 14.9621C13.631 13.5794 11.9308 12.1928 10.2336 10.8023C11.9419 9.62515 13.6367 8.43275 15.318 7.22517ZM0.647696 7.25754C2.35707 8.43052 4.06267 9.61211 5.76449 10.8023C4.07368 12.2012 2.37349 13.5878 0.663888 14.9621C0.647696 12.3939 0.642297 9.82576 0.647696 7.25754ZM7.96666 9.84732C10.2327 11.6603 12.4888 13.4893 14.7351 15.3344C10.2444 15.356 5.75371 15.356 1.26301 15.3344C3.50368 13.5098 5.73823 11.6808 7.96666 9.84732Z" fill="#1E292E"/>
                            </svg>
                            <Link to="mailto:info@example.com" class="link">info@example.com</Link>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path opacity="0.952" fill-rule="evenodd" clip-rule="evenodd" d="M7.83712 0.00616999C7.98913 -0.013398 8.12949 0.0135787 8.25812 0.0871005C10.8189 2.18977 13.3827 4.28856 15.9495 6.3835C16.0033 9.53176 16.0141 12.6827 15.9819 15.8362C15.9668 15.8825 15.9398 15.9203 15.9009 15.9495C10.6572 16.0034 5.41085 16.0141 0.161924 15.9819C0.102553 15.9441 0.0539758 15.8955 0.0161925 15.8362C-0.00539749 12.7069 -0.00539749 9.57756 0.0161925 6.44824C0.106562 6.33523 0.209115 6.23271 0.323848 6.1407C2.8438 4.11249 5.34822 2.06766 7.83712 0.00616999ZM7.96666 0.750731C10.3622 2.67162 12.7479 4.60856 15.1237 6.56154C13.3156 7.82946 11.5074 9.09735 9.69924 10.3653C9.21888 9.9714 8.73849 9.57756 8.25812 9.18369C8.18101 9.12652 8.09464 9.08878 7.99904 9.07039C7.90344 9.08878 7.81707 9.12652 7.73996 9.18369C7.2596 9.57756 6.77921 9.9714 6.29884 10.3653C4.4907 9.09735 2.68254 7.82946 0.874389 6.56154C3.2446 4.62899 5.60869 2.69206 7.96666 0.750731ZM15.318 7.22517C15.3558 9.79873 15.3611 12.3777 15.3342 14.9621C13.631 13.5794 11.9308 12.1928 10.2336 10.8023C11.9419 9.62515 13.6367 8.43275 15.318 7.22517ZM0.647696 7.25754C2.35707 8.43052 4.06267 9.61211 5.76449 10.8023C4.07368 12.2012 2.37349 13.5878 0.663888 14.9621C0.647696 12.3939 0.642297 9.82576 0.647696 7.25754ZM7.96666 9.84732C10.2327 11.6603 12.4888 13.4893 14.7351 15.3344C10.2444 15.356 5.75371 15.356 1.26301 15.3344C3.50368 13.5098 5.73823 11.6808 7.96666 9.84732Z" fill="#1E292E"/>
                            </svg>
                            <Link to="tel:+6667773636">Tel: +666-777-3636</Link>
                        </li>
                    </ul>
                </div>
                <Link href="about.html" class="video-btn video-popup">
                    <i class="fa-sharp fa-regular fa-arrow-up-right"></i>
                    <img src={textCircleImage} alt="img" />
                </Link>
            </div>
            <div class="shape-img">
                <img src={shapeImage} alt="img" />
            </div>
        </section>
    </>
  )
}

export default HeroTwo;