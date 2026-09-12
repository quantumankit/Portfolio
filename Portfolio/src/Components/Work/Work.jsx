import React, { useState } from "react";
import projects from "./WorkInfo";
import { motion, AnimatePresence } from "framer-motion";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };


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
      scale: 0.9,
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

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 40,
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
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 40,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative overflow-hidden"
    >


      <motion.div
        className="absolute top-20 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"
        animate={{
          x: [0, 60, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-20 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[130px] pointer-events-none"
        animate={{
          x: [0, -50, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 9,
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
            letterSpacing: "2px",
          }}
          transition={{
            duration: 0.3,
          }}
        >
          PROJECTS
        </motion.h2>

        {/* Animated Underline */}

        <motion.div
          className="h-1 bg-purple-500 mx-auto mt-4 rounded-full"
          initial={{
            width: 0,
            opacity: 0,
          }}
          whileInView={{
            width: "8rem",
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
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </motion.p>
      </motion.div>


      <motion.div
        className="relative z-10 grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.12,
        }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            onClick={() => handleOpenModal(project)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer"
            whileHover={{
              y: -12,
              scale: 1.03,
              borderColor: "rgba(130,69,236,0.8)",
              boxShadow: "0 0 35px rgba(130,69,236,0.5)",
            }}
            whileTap={{
              scale: 0.97,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            {/* Project Image */}

            <div className="p-4 overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl"
                whileHover={{
                  scale: 1.08,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
              />
            </div>

            {/* Project Content */}

            <div className="p-6">
              <motion.h3
                className="text-2xl font-bold text-white mb-2"
                whileHover={{
                  color: "#a855f7",
                  x: 5,
                }}
                transition={{
                  duration: 0.25,
                }}
              >
                {project.title}
              </motion.h3>

              <motion.p
                className="text-gray-500 mb-4 pt-4 line-clamp-3"
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
                  delay: 0.15,
                }}
              >
                {project.description}
              </motion.p>

              {/* Project Tags */}

              <div className="mb-4 flex flex-wrap">
                {project.tags.map((tag, index) => (
                  <motion.span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                    initial={{
                      opacity: 0,
                      scale: 0.7,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      scale: 1.1,
                      y: -2,
                      backgroundColor: "#342650",
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>



      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}

              <div className="flex justify-end p-4">
                <motion.button
                  onClick={handleCloseModal}
                  className="text-white text-3xl font-bold"
                  whileHover={{
                    scale: 1.2,
                    rotate: 90,
                    color: "#a855f7",
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >
                  &times;
                </motion.button>
              </div>

              <div className="flex flex-col">
                {/* Modal Image */}

                <div className="w-full flex justify-center bg-gray-900 px-4">
                  <motion.img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl"
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1,
                    }}
                  />
                </div>

                {/* Modal Content */}

                <motion.div
                  className="lg:p-8 p-6"
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2,
                  }}
                >
                  <motion.h3
                    className="lg:text-3xl font-bold text-white mb-4 text-md"
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: 0.25,
                    }}
                  >
                    {selectedProject.title}
                  </motion.h3>

                  <motion.p
                    className="text-gray-400 mb-6 lg:text-base text-xs"
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: 0.35,
                    }}
                  >
                    {selectedProject.description}
                  </motion.p>

                  {/* Modal Tags */}

                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag, index) => (
                      <motion.span
                        key={index}
                        className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                        initial={{
                          opacity: 0,
                          scale: 0.7,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        transition={{
                          duration: 0.3,
                          delay: 0.4 + index * 0.08,
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Buttons */}

                  <div className="flex gap-4">
                    <motion.a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                      whileHover={{
                        scale: 1.05,
                        y: -3,
                        boxShadow: "0 0 20px rgba(130,69,236,0.4)",
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                    >
                      View Code
                    </motion.a>

                    <motion.a
                      href={selectedProject.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                      whileHover={{
                        scale: 1.05,
                        y: -3,
                        boxShadow: "0 0 20px rgba(130,69,236,0.5)",
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                    >
                      View Live
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;