import blackLogoOne from '../assets/img/logo/black-logo.svg'
import subMenuOne from '../assets/img/header/home-1.jpg'
import subMenuTwo from '../assets/img/header/home-2.jpg'
import subMenuThree from '../assets/img/header/home-3.jpg'
import subMenuFour from '../assets/img/header/home-4.jpg'
import { Link } from 'react-router-dom'

const HeaderThree = () => {
  return (
   <>
        <header id="header-sticky" className="header-1">
            <div className="container-fluid">
                <div className="mega-menu-wrapper">
                    <div className="header-main">
                        <div className="logo">
                            <Link to="/" className="header-logo-2">
                                <img src={blackLogoOne} alt="logo-img" />
                            </Link>
                        </div>
                        <div className="header-right d-flex justify-content-end align-items-center">
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
                                                                        <Link to="/home-two" className="theme-btn">
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
                                                                        <Link to="/home-three" className="theme-btn">
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
                                                                        <Link to="/home-four" className="theme-btn">
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
                                                <Link to="/" className="border-none">
                                                Home
                                                </Link>
                                                <ul className="submenu">
                                                    <li><Link to="/">Home 01</Link></li>
                                                    <li><Link to="/home-two">Home 02</Link></li>
                                                    <li><Link to="/home-three">Home 03</Link></li>
                                                    <li><Link to="/home-four">Home 04</Link></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link to="/about">About Us</Link>
                                            </li>
                                            <li className="has-dropdown">
                                                <Link to="/blog">
                                                    Pages
                                                    <i className="fa-regular fa-plus"></i>
                                                </Link>
                                                <ul className="submenu">
                                                    <li><Link to="/project">Our Project</Link></li>
                                                    <li><Link to="/project-details">Project Details</Link></li>
                                                    <li><Link to="/team">Team</Link></li>
                                                    <li><Link to="/team-details">Team Details</Link></li>
                                                    <li><Link to="/pricing">Our Pricing</Link></li>
                                                    <li><Link to="/gallery">Gallery</Link></li>
                                                    <li><Link to="/faq">Our Faq</Link></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link to="/service-details">
                                                    Services
                                                    <i className="fa-regular fa-plus"></i>
                                                </Link>
                                                <ul className="submenu">
                                                    <li><Link to="/service">Service Page</Link></li>
                                                    <li><Link to="service-details.html">Service Details</Link></li>
                                                </ul>
                                            </li>
                                        <li>
                                                <Link to="/blog-details">
                                                    news
                                                    <i className="fa-regular fa-plus"></i>
                                                </Link>
                                                <ul className="submenu">
                                                    <li><Link to="/blog">Blog Grid</Link></li>
                                                    <li><Link to="/blog-standard">Blog Standard</Link></li>
                                                    <li><Link to="/blog-details">Blog Details</Link></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link to="/contact">Contact Us</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
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

export default HeaderThree