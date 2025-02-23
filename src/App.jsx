import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import NavBar from "./components/NavBar";

// Import sections correctly
import Home from "./sections/HomeParts";
import About from "./sections/AboutUs";
import Services from "./sections/Services";
import { CaseStudies, Publications, ResearchPaper } from "./sections/OurProject";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";

const App = () => {
    return (
        <Router>
            <main className="relative">
                <Analytics />
                <NavBar />

                <div className="pt-16">
                    <Routes>
                        {/* Main Routes */}
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/faq" element={<FAQ />} />

                        {/* Services Route */}
                        <Route path="/services" element={<Services />} />

                        {/* Projects Routes */}
                        <Route path="/case-studies" element={<CaseStudies />} />
                        <Route path="/publications" element={<Publications />} />
                        <Route path="/research-paper" element={<ResearchPaper />} />
                    </Routes>
                </div>

                {/* Footer */}
                <section className="w-full relative">
                    <Footer />
                </section>
            </main>
        </Router>
    );
};

export default App;
