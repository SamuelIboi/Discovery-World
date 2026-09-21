import { IconArrowRight, IconStar } from "@tabler/icons-react";
import img1 from "../assets/advp1.jfif"; // man with luggage
import img2 from "../assets/advp2.jfif"; // man with backpack (large center)
import img3 from "../assets/advp3.jfif"; // woman with sunglasses
import img4 from "../assets/advp4.jfif"; // woman top right

const AboutUs = () => {
  return (
    <div className="bg-[#f0f7e6] rounded-3xl p-8 w-full">
      <div className="grid grid-cols-3 gap-6 items-start">
        {/* Left column */}
        <div className="flex flex-col gap-6">
          <p className="text-sm font-semibold text-gray-700">About Us</p>

          {/* Small top image */}
          <div className="w-32 h-44 rounded-2xl overflow-hidden">
            <img
              src={img1}
              alt="traveler"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Rating */}
          <div className="flex flex-col gap-2">
            <p className="text-5xl font-black text-gray-900">4.9/5</p>
            <div className="flex flex-row gap-1">
              {[...Array(5)].map((_, i) => (
                <IconStar
                  key={i}
                  size={20}
                  className="text-yellow-400 fill-yellow-400"
                  fill="currentColor"
                />
              ))}
            </div>

            {/* Avatar stack + label */}
            <div className="flex flex-row items-center gap-2 mt-1">
              <div className="flex flex-row -space-x-2">
                <img
                  src={img1}
                  alt=""
                  className="w-8 h-8 rounded-full object-cover border-2 border-white"
                />
                <img
                  src={img2}
                  alt=""
                  className="w-8 h-8 rounded-full object-cover border-2 border-white"
                />
                <div className="w-8 h-8 rounded-full bg-green-400 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                  +
                </div>
              </div>
              <p className="text-xs text-gray-500">100k Happy Customers</p>
            </div>
          </div>
        </div>

        {/* Center column — two images */}
        <div className="flex flex-row gap-3 items-end">
          <div className="w-48 h-64 rounded-2xl overflow-hidden">
            <img
              src={img2}
              alt="traveler"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-36 h-44 rounded-2xl overflow-hidden">
            <img
              src={img3}
              alt="traveler"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-5 items-start">
          {/* Top right image */}
          <div className="w-36 h-44 rounded-2xl overflow-hidden self-end">
            <img
              src={img4}
              alt="traveler"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="text-3xl font-bold text-gray-900 leading-tight">
            Discover the World <br /> with Confidence
          </h2>

          <p className="text-xs text-gray-500 leading-relaxed">
            Unforgettable destinations, tailored itineraries, and seamless
            booking — all in one place.
          </p>

          <button className="flex items-center gap-2 bg-gray-900 text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-gray-700 transition-colors">
            MORE EXPLORE
            <IconArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
