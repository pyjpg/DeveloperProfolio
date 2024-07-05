"use client";

import { motion } from "framer-motion";
import React from "react";
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";


const projects = [
  {
    category: "frontend",
    title: "project 1",
    description: "asdasdasdasdsadas",
    stack: [{ name: "HTML 5"}, { name: "CSS"}, { name: "JavaScript"}],
    image: '/assets/galleryphotos/image1.jpg',
  },
  {
    category: "backend",
    title: "project 2",
    description: "asdasdasdasdsadas",
    stack: [{ name: "Node.js"}, { name: "Express"}, { name: "MongoDB"}],
    image: '/assets/galleryphotos/image2.jpg',
    live: "",
    github: "",
  },
  {
    category: "fullstack",
    title: "project 3",
    description: "asdasdasdasdsadas",
    stack: [{ name: "React"}, { name: "Node.js"}, { name: "MongoDB"}],
    image: '/assets/galleryphotos/image3.jpg',
    live: "",
    github: "",
  }
];

const Projects = () => {
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
          <div className="p-1">               
          {projects.map((project, index) => {
            return (
              <Carousel className="w-full max-w-screen-xl">
                <CarouselContent>
                  {Array.from({ length: 3}).map((_, index) => (
                    <CarouselItem key={index}>
                      <CardContent>
                        <Card key = {index}>
                      <CardContent>
                      <h1>{project.title}</h1>
                      <Image
                        src={project.image}
                        width={500}
                        height={500}
                        alt="Picture of the author"
                      />
                      </CardContent>
                    </Card>
                    </CardContent>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                
              </Carousel>
              
            )
          })}
       
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
