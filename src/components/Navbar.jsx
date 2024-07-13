import {  useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import logo from "../assets/logo.svg";
import githubLogo from "../assets/github.png";


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  //const [scrolled, setScrolled] = useState(false);

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
          <p className="text-white text-[20px] font-semibold cursor-pointer flex ">
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
          to="https://drive.google.com/file/d/1Sk1c0zwP4SGxWRWFKpBQHg8JPm1_YFvi/view?usp=sharing"
          className="flex items-center"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <button className=" bg-transparent px-[10px] py-[2px] mt-[-4px]" >
            <p className="text-white text-[18px] font-semibold cursor-pointer flex ">
              Resume
            </p>
          </button>
        </Link>
         {/* <Link to="mailto:amansagar0307@email.com" className="flex items-center ">
            <button className="bg-transparent px-[10px] py-[2px] mt-[-4px]">
              <p className="text-white text-[18px] font-semibold cursor-pointer flex">Hire Me</p>
            </button>
          </Link> */}
        <Link
          to="https://github.com/AmanSagar0607"
          className="flex items-center gap-2 ml-36"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
         <img src={githubLogo} alt="GitHub Logo" className="w-8 h-8 object-contain mr-[15px] mt-[-4px]" />

        </Link>
        </ul>       

        {/* mobile  */}
        <div className="xl:hidden flex justify-end items-center cursor-pointer">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[26px] h-[26px] object-contain no-hover"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 pl-12 mx-4 my-2 min-w-[180px] z-10 rounded-xl no-hover`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
            <Link
          to="https://github.com/AmanSagar0607"
          className="flex items-center gap-2 px  right"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
         <img src={githubLogo} alt="GitHub Logo" className="w-9 h-9 object-contain" />

        </Link>
            <Link
          to="https://drive.google.com/file/d/17m9GjH_TnOLXnP9jjOmhzpiaQ48Tac77/view?usp=drive_link"
          // className="flex items-center"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <button className=" bg-transparent px-3 py-1" style={{ marginLeft: '-10px' }}>
            <p className="text-white text-[18px] font-semibold cursor-pointer flex">
              Resume
            </p>
          </button>
        </Link>
        
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px]`}
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
