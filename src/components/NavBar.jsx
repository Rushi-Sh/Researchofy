import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../assets/images';
import { profile } from '../assets/icons';
import { ChevronDown } from 'lucide-react';

const NavBar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const servicesDropdown = [
        { title: 'Research Writing', href: '/sections/Services/ResearchWriting' },
        { title: 'Data Analysis', href: '/sections/Services/DataAnalytics' },
        { title: 'Consulting', href: '/sections/Services/Consulting' }
    ];

    const projectsDropdown = [
        { title: 'Case Studies', href: '/sections/OurProject/CaseStudies' },
        { title: 'Publications', href: '/sections/OurProject/Publications' },
        { title: 'Research Papers', href: '/sections/OurProject/ResearchPaper' }
    ];

    return (
        <header className="font-dmsans fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <nav className="nav-container">
                <div className="nav-wrapper">
                    <div className="nav-content">
                        {/* Mobile menu button */}
                        <div className="mobile-menu-button-wrapper">
                            <button
                                type="button"
                                className="mobile-menu-button"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                        </div>

                        {/* Desktop navigation */}
                        <div className="desktop-nav">
                            {/* Logo */}
                            <div className="logo-container">
                                <Link to="/" className="logo-link">
                                    <img className="logo-image" src={logo} alt="Research Service Logo" />
                                    <span className="logo-text kanit-light-italic">Researchofy</span>
                                </Link>
                            </div>

                            {/* Navigation items */}
                            <div className="nav-items-container">
                                <div className="nav-items">
                                    <Link to="/sections/HomeParts/Home" className="nav-link">Home</Link>
                                    <Link to="/sections/AboutUs/About" className="nav-link">About Us</Link>
                                    
                                    {/* Services Dropdown */}
                                    <div className="relative group">
                                        <button className="dropdown-button">
                                            Services
                                            <ChevronDown className="ml-1 h-4 w-4" />
                                        </button>
                                        <div className="dropdown-menu">
                                            {servicesDropdown.map((item) => (
                                                <Link
                                                    key={item.href}
                                                    to={item.href}
                                                    className="dropdown-item"
                                                >
                                                    {item.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Projects Dropdown */}
                                    <div className="relative group">
                                        <button className="dropdown-button">
                                            Projects
                                            <ChevronDown className="ml-1 h-4 w-4" />
                                        </button>
                                        <div className="dropdown-menu">
                                            {projectsDropdown.map((item) => (
                                                <Link
                                                    key={item.href}
                                                    to={item.href}
                                                    className="dropdown-item"
                                                >
                                                    {item.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    <Link to="/sections/Blog/Blog" className="nav-link">Blog</Link>
                                    <Link to="/sections/ContactUs/Contact" className="nav-link">Contact Us</Link>
                                </div>
                            </div>
                        </div>

                        {/* Connect button and profile */}
                        <div className="hidden md:flex items-center space-x-4">
                            <button className="connect-button">
                                Connect!
                            </button>
                            <img src={profile} alt="Profile" className="profile-image" />
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                <div className={`mobile-menu ${mobileMenuOpen ? 'block' : 'hidden'}`}>
                    <div className="mobile-nav-items">
                        <Link to="/sections/HomeParts/Home" className="mobile-nav-link">Home</Link>
                        <Link to="/sections/AboutUs/About" className="mobile-nav-link">About Us</Link>
                        {servicesDropdown.map((item) => (
                            <Link
                                key={item.href}
                                to={item.href}
                                className="mobile-dropdown-item"
                            >
                                {item.title}
                            </Link>
                        ))}
                        {projectsDropdown.map((item) => (
                            <Link
                                key={item.href}
                                to={item.href}
                                className="mobile-dropdown-item"
                            >
                                {item.title}
                            </Link>
                        ))}
                        <Link to="/sections/Blog/Blog" className="mobile-nav-link">Blog</Link>
                        <Link to="/sections/ContactUs/Contact" className="mobile-nav-link">Contact Us</Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;