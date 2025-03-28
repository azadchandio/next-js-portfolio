import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
// components
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section>
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* {text} */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-5">
              hello I'm <br /> <span className="text-accent">Azad Chandio</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
            Full Stack Developer skilled in React, Django, and MySQL. Passionate about building scalable web applications with a focus on performance and user experience. Always eager to learn and take on new challenges
            </p>
            {/* button $ socials  */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 hover:bg-accent hover:text-primary hover:transition-all duration-500"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
          {/* {photo} */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
      <Stats/>
    </section>
  );
};

export default Home;
