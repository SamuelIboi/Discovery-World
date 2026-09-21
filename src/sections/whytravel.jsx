import {
  IconArrowLeft,
  IconArrowRight,
  IconArrowUpRight,
  IconClock,
} from "@tabler/icons-react";
import img1 from "../assets/tropicalguy.jpg";
import img2 from "../assets/advp1.jfif";
import img3 from "../assets/advp3.jfif";
import QuickLinks from "../components/quicklinks";
import PopularDestinations from "../components/populardestinations";

const WhyTravel = () => {
  return (
    <div className=" rounded-3xl p-8 items-center w-full flex flex-col gap-8">
      {/* Header row */}
      <div className="flex flex-row justify-between items-start">
        <div className="flex flex-col gap-3 ">
          <h2 className="text-4xl font-black text-gray-900 leading-tight">
            Why Travel With <br /> Explore Ease?
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            At ExploreEase, We Believe Every Journey Should Be As Unique As The
            Traveler. Whether You're Dreaming Of Sun-Soaked Beaches, Bustling
            City Nights, Or Tranquil Mountain Escapes — We Make It Easy,
            Affordable, And Unforgettable. From Handpicked Destinations To
            Personalized Experiences, Let Us Craft Your Next Adventure.
          </p>
        </div>

        {/* Nav arrows */}
        <div className="flex flex-row gap-2">
          <button className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:opacity-80 transition-opacity">
            <IconArrowLeft size={18} className="text-white" />
          </button>
          <button className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center hover:opacity-80 transition-opacity">
            <IconArrowRight size={18} className="text-white" />
          </button>
        </div>
      </div>

      {/* Top images row */}
      <div className="flex flex-row gap-4 w-full h-80">
        <img
          src={img1}
          alt="traveler"
          className="w-9/14 h-full object-cover rounded-xl"
        />
        <div className="flex-1 h-full rounded-2xl overflow-hidden relative">
          <img
            src={img2}
            alt="traveler"
            className="w-full h-full object-cover"
          />
          {/* Smile badge */}
          <div className="absolute bottom-4 right-4 bg-[#c8f0a0] text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
            Smile
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-20 w-full m-3">
        <div className="flex flex-col p-10 pr-0 w-4/7 gap-3">
          <h3 className="text-2xl font-bold text-gray-900 leading-tight">
            Discover the World <br /> with Confidence
          </h3>
          <p className="text-xs text-gray-500 mt-2 leading-relaxed">
            Unforgettable destinations, tailored itineraries, and seamless
            booking — all in one place.
          </p>
          <div className="flex flex-row gap-2">
            <QuickLinks />
            <PopularDestinations />
          </div>
        </div>
        <div>
          <div className="mb-6">
            <div className="relative z-10 flex items-center">
              {/* Back card — slightly offset and rotated more */}
              <div
                className="absolute w-85 h-95 bg-green-200 rounded-2xl overflow-hidden opacity-[65%] shadow-2xl"
                style={{ transform: "rotate(-6deg) translate(-8px, -10px)" }}
              ></div>

              {/* Front card — less rotation */}
              <div className="relative w-85 h-95 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={img1}
                  alt="destination"
                  className="w-full h-full object-cover "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyTravel;
