import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import SkillsInfo from "./SkillsInfo";

const Skills = () => {

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 70,
      scale: 0.92,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const skillVariants = {
    hidden: {
      opacity: 0,
      scale: 0.7,
      y: 15,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="skills"
      className="relative py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom overflow-hidden"
    >


      <motion.div
        className="absolute top-10 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-[110px] pointer-events-none"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-10 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />


      <motion.div
        className="relative z-10 text-center mb-8"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.3,
        }}
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-white"
          whileHover={{
            scale: 1.05,
            letterSpacing: "2px",
          }}
          transition={{
            duration: 0.3,
          }}
        >
          SKILLS
        </motion.h2>

        {/* Animated Underline */}

        <motion.div
          className="h-1 bg-[#8245ec] mx-auto mt-2 rounded-full"
          initial={{
            width: 0,
            opacity: 0,
          }}
          whileInView={{
            width: "6rem",
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        />

        <motion.p
          className="text-gray-400 mt-4 text-lg font-semibold"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.35,
          }}
        >
          A collection of my technical skills and expertise honed through
          various projects and experiences
        </motion.p>
      </motion.div>


      <motion.div
        className="relative z-10 flex flex-wrap gap-1 lg:gap-5 py-10 justify-between"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
      >
        {SkillsInfo.map((category) => (
          <motion.div
            key={category.title}
            variants={cardVariants}
            className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
            whileHover={{
              y: -10,
              scale: 1.03,
              borderColor: "rgba(130,69,236,0.8)",
              boxShadow:
                "0 0 35px rgba(130,69,236,0.5)",
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            {/* Category Title */}

            <motion.h3
              className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center"
              whileHover={{
                color: "#ffffff",
              }}
            >
              {category.title}
            </motion.h3>

            <Tilt
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.03}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full"
                variants={containerVariants}
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center cursor-pointer"
                    whileHover={{
                      scale: 1.08,
                      y: -5,
                      borderColor: "#8245ec",
                      backgroundColor:
                        "rgba(130,69,236,0.12)",
                      boxShadow:
                        "0 0 18px rgba(130,69,236,0.35)",
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    {/* Skill Logo */}

                    <motion.img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-6 h-6 sm:w-8 sm:h-8"
                      whileHover={{
                        rotate: 8,
                        scale: 1.15,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                    />

                    {/* Skill Name */}

                    <span className="text-xs sm:text-sm text-gray-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;

