import { animate, motion } from "framer-motion";

// variants
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// calculate the reverse index for staggered delay
const reverseIndex = (totalSteps, index) => {
  return totalSteps - index - 1;
};

export const Stairs = () => {
  const toolSteps = 6; // number of steps

  return (
    <>
      {/* Render 6 motion divs, each representing a step of the stairs.
    each div will have the same animation defined by the stairAnimation object
    the delay for each div is calculated dynamically based on its reversed index 
    creating a staggered effect with decreasing delay for each subsequent step. */}
      {[...Array(toolSteps)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(toolSteps, index) * 0.1,
            }}
            className="h-full w-full bg-white relative"
          />
        );
      })}
    </>
  );
};
