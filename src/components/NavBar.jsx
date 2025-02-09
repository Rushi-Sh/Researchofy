import React, { useState } from 'react';
import { logo } from '../assets/images';
import { profile } from '../assets/icons';
import { ChevronDown } from 'lucide-react';

const NavBar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const servicesDropdown = [
        { title: 'Research Writing', href: '/services/research' },
        { title: 'Data Analysis', href: '/services/analysis' },
        { title: 'Consulting', href: '/services/consulting' }
    ];

    const projectsDropdown = [
        { title: 'Case Studies', href: '/projects/case-studies' },
        { title: 'Publications', href: '/projects/publications' },
        { title: 'Research Papers', href: '/projects/papers' }
    ];

    return (
        <header className="font-dmsans">
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
                                <a href="/" className="logo-link">
                                    <img className="logo-image" src={logo} alt="Research Service Logo" />
                                    <span className="logo-text kanit-light-italic">Researchofy</span>
                                </a>
                            </div>

                            {/* Navigation items */}
                            <div className="nav-items-container">
                                <div className="nav-items">
                                    <a href="/" className="nav-link">Home</a>
                                    <a href="/about-us" className="nav-link">About Us</a>
                                    
                                    {/* Services Dropdown */}
                                    <div className="relative group">
                                        <button className="dropdown-button">
                                            Services
                                            <ChevronDown className="ml-1 h-4 w-4" />
                                        </button>
                                        <div className="dropdown-menu">
                                            {servicesDropdown.map((item) => (
                                                <a
                                                    key={item.href}
                                                    href={item.href}
                                                    className="dropdown-item"
                                                >
                                                    {item.title}
                                                </a>
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
                                                <a
                                                    key={item.href}
                                                    href={item.href}
                                                    className="dropdown-item"
                                                >
                                                    {item.title}
                                                </a>
                                            ))}
                                        </div>
                                    </div>

                                    <a href="/blog" className="nav-link">Blog</a>
                                    <a href="/contact-us" className="nav-link">Contact Us</a>
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
                        <a href="/" className="mobile-nav-link">Home</a>
                        <a href="/about-us" className="mobile-nav-link">About Us</a>
                        {servicesDropdown.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="mobile-dropdown-item"
                            >
                                {item.title}
                            </a>
                        ))}
                        {projectsDropdown.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="mobile-dropdown-item"
                            >
                                {item.title}
                            </a>
                        ))}
                        <a href="/blog" className="mobile-nav-link">Blog</a>
                        <a href="/contact-us" className="mobile-nav-link">Contact Us</a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;