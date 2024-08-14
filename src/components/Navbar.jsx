import { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import logo from "../assets/logo.svg";
import githubLogo from "../assets/github.png";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-6xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[20px] font-semibold cursor-pointer flex">
            Portfolio
          </p>
        </Link>

        <ul className="list-none hidden xl:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <Link
            to="https://drive.google.com/file/d/12dytXHteX4GrK16zuGxB8bsQ_s6bSBYZ/view?usp=drive_link"
            className="flex items-center"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <button className="bg-transparent px-[10px] py-[2px] mt-[-4px]">
              <p className="text-white text-[18px] font-semibold cursor-pointer flex">
                Resume
              </p>
            </button>
          </Link>
          <Link
            to="https://github.com/AmanSagar0607"
            className="flex items-center gap-2 ml-36"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={githubLogo}
              alt="GitHub Logo"
              className="w-8 h-8 object-contain mr-[15px] mt-[-4px]"
            />
          </Link>
        </ul>

        {/* Mobile Menu */}
        <div className="xl:hidden flex justify-end items-center cursor-pointer bg-primary ">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[26px] h-[26px] object-contain no-hover"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } bg-primary absolute top-0 left-0 w-full h-screen p-6 flex-col items-start justify-start pt-7 z-10 rounded-xl no-hover transition-all duration-300 ease-in-out transform ${
              toggle ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            }`}
          >
            {/* Close Button */}
            <div className="w-full flex justify-end">
              <img
                src={close}
                alt="close"
                className="w-[24px] h-[24px] object-contain cursor-pointer"
                onClick={() => setToggle(false)}
              />
            </div>

            <ul className="list-none flex justify-start items-start flex-1 flex-col gap-4 w-full mt-6">
              <Link
                to="https://github.com/AmanSagar0607"
                className="flex items-center gap-2 px right"
                onClick={() => {
                  setActive("");
                  window.scrollTo(0, 0);
                }}
              >
                <img
                  src={githubLogo}
                  alt="GitHub Logo"
                  className="w-9 h-9 object-contain"
                />
              </Link>
              <Link
                to="https://drive.google.com/file/d/12dytXHteX4GrK16zuGxB8bsQ_s6bSBYZ/view?usp=drive_link"
                onClick={() => {
                  setActive("");
                  window.scrollTo(0, 0);
                }}
              >
                <button
                  className="bg-transparent px-3 py-1 hover:text-gray-300"
                  style={{ marginLeft: "-10px" }}
                >
                  <p className="text-white hover:text-gray-300 text-[18px] font-semibold cursor-pointer flex">
                    Resume
                  </p>
                </button>
              </Link>

              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className="font-poppins font-medium cursor-pointer hover:text-gray-300 text-[16px]"
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
