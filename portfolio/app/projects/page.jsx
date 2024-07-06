"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import React from "react";
import { Navigation, FreeMode, Thumbs } from "swiper/modules";
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

const projects = [
  {
    category: "frontend",
    title: "project 1",
    description: "asdasdasdasdsadas",
    stack: [{ name: "HTML 5" }, { name: "CSS" }, { name: "JavaScript" }],
    image: '/assets/galleryphotos/image1.jpg',
    width: 800,
    height: 600,
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
    github: "",
    width: 800,
    height: 600,
  }
];

const Projects = () => {
  const [thumbsSwiper, setThumbSwiper] = useState(null);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <Swiper>
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div>
                    <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                      {project.num}
                    </div>
                  </div>
                  <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                    {project.category}
                  </h2>
                  <p className="text-white/60">{project.description}</p>
                  <ul className="flex gap-4">
                    {project.stack.map((item, index) => {
                      return (
                        <li key={index} className="text-xl text-accent">
                          {item.name}
                          {index !== project.stack.length - 1 && ","}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="border border-white/20"></div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <motion.section className="w-full xl:w-[50%] bg-black py-12">
            <div className="container mx-auto">
              <Swiper
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{
                  swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
                }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="h-96 w-full rounded-lg"
              >
                {projects.map((project, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex h-full w-full items-center justify-center">
                      <Image
                        src={project.image}
                        alt={project.alt}
                        width={project.width}
                        height={project.height}
                        className="block object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Thumbnail */}
              <Swiper
                onSwiper={setThumbSwiper}
                loop={true}
                spaceBetween={12}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="thumbs mt-3 h-32 w-full rounded-lg"
              >
                {projects.map((project, index) => (
                  <SwiperSlide key={index}>
                    <button className="flex h-full w-full items-center justify-center">
                      <Image
                        src={project.image}
                        alt={project.alt}
                        width={150}
                        height={100}
                        className="block object-cover"
                      />
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.section>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
