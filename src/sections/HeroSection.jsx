import DreamDestination from "../components/dreamdestination";
import MidSec from "../components/midcomp";
import Navbar from "../components/navbar";
import StatsCard from "../components/statscard";

const HeroSection = () => {
  return (
    <div className="flex flex-col w-[98%] mt-2 bg-[radial-gradient(ellipse_at_center,_#4d9e5e_0%,_#1a4d2e_60%,_#0f2d1a_100%)] mx-auto border-dashed border-blue-200 border-[3px]">
      <Navbar />
      <MidSec />
      <div className="flex flex-row m-4 items-center ml-7 gap-7 w-full">
        <StatsCard />
        <DreamDestination />
      </div>
    </div>
  );
};

export default HeroSection;
