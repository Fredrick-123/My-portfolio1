"use client";

import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaJs,
  FaBootstrap,
  FaSass,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiTypescript,
} from "react-icons/si";

const about = {
  title: "About me",
  description:
    "I am Fredrick Nicholas, an experienced Full stack Developer who is always on the lookout for creative solutions to everyday problems. Over my 4 years in this field, I have refined my analytical thinking and teamwork abilities, and I thoroughly enjoy collaborating with a team. Through my experience, I have sharpened my attention to detail and critical thinking, as well as improved my communication skills by working on team-based projects and with clients. I am enthusiastic about team collaboration and using my technical expertise to build applications and systems while making a positive impact on the organization and its clients.",
  info: [
    {
      fieldName: "Name",
      fieldValue: " Fredrick Nicholas",
    },

    {
      fieldName: "Github",
      fieldValue: " Fredrick-123",
    },

    {
      fieldName: "Experience",
      fieldValue: " 4+ Years",
    },

    {
      fieldName: "Zoom",
      fieldValue: " Fredrick Nicholas",
    },

    {
      fieldName: "Nationality",
      fieldValue: " Nigerian",
    },

    {
      fieldName: "Email",
      fieldValue: "fredricknicholas8@gmail.com",
    },

    {
      fieldName: "Freelance",
      fieldValue: " Available",
    },

    {
      fieldName: "Language",
      fieldValue: " English",
    },
  ],
};



const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Since I began my journey into web development, I have familiarized myself with some knowledge.",
  items: [
    {
      duration: " 2020",
      degree: "Web Design for Everybody",
      institution: "Coursera",
    },

    {
      duration: " 2020 - 2021",
      degree: "Introduction to Web Development ",
      institution: "plurasight",
    },


    {
      duration: " 2020 - 2021",
      degree: "aptech computer education ",
      institution: "Aptech ",
    },


    {
      duration: " 2020 - 2021",
      degree: "W3Schools Online Web Tutorials",
      institution: "W3Schools",
    },


    {
      duration: " 2021 - 2022",
      degree: " Frontend development",
      institution: "Freecodecamp",
    },
     
    {
      duration: " 2022 - 2023",
      degree: "Leearn React",
      institution: "codeacademy",
    },

    {
      duration: " 2022 - 2023",
      degree: "Full Stack JavaScript",
      institution: "Theodinproject",
    },

    {
      duration: " 2022 - 2023",
      degree: "Search Engine Optimization (SEO)",
      institution: "coursera",
    },
 


    {
      duration: " 2022 - 2023",
      degree: "Introduction to MongoDB",
      institution: "MongoDB",
    },


    {
      duration: " 2023 - 2024",
      degree: " The Complete Web Developer",
      institution: " Zero to Mastery",
    },
     

   
  ],
};

const skills = {
  icon: "/assets/resume/badge.svg",
  title: "My Skills",
  description:
    "Some of the skills i have aquired over the years. ",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },

    {
      icon: <FaCss3 />,
      name: "css 3",
    },

    {
      icon: <FaSass />,
      name: "sass",
    },

    {
      icon: <FaJs />,
      name: "javascript",
    },

    {
      icon: <FaReact />,
      name: "react",
    },

    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },

    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },

    {
      icon: <FaNodeJs />,
      name: "node.js",
    },

    {
      icon: <FaFigma />,
      name: "figma",
    },

    {
      icon: <SiMongodb />,
      name: "mongoDb",
    },

    {
      icon: <SiTypescript />,
      name: "typescript",
    },

    {
      icon: <FaBootstrap />,
      name: "bootstrap",
    },
    

  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipTrigger,
  TooltipProvider,
  TooltipContent,
} from "@radix-ui/react-tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="education"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 ">
            <TabsTrigger value="education"> Education </TabsTrigger>
            <TabsTrigger value="skills"> Skills </TabsTrigger>
            <TabsTrigger value="about"> About me </TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
               
     
                {/* education */}
                <TabsContent value="education" className="w-full ">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{education.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                    <ScrollArea className="h-[400px]">
                      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {education.items.map((item , index)=>{
                           return ( 
                           <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                              <span className="text-accent">{item.duration}</span>
                              <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                              <div className="flex items-center gap-3">
                                {/* dot */}
                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                <p className="text-white/60">{item.institution}</p>
                              </div>
                           </li>
                           )
                        })}
                      </ul>
                    </ScrollArea>
                  </div>
                </TabsContent>

                {/* skills */}
                <TabsContent value="skills" className="w-full">
                  <div className="flex flex-col gap-[30px]">
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                      <h3 className="text-4xl font-bold">{skills.title}</h3>
                      <p className="max-w-[600px] mt-3 text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                    </div>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4 ">
                      {skills.skillList.map((skill , index )=>{
                          return(
                            <li key={index}>
                              <TooltipProvider delayDuration={100}>
                                 <Tooltip>
                                  <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                    <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                  </TooltipTrigger>
                                   <TooltipContent className="">
                                    <p className="capitalize font-semibold">{skill.name}</p>
                                   </TooltipContent>
                                 </Tooltip>
                              </TooltipProvider>
                            </li>
                          )
                      })}
                    </ul>
                  </div>
                </TabsContent>

                {/* about*/}
                <TabsContent value="about" className="w-full text-center xl:text-left">
                  <div className="flex flex-col gap-[30px]">
                    <h3 className="text-4xl font-bold ">{about.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 ">
                      {about.info.map((item , index) =>{
                            return ( 
                            <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                              <span className="text-white/60">{item.fieldName}</span>
                              <span className="text-sm xl:text-xl">{item.fieldValue}</span>
                            </li>
                            )
                      })}
                    </ul>
                  </div>
                </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
