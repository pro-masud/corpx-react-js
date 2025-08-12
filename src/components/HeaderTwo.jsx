import blackLogoOne from '../assets/img/logo/black-logo.svg'
import subMenuOne from '../assets/img/header/home-1.jpg'
import subMenuTwo from '../assets/img/header/home-2.jpg'
import subMenuThree from '../assets/img/header/home-3.jpg'
import subMenuFour from '../assets/img/header/home-4.jpg'
import { Link } from 'react-router-dom'

const HeaderTwo = () => {
  return (
   <>
    <header id="header-sticky" className="header-2">
        <div className="container-fluid">
            <div className="mega-menu-wrapper">
                <div className="header-main">
                    <div className="logo">
                        <Link to="/home-two" className="header-logo-2">
                            <img src={blackLogoOne} alt="logo-img" />
                        </Link>
                    </div>
                    <div className="mean__menu-wrapper">
                        <div className="main-menu">
                            <nav id="mobile-menu">
                                <ul>
                                    <li className="has-dropdown active menu-thumb">
                                        <Link to="/">
                                            Home 
                                            <i className="fa-regular fa-plus"></i>
                                        </Link>
                                        <ul className="submenu has-homemenu">
                                            <li>
                                                <div className="homemenu-items">
                                                    <div className="homemenu">
                                                        <div className="homemenu-thumb">
                                                            <img src={subMenuOne} alt="img" />
                                                            <div className="demo-button">
                                                                <Link to="/" className="theme-btn">
                                                                    Multi Page
                                                                </Link>
                                                                <Link to="index-one-page.html" className="theme-btn">
                                                                    One Page
                                                                </Link>
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
                                                                <Link to="home-two" className="theme-btn">
                                                                    Multi Page
                                                                </Link>
                                                                <Link to="index-two-page.html" className="theme-btn">
                                                                    One Page
                                                                </Link>
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
                                                                <Link to="index3.html" className="theme-btn">
                                                                    Multi Page
                                                                </Link>
                                                                <Link to="index-three-page.html" className="theme-btn">
                                                                    One Page
                                                                </Link>
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
                                                                <Link to="index4.html" className="theme-btn">
                                                                    Multi Page
                                                                </Link>
                                                                <Link to="index-four-page.html" className="theme-btn">
                                                                    One Page
                                                                </Link>
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
                                        <Link to="index.html" className="border-none">
                                        Home
                                        </Link>
                                        <ul className="submenu">
                                            <li><Link to="index.html">Home 01</Link></li>
                                            <li><Link to="index2.html">Home 02</Link></li>
                                            <li><Link to="index3.html">Home 03</Link></li>
                                            <li><Link to="index4.html">Home 04</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="about.html">About Us</Link>
                                    </li>
                                    <li className="has-dropdown">
                                        <Link to="blog.html">
                                            Pages
                                            <i className="fa-regular fa-plus"></i>
                                        </Link>
                                        <ul className="submenu">
                                            <li><Link to="project.html">Our Project</Link></li>
                                            <li><Link to="project-details.html">Project Details</Link></li>
                                            <li><Link to="team.html">Team</Link></li>
                                            <li><Link to="team-details.html">Team Details</Link></li>
                                            <li><Link to="pricing.html">Our Pricing</Link></li>
                                            <li><Link to="gallery.html">Gallery</Link></li>
                                            <li><Link to="faq.html">Our Faq</Link></li>
                                            <li><Link to="404.html">404 Page</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="service-details.html">
                                            Services
                                            <i className="fa-regular fa-plus"></i>
                                        </Link>
                                        <ul className="submenu">
                                            <li><Link to="service.html">Service Page</Link></li>
                                            <li><Link to="service-details.html">Service Details</Link></li>
                                        </ul>
                                    </li>
                                <li>
                                        <Link to="blog-details.html">
                                            news
                                            <i className="fa-regular fa-plus"></i>
                                        </Link>
                                        <ul className="submenu">
                                            <li><Link to="blog.html">Blog Grid</Link></li>
                                            <li><Link to="blog-standard.html">Blog Standard</Link></li>
                                            <li><Link to="blog-details.html">Blog Details</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="contact.html">Contact Us</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="header-right d-flex justify-content-end align-items-center">
                        <Link to="#0" className="search-trigger search-icon"><i className="fa-regular fa-magnifying-glass"></i></Link>
                        <div className="header-button">
                            <Link to="contact.html" className="theme-btn">Get In Touch <i className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                        </div>
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
    </header>
   </>
  )
}

export default HeaderTwo