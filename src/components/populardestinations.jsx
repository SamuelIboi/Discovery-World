import { IconArrowUpRight, IconClock } from "@tabler/icons-react";
import img1 from "../assets/tropicalguy.jpg";
import img2 from "../assets/advp1.jfif";
import img3 from "../assets/advp3.jfif";

const PopularDestinations = () => {
  const destinations = [
    { name: "Greece", time: "4.5 mins" },
    { name: "Swiss Alps", time: "4.5 mins" },
  ];

  return (
    <div className="flex flex-col gap-5 w-ft p-4 rounded-4xl border-black/30 border-[1px] border-solid">
      {/* Enjoy the Journey */}
      <div className="flex items-center gap-2 ">
        <span className="text-sm font-semibold text-gray-800 bg-[#d4f5d4] rounded-2xl px-3 py-2">
          Enjoy the Journey
        </span>
        <IconArrowUpRight
          size={30}
          className="text-gray-600 bg-[#d4f5d4] rounded-full p-1"
        />
      </div>

      {/* Popular card */}
      <div className="w-fit">
        <div className="relative z-10  ml-3 w-fit flex items-center">
          {/* Back card */}
          <div
            className="absolute w-56 h-32 bg-green-200 rounded-2xl overflow-hidden opacity-65 shadow-2xl"
            style={{ transform: "rotate(-6deg) translate(-8px, -5px)" }}
          />

          {/* Front card */}
          <div className="relative w-56 h-28 rounded-2xl overflow-hidden shadow-2xl">
            <div className="bg-gray-900 rounded-xl p-2 flex flex-col gap-2 h-full">
              <p className="text-white text-xs font-semibold mb-3">Popular</p>
              {destinations.map((d) => (
                <div
                  key={d.name}
                  className="flex flex-row justify-between items-center"
                >
                  <p className="text-white text-xs">{d.name}</p>
                  <div className="flex items-center gap-1 text-white/60 text-[10px]">
                    <IconClock size={10} />
                    {d.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularDestinations;
