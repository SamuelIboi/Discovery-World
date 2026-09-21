import { IconArrowRight, IconStar } from "@tabler/icons-react";
import img1 from "../assets/advp1.jfif";
import img2 from "../assets/advp2.jfif";
import img3 from "../assets/advp3.jfif"; // man with luggage

const AboutUs = () => {
  return (
    <div className="flex flex-row gap-3 p-2 m-2 w-full">
      <div className="w-1/5 flex flex-col gap-4 ml-10 p-4 px-auto">
        <div className="text-xl font-medium mb-2 text-black/90 ">About Us</div>

        <div className="mb-6">
          <div className="relative z-10 flex items-center">
            {/* Back card — slightly offset and rotated more */}
            <div
              className="absolute w-20 h-25 bg-green-200 rounded-2xl overflow-hidden opacity-[65%] shadow-2xl"
              style={{ transform: "rotate(-6deg) translate(-8px, -10px)" }}
            ></div>

            {/* Front card — less rotation */}
            <div className="relative w-20 h-25 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={img1}
                alt="destination"
                className="w-full h-full object-cover "
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-4xl italic font-bold text-gray-900">4.9/5</p>
          <div className="flex flex-row gap-1">
            {[...Array(5)].map((_, i) => (
              <IconStar
                key={i}
                size={20}
                className="text-orange-400 fill-yellow-400"
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

      <div className="w-3/5 text-left mt-10 items-center flex flex-col gap-10">
        <div className="ml-10">
          <h2 className="text-3xl font-semibold text-blue-900 leading-tight">
            Discover the World <br /> with Confidence
          </h2>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <img src={img2} alt="" className="w-55 h-70 rounded-3xl " />
          <img src={img3} alt="" className="w-33 h-40 rounded-3xl " />
        </div>
      </div>

      <div className="w-1/5 mt-8 flex flex-col items-center gap-5">
        <div className="mb-6">
          <div className="relative z-10 flex items-center">
            {/* Back card — slightly offset and rotated more */}
            <div
              className="absolute w-35 h-40 bg-green-200 rounded-2xl overflow-hidden opacity-[65%] shadow-2xl"
              style={{ transform: "rotate(-6deg) translate(-8px, -10px)" }}
            ></div>

            {/* Front card — less rotation */}
            <div className="relative w-35 h-40 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={img1}
                alt="destination"
                className="w-full h-full object-cover "
              />
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-700 leading-relaxed">
          Unforgettable destinations, tailored itineraries, and seamless booking
          — all in one place.
        </p>

        <button className="flex items-center gap-2 bg-gray-900 text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-gray-700 transition-colors">
          MORE EXPLORE
          <IconArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
