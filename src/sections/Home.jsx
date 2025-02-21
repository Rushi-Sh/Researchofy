import React from "react";
import Home1 from "./Home Parts/Home1";
import Home2 from "./Home Parts/Home2";
import Home3 from "./Home Parts/Home3";
import Home4 from "./Home Parts/Home4";
import Footer from "./Home Parts/Footer";


const Home = () => {
  return (
    <div className="flex flex-col w-full">
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
