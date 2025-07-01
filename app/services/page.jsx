"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  // Full Stack
  {
    num: "01",
    title: "Full Stack Development",
    description:
      "Complete web solutions using React, Django, and MySQL. I handle both frontend and backend to build fully functional, scalable, and maintainable applications.",
    href: "/contact",
  },

  // Frontend
  {
    num: "02",
    title: "Frontend Development",
    description:
      "Responsive, modern UI using React.js, Next.js, and Tailwind CSS. I focus on performance, accessibility, and smooth user experience.",
    href: "/contact",
  },

  // Backend
  {
    num: "03",
    title: "Backend Development",
    description:
      "Powerful and secure backend using Django, Django Rest Framework, and MySQL. I build robust APIs and handle authentication, databases, and admin panels.",
    href: "/contact",
  },
];




const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto"> 
        <motion.div 
        initial={{opacity:0}}
        animate={{
          opacity:1,
          transition:{delay:2.4, duration:0.4, ease:'easeIn'}
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service,index)=>{
            return( 
            <div className="flex-1 flex flex-col justify-center gap-6 group" key={index}>
              {/* {top} */}

              <div className="w-full flex justify-between items-center" key={index}>
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                <BsArrowDownRight className="text-primary text-3xl"/>
                </Link>
              </div>
              {/* {heading} */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
              {/* {description } */}
              <p className="text-white/60">{service.description}</p>
              {/* {border} */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
            );
          })}
        </motion.div>
      </div>
      
    </section>
  )
};

export default Services;
