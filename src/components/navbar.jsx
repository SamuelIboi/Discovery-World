import bp from "../assets/bpicon.png";
import { IconUser } from "@tabler/icons-react";

const Navbar = () => {
  return (
    <div className="flex flex-row w-full border-dashed items-center border-blue-200 border-[3px] text-sm">
      <div className="w-1/2 text-start flex text-white items-center">
        <div>
          <img className="h-20 w-30" src={bp} alt="" />
        </div>
        <ul className="list-none flex flex-row gap-3">
          <li>Home</li>
          <li>Destinations</li>
          <li>Packages</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="w-1/2 flex flex-row gap-2 text-end font-semibold justify-end text-black">
        <button className=" inline p-1 px-4 rounded-4xl  bg-white">
          Contact Us
        </button>

        <div className="p-2 text-center items-center rounded-full bg-white">
          <IconUser className=" h-5 w-5" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
