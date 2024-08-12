// import React from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaBehance,
  FaLink,
  FaCoffee,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="shadow bg-primary mt-8 text-center">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between lg:justify-center">
          <div className="flex justify-center sm:justify-between space-x-4 md:justify-center lg:justify-center">
            <Link
              to="https://github.com/AmanSagar0607"
              className="text-gray-500 hover:text-white"
            >
              <FaGithub size={24} />
            </Link>
            <Link
              to="https://www.linkedin.com/in/amansagar0607/"
              className="text-gray-500 hover:text-white "
            >
              <FaLinkedin size={24} />
            </Link>
            <Link
              to="https://www.behance.net/amansagar0607"
              className="text-gray-500 hover:text-white"
            >
              <FaBehance size={24} />
            </Link>
            <Link
              to="https://buymeacoffee.com/amansagar"
              className="text-gray-500 hover:text-white"
            >
              <FaCoffee size={24} />
            </Link>
            <Link
              to="https://instagram.com/i.AmanSagar"
              className="text-gray-500 hover:text-white"
            >
              <FaInstagram size={24} />
            </Link>
            <Link
              to="https://twitter.com/AmanSagar0607"
              className="text-gray-500 hover:text-white"
            >
              <FaTwitter size={24} />
            </Link>
            <Link
              to="https://linktr.ee/amansagar0607"
              className="text-gray-500 hover:text-white"
            >
              {/* <span class="icon-[simple-icons--linktree]"></span> */}
              <FaLink size={24} />
            </Link>
          </div>
        </div>
        <hr className="my-10 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          Made with 💗 by{" "}
          <Link
            to="https://www.linkedin.com/in/amansagar0607/"
            className="hover:underline"
          >
            Aman Sagar
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
