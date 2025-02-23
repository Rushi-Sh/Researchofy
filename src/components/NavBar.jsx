import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../assets/images';
import { profile } from '../assets/icons';
import { ChevronDown } from 'lucide-react';

const NavBar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const projectsDropdown = [
        { title: 'Case Studies', href: '/case-studies' },
        { title: 'Publications', href: '/publications' },
        { title: 'Research Papers', href: '/research-paper' }
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
                                    <Link to="/" className="nav-link">Home</Link>
                                    <Link to="/about" className="nav-link">About Us</Link>
                                    <Link to="/services" className="nav-link">Services</Link>
                                    
                                    {/* Projects Dropdown */}
                                    <div className="relative group">
                                        <button 
                                            className="dropdown-button"
                                            onClick={() => setDropdownOpen(!dropdownOpen)}
                                        >
                                            Projects
                                            <ChevronDown className="ml-1 h-4 w-4" />
                                        </button>
                                        <div className={`dropdown-menu ${dropdownOpen ? 'block' : 'hidden'}`}>
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

                                    <Link to="/faq" className="nav-link">FAQ</Link>
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
                        <Link to="/" className="mobile-nav-link">Home</Link>
                        <Link to="/about" className="mobile-nav-link">About Us</Link>
                        <Link to="/services" className="mobile-nav-link">Services</Link>
                        {projectsDropdown.map((item) => (
                            <Link
                                key={item.href}
                                to={item.href}
                                className="mobile-dropdown-item"
                            >
                                {item.title}
                            </Link>
                        ))}
                        <Link to="/faq" className="mobile-nav-link">FAQ</Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
