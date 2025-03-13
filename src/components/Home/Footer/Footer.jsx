import React from "react";
import { FaPhone } from "react-icons/fa6";
import { LuMessageSquare } from "react-icons/lu";
import { motion } from "framer-motion";
import { SlideLeft } from "../animation/animate";
import Logo from "../Logo/Logo"

const Footer = () => {
  return (
    <motion.footer
      variants={SlideLeft(0.2)}
      initial="initial"
      whileInView="animate"
    >
      <div className="container py-11">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company info section */}
          <div className="space-y-4 font-semibold">
             <Logo />
            <p>Gunupur, Odisha , India</p>
            <p>@ 2025 OneKYC. All rights reserved</p>
          </div>
          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">About OneKYC</h1>
              <ul className="text-sm space-y-4">
                <li>
                  <a href="#">Our Story</a>
                </li>
                <li>
                  <a href="#">Mission & Vision</a>
                </li>
                <li>
                  <a href="#">Partners</a>
                </li>
                
              </ul>
            </div>
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">Support</h1>
              <ul className="text-sm space-y-4">
                
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
                <li>
                  <a href="#">Contact Support</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Contact section */}
          <div className="space-y-4">
            <h1 className="text-xl font-semibold">Contact us</h1>
            <ul className="text-base font-semibold space-y-4">
              <li className="flex items-center space-x-3">
                <FaPhone />
                <a href="tel:+91123456789">+91 123456789</a>
              </li>
              <li className="flex items-center space-x-3">
                <LuMessageSquare />
                <a href="mailto:support@onekyd.com">support@onekyc.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom section */}
        <p className="text-center text-sm font-semibold border-t-2 pt-5 mt-5">
          &copy; 2025 OneKYC. All rights reserved
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
