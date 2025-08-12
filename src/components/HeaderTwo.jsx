import blackLogoOne from '../assets/img/logo/black-logo.svg'
import subMenuOne from '../assets/img/header/home-1.jpg'
import subMenuTwo from '../assets/img/header/home-2.jpg'
import subMenuThree from '../assets/img/header/home-3.jpg'
import subMenuFour from '../assets/img/header/home-4.jpg'

const HeaderTwo = () => {
  return (
   <>
    <header id="header-sticky" class="header-2">
        <div class="container-fluid">
            <div class="mega-menu-wrapper">
                <div class="header-main">
                    <div class="logo">
                        <a href="/" class="header-logo-2">
                            <img src={blackLogoOne} alt="logo-img" />
                        </a>
                    </div>
                    <div class="mean__menu-wrapper">
                        <div class="main-menu">
                            <nav id="mobile-menu">
                                <ul>
                                    <li class="has-dropdown active menu-thumb">
                                        <a href="/">
                                            Home 
                                            <i class="fa-regular fa-plus"></i>
                                        </a>
                                        <ul class="submenu has-homemenu">
                                            <li>
                                                <div class="homemenu-items">
                                                    <div class="homemenu">
                                                        <div class="homemenu-thumb">
                                                            <img src={subMenuOne} alt="img" />
                                                            <div class="demo-button">
                                                                <a href="/" class="theme-btn">
                                                                    Multi Page
                                                                </a>
                                                                <a href="index-one-page.html" class="theme-btn">
                                                                    One Page
                                                                </a>
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
                                                                <a href="home-two" class="theme-btn">
                                                                    Multi Page
                                                                </a>
                                                                <a href="index-two-page.html" class="theme-btn">
                                                                    One Page
                                                                </a>
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
                                                                <a href="index3.html" class="theme-btn">
                                                                    Multi Page
                                                                </a>
                                                                <a href="index-three-page.html" class="theme-btn">
                                                                    One Page
                                                                </a>
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
                                                                <a href="index4.html" class="theme-btn">
                                                                    Multi Page
                                                                </a>
                                                                <a href="index-four-page.html" class="theme-btn">
                                                                    One Page
                                                                </a>
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
                                        <a href="index.html" class="border-none">
                                        Home
                                        </a>
                                        <ul class="submenu">
                                            <li><a href="index.html">Home 01</a></li>
                                            <li><a href="index2.html">Home 02</a></li>
                                            <li><a href="index3.html">Home 03</a></li>
                                            <li><a href="index4.html">Home 04</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="about.html">About Us</a>
                                    </li>
                                    <li class="has-dropdown">
                                        <a href="blog.html">
                                            Pages
                                            <i class="fa-regular fa-plus"></i>
                                        </a>
                                        <ul class="submenu">
                                            <li><a href="project.html">Our Project</a></li>
                                            <li><a href="project-details.html">Project Details</a></li>
                                            <li><a href="team.html">Team</a></li>
                                            <li><a href="team-details.html">Team Details</a></li>
                                            <li><a href="pricing.html">Our Pricing</a></li>
                                            <li><a href="gallery.html">Gallery</a></li>
                                            <li><a href="faq.html">Our Faq</a></li>
                                            <li><a href="404.html">404 Page</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="service-details.html">
                                            Services
                                            <i class="fa-regular fa-plus"></i>
                                        </a>
                                        <ul class="submenu">
                                            <li><a href="service.html">Service Page</a></li>
                                            <li><a href="service-details.html">Service Details</a></li>
                                        </ul>
                                    </li>
                                <li>
                                        <a href="blog-details.html">
                                            news
                                            <i class="fa-regular fa-plus"></i>
                                        </a>
                                        <ul class="submenu">
                                            <li><a href="blog.html">Blog Grid</a></li>
                                            <li><a href="blog-standard.html">Blog Standard</a></li>
                                            <li><a href="blog-details.html">Blog Details</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="contact.html">Contact Us</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div class="header-right d-flex justify-content-end align-items-center">
                        <a href="#0" class="search-trigger search-icon"><i class="fa-regular fa-magnifying-glass"></i></a>
                        <div class="header-button">
                            <a href="contact.html" class="theme-btn">Get In Touch <i class="fa-sharp fa-regular fa-arrow-up-right"></i></a>
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