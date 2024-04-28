import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width gap-4">
        <img src={appleImg} alt="Apple" width={14} height={18} />
        <a
          href="https://www.linkedin.com/in/strahinja-zlatanovic-91150729b/"
          target="_blank"
        >
          <BsLinkedin className="w-5 h-5" />
        </a>
        <a href="mailto:office@zlatanovics.com">
          <MdEmail className="w-5 h-5" />
        </a>
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
            >
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
