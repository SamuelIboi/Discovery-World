import worldImg from "../assets/adv.jfif"; // replace with your image

const MidSec = () => {
  return (
    <div className="relative flex flex-col items-center justify-center my-10">
      {/* Layer 1 — light green text behind */}
      <div className="absolute inset-0 flex flex-col items-center justify-center select-none pointer-events-none">
        <span className="text-[170px] font-black leading-none tracking-tight text-[#4d9e5e]">
          DISCOVER
        </span>
        <span className="text-[170px] font-black leading-none tracking-tight text-white">
          WORLD
        </span>
      </div>

      {/* Layer 2 — image card */}
      {/* Layer 2 — double image cards */}
      <div className="relative z-10 flex items-center justify-center">
        {/* Back card — slightly offset and rotated more */}
        <div
          className="absolute w-56 h-72 rounded-2xl overflow-hidden opacity-[65%] shadow-2xl border-green-800 border-solid border-[4px]"
          style={{ transform: "rotate(-7deg) translate(20px, -15px)" }}
        >
          <img
            src={worldImg}
            alt="destination"
            className="w-full h-full object-cover "
          />
        </div>

        {/* Front card — less rotation */}
        <div
          className="relative w-56 h-72 rounded-2xl overflow-hidden shadow-2xl border-green-800 border-solid border-[4px]"
          style={{ transform: "rotate(-8deg)" }}
        >
          <img
            src={worldImg}
            alt="destination"
            className="w-full h-full object-cover "
          />
        </div>
      </div>

      {/* Layer 3 — white text in front */}
      <div className="absolute  flex flex-col items-center justify-center select-none pointer-events-none ">
        <span
          className="text-[170px] font-black leading-none tracking-tight text-white"
          style={{ mixBlendMode: "overlay" }}
        >
          DISCOVER
        </span>
        <span
          className="text-[170px] z-10 font-black leading-none tracking-tight text-white"
          style={{ mixBlendMode: "screen" }}
        >
          WORLD
        </span>
      </div>
    </div>
  );
};

export default MidSec;
