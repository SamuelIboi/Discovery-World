import RightSection from "../sections/bottomsection";
import HeroSection from "../sections/HeroSection";
import AboutUs from "../sections/abu";
import WhyTravel from "../sections/whytravel";
import BeforeBottom from "../sections/beforebottom";

const Home = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutUs />
      <WhyTravel />
      <BeforeBottom />
      <RightSection />
    </div>
  );
};

export default Home;
