import { IconArrowRight } from "@tabler/icons-react";
import img1 from "../assets/advp1.jfif";
import img2 from "../assets/advp2.jfif";
import img3 from "../assets/advp3.jfif";

// Testimonial Card
const TestimonialCard = () => {
  return (
    <div className="flex flex-col gap-3 bg-white rounded-3xl p-5 w-72 shadow-sm border border-gray-100">
      {/* Avatar row */}
      <div className="flex flex-row items-center gap-3">
        <div className="flex flex-row -space-x-2">
          {[img1, img2, img3].map((avatar, i) => (
            <img
              key={i}
              src={avatar}
              alt=""
              className="w-8 h-8 rounded-full object-cover border-2 border-white"
            />
          ))}
          <div className="w-8 h-8 rounded-full bg-green-400 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
            +
          </div>
        </div>
      </div>

      {/* Review text */}
      <p className="text-sm text-gray-800 leading-relaxed font-medium">
        ExploreEase made my honeymoon trip to Maldives seamless and magical.
        Best service ever!
      </p>

      {/* Read more */}
      <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-800 transition-colors w-fit">
        Read More
        <IconArrowRight size={12} />
      </button>
    </div>
  );
};

// Popular Destinations Section
const PopularDestinations = () => {
  const destinations = [
    { name: "Bali, Indonesia", image: img1 },
    { name: "Swiss Alps", image: img2 },
    { name: "Santorini", image: img3 },
  ];

  return (
    <div className="flex flex-col gap-6 w-full mt-10">
      {/* Header */}
      <div className="flex flex-row justify-between items-start">
        <h2 className="text-4xl font-black text-gray-900 leading-tight w-1/3">
          Popular <br /> Destinations
        </h2>
        <p className="text-md text-gray-400 leading-relaxed w-1/2 mt-2">
          At ExploreEase, We Believe Every Journey Should Be As Unique As The
          Traveler. Whether You're Dreaming Of Sun-Soaked Beaches, Bustling City
          Nights, Or Tranquil Mountain Escapes.
        </p>
      </div>

      {/* Destination images */}
      <div className="grid grid-cols-3 gap-4">
        {destinations.map((dest) => (
          <div
            key={dest.name}
            className="relative h-48 rounded-2xl overflow-hidden cursor-pointer group"
          >
            <img
              src={dest.image}
              alt={dest.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <p className="absolute bottom-3 left-3 text-white text-sm font-semibold">
              {dest.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Combined export
const RightSection = () => {
  return (
    <div className="flex flex-col gap-8 p-3">
      <PopularDestinations />
    </div>
  );
};

export default RightSection;
