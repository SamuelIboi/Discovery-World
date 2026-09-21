import { IconArrowRight } from "@tabler/icons-react";
import worldImg from "../assets/lslady.jpg"; // replace with your image

const StatsCard = () => {
  return (
    <div className="flex flex-row items-center gap-6 bg-[#d4f5d4] rounded-3xl p-3 w-5/13">
      {/* Image card */}
      <div className="flex flex-col gap-4 w-7/11 rounded-2xl flex-shrink-0">
        <img
          src={worldImg}
          alt="Bali Kuta Beach"
          className="w-full h-35 rounded-2xl object-cover"
        />
        {/* Location label + arrow */}
        <div className="flex flex-row items-center justify-between">
          <div className="gap-2 flex flex-col">
            <p className="text-black text-sm font-semibold leading-tight">
              Bali, Kuta Beach
            </p>
            <p className="text-black/70 text-sm">Indonesia</p>
          </div>
          <div className="bg-black rounded-full p-2 flex items-center justify-center">
            <IconArrowRight size={16} className="text-white" />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="flex flex-col w-fit gap-4 pr-2">
        <div>
          <p className="text-4xl  font-bold font-black text-gray-900 ">100k+</p>
          <p className="text-sm text-gray-500 mt-1 pb-2">Happy Customers</p>
          <div className="border-t border-gray-500 mt-3" />
        </div>
        <div>
          <p className="text-4xl font-bold font-black text-gray-900">324+</p>
          <p className="text-sm text-gray-500 mt-1">Partner Companies</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
