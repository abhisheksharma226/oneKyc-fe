import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

const NavLinks = [
  { id: 1, title: "Subscription", link: "#Subscription" },
  { id: 2, title: "About us", link: "#about" },
  { id: 3, title: "Services", link: "#services" },
  { id: 4, title: "Developers", link: "#Developers" },
];

const Navbar = () => {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-[#bcbcd7] to-[#2a2d37] shadow-lg fixed w-full z-50"
    >
      <div className="container mx-auto py-4 px-6 flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-white text-2xl font-bold">
          <Logo />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          {NavLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              className="text-white text-lg font-medium hover:text-[#ffffff] transition-all duration-300 relative before:content-[''] before:absolute before:w-0 before:h-[2px] before:bg-[#000000] before:left-0 before:bottom-0 hover:before:w-full before:transition-all before:duration-300"
            >
              {link.title}
            </a>
          ))}
        </div>

        {/* Login Button */}
        <div>
  <Link to="/login">
    <button className="px-6 py-2 text-white bg-[#484950] rounded-full shadow-md hover:bg-[#8b7fe6] transition-all duration-300 font-bold">
      Login
    </button>
  </Link>
</div>

      </div>
    </motion.div>
  );
};

export default Navbar;
