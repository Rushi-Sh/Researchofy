import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";
import NavBar from './components/NavBar';
import Home from './sections/HomeParts/Home';
import About from './sections/AboutUs/About';
import Services from './sections/Services/Services';
import CaseStudies from './sections/OurProject/CaseStudies';
import Publications from './sections/OurProject/Publications';
import ResearchPaper from './sections/OurProject/ResearchPaper';
import FAQ from './sections/FAQ/FAQ';
import Footer from './sections/Footer/Footer';

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
                        <Route path="/sections/FAQ/FAQ" element={<FAQ />} />

                        {/* Services Routes */}
                        <Route path="/sections/Services/Services" element={<Services />} />

                        {/* Projects Routes */}
                        <Route path="/sections/OurProject/CaseStudies" element={<CaseStudies />} />
                        <Route path="/sections/OurProject/Publications" element={<Publications />} />
                        <Route path="/sections/OurProject/ResearchPaper" element={<ResearchPaper />} />
                    </Routes>
                </div>

                <section className="w-full relative">
                    <Footer />
                </section>
            </main>
        </Router>
    );
};

export default App;