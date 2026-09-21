import { IconArrowUpRight } from "@tabler/icons-react";
import img1 from "../assets/advp1.jfif";
import img2 from "../assets/advp2.jfif";
import img3 from "../assets/tropicalguy.jpg";

const WTv = () => {
  const avatars = [img1, img2, img3];

  return (
    <div className="flex flex-col gap-4 w-1/2">
      {/* Heading */}
      <h2 className="text-2xl font-black text-gray-900 leading-tight">
        Why Travel With <br /> ExploreEase?
      </h2>

      {/* Card */}
      <div className="relative w-full h-80 rounded-3xl overflow-hidden">
        {/* Background image */}
        <img
          src={img3}
          alt="Santorini Greece"
          className="w-full h-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Arrow button */}
        <div className="absolute top-3 right-3 bg-white rounded-full p-2 cursor-pointer hover:opacity-80 transition-opacity">
          <IconArrowUpRight size={14} className="text-gray-900" />
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col gap-2">
          <h3 className="text-white text-xl font-bold leading-tight">
            Santorini, Greece
          </h3>
          <p className="text-white/70 text-xs leading-relaxed">
            At ExploreEase, we believe every journey should be as unique as the
            traveler.
          </p>

          {/* Avatar stack */}
          <div className="flex flex-row items-center gap-1 mt-1">
            <div className="flex flex-row -space-x-2">
              {avatars.map((avatar, i) => (
                <img
                  key={i}
                  src={avatar}
                  alt=""
                  className="w-7 h-7 rounded-full object-cover border-2 border-white"
                />
              ))}
              <div className="w-7 h-7 rounded-full bg-green-400 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                +
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WTv;
