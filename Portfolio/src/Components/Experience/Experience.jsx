
import React from "react";
import { motion } from "framer-motion";
import experiences from "./ExperienceInfo";

const Experience = () => {



  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: -40,
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

  const leftCardVariants = {
    hidden: {
      opacity: 0,
      x: -100,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const rightCardVariants = {
    hidden: {
      opacity: 0,
      x: 100,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const skillVariants = {
    hidden: {
      opacity: 0,
      scale: 0.7,
      y: 10,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="experience"
      className="relative py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2 overflow-hidden"
    >



      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-[#8245ec]/10 blur-[120px] rounded-full pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-purple-700/10 blur-[130px] rounded-full pointer-events-none"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />



      <motion.div
        className="relative z-10 text-center mb-16"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.3,
        }}
      >

        <motion.h2
          className="text-4xl font-bold text-white"
          whileHover={{
            scale: 1.05,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          EXPERIENCE
        </motion.h2>

        {/* Animated Line */}

        <motion.div
          className="h-1 bg-purple-500 mx-auto mt-4 rounded-full"
          initial={{
            width: 0,
            opacity: 0,
          }}
          whileInView={{
            width: 128,
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
            delay: 0.4,
          }}
        >
          A collection of my work experience and the roles I have taken in
          various organizations
        </motion.p>

      </motion.div>



      <motion.div
        className="relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.1,
        }}
      >



        <motion.div
          className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white/20 h-full overflow-hidden"
          initial={{
            scaleY: 0,
            transformOrigin: "top",
          }}
          whileInView={{
            scaleY: 1,
          }}
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{
            duration: 1.8,
            ease: "easeInOut",
          }}
        >

          <motion.div
            className="w-full h-full bg-gradient-to-b from-[#8245ec] via-purple-500 to-[#8245ec]"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

        </motion.div>



        {experiences.map((experience, index) => {

          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={experience.id}
              className={`relative flex flex-col sm:flex-row items-center mb-16 ${
                isEven
                  ? "sm:justify-end"
                  : "sm:justify-start"
              }`}
              variants={
                isEven
                  ? leftCardVariants
                  : rightCardVariants
              }
            >



              <motion.div
                className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 shadow-[0_0_20px_rgba(130,69,236,0.4)]"
                initial={{
                  scale: 0,
                  opacity: 0,
                }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{
                  scale: 1.15,
                  boxShadow:
                    "0 0 35px rgba(130,69,236,0.8)",
                }}
              >

                <motion.img
                  src={experience.img}
                  alt={experience.company}
                  className="w-full h-full object-cover rounded-full"
                  whileHover={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 0.7,
                  }}
                />

              </motion.div>



              <motion.div
                className={`relative w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900/95 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                  isEven
                    ? "sm:ml-0"
                    : "sm:mr-0"
                } sm:ml-44 sm:mr-44 ml-8`}
                whileHover={{
                  scale: 1.04,
                  y: -8,
                  borderColor: "rgba(130,69,236,0.7)",
                  boxShadow:
                    "0 20px 45px rgba(130,69,236,0.25)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 18,
                }}
              >



                <div className="flex items-center space-x-6">

                  {/* Company Logo */}

                  <motion.div
                    className="w-16 h-16 bg-white rounded-md overflow-hidden shadow-lg flex-shrink-0"
                    whileHover={{
                      scale: 1.12,
                      rotate: 3,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                    }}
                  >

                    <img
                      src={experience.img}
                      alt={experience.company}
                      className="w-full h-full object-cover"
                    />

                  </motion.div>

                  {/* Role + Company + Date */}

                  <div className="flex flex-col justify-between">

                    <div>

                      <motion.h3
                        className="text-xl sm:text-2xl font-semibold text-white"
                        whileHover={{
                          color: "#a78bfa",
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                      >
                        {experience.role}
                      </motion.h3>

                      <h4 className="text-md sm:text-sm text-gray-300">
                        {experience.company}
                      </h4>

                    </div>

                    {/* Date */}

                    <motion.p
                      className="text-sm text-gray-500 mt-2"
                      initial={{
                        opacity: 0,
                      }}
                      whileInView={{
                        opacity: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: 0.3,
                      }}
                    >
                      {experience.date}
                    </motion.p>

                  </div>

                </div>


                <motion.p
                  className="mt-4 text-gray-400 leading-7"
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2,
                  }}
                >
                  {experience.desc}
                </motion.p>


                <div className="mt-4">

                  <motion.h5
                    className="font-medium text-white"
                    initial={{
                      opacity: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                  >
                    Skills:
                  </motion.h5>

                  <motion.ul
                    className="flex flex-wrap mt-2"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true,
                    }}
                  >

                    {experience.skills.map((skill, skillIndex) => (

                      <motion.li
                        key={skillIndex}
                        variants={skillVariants}
                        whileHover={{
                          scale: 1.08,
                          y: -3,
                          backgroundColor:
                            "rgba(130,69,236,0.8)",
                          boxShadow:
                            "0 5px 15px rgba(130,69,236,0.3)",
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                        }}
                        className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400 cursor-default"
                      >
                        {skill}
                      </motion.li>

                    ))}

                  </motion.ul>

                </div>

              </motion.div>

            </motion.div>
          );
        })}

      </motion.div>

    </section>
  );
};

export default Experience;

