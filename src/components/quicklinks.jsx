import { IconArrowUpRight, IconArrowRight } from "@tabler/icons-react";

const QuickLinks = () => {
  return (
    <div className="flex flex-col gap-2 w-1/2 p-3 rounded-4xl border-black/30 border-[1px] border-solid">
      {/* Book Securely */}
      <div className="flex items-center gap-2 ">
        <span className="text-sm font-semibold text-gray-800 bg-[#d4f5d4] rounded-2xl px-3 py-2">
          Book Securely
        </span>
        <IconArrowUpRight
          size={30}
          className="text-gray-600 bg-[#d4f5d4] rounded-full p-1"
        />
      </div>

      {/* Popular Destinations */}
      <div className="flex items-center mb-4 justify-between bg-black rounded-2xl px-3 py-2">
        <span className="text-sm font-semibold text-white">
          Popular Destinations
        </span>
        <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
          <IconArrowRight size={10} className="text-black" />
        </div>
      </div>

      {/* Location tags */}
      <div className="flex flex-row gap-3">
        <div className="flex flex-col gap-3 w-1/2 px-1">
          <span className="text-sm text-gray-400">Bali</span>
          <span className="text-sm font-bold text-gray-900">
            Tropical Bliss
          </span>
        </div>

        {/* Style tags */}
        <div className="flex flex-col w-1/2 gap-3 px-1">
          <span className="text-sm text-gray-400">Indonesia</span>
          <span className="text-sm font-bold text-gray-900">Romantic</span>
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
