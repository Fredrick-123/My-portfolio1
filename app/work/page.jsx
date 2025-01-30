"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub  } from "react-icons/bs";

import {
  Tooltip,
  TooltipTrigger,
  TooltipProvider,
  TooltipContent,
} from "@radix-ui/react-tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: " 01",
    category: "Full Stack",
    title: "project 1",
    description:
      "Bikezz is a full-stack E-commerce site built using nextjs, tailwind.css and other frameworks. ",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind.css" },
      { name: "React" },
      // { name: "Stripe" },
      // { name: "Sanity" },
    ],
    image: "/assets/work/work-1.png",
    live: "https://bikezz-lac.vercel.app/ ",
    github: "https://github.com/Fredrick-123/Bikes-Next.js-Ecommerce-store",
  },

  {
    num: " 02",
    category: "Frontend",
    title: "project 2",
    description:
      "Crappo is a Cryptocurrency website made using react.js and other framework components",
    stack: [
      { name: "React.js" },
      { name: "Tailwind.css" },
      // { name: "Framer motion" },
    ],
    image: "/assets/work/work-2.png",
    live: "https://crappo-lake.vercel.app/",
    github: "https://github.com/Fredrick-123/Crytpo-react-site",
  },

  {
    num: " 03",
    category: "Frontend",
    title: "Amazon",
    description:
      "Amazon is a frontend site made using react.js and other frameworks and components",
    stack: [{ name: "React.js" }, { name: "css" }],
    image: "/assets/work/work-3.png",
    live: "https://amazon019-site.vercel.app/",
    github: "https://github.com/Fredrick-123/React-cosimetic-site ",
  },

  {
    num: " 04",
    category: "Frontend",
    title: "Arizona",
    description:
      "Arizona is a Responsive Digital Business Website made using next.js , react.js and other frameworks",
    stack: [{ name: "Next.js" }, { name: "Css" }, { name: "React.js" }],
    image: "/assets/work/work-4.png",
    live: "https://arizona-rho.vercel.app/",
    github: " https://github.com/Fredrick-123/NEXTJS-REACT-APP-Arizona",
  },

  {
    num: " 05",
    category: "Frontend",
    title: "Car Auto Hub",
    description:
      "Car Auto Hub is a Responsive car showcase web application made with Next.js , TailwinCss , TypeScript and other frameworks",
      stack: [{ name: "Next.js" }, { name: "tailwindCss" }, { name: "Typescript" }],
    image: "/assets/work/work-5.png",
    live: "https://auto-showcase.vercel.app/",
    github: "https://github.com/Fredrick-123/Auto-showcase",
  },

  {
    num: " 06",
    category: "Frontend",
    title: "Fizzi",
    description:
      "Fizzi is a Responsive 3D Ecommerce Landing page Web application made using next.js, typescript, tailwindcss and other frameworks",
    stack: [{ name: "Next.js14" }, { name: "Three.js" }, { name: "Typescript" }],
    image: "/assets/work/work-6.png",
    live: "https://fizzi-opal.vercel.app/",
    github: "https://github.com/Fredrick-123/Fizzi",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (Swiper) => {
    // get the current slide index
    const currentIndex = Swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);

  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 , transition:{
        delay: 2.4 , duration: 0.4 , ease: "easeIn"
      } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] ">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline ">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                        {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              {/* border */}
              <div className="border border-white/20"></div>

              {/* buttons */}
              <div className="flex items-center gap-4" >
                {/* live project button*/}
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                          <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                 {/* github project button */}
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                          <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

              </div>

            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
              {projects.map((project, index) =>{
                return (
                  <SwiperSlide key={index} className="w-full">
                     <div className="  relative group flex justify-center items-center ">
                     {/* overlay */}
                     <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                     {/* image */}
                     <div className="relative w-full h-full">
                      <Image src={project.image} className="object-cover" width={600} height={600} alt=""/>
                     </div>
                     </div>
                  </SwiperSlide>
                )
              })}

              {/* slider buttons */}

              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-28 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
