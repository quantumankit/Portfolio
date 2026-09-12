import React from "react";
import education from "./EducationInfo";
import { motion } from "framer-motion";

const Education = () => {
  // ============================
  // Animation Variants
  // ============================

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

  const cardVariants = {
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

  const cardVariantsRight = {
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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section
      id="education"
      className="relative py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3 overflow-hidden"
    >


      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"
        animate={{
          x: [0, 40, 0],
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
        className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"
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
        className="relative z-10 text-center mb-16"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-4xl font-bold text-white"
          whileHover={{
            scale: 1.05,
            letterSpacing: "2px",
          }}
          transition={{ duration: 0.3 }}
        >
          EDUCATION
        </motion.h2>

        <motion.div
          className="h-1 bg-purple-500 mx-auto mt-4 rounded-full"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{
            width: "8rem",
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
        />

        <motion.p
          className="text-gray-400 mt-4 text-lg font-semibold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.4,
          }}
        >
          My education has been a journey of learning and development. Here are
          the details of my academic background
        </motion.p>
      </motion.div>



      <div className="relative z-10">



        <motion.div
          className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
        />



        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              variants={
                index % 2 === 0 ? cardVariants : cardVariantsRight
              }
              className={`flex flex-col sm:flex-row items-center mb-16 ${
                index % 2 === 0
                  ? "sm:justify-start"
                  : "sm:justify-end"
              }`}
            >



              <motion.div
                className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 shadow-[0_0_20px_rgba(130,69,236,0.5)]"
                initial={{
                  scale: 0,
                  opacity: 0,
                  rotate: -180,
                }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                  rotate: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  stiffness: 150,
                  damping: 12,
                }}
                whileHover={{
                  scale: 1.15,
                  rotate: 10,
                  boxShadow: "0 0 30px rgba(130,69,236,0.8)",
                }}
              >
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-cover rounded-full"
                />
              </motion.div>



              <motion.div
                className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                  index % 2 === 0
                    ? "sm:ml-0"
                    : "sm:mr-0"
                } sm:ml-44 sm:mr-44 ml-8`}
                whileHover={{
                  scale: 1.04,
                  y: -8,
                  boxShadow:
                    "0 0 35px rgba(130,69,236,0.5)",
                  borderColor: "rgba(130,69,236,0.8)",
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
              >



                <div className="flex items-center space-x-6">

                  {/* School Logo */}

                  <motion.div
                    className="w-24 h-16 bg-white rounded-md overflow-hidden flex-shrink-0"
                    whileHover={{
                      scale: 1.08,
                      rotate: 2,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Degree + School + Date */}

                  <div className="flex flex-col justify-between">

                    <motion.h3
                      className="text-xl sm:text-xl font-semibold text-white"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: 0.2,
                      }}
                    >
                      {edu.degree}
                    </motion.h3>

                    <motion.h4
                      className="text-md sm:text-sm text-gray-300"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: 0.3,
                      }}
                    >
                      {edu.school}
                    </motion.h4>

                    {/* Date */}

                    <motion.p
                      className="text-sm text-gray-500 mt-2"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: 0.4,
                      }}
                    >
                      {edu.date}
                    </motion.p>

                  </div>
                </div>



                <motion.p
                  className="mt-4 text-gray-400 font-bold"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5,
                  }}
                >
                  Grade: {edu.grade}
                </motion.p>



                <motion.p
                  className="mt-4 text-gray-400"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.6,
                  }}
                >
                  {edu.desc}
                </motion.p>

              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;