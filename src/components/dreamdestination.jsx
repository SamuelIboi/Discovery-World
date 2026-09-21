import {
  IconMapPin,
  IconCalendar,
  IconArrowUpRight,
} from "@tabler/icons-react";

const DreamDestination = () => {
  return (
    <div className="relative bg-[#7cc97c] rounded-3xl w-7/13 p-6">
      {/* Arrow button */}
      <div className="absolute top-4 right-4 bg-[#1a4d2e] rounded-full p-2 cursor-pointer hover:opacity-80 transition-opacity">
        <IconArrowUpRight size={18} className="text-white" />
      </div>

      {/* Heading */}
      <div className="mb-2 pr-10">
        <h2 className="text-2xl font-bold text-black leading-tight">
          Find Your Dream Destination
        </h2>
        <p className="text-black/90 text-sm font-semibold mt-2 leading-relaxed">
          Explore stunning locations with luxurious stays and unforgettable
          experiences. Discover the world's beauty with ease.
        </p>
      </div>

      {/* Search bar */}
      <div className="flex flex-row items-center gap-3 bg-[#3d8a4e] rounded-2xl p-3 mt-4">
        {/* Location */}
        <div className="flex flex-col flex-1 gap-2">
          <span className="text-white/60 text-[10px] font-semibold uppercase tracking-widest mb-1">
            Location
          </span>
          <div className="flex items-center gap-2 bg-white/30 p-2 rounded-2xl">
            <IconMapPin size={14} className="text-white" />
            <span className="text-white text-sm">Bali, Indonesia</span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-px h-8 bg-white/20" />

        {/* Date */}
        <div className="flex flex-col flex-1 gap-2">
          <span className="text-white/60 text-[10px] font-semibold uppercase tracking-widest mb-1">
            Date
          </span>
          <div className="flex items-center gap-2 bg-white/30 p-2 rounded-2xl">
            <IconCalendar size={14} className="text-white" />
            <span className="text-white text-sm ">Sun, 12 Jan 2025</span>
          </div>
        </div>

        {/* Search button */}
        {/* Search button */}
        <div className="flex flex-col gap-2">
          {/* invisible spacer to match the label height */}
          <span className="text-[10px] mb-1 invisible">Search</span>
          <button className="bg-white text-gray-900 text-sm font-semibold px-5 py-2 rounded-3xl hover:bg-gray-100 transition-colors">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default DreamDestination;
