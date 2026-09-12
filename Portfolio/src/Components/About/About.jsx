import React, { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiDownload,
  FiArrowDown,
} from "react-icons/fi";

const About = () => {
  const words = [
    "Full Stack Developer",
    "Java Developer",
    "React Developer",
    "UI/UX Designer",
    "Coder",
  ];

  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 55 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));

        if (text.length === currentWord.length) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 1500);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));

        if (text.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 40,
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

  const fadeLeft = {
    hidden: {
      opacity: 0,
      x: -80,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        ease: "easeOut",
      },
    },
  };

  const fadeRight = {
    hidden: {
      opacity: 0,
      x: 80,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center overflow-hidden px-[7vw] md:px-[7vw] lg:px-[12vw] pt-28 pb-16 font-sans bg-[#0b0918]"
    >
      {/* Background Lights */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-[#8245ec]/10 blur-[120px] rounded-full pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>

      <motion.div
        className="absolute bottom-10 right-10 w-80 h-80 bg-purple-700/10 blur-[130px] rounded-full pointer-events-none"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>

      {/* Main Content Grid */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
      >
        {/* Left Column: Text Info */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          variants={fadeLeft}
        >
          {/* Small Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-[#8245ec]/30 bg-[#8245ec]/10 text-[#b794ff] text-sm font-medium"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(130,69,236,0.25)",
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <motion.span
              className="w-2 h-2 bg-green-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            ></motion.span>
            Available for opportunities
          </motion.div>

          {/* Greeting */}
          <motion.p
            className="text-lg sm:text-xl text-gray-400 mb-2"
            variants={fadeUp}
          >
            Hi, I am
          </motion.p>

          {/* Name */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight"
            variants={fadeUp}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            Ankit{" "}
            <motion.span
              className="bg-gradient-to-r from-[#8245ec] via-purple-400 to-[#8245ec] bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Kumar
            </motion.span>
          </motion.h1>

          {/* Typing Text */}
          <motion.h2
            className="mt-5 text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-white"
            variants={fadeUp}
          >
            I am a{" "}
            <span className="text-[#8245ec]">
              {text}
              <motion.span
                className="ml-1 text-purple-300"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                |
              </motion.span>
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="mt-7 max-w-2xl mx-auto md:mx-0 text-base sm:text-lg text-gray-400 leading-8"
            variants={fadeUp}
          >
            I am a passionate{" "}
            <span className="text-white font-semibold">
              Full Stack Developer
            </span>{" "}
            with hands-on experience building modern web applications using{" "}
            <span className="text-[#a78bfa]">
              Java, Spring Boot, React.js, JavaScript and MySQL
            </span>
            . I enjoy solving problems, learning new technologies and creating
            clean, scalable and user-friendly applications.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-wrap justify-center md:justify-start gap-4 mt-9"
            variants={fadeUp}
          >
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#8245ec] to-purple-600 text-white font-semibold shadow-lg shadow-purple-900/30"
              whileHover={{
                scale: 1.08,
                y: -3,
                boxShadow: "0 10px 30px rgba(130,69,236,0.35)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.span whileHover={{ y: 3 }}>
                <FiDownload size={18} />
              </motion.span>
              Download Resume
            </motion.a>

            <motion.button
              onClick={() => scrollToSection("work")}
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#8245ec]/50 bg-white/5 text-white font-semibold"
              whileHover={{
                scale: 1.08,
                y: -3,
                backgroundColor: "rgba(130,69,236,0.15)",
                borderColor: "#8245ec",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              View Projects
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FiArrowDown size={18} />
              </motion.span>
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center md:justify-start gap-4 mt-8"
            variants={fadeUp}
          >
            <motion.a
              href="https://github.com/quantumankit"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400"
              whileHover={{
                scale: 1.2,
                rotate: 8,
                color: "#ffffff",
                borderColor: "#8245ec",
                backgroundColor: "rgba(130,69,236,0.2)",
                boxShadow: "0 0 20px rgba(130,69,236,0.3)",
              }}
              whileTap={{ scale: 0.9 }}
            >
              <FiGithub size={21} />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/ankit-kumar-927892262/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400"
              whileHover={{
                scale: 1.2,
                rotate: -8,
                color: "#ffffff",
                borderColor: "#8245ec",
                backgroundColor: "rgba(130,69,236,0.2)",
                boxShadow: "0 0 20px rgba(130,69,236,0.3)",
              }}
              whileTap={{ scale: 0.9 }}
            >
              <FiLinkedin size={21} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Column: Interactive Profile Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          variants={fadeRight}
        >
          <Tilt
            className="relative"
            tiltMaxAngleX={12}
            tiltMaxAngleY={12}
            perspective={1200}
            scale={1.04}
            transitionSpeed={1000}
            gyroscope={true}
          >
            {/* Outer Glow */}
            <motion.div
              className="absolute inset-0 rounded-full bg-[#8245ec]/20 blur-[70px] scale-90"
              animate={{
                scale: [0.9, 1.05, 0.9],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            ></motion.div>

            {/* Profile Container */}
            <motion.div
              className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[24rem] md:h-[24rem] lg:w-[27rem] lg:h-[27rem] rounded-full p-[5px] bg-gradient-to-br from-[#8245ec] via-purple-500 to-purple-900 shadow-[0_0_60px_rgba(130,69,236,0.35)]"
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Inner Circle with Image */}
              <div className="w-full h-full rounded-full bg-[#0b0918] flex items-center justify-center overflow-hidden">
                <img
                  src="/Profile.png"
                  alt="Ankit Kumar - AK Developer"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
          </Tilt>
        </motion.div>
      </motion.div>

      {/* Scroll Down Hint */}
      <motion.button
        onClick={() => scrollToSection("skills")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-gray-500 hover:text-[#8245ec] transition-colors duration-300"
        aria-label="Scroll to skills"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <span className="text-xs uppercase tracking-[0.25em]">Explore</span>
        <motion.span
          animate={{ y: [0, 7, 0] }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FiArrowDown size={18} />
        </motion.span>
      </motion.button>
    </section>
  );
};

export default About;