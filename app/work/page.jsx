"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const Work = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [project, setProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [dbError, setDbError] = useState(null);

  useEffect(() => {
    async function fetchProjects() {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("num", { ascending: true });

      if (error) {
        setDbError(error.message);
      } else {
        setProjects(data);
        setFilteredProjects(data);
        setProject(data[0]);
      }
    }

    fetchProjects();
  }, []);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(filteredProjects[currentIndex]);
  };

  const filterByCategory = (category) => {
    setSelectedCategory(category);
    if (category === "all") {
      setFilteredProjects(projects);
      setProject(projects[0]);
    } else {
      const filtered = projects.filter(
        (p) => p.category.toLowerCase() === category
      );
      setFilteredProjects(filtered);
      setProject(filtered[0] || null);
    }
  };

  if (dbError) return <div className="text-red-500">{dbError}</div>;
  if (!project) return <div className="text-white">Loading...</div>;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.3, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        {/* CATEGORY FILTER BUTTONS */}
        <div className="flex gap-4 mb-8 justify-center xl:justify-start">
          {["all", "frontend", "fullstack"].map((cat) => (
            <button
              key={cat}
              onClick={() => filterByCategory(cat)}
              className={`uppercase px-4 py-2 rounded-full text-sm font-medium border border-white/30 transition ${
                selectedCategory === cat
                  ? "bg-accent text-primary"
                  : "text-white/70 hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* LEFT */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num || "N/A"}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white capitalize">
                {project.category ? `${project.category} project` : ""}{" "}
                {project.title || ""}
              </h2>
              <p className="text-white/60">{project.description || ""}</p>
              <ul className="flex gap-4">
                {(Array.isArray(project.stack) ? project.stack : []).map(
                  (item, index) => (
                    <li key={index} className="text-xl text-accent">
                      {item}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  )
                )}
              </ul>
              <div className="border border-white/20 "></div>
              <div className="flex items-center gap-4">
                {project.live && (
                  <Link href={project.live} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {project.github && (
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {filteredProjects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 overflow-hidden">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full z-0">
                      {project.image && (
                        <Image
                          src={project.image}
                          alt={project.title || "Project image"}
                          fill
                          className="object-fit"
                        />
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
