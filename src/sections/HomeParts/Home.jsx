import React from "react";
import Home1 from "./Home1";
import Home2 from "./Home2";
import Home3 from "./Home3";
import Home4 from "./Home4";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* First Section */}
      <section className="min-h-screen w-full relative flex items-center justify-center">
        <Home1 />
      </section>

      {/* Second Section */}
      <section className="min-h-screen w-full relative flex items-center justify-center">
        <Home2 />
      </section>
      
      <section className="min-h-screen w-full relative flex items-center justify-center">
        <Home3 />
      </section>
      
      <section className="min-h-screen w-full relative flex items-center justify-center">
        <Home4 />
      </section>
      
      <section className="w-full relative">
        <Footer />
      </section>
    </div>
  );
};

export default Home;