import React from "react";
import { motion } from "framer-motion";
import { SlideLeft, SlideUp } from "../animation/animate";
import { FaGithub, FaLinkedin } from "react-icons/fa"; 
import { MdEmail } from "react-icons/md"; 

const TestimonialData = [
  {
    id: 1,
    name: "Abhishek Sharma",
    designation: "Team Lead",
    img: "../assets/developers/abhi.jpg",
    text: "Leads the team, ensures milestones are met, integrates frontend and backend development.",
    github: "https://github.com/abhisheksharma226",
    linkedin: "https://www.linkedin.com/in/abhisheksharma-731676205/",
    gmail: "https://mail.google.com/mail/?view=cm&fs=1&to=abhishek.sharma@example.com", 
    delay: 0.2,
  },
  {
    id: 2,
    name: "Ayush Singh",
    designation: "Full Stack Developer",
    img: "../assets/developers/ayush.jpg",
    text: "Developed and integrated scalable web applications connecting frontend and backend seamlessly",
    github: "https://github.com/ayushsingh1859",
    linkedin: "https://www.linkedin.com/in/ayush-singh-373706273/",
    gmail: "https://mail.google.com/mail/?view=cm&fs=1&to=ayush.singh@example.com", 
    delay: 0.4,
  },
  {
    id: 3,
    name: "Sonali Panigrahi",
    designation: "Frontend Developer",
    img: "\Home\assets\developers\sonali.jpg",
    text: "Designed and developed interactive user interfaces, ensuring an engaging and responsive user experience.",
    github: "https://github.com/sonalipanigrahi2622",
    linkedin: "https://www.linkedin.com/in/sonali-panigrahi-18113a294/",
    gmail: "https://mail.google.com/mail/?view=cm&fs=1&to=sonali.panigrahi@example.com",
    delay: 0.6,
  },
];


const Testimonial = () => {
  return (
    <div className="py-14" id="Developers">
      {/* Heading title */}
      <div className="space-y-4 text-center max-w-[550px] mx-auto mb-8">
        <motion.h1
          variants={SlideUp(0.2)}
          initial="initial"
          whileInView="animate"
          className="text-4xl font-bold font-serif"
        >
          Onekyc Developers
        </motion.h1>
        <motion.p
          variants={SlideUp(0.4)}
          initial="initial"
          whileInView="animate"
          className="text-gray-500 text-sm max-w-[350px] mx-auto"
        >
          A Skilled team of developers dedicated to building secure, efficient, and innovative solutions for seamless KYC management.
        </motion.p>
      </div>
      {/* Testimonial cards */}
      <div className="bg-black p-12">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-6">
          {TestimonialData.map((card) => (
            <motion.div
              variants={SlideLeft(card.delay)}
              initial="initial"
              whileInView="animate"
              key={card.id}
              className="border-[1px] border-gray-500 px-5 py-10 text-white group hover:bg-white duration-300"
            >
              {/* Upper section */}
              <div className="flex flex-row items-center gap-3 ">
                <img
                  src={card.img}
                  alt=""
                  className="w-[60px] rounded-full"
                />
                <div>
                  <p className="text-sm font-bold group-hover:text-black">
                    {card.name}
                  </p>
                  <p className="text-gray-400 text-xs group-hover:text-black">
                    {card.designation}
                  </p>
                  <div className="text-xs mt-2">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              {/* Bottom section */}
              <div className="mt-5 border-t-2 border-gray-500/40 pt-5">
                <p className="text-sm text-gray-300 group-hover:text-black duration-300">
                  {card.text}
                </p>
                {/* Social Links */}
                <div className="flex gap-4 mt-3">
                  <a
                    href={card.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-800 group-hover:text-black"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href={card.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-700 group-hover:text-black"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href={card.gmail}
                    className="text-gray-400 hover:text-red-500 group-hover:text-black"
                  >
                    <MdEmail size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
