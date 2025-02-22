import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";
import NavBar from './components/NavBar';
import Home from './sections/HomeParts/Home';
import About from './sections/AboutUs/About';
import Services from './sections/Services/Services';
import ResearchWriting from './sections/Services/ResearchWriting';
import DataAnalytics from './sections/Services/DataAnalytics';
import Consulting from './sections/Services/Consulting';
import OurProject from './sections/OurProject/OurProject';
import CaseStudies from './sections/OurProject/CaseStudies';
import Publications from './sections/OurProject/Publications';
import ResearchPaper from './sections/OurProject/ResearchPaper';
import Blog from './sections/Blog/Blog';
import Contact from './sections/ContactUs/Contact';

const App = () => {
    return (
        <Router>
            <main className="relative">
                <Analytics />
                <NavBar />
                
                <div className="pt-16"> {/* Add padding-top to account for fixed navbar */}
                    <Routes>
                        {/* Main Routes */}
                        <Route path="/" element={<Home />} />
                        <Route path="/sections/HomeParts/Home" element={<Home />} />
                        <Route path="/sections/AboutUs/About" element={<About />} />
                        <Route path="/sections/Blog/Blog" element={<Blog />} />
                        <Route path="/sections/ContactUs/Contact" element={<Contact />} />

                        {/* Services Routes */}
                        <Route path="/sections/Services" element={<Services />} />
                        <Route path="/sections/Services/ResearchWriting" element={<ResearchWriting />} />
                        <Route path="/sections/Services/DataAnalytics" element={<DataAnalytics />} />
                        <Route path="/sections/Services/Consulting" element={<Consulting />} />

                        {/* Projects Routes */}
                        <Route path="/sections/OurProject" element={<OurProject />} />
                        <Route path="/sections/OurProject/CaseStudies" element={<CaseStudies />} />
                        <Route path="/sections/OurProject/Publications" element={<Publications />} />
                        <Route path="/sections/OurProject/ResearchPaper" element={<ResearchPaper />} />
                    </Routes>
                </div>
            </main>
        </Router>
    );
};

export default App;