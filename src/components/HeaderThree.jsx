import blackLogoOne from '../assets/img/logo/black-logo.svg'
import subMenuOne from '../assets/img/header/home-1.jpg'
import subMenuTwo from '../assets/img/header/home-2.jpg'
import subMenuThree from '../assets/img/header/home-3.jpg'
import subMenuFour from '../assets/img/header/home-4.jpg'
import { Link } from 'react-router-dom'

const HeaderThree = () => {
  return (
   <>
        <header id="header-sticky" class="header-1">
            <div class="container-fluid">
                <div class="mega-menu-wrapper">
                    <div class="header-main">
                        <div class="logo">
                            <Link to="/" class="header-logo-2">
                                <img src={blackLogoOne} alt="logo-img" />
                            </Link>
                        </div>
                        <div class="header-right d-flex justify-content-end align-items-center">
                            <div class="mean__menu-wrapper">
                                <div class="main-menu">
                                    <nav id="mobile-menu">
                                        <ul>
                                            <li class="has-dropdown active menu-thumb">
                                                <Link to="/">
                                                    Home 
                                                    <i class="fa-regular fa-plus"></i>
                                                </Link>
                                                <ul class="submenu has-homemenu">
                                                    <li>
                                                        <div class="homemenu-items">
                                                            <div class="homemenu">
                                                                <div class="homemenu-thumb">
                                                                    <img src={subMenuOne} alt="img" />
                                                                    <div class="demo-button">
                                                                        <Link to="/" class="theme-btn">
                                                                            Multi Page
                                                                        </Link>
                                                                        <Link to="index-one-page.html" class="theme-btn">
                                                                            One Page
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                                <div class="homemenu-content text-center">
                                                                    <h4 class="homemenu-title">
                                                                        Home 01
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                            <div class="homemenu">
                                                                <div class="homemenu-thumb mb-15">
                                                                    <img src={subMenuTwo} alt="img" />
                                                                    <div class="demo-button">
                                                                        <Link to="/home-two" class="theme-btn">
                                                                            Multi Page
                                                                        </Link>
                                                                        <Link to="index-two-page.html" class="theme-btn">
                                                                            One Page
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                                <div class="homemenu-content text-center">
                                                                    <h4 class="homemenu-title">
                                                                        Home 02
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                            <div class="homemenu">
                                                                <div class="homemenu-thumb mb-15">
                                                                    <img src={subMenuThree} alt="img" />
                                                                    <div class="demo-button">
                                                                        <Link to="/home-three" class="theme-btn">
                                                                            Multi Page
                                                                        </Link>
                                                                        <Link to="index-three-page.html" class="theme-btn">
                                                                            One Page
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                                <div class="homemenu-content text-center">
                                                                    <h4 class="homemenu-title">
                                                                        Home 03
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                            <div class="homemenu">
                                                                <div class="homemenu-thumb mb-15">
                                                                    <img src={subMenuFour} alt="img" />
                                                                    <div class="demo-button">
                                                                        <Link to="/home-four" class="theme-btn">
                                                                            Multi Page
                                                                        </Link>
                                                                        <Link to="index-four-page.html" class="theme-btn">
                                                                            One Page
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                                <div class="homemenu-content text-center">
                                                                    <h4 class="homemenu-title">
                                                                        Home 04
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="has-dropdown active d-xl-none">
                                                <Link to="/" class="border-none">
                                                Home
                                                </Link>
                                                <ul class="submenu">
                                                    <li><Link to="/">Home 01</Link></li>
                                                    <li><Link to="/home-two">Home 02</Link></li>
                                                    <li><Link to="/home-three">Home 03</Link></li>
                                                    <li><Link to="/home-four">Home 04</Link></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link to="/about">About Us</Link>
                                            </li>
                                            <li class="has-dropdown">
                                                <Link to="/blog">
                                                    Pages
                                                    <i class="fa-regular fa-plus"></i>
                                                </Link>
                                                <ul class="submenu">
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
                                                    <i class="fa-regular fa-plus"></i>
                                                </Link>
                                                <ul class="submenu">
                                                    <li><Link to="/service">Service Page</Link></li>
                                                    <li><Link to="service-details.html">Service Details</Link></li>
                                                </ul>
                                            </li>
                                        <li>
                                                <Link to="/blog-details">
                                                    news
                                                    <i class="fa-regular fa-plus"></i>
                                                </Link>
                                                <ul class="submenu">
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
                            <div class="header__hamburger d-xl-block my-auto">
                                <div class="sidebar__toggle">
                                    <div class="header-bar">
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