"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import React from "react";
import { Navigation, FreeMode, Thumbs } from "swiper/modules";
import Image from 'next/image';
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    category: "frontend",
    title: "project 1",
    description: "asdasdasdasdsadas",
    stack: [{ name: "HTML 5" }, { name: "CSS" }, { name: "JavaScript" }],
    image: '/assets/galleryphotos/image1.jpg',
    width: 800,
    height: 600,
    github:"",
  },
  {
    category: "backend",
    title: "project 2",
    description: "asdasdasdasdsadas",
    stack: [{ name: "Node.js" }, { name: "Express" }, { name: "MongoDB" }],
    image: '/assets/galleryphotos/image2.jpg',
    live: "",
    github: "",
    width: 800,
    height: 600,
  },
  {
    category: "fullstack",
    title: "project 3",
    description: "asdasdasdasdsadas",
    stack: [{ name: "React" }, { name: "Node.js" }, { name: "MongoDB" }],
    image: '/assets/galleryphotos/image3.jpg',
    live: "",
    github: "#",
    width: 800,
    height: 600,
  }
];


const Projects = () => {
  const[project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'} }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 bg-dark-gray text-white"
    > 
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
            <div className="text-[42px] font-bold leading-none text-accent transition-all duration-500 capitalize mb-2">
              {project.title}
            </div>
            <div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
            </div>
            <div>
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((tech, index) => (
                  <li key={index} className="text-xl text-accent">
                    {tech.name}{index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white/60">{project.description}</p>
            </div>
            <div>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
            </div>
            </div>
          </div> 
          <div className="w-full xl:w-[50%]">
            <Swiper 
              spaceBetween={30} 
              slidesPerView={1} 
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        alt=""
                      />
                    </div>
                    </div>
                </SwiperSlide>
                );
              })}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"  btnStyles="bg-accent hover:bg-accent-hober text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
            </Swiper>

          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;