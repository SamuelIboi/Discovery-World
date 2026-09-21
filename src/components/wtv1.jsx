import { IconArrowRight, IconPlus } from "@tabler/icons-react";
import img1 from "../assets/advp1.jfif";
import img2 from "../assets/advp2.jfif";

const TestimonialCard = () => {
  return (
    <div className="flex flex-col gap-2 rounded-3xl p-4 w-1/2 ">
      <div className="text-start  mb-5 pl-55">
        <h2 className="text-3xl mb-2">Our Best Services</h2>
        <p className="">
          At ExploreEase, we believe every journey should be as unique as the
          traveler
        </p>
      </div>
      {/* Images row */}
      <div className="flex flex-row gap-2">
        <div className="relative flex-1 h-36 rounded-2xl overflow-hidden">
          <img src={img1} alt="" className="w-full h-full object-cover" />
          <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-green-400 flex items-center justify-center">
            <IconPlus size={12} className="text-white" />
          </div>
        </div>
        <div className="relative flex-1 h-36 rounded-2xl overflow-hidden">
          <img src={img2} alt="" className="w-full h-full object-cover" />
          <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-green-400 flex items-center justify-center">
            <IconPlus size={12} className="text-white" />
          </div>
        </div>
      </div>

      {/* Review text */}
      <p className="text-xl font-semibold text-gray-900 leading-relaxed">
        ExploreEase made my honeymoon trip to Maldives seamless and magical.
        Best service ever!
      </p>

      {/* Read more */}
      <button className="flex items-center gap-1 text-lg text-gray-500 hover:text-gray-800 transition-colors w-fit">
        Read More
        <IconArrowRight size={12} />
      </button>
    </div>
  );
};

export default TestimonialCard;
