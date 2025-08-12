import blackLogoOne from '../assets/img/logo/black-logo.svg'
import subMenuOne from '../assets/img/header/home-1.jpg'
import subMenuTwo from '../assets/img/header/home-2.jpg'
import subMenuThree from '../assets/img/header/home-3.jpg'
import subMenuFour from '../assets/img/header/home-4.jpg'
import { Link } from 'react-router-dom'

const HeaderTwo = () => {
  return (
   <>
    <header id="header-sticky" class="header-2">
        <div class="container-fluid">
            <div class="mega-menu-wrapper">
                <div class="header-main">
                    <div class="logo">
                        <Link to="/home-two" class="header-logo-2">
                            <img src={blackLogoOne} alt="logo-img" />
                        </Link>
                    </div>
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
                                                                <Link to="home-two" class="theme-btn">
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
                                                                <Link to="index3.html" class="theme-btn">
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
                                                                <Link to="index4.html" class="theme-btn">
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
                                        <Link to="index.html" class="border-none">
                                        Home
                                        </Link>
                                        <ul class="submenu">
                                            <li><Link to="index.html">Home 01</Link></li>
                                            <li><Link to="index2.html">Home 02</Link></li>
                                            <li><Link to="index3.html">Home 03</Link></li>
                                            <li><Link to="index4.html">Home 04</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="about.html">About Us</Link>
                                    </li>
                                    <li class="has-dropdown">
                                        <Link to="blog.html">
                                            Pages
                                            <i class="fa-regular fa-plus"></i>
                                        </Link>
                                        <ul class="submenu">
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
                                            <i class="fa-regular fa-plus"></i>
                                        </Link>
                                        <ul class="submenu">
                                            <li><Link to="service.html">Service Page</Link></li>
                                            <li><Link to="service-details.html">Service Details</Link></li>
                                        </ul>
                                    </li>
                                <li>
                                        <Link to="blog-details.html">
                                            news
                                            <i class="fa-regular fa-plus"></i>
                                        </Link>
                                        <ul class="submenu">
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
                    <div class="header-right d-flex justify-content-end align-items-center">
                        <Link to="#0" class="search-trigger search-icon"><i class="fa-regular fa-magnifying-glass"></i></Link>
                        <div class="header-button">
                            <Link to="contact.html" class="theme-btn">Get In Touch <i class="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
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

export default HeaderTwo