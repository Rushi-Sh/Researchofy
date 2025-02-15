import React from "react";
import HomeComp1 from "./HomeComp1";
import { TextAnimate } from "../components/magicui/text-animate";

const Home = () => {
  return (
    <div className="min-h-screen w-full relative flex items-center justify-center">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 opacity-10 z-[-1]" />

      {/* Main Content with Side Texts */}
      <div className="flex items-center gap-8 max-w-5xl w-full px-6">
        {/* Left Text */}
        <TextAnimate className="w-[30%] text-left text-lg font-semibold -ml-40 font-mono">
        Ever got confused on how to write a research paper?
        </TextAnimate>

        {/* Center Component */}
        <HomeComp1 className="flex-1" />

        {/* Right Text */}
        <TextAnimate className="w-[30%] text-left text-lg font-semibold -mr-40 font-mono">
        We’ve got you covered with expert guidance!
        </TextAnimate>
      </div>
    </div>
  );
};

export default Home;
