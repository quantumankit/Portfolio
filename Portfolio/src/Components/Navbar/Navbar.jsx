import React, { useEffect, useState } from "react";
import {
  FiMenu,
  FiX,
  FiGithub,
  FiLinkedin,
  FiArrowUpRight,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" }
//     { id: "contact", label: "Contact" },
  ];


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = menuItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      let currentSection = "about";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };


  const handleLogoClick = () => {
    setIsOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setActiveSection("about");
  };

  return (
    <motion.nav
      initial={{
        y: -100,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#050414]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_5px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        <div className="h-20 flex items-center justify-between">

<motion.button
  onClick={handleLogoClick}
  className="group relative flex items-center gap-1 cursor-pointer select-none"
  aria-label="Go to home"
  whileHover={{ scale: 1.04 }}
  whileTap={{ scale: 0.96 }}
>
  {/* Glow */}
  <motion.div
    className="absolute inset-0 -z-10 rounded-xl bg-[#8245ec]/20 blur-xl opacity-0 group-hover:opacity-100"
    transition={{ duration: 0.3 }}
  />

  {/* < */}
  <motion.span
    className="text-[#8245ec] text-2xl font-black"
    initial={{ x: 0 }}
    whileHover={{ x: -3 }}
    transition={{ type: "spring", stiffness: 400 }}
  >
    &lt;
  </motion.span>

  {/* Ankit */}
  <motion.span
    className="text-white text-xl md:text-2xl font-extrabold tracking-tight"
    whileHover={{ color: "#c4a7ff" }}
    transition={{ duration: 0.2 }}
  >
    Ankit
  </motion.span>

  {/* / */}
  <motion.span
    className="text-[#8245ec] text-xl md:text-2xl font-black mx-0.5"
    animate={{
      opacity: [1, 0.6, 1],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    /
  </motion.span>

  {/* Kumar */}
  <motion.span
    className="text-white text-xl md:text-2xl font-extrabold tracking-tight"
    whileHover={{ color: "#c4a7ff" }}
    transition={{ duration: 0.2 }}
  >
    Kumar
  </motion.span>

  {/* /> */}
  <motion.span
    className="text-[#8245ec] text-2xl font-black"
    initial={{ x: 0 }}
    whileHover={{ x: 3 }}
    transition={{ type: "spring", stiffness: 400 }}
  >
    /&gt;
  </motion.span>

  {/* Small developer dot */}
  <motion.span
    className="absolute -right-2 -top-1 h-1.5 w-1.5 rounded-full bg-[#8245ec]"
    animate={{
      scale: [1, 1.5, 1],
      opacity: [0.5, 1, 0.5],
    }}
    transition={{
      duration: 1.8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
</motion.button>



          {/* ==========================================
              DESKTOP NAVIGATION
          ========================================== */}

          <ul className="hidden md:flex items-center gap-2 lg:gap-3">
            {menuItems.map((item, index) => {
              const isActive = activeSection === item.id;

              return (
                <motion.li
                  key={item.id}
                  initial={{
                    opacity: 0,
                    y: -15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1 + index * 0.08,
                  }}
                >
                  <motion.button
                    onClick={() => handleMenuItemClick(item.id)}
                    className={`relative px-4 py-2.5 rounded-xl text-sm lg:text-base font-medium overflow-hidden ${
                      isActive
                        ? "text-white"
                        : "text-gray-300"
                    }`}
                    whileHover={{
                      y: -2,
                      scale: 1.04,
                    }}
                    whileTap={{
                      scale: 0.94,
                    }}
                  >
                    {/* Animated Background */}

                    <motion.span
                      className="absolute inset-0 rounded-xl"
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        scale: isActive ? 1 : 0.8,
                      }}
                      whileHover={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(130,69,236,0.28), rgba(130,69,236,0.08))",
                      }}
                    />

                    {/* Border */}

                    <motion.span
                      className="absolute inset-0 rounded-xl border"
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : 0,
                      }}
                      whileHover={{
                        opacity: 1,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      style={{
                        borderColor: "rgba(130,69,236,0.45)",
                      }}
                    />

                    {/* Text */}

                    <span className="relative z-10">
                      {item.label}
                    </span>

                    {/* Bottom Indicator */}

                    <motion.span
                      className="absolute bottom-0 left-1/2 h-[2px] rounded-full bg-[#8245ec]"
                      initial={false}
                      animate={{
                        width: isActive ? "55%" : "0%",
                        x: "-50%",
                      }}
                      whileHover={{
                        width: "65%",
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    />
                  </motion.button>
                </motion.li>
              );
            })}
          </ul>

          {/* ==========================================
              SOCIAL BUTTONS
          ========================================== */}

          <div className="hidden md:flex items-center gap-3">

            {/* GitHub */}

            <motion.a
              href="https://github.com/quantumankit"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300"
              whileHover={{
                scale: 1.12,
                y: -3,
                color: "#ffffff",
                borderColor: "#8245ec",
                backgroundColor: "rgba(130,69,236,0.2)",
                boxShadow:
                  "0 0 22px rgba(130,69,236,0.45)",
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <FiGithub size={20} />
            </motion.a>

            {/* LinkedIn */}

            <motion.a
              href="https://www.linkedin.com/in/ankit-kumar-927892262/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300"
              whileHover={{
                scale: 1.12,
                y: -3,
                color: "#ffffff",
                borderColor: "#8245ec",
                backgroundColor: "rgba(130,69,236,0.2)",
                boxShadow:
                  "0 0 22px rgba(130,69,236,0.45)",
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <FiLinkedin size={20} />
            </motion.a>

            {/* Resume / CTA */}

            <motion.button
              onClick={() => {
                const section = document.getElementById("contact");

                if (section) {
                  section.scrollIntoView({
                    behavior: "smooth",
                  });
                }
              }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#8245ec] text-white text-sm font-semibold shadow-lg shadow-purple-500/20"
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow:
                  "0 0 25px rgba(130,69,236,0.55)",
              }}
              whileTap={{
                scale: 0.94,
              }}
            >
              Contact Me
              <motion.span
                whileHover={{
                  x: 3,
                  y: -2,
                }}
              >
                <FiArrowUpRight size={17} />
              </motion.span>
            </motion.button>
          </div>

          {/* ==========================================
              MOBILE MENU BUTTON
          ========================================== */}

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#8245ec]"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            whileHover={{
              scale: 1.08,
              backgroundColor: "rgba(130,69,236,0.2)",
              borderColor: "#8245ec",
            }}
            whileTap={{
              scale: 0.9,
            }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{
                    rotate: -90,
                    opacity: 0,
                  }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                  }}
                  exit={{
                    rotate: 90,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <FiX size={26} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{
                    rotate: 90,
                    opacity: 0,
                  }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                  }}
                  exit={{
                    rotate: -90,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <FiMenu size={26} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* ==========================================
          MOBILE NAVIGATION
      ========================================== */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -15,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -15,
              scale: 0.98,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className="md:hidden absolute top-20 left-0 w-full px-5"
          >
            <div className="max-w-md mx-auto rounded-2xl border border-white/10 bg-[#050414]/95 backdrop-blur-xl shadow-2xl overflow-hidden">

              {/* Mobile Navigation */}

              <motion.ul
                className="flex flex-col p-3 gap-2"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.06,
                    },
                  },
                }}
              >
                {menuItems.map((item) => {
                  const isActive =
                    activeSection === item.id;

                  return (
                    <motion.li
                      key={item.id}
                      variants={{
                        hidden: {
                          opacity: 0,
                          x: -20,
                        },
                        visible: {
                          opacity: 1,
                          x: 0,
                        },
                      }}
                    >
                      <motion.button
                        onClick={() =>
                          handleMenuItemClick(item.id)
                        }
                        className={`relative w-full text-left px-5 py-3.5 rounded-xl text-base font-medium overflow-hidden ${
                          isActive
                            ? "text-white"
                            : "text-gray-300"
                        }`}
                        whileHover={{
                          x: 6,
                          scale: 1.01,
                        }}
                        whileTap={{
                          scale: 0.97,
                        }}
                      >
                        {/* Active Background */}

                        {isActive && (
                          <motion.span
                            layoutId="mobileActive"
                            className="absolute inset-0 rounded-xl bg-[#8245ec]/15 border border-[#8245ec]/30"
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 30,
                            }}
                          />
                        )}

                        {/* Hover Background */}

                        <motion.span
                          className="absolute inset-0 rounded-xl bg-white/5"
                          initial={{
                            opacity: 0,
                          }}
                          whileHover={{
                            opacity: isActive ? 0 : 1,
                          }}
                        />

                        <span className="relative z-10 flex items-center justify-between">
                          {item.label}

                          {isActive && (
                            <motion.span
                              initial={{
                                opacity: 0,
                                x: -5,
                              }}
                              animate={{
                                opacity: 1,
                                x: 0,
                              }}
                            >
                              <FiArrowUpRight
                                className="text-[#8245ec]"
                              />
                            </motion.span>
                          )}
                        </span>
                      </motion.button>
                    </motion.li>
                  );
                })}
              </motion.ul>

              {/* Mobile Social Buttons */}

              <motion.div
                className="flex justify-center gap-4 py-5 border-t border-white/10"
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.35,
                  duration: 0.4,
                }}
              >
                <motion.a
                  href="https://github.com/quantumankit"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-11 h-11 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300"
                  whileHover={{
                    scale: 1.15,
                    y: -4,
                    color: "#ffffff",
                    borderColor: "#8245ec",
                    backgroundColor:
                      "rgba(130,69,236,0.2)",
                    boxShadow:
                      "0 0 20px rgba(130,69,236,0.45)",
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                >
                  <FiGithub size={21} />
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/ankit-kumar-927892262/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300"
                  whileHover={{
                    scale: 1.15,
                    y: -4,
                    color: "#ffffff",
                    borderColor: "#8245ec",
                    backgroundColor:
                      "rgba(130,69,236,0.2)",
                    boxShadow:
                      "0 0 20px rgba(130,69,236,0.45)",
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                >
                  <FiLinkedin size={21} />
                </motion.a>

                <motion.button
                  onClick={() =>
                    handleMenuItemClick("contact")
                  }
                  className="px-5 h-11 rounded-xl bg-[#8245ec] text-white text-sm font-semibold flex items-center gap-2"
                  whileHover={{
                    scale: 1.06,
                    boxShadow:
                      "0 0 22px rgba(130,69,236,0.5)",
                  }}
                  whileTap={{
                    scale: 0.94,
                  }}
                >
                  Contact
                  <FiArrowUpRight size={17} />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;