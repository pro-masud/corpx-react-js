import logoOne from '../assets/img/logo/header-logo.svg'
import BlackLogoOne from '../assets/img/logo/black-logo.svg'
import subMenuOne from '../assets/img/header/home-1.jpg'
import subMenuTwo from '../assets/img/header/home-2.jpg'
import subMenuThree from '../assets/img/header/home-3.jpg'
import subMenuFour from '../assets/img/header/home-4.jpg'

const HeaderOne = () => {
  return (
    <>
        <header className="header-section-3">
            <div className="header-top-section">
                <div className="container-fluid">
                    <div className="header-top-wrapper">
                        <ul>
                            <li>
                                <i className="fa-solid fa-location-dot"></i>
                                2464 Royal Ln. Mesa, New Jersey 45463
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <i className="fa-solid fa-phone"></i>
                            <a href="tel:+990123456789">+990 123 456 789</a>
                            </li>
                            <li>
                                <i className="fa-solid fa-envelope"></i>
                                <a href="mailto:info@example.com">info@example.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="header-sticky" className="header-3">
                <div className="container-fluid">
                    <div className="mega-menu-wrapper">
                        <div className="header-main">
                            <div className="logo">
                                <a href="/" className="header-logo">
                                    <img src={logoOne} alt="logo-img" />
                                </a>
                                <a href="/" className="header-logo-2">
                                    <img src={BlackLogoOne} alt="logo-img" />
                                </a>
                            </div>
                        
                            <div className="header-right d-flex justify-content-end align-items-center">
                                <div className="mean__menu-wrapper">
                                    <div className="main-menu">
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li className="has-dropdown active menu-thumb">
                                                    <a href="/">
                                                        Home 
                                                        <i className="fa-regular fa-plus"></i>
                                                    </a>
                                                    <ul className="submenu has-homemenu">
                                                        <li>
                                                            <div className="homemenu-items">
                                                                <div className="homemenu">
                                                                    <div className="homemenu-thumb">
                                                                        <img src={subMenuOne} alt="img" />
                                                                        <div className="demo-button">
                                                                            <a href="/" className="theme-btn">
                                                                                Multi Page
                                                                            </a>
                                                                            <a href="index-one-page" className="theme-btn">
                                                                                One Page
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="homemenu-content text-center">
                                                                        <h4 className="homemenu-title">
                                                                            Home 01
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="homemenu">
                                                                    <div className="homemenu-thumb mb-15">
                                                                        <img src={subMenuTwo} alt="img" />
                                                                        <div className="demo-button">
                                                                            <a href="index2" className="theme-btn">
                                                                                Multi Page
                                                                            </a>
                                                                            <a href="index-two-page" className="theme-btn">
                                                                                One Page
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="homemenu-content text-center">
                                                                        <h4 className="homemenu-title">
                                                                            Home 02
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="homemenu">
                                                                    <div className="homemenu-thumb mb-15">
                                                                        <img src={subMenuThree} alt="img" />
                                                                        <div className="demo-button">
                                                                            <a href="index3" className="theme-btn">
                                                                                Multi Page
                                                                            </a>
                                                                            <a href="index-three-page" className="theme-btn">
                                                                                One Page
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="homemenu-content text-center">
                                                                        <h4 className="homemenu-title">
                                                                            Home 03
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="homemenu">
                                                                    <div className="homemenu-thumb mb-15">
                                                                        <img src={subMenuFour} alt="img" />
                                                                        <div className="demo-button">
                                                                            <a href="index4" className="theme-btn">
                                                                                Multi Page
                                                                            </a>
                                                                            <a href="index-four-page" className="theme-btn">
                                                                                One Page
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="homemenu-content text-center">
                                                                        <h4 className="homemenu-title">
                                                                            Home 04
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="has-dropdown active d-xl-none">
                                                    <a href="/" className="border-none">
                                                    Home
                                                    </a>
                                                    <ul className="submenu">
                                                        <li><a href="/">Home 01</a></li>
                                                        <li><a href="index2">Home 02</a></li>
                                                        <li><a href="index3">Home 03</a></li>
                                                        <li><a href="index4">Home 04</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="about">About Us</a>
                                                </li>
                                                <li className="has-dropdown">
                                                    <a href="blog">
                                                        Pages
                                                        <i className="fa-regular fa-plus"></i>
                                                    </a>
                                                    <ul className="submenu">
                                                        <li><a href="project">Our Project</a></li>
                                                        <li><a href="project-details">Project Details</a></li>
                                                        <li><a href="team">Team</a></li>
                                                        <li><a href="team-details">Team Details</a></li>
                                                        <li><a href="pricing">Our Pricing</a></li>
                                                        <li><a href="gallery">Gallery</a></li>
                                                        <li><a href="faq">Our Faq</a></li>
                                                        <li><a href="404">404 Page</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="service-details">
                                                        Services
                                                        <i className="fa-regular fa-plus"></i>
                                                    </a>
                                                    <ul className="submenu">
                                                        <li><a href="service">Service Page</a></li>
                                                        <li><a href="service-details">Service Details</a></li>
                                                    </ul>
                                                </li>
                                            <li>
                                                    <a href="blog-details">
                                                        news
                                                        <i className="fa-regular fa-plus"></i>
                                                    </a>
                                                    <ul className="submenu">
                                                        <li><a href="blog">Blog Grid</a></li>
                                                        <li><a href="blog-standard">Blog Standard</a></li>
                                                        <li><a href="blog-details">Blog Details</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="contact">Contact Us</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="header-button">
                                    <a href="contact" className="theme-btn">
                                        Get In Touch
                                        <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                                    </a>
                                </div>
                                <a href="#0" className="search-trigger search-icon"><i className="fa-regular fa-magnifying-glass"></i></a>
                                <div className="header__hamburger d-xl-block my-auto">
                                    <div className="sidebar__toggle">
                                        <div className="header-bar">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default HeaderOne