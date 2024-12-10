import React, { useEffect, useState } from 'react'
import logo from '@/assets/images/sarena-logo.png'
import wishlistIcon from '@/assets/images/icons/heart.svg'
import { Link } from 'react-router'

const Header = () => {

    const [showSearch, setShowSearch] = useState(false);
    const [showNav, setShowNav] = useState(false);

    const handleShowSearch = () => {
        setShowSearch(!showSearch);
    }
    const handleNav = () => {
        setShowNav(!showNav);
    }

    useEffect(() => {
        let topHeadHeight = document.querySelector('.top-header').clientHeight;

        function logoSale() {
            let scrollPos = document.documentElement.scrollTop;
            if (scrollPos > topHeadHeight) {
                document.querySelector('.logo').style.width = "170px";
                document.querySelector('.navigation-wrapper').style.padding = "15px 0";
                document.querySelector('.nav-search-bar').style.padding = "4px 0";
            } else {
                document.querySelector('.logo').style.width = "280px";
                document.querySelector('.navigation-wrapper').style.padding = "24px 0";
                document.querySelector('.nav-search-bar').style.padding = "12px 0";
            }
        }

        document.addEventListener('scroll', logoSale);

        if (document.querySelector(".header")) {
            let header = document.querySelector(".header");
            let navHeight = header.clientHeight;

            let prevScrollpos = window.pageYOffset;
            window.onscroll = function () {
                let currentScrollPos = window.pageYOffset;
                if (prevScrollpos > currentScrollPos) {
                    header.style.top = "0";
                } else {
                    header.style.top = "-" + navHeight + "px";
                }
                prevScrollpos = currentScrollPos;
            }
        }
    }, [])

    return (
        <>
            <section className="top-header gray-bg">
                <div className="container">
                    <h6 className="heading text-center">Up to 20% extra off sale* <a href="#"
                        className="theme-link border-b">Discover Now</a></h6>
                </div>
            </section>
            <header className="header bg-offbody">
                <nav className="navigation">
                    <div className="top-nav zindex-up">
                        <div className="container text-center">
                            <div className="navigation-top">
                                <Link to="/" className="text-center">
                                    <img src={logo} className="logo" alt="" />
                                </Link>
                                <div className="top-item-right desktop-hide">
                                    <a href="#">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="1"
                                                d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001"
                                                stroke="#1D2939" strokeWidth="1.5" strokeMiterlimit="10"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path
                                                d="M9.00007 22H15.0001C19.0201 22 19.7401 20.39 19.9501 18.43L20.7001 12.43C20.9701 9.99 20.2701 8 16.0001 8H8.00007C3.73007 8 3.03007 9.99 3.30007 12.43L4.05007 18.43C4.26007 20.39 4.98007 22 9.00007 22Z"
                                                stroke="#1D2939" strokeWidth="1.5" strokeMiterlimit="10"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path opacity="1" d="M15.4955 12H15.5045" stroke="#1D2939" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path opacity="1" d="M8.49451 12H8.50349" stroke="#1D2939" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                    <a href="#" className="nav-user-btn">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                                                stroke="#1D2939" strokeWidth="1.5" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path opacity="1"
                                                d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22"
                                                stroke="#1D2939" strokeWidth="1.5" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                    <div className="hamburger" onClick={handleNav}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={handleNav ? 'bottom-nav active' : 'bottom-nav'}>
                        <div className="container">
                            <div className="navigation-wrapper">
                                <div className="item-left">
                                    <ul className="list-unstyled menu-list m-0">
                                        <li className="desktop-hide">
                                            <form action="" method="get" className="position-relative w-100 my-3">
                                                <input type="search" className="form-control filter-search theme-form-control"
                                                    placeholder="Search products..." />
                                                <button type="submit" className="btn-reset search-btn">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                                                            stroke="#98A2B3" strokeWidth="1.5" strokeLinecap="round"
                                                            strokeLinejoin="round" />
                                                        <path opacity="1" d="M22 22L20 20" stroke="#98A2B3" strokeWidth="1.5"
                                                            strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </button>
                                            </form>
                                        </li>
                                        <li className="menu-item"><Link to="/">Home</Link></li>
                                        <li className="menu-item"><a href="./product.html">Shop</a></li>
                                        <li className="menu-item"><a href="./blog.html">Blog</a></li>
                                        <li className="menu-item"><Link to="/about">About Us</Link></li>
                                        <li className="menu-item"><a href="./contact.html">Contact Us</a></li>
                                    </ul>
                                </div>
                                <div className="item-right">
                                    <ul className="list-unstyled right-icons m-0">
                                        <li className="nav-search-btn">
                                            <div role='button' className="mobile-hide" onClick={handleShowSearch}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                                                        stroke="#1D2939" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path opacity="1" d="M22 22L20 20" stroke="#1D2939" strokeWidth="1.5"
                                                        strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </li>
                                        <li className="nav-wishlist-btn">
                                            <div className="mobile-hide">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12 21.6501C11.69 21.6501 11.39 21.6101 11.14 21.5201C7.32 20.2101 1.25 15.5601 1.25 8.6901C1.25 5.1901 4.08 2.3501 7.56 2.3501C9.25 2.3501 10.83 3.0101 12 4.1901C13.17 3.0101 14.75 2.3501 16.44 2.3501C19.92 2.3501 22.75 5.2001 22.75 8.6901C22.75 15.5701 16.68 20.2101 12.86 21.5201C12.61 21.6101 12.31 21.6501 12 21.6501ZM7.56 3.8501C4.91 3.8501 2.75 6.0201 2.75 8.6901C2.75 15.5201 9.32 19.3201 11.63 20.1101C11.81 20.1701 12.2 20.1701 12.38 20.1101C14.68 19.3201 21.26 15.5301 21.26 8.6901C21.26 6.0201 19.1 3.8501 16.45 3.8501C14.93 3.8501 13.52 4.5601 12.61 5.7901C12.33 6.1701 11.69 6.1701 11.41 5.7901C10.48 4.5501 9.08 3.8501 7.56 3.8501Z"
                                                        fill="#1D2939" />
                                                </svg>
                                            </div>
                                        </li>
                                        <li className="nav-cart-btn">
                                            <a href="#" className="mobile-hide">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="1"
                                                        d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001"
                                                        stroke="#1D2939" strokeWidth="1.5" strokeMiterlimit="10"
                                                        strokeLinecap="round" strokeLinejoin="round" />
                                                    <path
                                                        d="M9.00007 22H15.0001C19.0201 22 19.7401 20.39 19.9501 18.43L20.7001 12.43C20.9701 9.99 20.2701 8 16.0001 8H8.00007C3.73007 8 3.03007 9.99 3.30007 12.43L4.05007 18.43C4.26007 20.39 4.98007 22 9.00007 22Z"
                                                        stroke="#1D2939" strokeWidth="1.5" strokeMiterlimit="10"
                                                        strokeLinecap="round" strokeLinejoin="round" />
                                                    <path opacity="1" d="M15.4955 12H15.5045" stroke="#1D2939" strokeWidth="2"
                                                        strokeLinecap="round" strokeLinejoin="round" />
                                                    <path opacity="1" d="M8.49451 12H8.50349" stroke="#1D2939" strokeWidth="2"
                                                        strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="nav-user-btn">
                                            <a href="#" className="mobile-hide">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                                                        stroke="#1D2939" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path opacity="1"
                                                        d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22"
                                                        stroke="#1D2939" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <form action="" method="get" className={showSearch ? 'nav-search-bar active mobile-hide' : 'nav-search-bar mobile-hide'}>
                            <div className="position-relative nav-search-blk">
                                <input type="search" className="form-control nav-search theme-form-control"
                                    placeholder="Search" />
                                <button type="submit" className="btn-reset search-btn">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                                            stroke="#98A2B3" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round" />
                                        <path opacity="1" d="M22 22L20 20" stroke="#98A2B3" strokeWidth="1.5"
                                            strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <button type="button" className="close-search btn-reset" onClick={handleShowSearch}>
                                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9.56066 8.35355L17.2071 0.707107L16.5 0L8.85355 7.64645L1.20711 0L0.5 0.707107L8.14645 8.35355L0.5 16L1.20711 16.7071L8.85355 9.06066L16.5 16.7071L17.2071 16L9.56066 8.35355Z"
                                        fill="black" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </nav>
            </header>
            <div className="wishlist desktop-hide">
                <img src={wishlistIcon} alt="" />
            </div>
            <div className={handleNav ? 'nav-overlay desktop-hide active' : 'nav-overlay desktop-hide'}></div>
            <div className="login-signup">
                <div className="container zindex-up">
                    <div className="login-signup-wrap">
                        <div className="ls-wrap-head mb-4">
                            <div className="ls-logo">
                                <img src="./images/sarena-logo.png" alt="" />
                            </div>
                            <div className="close-form">
                                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.56066 8.35355L17.2071 0.707107L16.5 0L8.85355 7.64645L1.20711 0L0.5 0.707107L8.14645 8.35355L0.5 16L1.20711 16.7071L8.85355 9.06066L16.5 16.7071L17.2071 16L9.56066 8.35355Z" fill="black" />
                                </svg>
                            </div>
                        </div>
                        <form action="" method="post" className="login-form">
                            <h3 className="prod-title mb-2">Log in to your account</h3>
                            <p className="prod-desc mb-30">Welcome back! Please enter your details.</p>
                            <div className="row g-4 gy-3 gy-md-3 align-items-center">
                                <div className="col-lg-12">
                                    <input type="email" name="email" className="form-control theme-form-control" placeholder="Enter your email" />
                                </div>
                                <div className="col-lg-12">
                                    <input type="password" name="password" className="form-control theme-form-control" placeholder="Enter password" />
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <label className="theme-checkbox text-sm">
                                        <input type="checkbox" name="checkbox" />
                                        <span className="ms-1 light-text-400 fw-500">Remember Me</span>
                                    </label>
                                </div>
                                <div className="col-lg-6 col-md-6 text-md-end">
                                    <a href="#" className="fw-600 text-sm">Forgot password?</a>
                                </div>
                                <div className="col-lg-12">
                                    <input type="submit" value="Sign In" className="border-0 w-100 theme-button" />
                                </div>
                                <div className="col-lg-12">
                                    <p className="text-sm light-text-400 text-center">
                                        Don’t have an account? <a href="#" className="theme-link border-b fw-600 signup-trigger">Sign Up</a>
                                    </p>
                                </div>
                            </div>
                        </form>
                        <form action="" method="post" className="signup-form d-none">
                            <h3 className="prod-title mb-2">Create an account</h3>
                            <p className="prod-desc mb-30">Please enter your details.</p>
                            <div className="row g-4 gy-3 gy-md-3 align-items-center">
                                <div className="col-lg-12">
                                    <input type="text" name="full-name" className="form-control theme-form-control" placeholder="Full name" />
                                </div>
                                <div className="col-lg-12">
                                    <input type="email" name="email" className="form-control theme-form-control" placeholder="Enter your email" />
                                </div>
                                <div className="col-lg-12">
                                    <input type="password" name="password" className="form-control theme-form-control" placeholder="Password" />
                                </div>
                                <div className="col-lg-12">
                                    <input type="password" name="c-password" className="form-control theme-form-control" placeholder="Confirm Password" />
                                </div>
                                <div className="col-lg-12">
                                    <label className="theme-checkbox text-sm">
                                        <input type="checkbox" name="checkbox" />
                                        <span className="ms-1 light-text-400 fw-500">I agree with <a href="#" className="border-b">privacy policy</a> and <a href="#" className="border-b">terms of use</a></span>
                                    </label>
                                </div>
                                <div className="col-lg-12">
                                    <input type="submit" value="Sign Up" className="border-0 w-100 theme-button" />
                                </div>
                                <div className="col-lg-12">
                                    <p className="text-sm light-text-400 text-center">
                                        Already have an account? <a href="#" className="theme-link border-b fw-600 login-trigger">Login</a>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="form-overlay"></div>
            </div>
        </>
    )
}

export default Header
