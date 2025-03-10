"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs,SiDjango} from "react-icons/si";

// about data
const about = {
  title: "About me",
  description:
    "I'm Azad Chandio, a full-stack developer with expertise in React, Django, and MySQL. I've built projects ranging from portfolio websites to an advanced classifieds platform called Auole. I'm passionate about creating user-friendly, functional web applications and continuously learning new technologies to enhance my skills",
  info: [
    {
      fieldNmae: "Name",
      fieldValue: "Azad Chandio",
    },
    {
      fieldNmae: "Phone",
      fieldValue: "(+92) 306 366 7578",
    },
    {
      fieldNmae: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldNmae: "Skype",
      fieldValue: "azad.01",
    },
    {
      fieldNmae: "Nationality",
      fieldValue: "Pakistani",
    },
    {
      fieldNmae: "Email",
      fieldValue: "azad@azadchandio.com",
    },
    {
      fieldNmae: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldNmae: "Languge",
      fieldValue: "English,urdu",
    },
  ],
};
// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  discription:
    "I am a full-stack developer with experience in building classifieds and e-commerce platforms using React, Django, and MySQL.",
  items: [
    {
      company: "Skynet Innovate",
      position: "Full Stack Developer",
      duration: "2025-present",
    },
    {
      company: "Lofty Soft (PVT LTD)",
      position: "Front-End Developer Intern",
      duration: "Summer 2024",
    },
    {
      company: "Liftup Ai",
      position: "Jr Front Developer",
      duration: "2023-5 2024",
    },
    {
      company: "Raptr42",
      position: "Front End developer",
      duration: "2023-1 2023-5",
    },
  ],
};
// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  discription:
    "Bachelor of Science in Software Engineering (BS SWE) University of Sindh, Jamshoro Graduated in 2025",

  items: [
    {
      instituation: "University Of Sindh",
      degree: "BS in Software Engineering",
      duration: "2021 - 2025",
    },
    {
      instituation: "codewithmosh",
      degree: "Django Backend",
      duration: "2024",
    },
    {
      instituation: "Coursera",
      degree: "Front End Development",
      duration: "2022-2023",
    },
    {
      instituation: "Navttc",
      degree: "Front End Development Course",
      duration: "2021-2022",
    },
  ],
};
// skills data
const skills = {
  title: "My skills",
  discription:
  "Frontend Development, Backend Development, Database Management, Version Control",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
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
      icon: <SiDjango />,
      name: "Django",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 ">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* {content} */}
          <div className="min-h-[80vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[20px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.discription}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* {dot} */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[20px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.discription}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* {dot} */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.instituation}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col gap-[20px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.discription}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[20px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about me */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[20px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1  xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4 "
                      >
                        <span className="text-white/60">{item.fieldNmae}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
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
