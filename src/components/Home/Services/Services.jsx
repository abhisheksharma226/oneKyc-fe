import React from "react";
import { FaUserShield } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { BiSolidDollarCircle } from "react-icons/bi";
import { motion } from "framer-motion";
import { SlideUp } from "../animation/animate";

const ServiceCard = [
  {
    id: 1,
    title: "OneKYC Basic",
    content: "₹299/year",
    description: "Secure KYC management ideal for individuals with minimal needs.",
    icon: <FaUserShield />,
    delay: 0.2,
  },
  {
    id: 2,
    title: "OneKYC Premium",
    content: "₹599/year",
    description: "Enhanced KYC features with additional security and priority support.",
    icon: <FaPenToSquare />,
    delay: 0.4,
  },
  {
    id: 3,
    title: "OneKYC Business",
    content: "₹999/year",
    description: "Comprehensive KYC management for businesses with multiple user access and advanced features.",
    icon: <BiSolidDollarCircle />,
    delay: 0.6,
  },
];

const Services = () => {
  return (
    <div>
      <div className="container py-20">
        {/* heading title */}
        <div className="space-y-2 text-center max-w-[350px] mx-auto mb-8" id="Subscription">
          <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView={"animate"}
            className="text-3xl font-bold font-serif"
          >
            Our Subscription
          </motion.h1>
          <motion.p
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView={"animate"}
            className="text-gray-500 text-sm"
          >
            Choose your OneKYC plan to simplify and save effort
          </motion.p>
        </div>
        {/* card section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {ServiceCard.map((card) => {
            return (
              <motion.div
                variants={SlideUp(card.delay)}
                initial="initial"
                whileInView={"animate"}
                key={card.id}
                className="space-y-4 border-[1px] border-black/30 px-6 py-12 hover:bg-black hover:text-white hover:shadow-[7px_7px_0px_0px_#6c6c6c] duration-300 relative group"
              >
                {/* Icon */}
                <span className="inline-flex justify-center items-center text-4xl border-[1px] border-black rounded-full p-4">
                  {card.icon}
                </span>
                {/* Content */}
                <p className="text-2xl font-bold font-serif">{card.content}</p>
                <p className="text-2xl font-bold font-serif">{card.title}</p>
                <p className="text-gray-400 text-xs">{card.description}</p>
                {/* Tooltip */}
                <div className="absolute top-0 left-0 w-full h-full bg-black/80 text-white text-center flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl font-bold">
                    Coming Soon
                  </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
